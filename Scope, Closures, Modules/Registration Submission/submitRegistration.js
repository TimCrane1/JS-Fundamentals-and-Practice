function submitRegistration() {
  var emailAddressInput = document.getElementById('email').value;
  var fullNameInput = document.getElementById('fullname').value;
  var phoneInput = document.getElementById('phone').value;

  if (email(emailAddressInput) && fullName(fullNameInput) && phone(phoneInput)) {
    makeAjaxCall(emailAddressInput, fullNameInput, phoneInput);
  } 

  function email(address) {
  if (address.length < 5 || address.length > 100 || !address.includes("@")) {
    alert("Your email address must be between 5 and 100 characters in length and must contain one '@' symbol");
    location.reload();
    return false;
  }
  return true;
  }

  function fullName(name) {
    if (name.length < 4) {
      alert("Your name must be more than 3 letters");
      location.reload();
      return false
    }
    return true;
  }

  function phone(num) {
    if (!/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g) {
      alert("Enter a 10 digit number");
      location.reload();
      return false;
    }
    return true;
  }

  function makeAjaxCall(e, n, p) {
    for (var i = 0; i < arguments.length; i++) {
      displayMessage(arguments[i]);
    }
    
    function displayMessage(val){
      var para = document.createElement("p");
      var node = document.createTextNode(val);
      para.appendChild(node);

      var element = document.getElementById("message");
      element.appendChild(para);
    }
  }
}





