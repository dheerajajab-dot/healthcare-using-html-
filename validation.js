let form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let valid = true;

    let name = document.getElementById("patientName").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value.trim();
    let blood = document.getElementById("bloodGroup").value;
    let department = document.getElementById("department").value;
    let registrationDate = document.getElementById("registrationDate").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    clearForm();

    if (name === "") {
        document.getElementById("nameError").innerHTML =
        " Please enter patient name";
        document.getElementById("patientName").classList.add("error");
        valid = false;
    }

    else if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").innerHTML =
        " Name should contain alphabets and spaces only";
        document.getElementById("patientName").classList.add("error");
        valid = false;
    }

    else {
        document.getElementById("patientName").classList.add("valid");
    }


    if (mobile === "") {
        document.getElementById("mobileError").innerHTML =
        " Please enter mobile number";
        document.getElementById("mobile").classList.add("error");
        valid = false;
    }

    else if (!/^[6-9][0-9]{9}$/.test(mobile)) {
        document.getElementById("mobileError").innerHTML =
        " Enter valid 10-digit Indian mobile number";
        document.getElementById("mobile").classList.add("error");
        valid = false;
    }

    else {
        document.getElementById("mobile").classList.add("valid");
    }


    if (email === "") {
        document.getElementById("emailError").innerHTML =
        " Please enter email";
        document.getElementById("email").classList.add("error");
        valid = false;
    }

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerHTML =
        " Enter valid email address";
        document.getElementById("email").classList.add("error");
        valid = false;
    }

    else {
        document.getElementById("email").classList.add("valid");
    }


    let today = new Date().toISOString().split("T")[0];


    if (dob === "") {
        document.getElementById("dobError").innerHTML =
        " Please select date of birth";
        document.getElementById("dob").classList.add("error");
        valid = false;
    }

    else if (dob > today) {
        document.getElementById("dobError").innerHTML =
        " Date of birth cannot be in future";
        document.getElementById("dob").classList.add("error");
        valid = false;
    }

    else {
        document.getElementById("dob").classList.add("valid");
    }


    if (!gender) {
        document.getElementById("genderError").innerHTML =
        " Please select gender";
        valid = false;
    }


    if (address === "") {
        document.getElementById("addressError").innerHTML =
        " Please enter address";
        document.getElementById("address").classList.add("error");
        valid = false;
    }

    else {
        document.getElementById("address").classList.add("valid");
    }


    if (blood === "") {
        document.getElementById("bloodError").innerHTML =
        " Please select blood group";
        document.getElementById("bloodGroup").classList.add("error");
        valid = false;
    }

    else {
        document.getElementById("bloodGroup").classList.add("valid");
    }


    if (department === "") {
        document.getElementById("departmentError").innerHTML =
        " Please select department";
        document.getElementById("department").classList.add("error");
        valid = false;
    }

    else {
        document.getElementById("department").classList.add("valid");
    }


    if (registrationDate === "") {
        document.getElementById("registrationError").innerHTML =
        " Please select registration date";
        document.getElementById("registrationDate").classList.add("error");
        valid = false;
    }

    else if (registrationDate > today) {
        document.getElementById("registrationError").innerHTML =
        " Registration date cannot be in future";
        document.getElementById("registrationDate").classList.add("error");
        valid = false;
    }

    else {
        document.getElementById("registrationDate").classList.add("valid");
    }


    if (valid) {
        alert("Patient registration successful!");
        form.reset();
        clearForm();
    }

});


function clearForm() {

    document.querySelectorAll("span").forEach(function(span) {
        span.innerHTML = "";
    });

    document.querySelectorAll("input, textarea, select").forEach(function(field) {
        field.classList.remove("error");
        field.classList.remove("valid");
    });

}


form.addEventListener("reset", function() {

    setTimeout(function() {
        clearForm();
    }, 10);

});