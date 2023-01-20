//Option 1
// function deleteByEmail() {
//     let email = document.getElementsByName('email')[0].value;
//     let allCustomers = document.querySelectorAll('#customers tr td:nth-child(2)');

//     for(let td of allCustomers) {
//         if(td.textContent == email) {
//            let row = td.parentNode;
//            row.parentNode.removeChild(row);
//            document.getElementById('result').textContent = "Deleted.";
//            return;
//         }
//     }
//     document.getElementById('result').textContent = "Not found.";
// }

//Option 2
function deleteByEmail() {
    let allCustomers = document.querySelectorAll("tr td:nth-child(2)");
    let inputEmail = document.getElementsByName("email")[0].value
    let isDeleted = false;
    
    for(let email of allCustomers) {
        if(email.textContent === inputEmail) {
            email.parentElement.remove();
            isDeleted = true;
        }
    }
    let result = document.getElementById("result");
    result.textContent = isDeleted ? "Deleted" : "Not found";
}