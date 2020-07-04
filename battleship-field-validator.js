let direction = '';
function validateBattlefield(field) {
  let sizeLimits = {
    s4: 1,
    s3: 2,
    s2: 3,
    s1: 4
  };
  console.log(field);
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === 0) {
        continue;
      }
      if (i > 0 && field[i - 1][j] === 1) {
        continue;
      }
      if (j > 0 && field[i][j - 1] === 1) {
        continue;
      }
      const size = countSize(field, i, j, 1);
      direction = '';

      console.log('Found ships size -> ', size);
      sizeLimits[`s${size}`]--;

      // if there is a 1 at cross return false
      if (checkCross(field, i, j)) {
        return false;
      }
    }
  }
  if (Object.values(sizeLimits).length > 4
    || Object.values(sizeLimits).find(v => v != 0)) {
    return false;
  }
  console.log(sizeLimits);
  console.log(Object.values(sizeLimits).find(v => v != 0));
  return true;
}

function checkCross(field, i, j) {
  let cross1, cross2, cross3, cross4;
  if (i >= 1 && j < (field.length - 1)) {
    cross1 = field[i - 1][j + 1];
    if (j >= 1) {
      cross2 = field[i - 1][j - 1];
    }
  }
  if (i < (field.length - 1) && j >= 1) {
    cross3 = field[i + 1][j - 1];
    if (j < (field.length - 1)) {
      cross2 = field[i + 1][j + 1];
    }
  }
  if (cross1 === 1 || cross2 === 1 || cross3 === 1 || cross4 === 1) {
    return true;
  }
  return false;
}

function countSize(field, i, j, size) {
  let nSize = size;
  // check right
  if (field[i][j + 1] === 1) {
    if (direction === 'b') {
      return -1;
    }
    direction = direction ? direction : 'r';
    nSize = countSize(field, i, j + 1, nSize + 1);
  }
  // check bottom
  if (field[i + 1][j] === 1) {
    if (direction === 'r') {
      return -1;
    }
    direction = direction ? direction : 'b';
    nSize = countSize(field, i + 1, j, nSize + 1);
  }
  return nSize;
}

console.log(validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]));
