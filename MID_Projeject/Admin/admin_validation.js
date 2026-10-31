document.getElementById("adminForm").addEventListener("submit", function(event) {

    let message = document.getElementById("adminMessage");

    // Get Input Values
    let fullname = document.getElementById("fullname").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let empid = document.getElementById("empid").value.trim();
    let department = document.getElementById("department").value;
    let joindate = document.getElementById("joindate").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let terms = document.getElementById("terms").checked;
    let photo = document.getElementById("photo").files[0];

    let access = document.querySelector('input[name="access"]:checked');
    let permissions = document.querySelectorAll(
        'input[name="permissions[]"]:checked'
    );

    message.innerHTML = "";

    // 1. Full Name Validation
    let namePattern = /^[A-Za-z]+(?:[ .'-][A-Za-z]+)*$/;

    if (fullname === "") {
        event.preventDefault();
        message.innerHTML = "Full name cannot be empty.";
        return;
    }

    if (!namePattern.test(fullname)) {
        event.preventDefault();
        message.innerHTML = "Name should contain only letters.";
        return;
    }

    // 2. Username Validation
    let usernamePattern = /^[A-Za-z0-9_]{3,20}$/;

    if (username === "") {
        event.preventDefault();
        message.innerHTML = "Username cannot be empty.";
        return;
    }

    if (!usernamePattern.test(username)) {
        event.preventDefault();
        message.innerHTML =
            "Username must contain 3-20 characters (letters, numbers or underscore).";
        return;
    }

    // 3. Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        event.preventDefault();
        message.innerHTML = "Official email cannot be empty.";
        return;
    }

    if (!emailPattern.test(email)) {
        event.preventDefault();
        message.innerHTML = "Enter a valid email address.";
        return;
    }

    // 4. Phone Number Validation
    let phonePattern = /^01[3-9][0-9]{8}$/;

    if (phone === "") {
        event.preventDefault();
        message.innerHTML = "Phone number cannot be empty.";
        return;
    }

    if (!phonePattern.test(phone)) {
        event.preventDefault();
        message.innerHTML =
            "Enter a valid 11-digit Bangladeshi mobile number.";
        return;
    }

    // 5. Employee ID Validation
    if (empid === "") {
        event.preventDefault();
        message.innerHTML = "Employee ID cannot be empty.";
        return;
    }

    // 6. Department Validation
    if (department === "") {
        event.preventDefault();
        message.innerHTML = "Please select a department.";
        return;
    }

    // 7. Joining Date Validation
    if (joindate === "") {
        event.preventDefault();
        message.innerHTML = "Please select your joining date.";
        return;
    }

    let selectedDate = new Date(joindate + "T00:00:00");
    let today = new Date();

    today.setHours(0, 0, 0, 0);

    if (selectedDate > today) {
        event.preventDefault();
        message.innerHTML = "Joining date cannot be in the future.";
        return;
    }

    // 8. Access Level Validation
    if (!access) {
        event.preventDefault();
        message.innerHTML = "Please select an access level.";
        return;
    }

    // 9. Permissions Validation
    if (permissions.length === 0) {
        event.preventDefault();
        message.innerHTML = "Please select at least one permission.";
        return;
    }

    // 10. Profile Photo Validation (Optional)
    if (photo) {

        if (!photo.type.startsWith("image/")) {
            event.preventDefault();
            message.innerHTML = "Please select a valid image file.";
            return;
        }

        if (photo.size > 2 * 1024 * 1024) {
            event.preventDefault();
            message.innerHTML = "Profile photo must be less than 2 MB.";
            return;
        }
    }

    // 11. Password Validation
    if (password.trim() === "") {
        event.preventDefault();
        message.innerHTML = "Password cannot be empty.";
        return;
    }

    if (password.length < 6) {
        event.preventDefault();
        message.innerHTML =
            "Password must contain at least 6 characters.";
        return;
    }

    // Password must contain at least one number
    let numberPattern = /[0-9]/;

    if (!numberPattern.test(password)) {
        event.preventDefault();
        message.innerHTML =
            "Password must contain at least one number.";
        return;
    }

    // 12. Confirm Password Validation
    if (cpassword === "") {
        event.preventDefault();
        message.innerHTML = "Please confirm your password.";
        return;
    }

    if (password !== cpassword) {
        event.preventDefault();
        message.innerHTML = "Passwords do not match.";
        return;
    }

    // 13. Authorization Checkbox Validation
    if (!terms) {
        event.preventDefault();
        message.innerHTML =
            "Please confirm that you are an authorized person.";
        return;
    }

    // All Validations Passed
    event.preventDefault();
    message.innerHTML = "Registration Successful!";


});

document.getElementById("adminForm").addEventListener("reset", function() {
    document.getElementById("adminMessage").innerHTML = "";
});

