function handleLogin(event) {
    event.preventDefault(); 
    
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    
    if (username === "example" && password === "password") {
      alert("Login successful!");
      
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password");
    }
  }
  
  document.getElementById("login-form").addEventListener("submit", handleLogin);
  