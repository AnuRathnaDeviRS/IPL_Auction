function handleRegistration(event) {
    event.preventDefault();
    
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    
  
    fetch('https://example.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Registration failed');
    })
    .then(data => {
      alert("Registration successful!"); 
      window.location.href = "index.html"; 
    })
    .catch(error => {
      alert("Registration failed. Please try again."); 
      console.error('Error:', error);
    });
  }
  
  
  document.getElementById("register-form").addEventListener("submit", handleRegistration);
  