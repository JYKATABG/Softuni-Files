function create(words) {
   let content = document.getElementById('content');
   for(let word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = "none";
      div.addEventListener("click",showP);
      div.appendChild(p)
      content.appendChild(div)
   }

   function showP(event) {
      if(event.target.nodeName === "P") {
         return
      }
      let p = event.target.children[0];
      p.style.display = "block";
   }
}