
import * as sut from './claude-interactive-questions'
import { CategoryNode }from './claude-interactive-questions'


describe("runAuction tests", () => {

    describe("Floor price filter", () => {
        it.todo('returns no winner when single bid below floor');
        it.todo('returns one winner when single bid equal to floor');
        it.todo('returns one winner when single bid greater than floor');
        it.todo('returns no winner when two bids both below floor');
        it.todo('returns one winner when two bids both equal to floor');
        it.todo('returns one winner when two bids both greater than floor');
    })

    describe("deal bids prioritizer (mixed bids)", () => {
        it.todo('uses bid with deal id over open bid when one of each present')
        it.todo('uses bids with deal id over open bids when multiple bids of each type present')
        it.todo('accepts open bids when no bids present with deal id')
    })

    describe("dealid bids", () => {
        it.todo('returns dealid bid when only one bid present')
        it.todo('returns dealid bid when only one bid present and equal to floor price')
        it.todo('returns dealid bid when only one bid present and greater than floor price')
        it.todo('returns highest dealid bid when multiple bids present')
        it.todo('returns winning bid with correct clearingPrice when two identical bids passed in')
        it.todo('returns highest winning bid when multiple, different bids passed in')
    })

    describe("open bids", () => {
        it.todo('returns open bid when only one open bid present')
        it.todo('returns open bid when only one bid present and equal to floor price')
        it.todo('returns open bid when only one bid present and greater than floor price')
        it.todo('returns highest open bid when more than one open bid present')
        it.todo('returns correct open bid when two identical open bids present')
    })

    describe("clearing price identifier", () => {
        it.todo('uses floor price for clearing price when there is only one valid bid')
        it.todo('uses the second highest bid + 0.01 as clearing price when two bids present')
        it.todo('uses the second highest bid + 0.01 as clearing price when three bids present')
        it.todo('uses original bid price when two highest bids are equal')
    })

    describe("edge cases", () => {
        it.todo('returns null winner when no bids passed in')
    })
})

describe('category id recursion', () => {
    it("works correctly for simple test", () => {
        const autoCategory: CategoryNode = {
            id: "IAB2",
            name: "Automotive",
            children: [
                {
                    id: "IAB2-1",
                    name: "Auto Parts",
                    children: []
                },
                {
                    id: "IAB2-2",
                    name: "Auto Repair",
                    children: [
                        { id: "IAB2-2-1", name: "Brakes", children: [] },
                        { id: "IAB2-2-2", name: "Tires", children: [] }
                    ]
                },
                {
                    id: "IAB2-3",
                    name: "Buying/Selling Cars",
                    children: []
                }
            ]
        };


        expect(sut.getAllCategoryIds(autoCategory)).toEqual(["IAB2", "IAB2-1", "IAB2-2", "IAB2-2-1", "IAB2-2-2", "IAB2-3"]);


    })
})

