    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value
let inputField = document.getElementById("inputField");

      // Regular expression pattern for alphanumeric input
let myPattern = "^\w+$"
	  
		// Check if the input value matches the pattern
        // Valid input: display confirmation and submit the form
        // Invalid input: display error message
	// ^^ For these we will use an anonymous function as a listener to cover what is requested in the assignment document.
inputField.parentElement.addEventListener("submit", () => {
	if (myPattern.test(inputField.value)) {
		console.log('Valid');
	}
	else {
		console.log('Invalid');
	}
})