function solve() {
  let text = document.getElementById('text').value;;
  let convention = document.getElementById('naming-convention').value;
  let allWords = text.split(" ");
  let res = "";

  switch(convention) {
    case "Camel Case":
      allWords.forEach((e,i) => {
        if(i === 0) {
          return res += e.toLowerCase();
        } else {
          return res += e[0].toUpperCase() + e.substring(1).toLowerCase();
        }
      })
      break;

    case "Pascal Case":
      allWords.forEach((e,i) => {
        return res += e[0].toUpperCase() + e.substring(1).toLowerCase();
      })
      break;

    default:res = "Error!";
  }
  document.getElementById('result').innerText = res;
}