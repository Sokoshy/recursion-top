function fibs(num) {
  if(num === 0) return [];
  if(num === 1) return [0];
  if(num === 2) return [0, 1];

  if(num > 2) {
    const fibsArr = [0, 1];

    for(let i = 0; i < num - 2; i++){
      fibsArr.push(fibsArr[i] + fibsArr[i + 1]);
    }

    return fibsArr;
  }
}

module.exports = { fibs };
