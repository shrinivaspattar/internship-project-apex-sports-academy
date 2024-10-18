document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
  
        try {
          const response = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone, password })
          });
          const data = await response.json();
          if (response.ok) {
            alert('Sign up successful!');
            window.location.href = 'index.html';  // Redirect to homepage
          } else {
            alert('Error: ' + data.error);
          }
        } catch (error) {
          alert('Error: ' + error.message);
        }
      });
    }
  
    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
      signinForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        try {
          const response = await fetch('http://localhost:5000/api/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
          });
          const data = await response.json();
          if (response.ok) {
            alert('Sign in successful!');
            window.location.href = 'index.html';  // Redirect to homepage
          } else {
            alert('Error: ' + data.error);
          }
        } catch (error) {
          alert('Error: ' + error.message);
        }
      });
    }
  });
  