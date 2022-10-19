function solve() {
    let inputs = {
        fname: document.getElementById("fname"),
        lname: document.getElementById("lname"),
        email: document.getElementById("email"),
        birth: document.getElementById("birth"),
        position: document.getElementById("position"),
        salary: document.getElementById("salary")
    }

    document.getElementById("add-worker").addEventListener("click", hire)

    let budget = 0;

    function hire(e) {
        e.preventDefault();
        //read input values
        let fname = inputs.fname.value;
        let lname = inputs.lname.value;
        let email = inputs.email.value;
        let birth = inputs.birth.value;
        let position = inputs.position.value;
        let salary = inputs.salary.value;
        salary = Number(salary)
        //validate input
        if (fname == "" || lname == "" || email == "" || birth == "" || position == "" || salary == "") {
            return;
        }
        //create tr and td
        let tr = document.createElement("tr");
        let tbody = document.getElementById("tbody");

        let tdfName = document.createElement("td");
        tdfName.textContent = `${fname}`;
        tr.appendChild(tdfName);

        let tdLName = document.createElement("td");
        tdLName.textContent = `${lname}`;
        tr.appendChild(tdLName);

        let tdEmail = document.createElement("td");
        tdEmail.textContent = `${email}`;
        tr.appendChild(tdEmail);

        let tdBirth = document.createElement("td");
        tdBirth.textContent = `${birth}`;
        tr.appendChild(tdBirth);

        let tdPosition = document.createElement("td");
        tdPosition.textContent = `${position}`
        tr.appendChild(tdPosition);

        let tdSalary = document.createElement("td");
        tdSalary.textContent = `${salary}`
        tr.appendChild(tdSalary);

        let firedBtn = document.createElement("button");
        firedBtn.classList.add("fired")
        firedBtn.textContent = "Fired"
        firedBtn.addEventListener("click", fired)
        tr.appendChild(firedBtn);

        let editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", edit);
        tr.appendChild(editBtn);
        //add them to the main table
        tbody.appendChild(tr);
        //clear the inpits
        inputs.fname.value = "";
        inputs.lname.value = "";
        inputs.email.value = "";
        inputs.birth.value = "";
        inputs.position.value = "";
        inputs.salary.value = "";

        let sum = document.getElementById("sum");
        let initSum = Number(sum.textContent)
        sum.textContent = (Number(salary) + initSum).toFixed(2);


        function fired(event) {
            event.preventDefault();
            event.target.parentElement.remove()
            let currentSalary = Number(sum.textContent);
            sum.textContent = (currentSalary - Number(salary)).toFixed(2);

        }

        function edit(event) {
            event.preventDefault();
            inputs.fname.value = fname;
            inputs.lname.value = lname;
            inputs.email.value = email;
            inputs.birth.value = birth;
            inputs.position.value = position;
            inputs.salary.value = salary;

            let currentSalary = Number(sum.textContent);
            sum.textContent = (currentSalary - Number(salary)).toFixed(2);
            event.target.parentElement.remove();
        }
    }
}
solve()