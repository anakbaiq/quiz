function stringShortener(str) {
  // buat variable untuk wadah
  let result = [];
  let twin = [];
  // Looping unutk medapatkan index string
  for (let i = 0; i < str.length; i++) {
    // Check satu string dengan string depannya
    if (str[i] === str[i + 1]) {
      // Jika benar push ke array twin dan increment
      twin.push(str[i], str[i + 1]);
    } else {
      // Jika salah push ke array twin
      result.push(str[i]);
    }
  }
  // Check isi result
  let showResult =
    result.length > 0
      ? console.log(result.join(""))
      : console.log("Empty String");
  console.log(twin.join("-"))
  return showResult;
}
