/*INDEX PAGE JAVASCRIPT @Denise Balasmeh*/

    //()=> another way to define a function with an event (saves time and syntax space)
document.addEventListener('DOMContentLoaded', function (){

      //gets anchor tag id and stores it in variable jsHoverLinkAction
      const jsHoverLinkAction = document.getElementById('indexHoverLinkAction');
    //gets anchor tag id and stores it in variable jsHoverLinkTarget
  const jsHoverLinkTarget = document.getElementById('indexHoverLinkTarget');


  if (jsHoverLinkAction) {//if jsHoverLinkAction value is true, execute:
    jsHoverLinkAction.addEventListener('mouseenter', ()=>{
      //when mouse hovers over, change background colour
        jsHoverLinkAction.style.backgroundColor = '#ff5e5e';
        jsHoverLinkAction.style.fontStyle = 'italic';

    });
    jsHoverLinkAction.addEventListener('mouseleave', ()=>{
       //else (when mouse doesnt hover) remove background colour
        jsHoverLinkAction.style.backgroundColor = '';
        jsHoverLinkAction.style.fontStyle = '';
    });
} 
  
  if (jsHoverLinkTarget) {//if jsHoverLinkTarget value is true, execute:
      jsHoverLinkTarget.addEventListener('mouseenter', ()=>{
        //when mouse hovers over, change background colour
          jsHoverLinkTarget.style.backgroundColor = '#ff5e5e';
          jsHoverLinkTarget.style.fontStyle = 'italic';

      });

      jsHoverLinkTarget.addEventListener('mouseleave', ()=>{
        //else (when mouse doesnt hover) remove background colour
          jsHoverLinkTarget.style.backgroundColor = '';
          jsHoverLinkTarget.style.fontStyle = '';
      });
  } 

});//end

/*FAQ PAGE JAVASCRIPT */

/* FEEDBACK FORM */
window.onload = randomiseOptions; //when page reloads, call randomiseOptions Function

  function randomiseOptions() {
    if(window.location.pathname==='faq.html'){//EXECUTE FUNCTION ONLY IF USER IS ON FAQ PAGE, ELSE IGNORE

      const dropdown = document.getElementById("feedbackDropdown"); //defining variable dropdown from html select id "feedbackDropdown" 
    
    // Separate the options into two arrays: one for "Misc" and one for the rest
    
    const optionsArray = Array.from(dropdown.options);//converts dropdown options to an array (including misc)

    const miscOption = optionsArray.find(option => option.text === "Other"); //creates an array to store "other" option seperately for later
    
    const otherOptions = optionsArray.filter(option => option.text !== "Other"); //forms another array and specifically excludes "misc" option from the option list

    // Shuffle all options except misc using math.random
    const shuffledArray = otherOptions.sort(() => Math.random() - 0.5); //stores new shuffled array (50% chance the order remains(postive) or shuffles (negative))

    // Clear the dropdown to add shuffled options back
    dropdown.innerHTML = "";

    // Add the shuffled options first
    shuffledArray.forEach(option => dropdown.add(option));

    // Add the "Misc" option at the end if the value is true (if misc is found)
    if (miscOption) {
      dropdown.add(miscOption);
    } 
  }
}
  document.addEventListener('DOMContentLoaded', ()=>{

    if(window.location.pathname.includes('faq.html')){//EXECUTE FUNCTION ONLY IF USER IS ON FAQ PAGE, ELSE IGNORE

      // Get the check box elements and the text field from FAQ Page
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
        } 
        else {
          textField.style.display = 'none'; // Hide the text field otherwise
        }
      }
    }
  });
  	
	function validateFeedback() {//runs when user clicks html feedback form button

    //defining const variables from html to be used within local method
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const yesResponse = document.getElementById('yesresponse');
    const noResponse = document.getElementById('noresponse');
    const tandc = document.getElementById('tandc');
    const feedbackForm = document.getElementById('feedbackForm');

    // Validation checks--------

    // Check if the username is filled field, if not:
    if (!username.value.trim()) {//trim removes unneeded spaces (whitespace) in input string
        alert('Please enter your Name.');//prompts user
        return; //ends conditional here and exits function 
    }

    // Check if the email field is filled
    else if (!email.value.trim()) {
      alert('Please enter your email.');
      return;//ends conditional here and exits function 

      //check if '@' is included (seperate conditional as whitespace wouldn't be able to hold @, thus always false(logic error))
  } else if (!email.value.includes('@')) {
      alert('Please enter a valid email address.');
      return;//ends conditional here and exits function 
  }

    // Check if the Terms and Conditions checkbox is checked
    else if (!tandc.checked) {
        alert('You must agree to the Terms and Conditions.');
        return; //ends conditional here and exits function 
    }

    // Check if neither response boxes  (yes or no) is selected
    else if (!yesResponse.checked && !noResponse.checked) {
        alert('Please select whether the page was helpful or not.');
        return; //ends conditional here and exits function 
    }

    // If all checks pass
    alert('Thank you for your submission!');
    feedbackForm.submit(); // allow form submission
}


    