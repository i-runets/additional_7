module.exports = function solveSudoku(matrix) {
  // your solution
  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
      if (matrix[row][col] == 0) {
        for (var numb = 1; numb <= 9; numb++) {
          if (!isInRow(matrix, row, numb) && !isInColumn(matrix, col, numb) && !isInSquare(matrix, row, col, numb)) {
            matrix[row][col] = numb;
            if (solveSudoku(matrix)) {
              return matrix;
            }
            matrix[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}
function isInRow(matrix, row, numb) {
  for (var i = 0; i < matrix[row].length; i++) {
    if (matrix[row][i] == numb) return true;
  }
  return false;
}
function isInColumn(matrix, col, numb) {
  for (var i = 0; i < matrix[col].length; i++) {
    if (matrix[i][col] == numb) return true;
  }
  return false;
}
function isInSquare(matrix, row, col, numb) {
  squareRow = Math.floor(row / 3) * 3;
  squareCol = Math.floor(col / 3) * 3;
  for (var i = squareRow; i < squareRow + 3; i++) {
    for (var j = squareCol; j < squareCol + 3; j++) {
      if (matrix[i][j] == numb) return true;
    }
  }
  return false;
}