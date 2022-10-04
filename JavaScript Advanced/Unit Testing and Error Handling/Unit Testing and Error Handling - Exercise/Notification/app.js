function notify(message) {
  
  let div = document.getElementById('notification');
  div.textContent = message;
  div.style.display = "block";
  div.addEventListener("click",hideDiv);

  function hideDiv(event) {
   let hidedDiv = event.target.style.display = "none";
  }
}