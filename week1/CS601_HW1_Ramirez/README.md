# Interactive Web Form with JavaScript

This project is a client-side interactive web form created as part of a CS601 Web Application Development assignment. The form collects user data, validates it, and displays a summary upon successful submission. The form and validation are built using only HTML5, CSS3, and JavaScript, without any additional libraries or frameworks.

## Features

- Collects user details: First Name, Last Name, Email, Package Selection, and Subscription Confirmation.
- Validates fields on the client side using JavaScript:
  - First and Last Name must contain at least 2 alpha characters.
  - Email must follow a valid email format.
  - A package must be selected from the options provided.
  - The subscription checkbox must be checked to proceed.
- Provides real-time feedback on validation errors.
- Displays a thank-you summary if all fields are valid.
- Hides the form upon successful submission for 5 seconds.

## Requirements

1. Use only HTML5, CSS3, and JavaScript (no libraries or frameworks).
2. Follow the specified validation requirements:
   - First Name and Last Name: Minimum of 2 alphabetic characters.
   - Email: Valid email format.
   - Package Selection: Required.
   - Subscription Confirmation: Checkbox must be checked.
3. Display a thank-you message below the form on successful submission.
4. Hide the form upon submission.

## File Structure

```plaintext
project-directory/
├── assets/             # assets folder
│   └── bu-log.png
├── index.html          # Main HTML file with form structure
├── css/
│   └── main.css        # CSS file for styling the form and feedback
├── scripts/
│   ├── main.js         # Main JavaScript file handling form logic
│   └── validationForm.js # JavaScript module for form validation
└── README.md           # Project documentation
```

## Setup and Usage

1. Clone or download this repository.
2. Open `index.html` in a web browser to view and interact with the form.

### Instructions

- Enter your details in the form fields provided.
- As you type, validation will provide feedback if any fields are incomplete or invalid.
- Click the **Submit** button after completing the form. If all fields are valid, a thank-you message will appear below the form, and the form itself will be hidden.

## Code Overview

### `main.js`

This file handles the form submission and UI updates. Key functions:

- `validateField()`: Provides real-time feedback on input validation.
- `clearErrors()`: Clears error messages before re-validating.
- `submit` event listener: Validates the form on submission and displays a thank-you summary if all fields are valid.

### `validationForm.js`

This module contains the `validationForm` function, which performs the actual validation checks on each field:

- Uses regular expressions to check that names have at least two alphabetic characters.
- Validates email format.
- Ensures a package is selected.
- Checks that the subscription checkbox is checked.

## Validation and Feedback

- **Error Feedback**: Error messages appear below each field when input does not meet the validation criteria.
- **Thank-You Summary**: After successful validation, a thank-you message displays the user’s details and confirms their subscription.

## Future Improvements

Potential future features and enhancements:

- Additional accessibility improvements for screen readers.
- Enhanced error animations for better user feedback.
- Local storage of form data to prevent data loss on accidental reload.
