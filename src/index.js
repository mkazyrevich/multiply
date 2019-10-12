module.exports = function multiply(first, second) {
  let firstArr = first.split('').reverse();
  let secondArr = second.split('').reverse();
  let resultArr = [];
  
  for (i =0; i<(firstArr.length+secondArr.length); i++) {
    resultArr[i] = 0;
  }

  for (i = 0; i < firstArr.length; i++) {
    for (j = 0; j < secondArr.length; j++) {
      resultArr[resultArr.length -1 - (i+j)] += firstArr[i] * secondArr[j];
    }
  }

  for (i = resultArr.length-1; i>0; i--) {
    resultArr[i-1] += Math.floor(resultArr[i]/10);
    resultArr[i] = resultArr[i]%10;
  }

  if (resultArr[0] == 0) {
    resultArr.shift();
  }
  
  return resultArr.join('');
}
