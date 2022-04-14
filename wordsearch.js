const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = joinVertically(letters).map((ls) => ls.join(""));
  
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  for (l of verticalJoin) {
    console.log(l);
    if (l.includes(word)) return true;
  }

  return false;
};
  
const joinVertically = (letters) => {
  const newArr = [];

  for (let row = 0; row < letters[0].length; row++) {
    newArr.push([]);

    for (let col = 0; col < letters.length; col++) {
      newArr[row].push(letters[col][row]);
    }
  }

    return newArr;
};
  
module.exports = wordSearch;