// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// =============================================================================

const readlineSync = require('readline-sync');

// -----------------------------------------------------------------------------
// Helper: read an M x N matrix from the user
// -----------------------------------------------------------------------------
function readMatrix(label) {
  console.log(`\n${label}`);
  const rows = readlineSync.questionInt('Enter number of rows: ');
  const cols = readlineSync.questionInt('Enter number of columns: ');

  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const line = readlineSync.question(`Enter row ${i + 1}: `);
    const row = line.trim().split(/\s+/).map(Number);
    matrix.push(row);
  }

  return matrix;
}

// -----------------------------------------------------------------------------
// Helper: print a matrix in an aligned grid
// -----------------------------------------------------------------------------
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].map(val => String(val).padStart(4)).join(' '));
  }
}

// -----------------------------------------------------------------------------
// Part A — Transpose
// -----------------------------------------------------------------------------
function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let c = 0; c < cols; c++) {
    const newRow = [];
    for (let r = 0; r < rows; r++) {
      newRow.push(matrix[r][c]);
    }
    result.push(newRow);
  }

  return result;
}

// -----------------------------------------------------------------------------
// Part B — Add two matrices
// -----------------------------------------------------------------------------
function addMatrices(a, b) {
  const rows = a.length;
  const cols = a[0].length;
  const result = [];

  for (let r = 0; r < rows; r++) {
    const newRow = [];
    for (let c = 0; c < cols; c++) {
      newRow.push(a[r][c] + b[r][c]);
    }
    result.push(newRow);
  }

  return result;
}

// -----------------------------------------------------------------------------
// Part C — Multiply two matrices (A is M x N, B is N x P)
// -----------------------------------------------------------------------------
function multiplyMatrices(a, b) {
  const m = a.length;
  const n = a[0].length;
  const p = b[0].length;
  const result = [];

  for (let i = 0; i < m; i++) {
    const newRow = [];
    for (let j = 0; j < p; j++) {
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += a[i][k] * b[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }

  return result;
}

// -----------------------------------------------------------------------------
// main
// -----------------------------------------------------------------------------
function main() {
  console.log('=== Part A: Transpose ===');
  const matrixA = readMatrix('Matrix to transpose:');
  console.log('\nOriginal Matrix:');
  printMatrix(matrixA);
  console.log('\nTransposed Matrix:');
  printMatrix(transpose(matrixA));

  console.log('\n=== Part B: Matrix Addition ===');
  const addA = readMatrix('Matrix A:');
  const addB = readMatrix('Matrix B (must match size of A):');

  if (addA.length !== addB.length || addA[0].length !== addB[0].length) {
    console.log('Error: Matrices must be the same size to add.');
  } else {
    console.log('\nSum:');
    printMatrix(addMatrices(addA, addB));
  }

  console.log('\n=== Part C: Matrix Multiplication ===');
  const mulA = readMatrix('Matrix A (M x N):');
  const mulB = readMatrix('Matrix B (N x P):');

  if (mulA[0].length !== mulB.length) {
    console.log('Error: Number of columns in A must equal number of rows in B.');
  } else {
    console.log('\nProduct (A x B):');
    printMatrix(multiplyMatrices(mulA, mulB));
  }
}

main();