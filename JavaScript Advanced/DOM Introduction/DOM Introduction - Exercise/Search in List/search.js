function search() {
   let allTowns = document.querySelectorAll("ul li");
   let search = document.getElementById('searchText').value;
   let count = 0;

   for(let element of allTowns) {
      let town = element.textContent;
      console.log(town);
      if(town.includes(search)) {
         element.style.fontWeight = "bold";
         element.style.textDecoration = "underline"
         count++;
      } else {
         element.style.fontWeight = "";
         element.style.textDecoration = "none"
      }
   }
   document.getElementById('result').innerHTML = `${count} matches found`;
}
