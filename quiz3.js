const checkWeightString = (text, query) => {
  let tempArr = [];
  let tempChar = "";
  for (let i = 0; i < text.length; i++) {
    if (i === 0) {
      tempChar = text[i];
    } else {
      if (text[i] === text[i - 1]) {
        tempChar += text[i];
      } else {
        tempArr.push(tempChar);
        tempChar = text[i];  
      }
    }
  }
  tempArr.push(tempChar);
  console.log(tempArr);
};

checkWeightString("aaaabbbccc", [1, 2, 3]);
