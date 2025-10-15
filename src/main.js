  let form = document.querySelector("form");
  let usernameInput = document.getElementById("username");
  let passwordInput = document.getElementById("password");
  let toggle = document.getElementById("togglePassword");
  let btn = document.getElementById("submit");
  let h2 = document.getElementById("welcome");
  let h1 = document.getElementById("hello");
  let errorMessage = document.getElementById("Error")
  
  let ctnr = document.getElementById("container")


  btn.addEventListener("click",()=>{
    if (usernameInput.value == "Oussama1234" && passwordInput.value == "pass@1122" ) {
      
      ctnr.style.display= "none" ;
      h1.style.display= "block" ;
      h1.innerHTML = "Salam " + usernameInput.value ;
    }
    else{
      errorMessage.style.display= "block";
    }
  } )
  
    
  // Bouton pour afficher / masquer le mot de passe
  toggle.addEventListener("click", function() {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
  });

