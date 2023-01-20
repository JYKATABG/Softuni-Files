window.addEventListener('load', solution);

function solution() {
  let input = {
    fullName: document.getElementById("fname"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    address: document.getElementById("address"),
    code: document.getElementById("code")
  }
  document.getElementById("submitBTN").addEventListener("click", submit);

  function submit(e) {
    e.preventDefault();

    let submitBtn = document.getElementById("submitBTN")
    let editBtn = document.getElementById("editBTN");
    editBtn.addEventListener("click", edit)


    let continueBtn = document.getElementById("continueBTN");
    continueBtn.addEventListener("click", continueFunc)

    let fullName = input.fullName.value;
    let email = input.email.value;
    let phone = input.phone.value;
    let address = input.address.value;
    let code = input.code.value;

    if (fullName == "" || email == "" || phone == "" || address == "" || code == "") {
      return;
    }

    let ul = document.getElementById("infoPreview");

    let liFName = document.createElement("li");
    liFName.textContent = `Full Name: ${fullName}`
    ul.appendChild(liFName);

    let liEmail = document.createElement("li");
    liEmail.textContent = `Email: ${email}`
    ul.appendChild(liEmail);

    let liPhone = document.createElement("li");
    liPhone.textContent = `Phone Number: ${phone}`
    ul.appendChild(liPhone)

    let liAddress = document.createElement("li");
    liAddress.textContent = `Address: ${address}`
    ul.appendChild(liAddress);

    let liCode = document.createElement("li");
    liCode.textContent = `Postal Code: ${code}`
    ul.appendChild(liCode);

    //disable submitBtn
    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    //clear input

    input.fullName.value = "";
    input.email.value = "";
    input.phone.value = "";
    input.address.value = "";
    input.code.value = "";

    function edit(e) {
      e.preventDefault();

      input.fullName.value = fullName;
      input.email.value = email;
      input.phone.value = phone;
      input.address.value = address;
      input.code.value = code;

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;

      ul.innerHTML = "";
    }

    function continueFunc(e) {
      e.preventDefault();
      let div = document.getElementById("block")
      let h3 = document.createElement("h3");
      h3.textContent = "Thank you for your reservation!";
      div.innerHTML = "";
      div.appendChild(h3);
    }
  }
}
