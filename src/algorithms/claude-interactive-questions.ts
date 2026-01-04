interface Bid {
    bidderId: string;
    price: number;
    dealId?: string;
}

interface DealConfig {
    dealId: string;
    floorPrice: number;
}

interface AuctionConfig {
    defaultFloorPrice: number;
    deals: DealConfig[];
}

interface AuctionResult {
    winner: Bid | null;
    clearingPrice: number;
    winningDealId: string | null;  // Which deal won (null if open auction)
}

/**
 * Run auction with deal-specific floor prices
 * 
 * Rules:
 * 1. Each deal has its own floor price (use defaultFloorPrice for open bids)
 * 2. A bid with a dealId must meet THAT deal's floor price to be valid
 * 3. Deal bids still have priority over open bids
 * 4. Among valid deal bids, highest price wins
 * 5. If no valid deal bids, fall back to open auction
 * 6. Second-price logic applies within the winning pool
 * 
 * Example:
 *   bids: [
 *     { bidderId: 'A', price: 4.00, dealId: 'DEAL-1' },
 *     { bidderId: 'B', price: 6.00, dealId: 'DEAL-2' },
 *     { bidderId: 'C', price: 10.00 }  // Open bid
 *   ]
 *   config: {
 *     defaultFloorPrice: 2.00,
 *     deals: [
 *       { dealId: 'DEAL-1', floorPrice: 3.00 },
 *       { dealId: 'DEAL-2', floorPrice: 8.00 }  // B's bid doesn't meet this!
 *     ]
 *   }
 *   
 *   Result:
 *   - Bidder A valid (4.00 >= 3.00 floor for DEAL-1) ✓
 *   - Bidder B invalid (6.00 < 8.00 floor for DEAL-2) ✗
 *   - Bidder C valid open bid (10.00 >= 2.00) but deals have priority
 *   
 *   Winner: A, clearingPrice: 3.00 (floor, only one valid deal bid)
 */
export function runDealAuction(bids: Bid[], config: AuctionConfig): AuctionResult {

    const validBids = bids.filter(bid => {
        // no dealid
        if (!bid.dealId) {
            return bid.price >= config.defaultFloorPrice;
        }
        // bid has dealid. ensure it matches minimum
        // lookup the DealConfig
        const deal = config.deals.find(deal => deal.dealId === bid.dealId);
        return(deal && bid.price >= deal.floorPrice);
    });

    if (validBids.length === 0) {
        return { winner: null, clearingPrice: 0, winningDealId: null };
    }

    // open bids >= default
    // deal bids >= deal floor
    const openBids = validBids.filter(bid => !bid.dealId);
    const dealBids = validBids.filter(bid => bid.dealId);


    // Step 3: Determine which pool to use (deal bids get priority)
    const auctionPool = dealBids.length > 0 ? dealBids : openBids;

    // Step 4: Sort by price descending
    auctionPool.sort((a, b) => b.price - a.price);

    // Step 5: Select winner and calculate clearing price
    const winner = auctionPool[0];

    let clearingPrice: number;
    if (auctionPool.length > 1) {
        // Second-price: pay second-highest bid + $0.01
        clearingPrice = auctionPool[1].price + 0.01;
    } else {
        // Only one bid: pay floor price
        if (winner.dealId) {
            const deal = config.deals.find(deal => deal.dealId == winner.dealId);
            clearingPrice = deal!.floorPrice;
        }
        else {
            clearingPrice = config.defaultFloorPrice;
        }
    }

    // Clearing price should never exceed winner's bid
    clearingPrice = Math.min(clearingPrice, winner.price);

    return { winner, clearingPrice, winningDealId : winner.dealId || null};
}
