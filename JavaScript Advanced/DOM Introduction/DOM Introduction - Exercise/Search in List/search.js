function search() {
   let allTowns = Array.from(document.querySelectorAll('ul li'));
   let searchText = document.getElementById('searchText').value;
   let count = 0;

   for (let item of allTowns) {
      let town = item.textContent;
      if (town.includes(searchText)) {
         item.style.textDecoration = 'underline'
         item.style.fontWeight = 'bold'
         count++
      } else {
         item.style.textDecoration = 'none'
         item.style.fontWeight = ''
      }
   }
   document.getElementById('result').innerText = `${count} matches found`
}
