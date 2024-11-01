// Import the validation function from a separate file
import { validationForm } from './validationForm.js';

(() => {
  const form = document.getElementById('form');
  const errors = Array.from(document.querySelectorAll('.error'));
  const nameInput = document.getElementById('name');
  const lastNameInput = document.getElementById('last-name');
  const emailInput = document.getElementById('email');
  const packageInput = document.getElementById('package');
  const subscriptionInput = document.getElementById('subscription');
  const summary = document.getElementById('summary');

  // Check if all necessary elements are present
  if (!form || !nameInput || !lastNameInput || !emailInput || !packageInput || !subscriptionInput || !summary) {
    console.error('Some elements are missing in the DOM.');
    return; // Stop script if elements are missing
  }

  // Add a submit event listener to the form
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Remove active error messages before each form submission attempt
    errors.forEach((error) => error.classList.remove('active'));

    // Capture input values
    const name = nameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const packageValue = packageInput.value;
    const isSubscribed = subscriptionInput.checked;

    // Validate form inputs
    const isValid = validationForm(name, lastName, email, packageValue, isSubscribed, errors);

    // If validation passes, show the thank-you message and update UI
    if (isValid) {
      const thanksMessage = `
        <h4 class="message">Thank you, ${name} ${lastName}, for subscribing!</h4>
        <h4 class="message">Your email ${email} is registered with our ${packageValue} package.</h4>
      `;

      // Display thank-you modal and apply background styling
      summary.innerHTML = thanksMessage;
      summary.style.display = 'block';
      const bodyBackground = document.querySelector('body');
      bodyBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Dim background
      form.style.display = 'none'; // Hide form temporarily

      // Function to remove the thank-you message and restore default styles
      const removeMessage = () => {
        summary.style.display = 'none';
        bodyBackground.style.backgroundColor = 'white'; // Reset background color
        form.style.display = 'block'; // Show form again
        document.removeEventListener('click', closeOnClick); // Remove click listener after hiding summary
      };

      // Automatically hide the message after 5 seconds
      setTimeout(closeOnClick, 5000);

      // Hide the message when clicking anywhere on the document
      document.addEventListener('click', closeOnClick);

      function closeOnClick() {
        removeMessage();
      }

      // Reset form fields after successful submission
      form.reset();
    }
  });
})();
