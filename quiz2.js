const equalProcess = (text) => {
  let status = true;
  for (i = 0; i < text.length; i++) {
    if (text[0] !== text[i]) {
      status = false;
      i = text.length;
    }
  }
  return status;
};

function AlternatingChar(value) {
  if (value.length <= 1) {
    console.log("RESULT NOT AVAILABLE");
  } else {
    const resultEqual = equalProcess(value);
    if (resultEqual === true) {
      console.log("RESULT NOT AVAILABLE");
    } else {
      const arrayTemp = [];
      for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < value.length; j++) {
          if (value[i] !== value[j]) {
            if (!arrayTemp.includes(`${value[i]}${value[j]}`)) {
              arrayTemp.push(`${value[i]}${value[j]}`);
            }
          }
        }
      }
      let tempResult = [];
      arrayTemp.forEach((data) => {
        const regExp = new RegExp("[^D" + data + "]", "g");
        const result = value.replace(regExp, "");
        tempResult.push(result);
      });
      let resultTemp = []
      tempResult.forEach((e) => {
        outputTemp = "";
        for (let i = 0; i < e.length; i++) {
          if (i === 0) {
            outputTemp = e[i];
          } else {
            if (e[i] !== e[i - 1]) {
              outputTemp = outputTemp + "" + e[i];
            }
          }
        }
        resultTemp.push(outputTemp)
      });
      console.log(resultTemp)
      let dataOutput = "";
      let lengthItem = null;
      let indexItem = null;
      resultTemp.forEach((item,index) => {
        if(index == 0){
          lengthItem = item.length
          indexItem = index
        }else if(item.length > lengthItem){
          lengthItem = item.length
          indexItem = index
        }
        dataOutput = {length : lengthItem, output : resultTemp[indexItem]}
      })
      return(dataOutput)
    }
  }
}

console.log(AlternatingChar("aabcdababasdcdbaba")) // { length: 11, output: 'abababababa' }
