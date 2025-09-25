function minimumTotal(triangle: number[][]): number {
    for(let i = 0; i < triangle.length - 1; i++) {
        triangle[i + 1][0] = triangle[i + 1][0] + triangle[i][0];
        triangle[i + 1][triangle[i + 1].length - 1] = 
            triangle[i + 1][triangle[i + 1].length - 1] + triangle[i][triangle[i].length - 1];
        for(let j = 0; j < triangle[i].length - 1; j++) {
            if(triangle[i][j] < triangle[i][j + 1])
                triangle[i + 1][j + 1] = triangle[i + 1][j + 1] + triangle[i][j];
            else
                triangle[i + 1][j + 1] = triangle[i + 1][j + 1] + triangle[i][j + 1];
        }
    }
    console.log(triangle);
    let min = triangle[triangle.length - 1][0];
    for(let i = 0; i < triangle[triangle.length - 1].length; i++) {
        if(triangle[triangle.length - 1][i] < min) min = triangle[triangle.length - 1][i];
    }
    return min;
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));