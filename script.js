/*DENISE B */

/* FAQ PAGE FORM JAVASCRIPT*/
window.onload = randomiseOptions; //when page reloads, call randomiseOptions Function

  function randomiseOptions() {
    const dropdown = document.getElementById("feedbackDropdown"); //defining variable dropdown from html select id "feedbackDropdown" 
	
   // Separate the options into two arrays: one for "Misc" and one for the rest
   
  const optionsArray = Array.from(dropdown.options);//forms one array from dropdown options (including misc)
  
  const miscOption = optionsArray.find(option => option.text === "misc"); //forms another array and specifically looks for "misc" text value through the option list
  
  const otherOptions = optionsArray.filter(option => option.text !== "misc"); //forms another array and specifically excludes "misc" option from the option list

  // Shuffle all options except misc using math.random
  const shuffledArray = otherOptions.sort(() => Math.random() - 0.5); //50% chance the order remains(postive) or shuffles (negative)

  // Clear the dropdown to add shuffled options back
  dropdown.innerHTML = "";

  // Add the shuffled options first
  shuffledArray.forEach(option => dropdown.add(option));

  // Add the "Misc" option at the end if the value is true (if misc is found)
	if (miscOption) {
		dropdown.add(miscOption);
	} 
	
}
  document.addEventListener('DOMContentLoaded', function() {
    // Get the check box elements and the text field
    const yesResponse = document.getElementById('yesresponse');
    const noResponse = document.getElementById('noresponse');
    const textField = document.getElementById('textField');


    // Event listener for the No checkbox
    noResponse.addEventListener('change', toggleTextField);
	
	// Event listener for the yes checkbox;
	yesResponse.addEventListener('change', toggleTextField);

    toggleTextField(); //calls method toggleTextField
	
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
