function numberOfPairs(points: number[][]): number {
    const n = points.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];

            // A should be "left and above" B
            if (x1 <= x2 && y1 >= y2 && (x1 < x2 || y1 > y2)) {
                let valid = true;

                // check that there are no other points inside/on the boundary
                for (let k = 0; k < n; k++) {
                    if (k === i || k === j) continue;
                    const [x, y] = points[k];
                    if (x1 <= x && x <= x2 && y2 <= y && y <= y1) {
                        valid = false;
                        break;
                    }
                }

                if (valid) count++;
            }
        }
    }

    return count;
};
