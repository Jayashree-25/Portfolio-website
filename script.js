// Function to handle form submission
function sendMessage() {
    // Collect input values
    const inputName = document.getElementById('inputName').value;
    const inputEmail = document.getElementById('inputEmail').value;
    const inputPhone = document.getElementById('inputPhone').value;
    const inputMsg = document.getElementById('inputMsg').value;

    // Check if any of the fields are empty
    if (!inputName || !inputEmail || !inputPhone || !inputMsg) {
        alert("Please fill out all fields");
        return false; // Stop execution if validation fails
    }

    // Display a success message
    alert("Your message has been sent successfully. Thank You");

    // Clear the input fields after submission
    document.getElementById('inputName').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputPhone').value = '';
    document.getElementById('inputMsg').value = '';

    // Optionally, reset the button state or hide/show elements as needed
}
