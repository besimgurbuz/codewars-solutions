function connectFour(board) {
  let hasEmptySpace = false;
  const winners = [];

  for (let currentRow = 0; currentRow < 6; currentRow++) {
    for (let currentCol = 0; currentCol < 7; currentCol++) {
      const currentValue = board[currentRow][currentCol];
      if (currentValue === '-') {
        hasEmptySpace = true;
        continue;
      }
      let targetPoints = [
        [currentRow + 3, currentCol + 3],
        [currentRow + 3, currentCol],
        [currentRow + 3, currentCol - 3],
        [currentRow, currentCol - 3],
        [currentRow - 3, currentCol - 3],
        [currentRow - 3, currentCol],
        [currentRow - 3, currentCol + 3],
        [currentRow, currentCol + 3],
      ];
      targetPoints = targetPoints.filter((pointArr) => {
        const [x, y] = pointArr;
        return x >= 0 && y >= 0 && x < 6 && y < 7;
      });

      const result = checkForMatch(
        currentRow,
        currentCol,
        targetPoints,
        currentValue,
        board
      );

      if (result) {
        winners.push(currentValue);
      }
    }
  }

  const resultSet = new Set(winners);
  console.log(winners);

  if (hasEmptySpace && resultSet.size === 0) {
    return 'in progress';
  }
  if (!hasEmptySpace && resultSet.size === 0) {
    return 'draw';
  }
  if (resultSet.size === 1) {
    return resultSet.values().next().value;
  }
}

function checkForMatch(currentRow, currentCol, targetPoints, currentValue, board) {
  console.log(currentValue, `(${currentRow},${currentCol})` ,targetPoints);
  for (const [targetRow, targetCol] of targetPoints) {
    const rowDiff = targetRow - currentRow;
    const colDiff = targetCol - currentCol;
    let points = [];

    for (let counter = 0; counter < 4; counter++) {
      points.push([
        rowDiff === 0
          ? currentRow
          : rowDiff > 0
          ? currentRow + counter
          : currentRow - counter,
        colDiff === 0
          ? currentCol
          : colDiff > 0
          ? currentCol + counter
          : currentCol - counter,
      ]);
    }
    console.log(`   (${targetRow}, ${targetCol})   Points-> `, points);
    const pointValues = points.map(([pointRow, pointCol]) => {
      return board[pointRow][pointCol];
    });
    console.log(`         -> ${pointValues}`);
    const resultSet = new Set(pointValues);

    // If set's size is 1 voila
    if (resultSet.size === 1) {
      return true;
    }
  }
  return false;
}

var board0 = [
  ['Y', '-', '-', '-', '-', '-', '-'],
  ['-', 'Y', '-', '-', '-', '-', '-'],
  ['-', '-', '-', 'R', 'R', 'R', 'R'],
  ['-', 'Y', 'Y', 'R', 'Y', 'R', 'Y'],
  ['-', '-', '-', 'Y', 'R', 'Y', 'Y'],
  ['-', '-', 'Y', 'Y', 'R', 'R', 'R'],
];

var board2 = [
  ['-', 'Y', '-', '-', '-', '-', '-'],
  ['-', 'Y', '-', '-', '-', '-', '-'],
  ['R', 'Y', '-', '-', '-', '-', '-'],
  ['Y', 'Y', '-', '-', '-', '-', '-'],
  ['Y', 'R', 'Y', '-', '-', '-', '-'],
  ['Y', 'Y', 'Y', 'R', 'Y', 'R', 'R'],
];

console.log(connectFour(board2));
