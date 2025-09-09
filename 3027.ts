function numberOfPairs(points: number[][]): number {
    let res: number = 0;
    points.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1]; // если x одинаковые → сортируем по y по убыванию
        }
        return a[0] - b[0];   // иначе сортируем по x по возрастанию
    });
    let map: Map<number, number> = new Map();
    for(let i: number = 0; i < points.length; i++) {
        map.set(i, points[i][1]);
    }
    // console.log(map);
    function findMaxYinMap(ia: number, ib: number, ya: number): number {
        let max: number = -1000000001;
        for(let i: number = ia + 1; i < ib; i++) {
            const val = map.get(i);
            if(val === undefined) continue;
            if(val <= ya) {
                max = Math.max(max, val);
            }
        }
        return max;
    }
    for(let i: number = 0; i < points.length - 1; i++) {
        for(let j: number = i + 1; j < points.length; j++) {
            let xa = points[i][0];
            let ya = points[i][1];
            let xb = points[j][0];
            let yb = points[j][1];
            let x: boolean = xa <= xb && ya >= yb;
            if(!x) continue;
            let maxY = findMaxYinMap(i, j, ya);
            let y: boolean = maxY > ya || maxY < yb;
            // console.log(xa, ya, xb, yb, maxY, y);
            if(y) res++;
        }
    }
    return res;
};
console.log(numberOfPairs([[3,5],[1,2],[0,2],[3,0]]));
// TLE 512 / 550 testcases passed I gave up