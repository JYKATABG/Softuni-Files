function create(words) {
   let content = document.getElementById('content');

   for(let word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.style.display = "none";
      p.textContent = word;
      content.appendChild(div);
      div.appendChild(p);
      div.addEventListener('click',showP)
   }

   function showP(event) {
      if(event.target.nodeName === "P") {
         return;
      }
         let p = event.target.children[0];
         p.style.display = 'block';
   }
}