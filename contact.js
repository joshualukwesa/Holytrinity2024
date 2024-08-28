function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "") {
        alert("Name must be filled out");
        return false;
    }
    if (email.trim() === "") {
        alert("Email must be filled out");
        return false;
    }
    if (message.trim() === "") {
        alert("Message must be filled out");
        return false;
    }

    // Additional email validation using a simple regex pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // If all validations pass, you can proceed with form submission
    // For demonstration purposes, we'll just log the data to console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // In a real scenario, you would submit the form to a server using AJAX or another method
    return true;
}
