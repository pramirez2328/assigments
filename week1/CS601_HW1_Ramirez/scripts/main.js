(() => {
  const form = document.getElementById('form');
  const responseDiv = document.getElementById('response');
  const nameInput = document.getElementById('name');
  const lastNameInput = document.getElementById('last-name');
  const emailInput = document.getElementById('email');
  const packageInput = document.getElementById('package');
  const subscriptionInput = document.getElementById('subcription');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    responseDiv.innerHTML = ''; // Clear previous response

    const name = nameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const packageValue = packageInput.value;
    const isSubscribed = subscriptionInput.checked;

    // Validation
    const isValid = validationForm(name, lastName, email, packageValue, isSubscribed);
    console.log(isValid);

    if (!isValid) {
      responseDiv.style.display = 'block';
      return;
    }

    const responseMessage = `
    <h4 class="message">Thank you, ${name} ${lastName}, for subscribing!</h4>
    <h4 class="message">Your email ${email} is registered with our ${packageValue} package.</h4>
    `;

    responseDiv.innerHTML = responseMessage;
    responseDiv.style.display = 'block';
    form.reset();
  });

  function validationForm(name, lastName, email, packageValue, isSubscribed) {
    const nameValid = /^[A-Za-z]{2,}$/.test(name);
    const lastNameValid = /^[A-Za-z]{2,}$/.test(lastName);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const packageValid = packageValue !== '';
    const subscriptionValid = isSubscribed;

    const validationResults = [nameValid, lastNameValid, emailValid, packageValid, subscriptionValid];

    const validationMessages = [
      'First Name must contain at least 2 alpha characters.',
      'Last Name must contain at least 2 alpha characters.',
      'Email is not valid.',
      'Please select a package.',
      'You must subscribe to proceed.',
    ];

    validationResults.forEach((isValid, index) => {
      if (!isValid) {
        const message = validationMessages[index];
        responseDiv.innerHTML += `<p class="error">${message}</p>`;
      }
    });

    return validationResults.every(Boolean);
  }
})();
