function transpose (matrix) {
    console.log (matrix);
    columns = matrix[0].length;
    raws = matrix.length;
    let transposed = [];

    for (i=0; i<columns; i++) {
        transposed[i] = []; 
    }

    for (let r=0; r<columns; r++) {
        for (let c=0; c<raws; c++) {
            transposed[r][c] = matrix[c][r]; 
        }
    }

    return transposed; 
}

raw1 = [1, 2, 3, 4, 5];
raw2 = [4, 55, 31, 11, 6];
raw3 = [5, 66, 12, 0 , 63];
raw4 = [77, 23, 5, 48, 19];

const matrix = [raw1, raw2, raw3, raw4];

console.log(transpose (matrix));