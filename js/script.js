document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contacts');
  
    contactForm.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the Formspree endpoint from the action attribute
      const formAction = this.action;
  
      // Collect the form data
      const formData = new FormData(this);
  
      // Send the data to Formspree using fetch API
      fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json' // Expect JSON response
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          // Submission was successful, clear the form
          contactForm.reset();
          alert('Thank you for your message. I will get back to you soon!'); // Optional success message
        } else {
          // Handle submission errors (e.g., display error messages)
          console.error('Form submission error:', data);
          alert('Oops! There was an error submitting your form. Please try again or email me at the address below.');
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        alert('Oops! There was a network error. Please try again or email me at the address below.');
      });
    });
  });