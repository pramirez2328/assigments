export const validationForm = (name, lastName, email, packageValue, isSubscribed, errors) => {
  // Basic validation for each field
  const nameValid = /^[A-Za-z]{2,}$/.test(name); // Check if name has at least 2 letters
  const lastNameValid = /^[A-Za-z]{2,}$/.test(lastName); // Check if last name has at least 2 letters
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Check if email format is valid
  const packageValid = packageValue !== ''; // Check if a package is selected
  const subscriptionValid = isSubscribed; // Check if the subscription checkbox is checked

  // Array of validation results for each input
  const validationResults = [nameValid, lastNameValid, emailValid, packageValid, subscriptionValid];

  const passAllValidations = validationResults.filter((isValid) => isValid).length === validationResults.length;

  // if all validations pass, return true and stop the function
  if (passAllValidations) {
    return true;
  }

  // Apply error messages based on validation results
  validationResults.forEach((isValid, index) => {
    if (!isValid && errors[index]) {
      // Ensure there is an error element for each field
      errors[index].classList.add('active'); // Show error message
      console.log(`Error in field ${index + 1}`, errors[index]); // Log error for debugging
    }
  });
};
