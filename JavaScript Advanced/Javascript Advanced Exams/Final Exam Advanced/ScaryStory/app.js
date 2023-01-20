window.addEventListener("load", solve);

function solve() {
  let input = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    age: document.getElementById("age"),
    storyTitle: document.getElementById("story-title"),
    genre: document.getElementById("genre"),
    story: document.getElementById("story")
  }

  document.getElementById("form-btn").addEventListener("click", publish)

  function publish(e) {
    e.preventDefault();

    let firstName = input.firstName.value;
    let lastName = input.lastName.value;
    let age = input.age.value;
    let storyTitle = input.storyTitle.value;
    let genre = input.genre.value;
    let story = input.story.value

    if (firstName == "" || lastName == "" || age == "" || storyTitle == "" || genre == "" || story == "") {
      return;
    }

    let ul = document.getElementById("preview-list")

    let li = document.createElement("li");
    li.classList.add("story-info")
    ul.appendChild(li)

    let article = document.createElement("article");
    li.appendChild(article);

    let h4Name = document.createElement("h4");
    h4Name.textContent = `Name: ${firstName} ${lastName}`;
    article.appendChild(h4Name);

    let pAge = document.createElement("p");
    pAge.textContent = `Age: ${Number(age)}`
    article.appendChild(pAge);

    let pTitle = document.createElement("p");
    pTitle.textContent = `Title: ${storyTitle}`
    article.appendChild(pTitle);

    let pGenre = document.createElement("p");
    pGenre.textContent = `Genre: ${genre}`
    article.appendChild(pGenre);

    let pStory = document.createElement("p");
    pStory.textContent = `${story}`
    article.appendChild(pStory);

    let saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = `Save Story`
    saveBtn.addEventListener("click", save)
    li.appendChild(saveBtn);

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = `Edit Story`;
    editBtn.addEventListener("click", edit);
    li.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = `Delete Story`;
    deleteBtn.addEventListener("click", deleteStory)
    li.appendChild(deleteBtn)

    let formBtn = document.getElementById("form-btn")
    formBtn.disabled = true;


    input.firstName.value = "";
    input.lastName.value = "";
    input.age.value = "";
    input.storyTitle.value = "";
    input.genre.value = "";
    input.story.value = "";


    function save(e) {
      e.preventDefault();
      let mainDiv = document.getElementById("main")
      mainDiv.innerHTML = "";
      let h1 = document.createElement("h1");
      h1.textContent = "Your scary story is saved!"
      mainDiv.appendChild(h1);
    }

    function edit(e) {
      e.preventDefault();

      input.firstName.value = firstName;
      input.lastName.value = lastName;
      input.age.value = age;
      input.storyTitle.value = storyTitle;
      input.genre.value = genre;
      input.story.value = story;

      li.remove();
      formBtn.disabled = false

    }

    function deleteStory(e) {
      e.preventDefault();

      li.remove();
      formBtn.disabled = false
    }
  }
}
