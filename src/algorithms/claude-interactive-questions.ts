

/**
 * Filter items that start with ANY of the given prefixes
 * 
 * @param items - Array of strings to filter
 * @param prefixes - Array of prefixes to match against
 * @returns Items that start with at least one of the prefixes
 * 
 * Examples:
 *   filterByMultiplePrefixes(["banner", "video", "native"], ["ban", "vid"]) 
 *     → ["banner", "video"]
 *   
 *   filterByMultiplePrefixes(["IAB2-1", "IAB3-2", "IAB2-5"], ["IAB2"]) 
 *     → ["IAB2-1", "IAB2-5"]
 */
export function filterByMultiplePrefixes(items: string[], prefixes: string[]): string[] {
    if (prefixes.length === 0)
        return items;

    return items.filter(item => prefixes.some(prefix => item.startsWith(prefix)));
}