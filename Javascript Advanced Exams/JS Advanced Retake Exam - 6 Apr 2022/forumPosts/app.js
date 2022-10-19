window.addEventListener("load", solve);

function solve() {

  let input = {
    title: document.getElementById("post-title"),
    category: document.getElementById("post-category"),
    content: document.getElementById("post-content")
  }

  let list = {
    review: document.getElementById("review-list"),
    publish: document.getElementById("published-list")
  }

  document.getElementById("publish-btn").addEventListener("click",publish);
  document.getElementById("clear-btn").addEventListener("click",clear)

  function publish(event) {
    event.preventDefault();
    //read input fields
    let title = input.title.value;
    let category = input.category.value;
    let content = input.content.value;
    //validate inputs
    if(title === "" || category === "" || content === "") {
      return;
    }
    //create new unorderd list
    let li = document.createElement("li");
    li.classList = "rpost";
    li.innerHTML = `
    <article>
      <h4>${title}</h4>
      <p>Category: ${category}</p>
      <p>Content: ${content}</p>
    </article>
    <button class="action-btn edit">Edit</button>
    <button class="action-btn approve">Approve</button>`
    
    //add to the first list
    list.review.appendChild(li)

    //add edit and approve buttons
    let btnEdit = li.querySelector(".edit");
    let btnApprove = li.querySelector(".approve");
    btnEdit.addEventListener("click",edit)
    btnApprove.addEventListener("click",approve);

    //clear the input fields
    input.title.value = "";
    input.category.value = "";
    input.content.value = "";

    function edit() {
      //read input fields
      input.title.value = title;
      input.category.value = category;
      input.content.value = content;
      //delete the unordert list
      li.remove();
    }
  
    function approve() {
      //move the first list to second list
      list.publish.appendChild(li);
      //delete the first list and his buttons
      btnApprove.remove()
      btnEdit.remove();
    }
  }

  function clear() {
    //clear the list Html
    list.publish.innerHTML = ""
  }
}
