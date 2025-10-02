/**
 Do not return anything, modify board in-place instead.
*/
function solveSudoku(board: string[][]): void {
    const n: number = 9;

    // Check if the number can be placed
    function isValid(row: number, col: number, ch: string): boolean {
        for (let i = 0; i < n; i++) {
            // check row and column
            if (board[row][i] === ch) return false;
            if (board[i][col] === ch) return false;

            // check 3x3 square
            const subRow: number = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const subCol: number = 3 * Math.floor(col / 3) + (i % 3);
            if (board[subRow][subCol] === ch) return false;
        }
        return true;
    }

    function backtrack(): boolean {
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (board[r][c] === ".") {
                    for (let d = 1; d <= 9; d++) {
                        const ch = String(d);
                        if (isValid(r, c, ch)) {
                            board[r][c] = ch;
                            if (backtrack()) return true;
                            board[r][c] = ".";
                        }
                    }
                    return false; // if nothing fits
                }
            }
        }
        return true; // all cells are filled
    }

    backtrack();
};

const board: string[][] = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];
solveSudoku(board);