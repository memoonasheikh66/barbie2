function validateForm() {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
  
    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      nameInput.focus();
      return false;
    }
  
    if (!isValidEmail(emailInput.value)) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return false;
    }
  
    
  
    return true;
  }
  
  function isValidEmail(email) {
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  function validateForm() {
    // ... The same validation code as before ...
  
    // Form is valid, proceed with form submission using AJAX.
    submitForm();
  
    return true;
  }
  
  function submitForm() {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
  
    const formData = new FormData();
    formData.append('name', nameInput.value);
    formData.append('email', emailInput.value);
  
    // Replace 'your-server-url' with the actual server endpoint to handle the form data.
    fetch('your-server-url', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Form submitted successfully!');
        // Perform any additional actions after successful form submission.
      } else {
        alert('Form submission failed. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  }
  