 // =========================================
// FSD LAB ASSIGNMENT 03
// JAVASCRIPT FORM VALIDATION
// =========================================


function validateForm(event) {

    // Stop form from refreshing the page

    event.preventDefault();


    // Get input values

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let phone = document.getElementById("phone").value.trim();

    let password = document.getElementById("password").value;


    // Get error message elements

    let nameError = document.getElementById("nameError");

    let emailError = document.getElementById("emailError");

    let phoneError = document.getElementById("phoneError");

    let passwordError = document.getElementById("passwordError");

    let successMessage = document.getElementById("successMessage");


    // Clear previous messages

    nameError.innerText = "";

    emailError.innerText = "";

    phoneError.innerText = "";

    passwordError.innerText = "";

    successMessage.innerText = "";


    // Remove old styles

    document.getElementById("name").classList.remove("input-error");
    document.getElementById("name").classList.remove("input-success");

    document.getElementById("email").classList.remove("input-error");
    document.getElementById("email").classList.remove("input-success");

    document.getElementById("phone").classList.remove("input-error");
    document.getElementById("phone").classList.remove("input-success");

    document.getElementById("password").classList.remove("input-error");
    document.getElementById("password").classList.remove("input-success");


    let isValid = true;


    // =========================================
    // NAME VALIDATION
    // =========================================

    if (name === "") {

        nameError.innerText = "Name is required.";

        document.getElementById("name")
            .classList.add("input-error");

        isValid = false;

    } else if (name.length < 3) {

        nameError.innerText =
            "Name must contain at least 3 characters.";

        document.getElementById("name")
            .classList.add("input-error");

        isValid = false;

    } else {

        document.getElementById("name")
            .classList.add("input-success");
    }


    // =========================================
    // EMAIL VALIDATION
    // =========================================

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailError.innerText = "Email is required.";

        document.getElementById("email")
            .classList.add("input-error");

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.innerText =
            "Please enter a valid email address.";

        document.getElementById("email")
            .classList.add("input-error");

        isValid = false;

    } else {

        document.getElementById("email")
            .classList.add("input-success");
    }


    // =========================================
    // PHONE VALIDATION
    // =========================================

    let phonePattern = /^[0-9]{10}$/;


    if (phone === "") {

        phoneError.innerText = "Phone number is required.";

        document.getElementById("phone")
            .classList.add("input-error");

        isValid = false;

    } else if (!phonePattern.test(phone)) {

        phoneError.innerText =
            "Phone number must contain exactly 10 digits.";

        document.getElementById("phone")
            .classList.add("input-error");

        isValid = false;

    } else {

        document.getElementById("phone")
            .classList.add("input-success");
    }


    // =========================================
    // PASSWORD VALIDATION
    // =========================================

    if (password === "") {

        passwordError.innerText =
            "Password is required.";

        document.getElementById("password")
            .classList.add("input-error");

        isValid = false;

    } else if (password.length < 6) {

        passwordError.innerText =
            "Password must contain at least 6 characters.";

        document.getElementById("password")
            .classList.add("input-error");

        isValid = false;

    } else {

        document.getElementById("password")
            .classList.add("input-success");
    }


    // =========================================
    // FORM SUCCESS
    // =========================================

    if (isValid) {

        successMessage.innerText =
            "✓ Registration successful!";

    }

}