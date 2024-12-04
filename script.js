/*DENISE B */

/* FAQ PAGE FORM JAVASCRIPT*/
document.addEventListener('DOMContentLoaded', function() {
    // Get the check box elements and the text field
    const yesResponse = document.getElementById('yesresponse');
    const noResponse = document.getElementById('noresponse');
    const textField = document.getElementById('textField');
	
	/*
	 if (!form.name.value || !form.email.value || !tandc.checked) || !yesResponse.checked && !noResponse.checked)) {
        alert('Please fill all required fields.');
        event.preventDefault(); // Prevent form submission
      }
	  */
    // Event listener for the No checkbox
   
    noResponse.addEventListener('change', toggleTextField);
	
	// Event listener for the yes checkbox;

	yesResponse.addEventListener('change', toggleTextField);
    // Initialize the visibility based on the current state of checkboxes
    toggleTextField(); //calls method
	
    // Function to handle the visibility of the 'Why?' text field
    function toggleTextField() {

      if (noResponse.checked) {
        textField.style.display = 'block'; // Show the text field if 'No' is selected
      } else {
        textField.style.display = 'none'; // Hide the text field otherwise
      }
    }
  }
  );
  	
	function validateFeedback(){
    if (!name || !email || !tandc || !(yesResponse || noResponse)) {
        alert('Please fill all required fields.');
        event.preventDefault(); // Prevent form submission
    } else {
        alert('Thank you for your submission!');
    }
}