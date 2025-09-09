function findClosest(x: number, y: number, z: number): number {
    const diffx = Math.abs(x - z);
    const diffy = Math.abs(y - z);
    return diffx === diffy ? 0 : diffx < diffy ? 1 : 2;
}

console.log(findClosest(1, 5, 3));