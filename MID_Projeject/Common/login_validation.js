document.getElementById("loginForm").addEventListener("submit", function(event) {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let userType = document.querySelector('input[name="user_type"]:checked');
    let message = document.getElementById("loginMessage");

    message.innerHTML = "";

    // Username / Email Validation
    if (email === "") {
        event.preventDefault();
        message.innerHTML = "Username / Email cannot be empty.";
        return;
    }

    // Email Format Validation (when an email address is entered)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.includes("@") && !emailPattern.test(email)) {
        event.preventDefault();
        message.innerHTML = "Enter a valid email address.";
        return;
    }

    // Password Empty Validation
    if (password.trim() === "") {
        event.preventDefault();
        message.innerHTML = "Password cannot be empty.";
        return;
    }

    // Password Length Validation
    if (password.length < 6) {
        event.preventDefault();
        message.innerHTML = "Password must contain at least 6 characters.";
        return;
    }

    // User Type Validation
    if (!userType) {
        event.preventDefault();
        message.innerHTML = "Please select a user type.";
        return;
    }

    // All Validations Passed
    event.preventDefault();
    message.innerHTML = "Login validation successful!";

});

document.getElementById("loginForm").addEventListener("reset", function() {
    document.getElementById("loginMessage").innerHTML = "";
});