function avoidFlood(rains: number[]): number[] {
    const ans = Array(rains.length).fill(1);
    const fullLakes = new Map<number, number>(); // lake → day index when it was filled
    const dryDays: number[] = []; // indices of 0 days (sorted)

    for (let i = 0; i < rains.length; i++) {
        if (rains[i] > 0) {
            // If the lake was already filled → we need to find a day to dry it
            if (fullLakes.has(rains[i])) {
                const lastDay = fullLakes.get(rains[i])!;

                // Find the nearest dry day > lastDay
                let dryIndex = binarySearch(dryDays, lastDay);
                if (dryIndex === dryDays.length) {
                    // didn't find a day to dry — means flood
                    return [];
                }

                const dryDay = dryDays[dryIndex];
                ans[dryDay] = rains[i]; // on this day we dry this lake
                dryDays.splice(dryIndex, 1); // remove the day from the list
            }

            // Update the last day when this lake was filled
            fullLakes.set(rains[i], i);
            ans[i] = -1;
        } else {
            // Day without rain — add to the array of free days
            dryDays.push(i);
        }
    }

    return ans;

    // binary search: find the index of the first dryDays[j] > target
    function binarySearch(arr: number[], target: number): number {
        let l = 0, r = arr.length;
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (arr[m] <= target) l = m + 1;
            else r = m;
        }
        return l;
    }
}
