   
   
   function handleFormSubmit(event) {
    event.preventDefault();

 
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const birthDate = document.getElementById("birth-date").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById("address").value;
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const region = document.getElementById("region").value;
    const postalCode = document.getElementById("postal-code").value;


    if (
      !fullName ||
      !email ||
      !phone ||
      !birthDate ||
      !address ||
      !country ||
      !city ||
      !region ||
      !postalCode
    ) {
      alert("Please fill in all fields.");
      return;
    }


    alert("You are successfully logged in!");


    document.querySelector(".form").reset();
  }

  
  