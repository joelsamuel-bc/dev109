function validateForm() {
  let valid = true;
  let errorMessages = "";

  document.querySelectorAll(".error").forEach(el => el.innerHTML = "");
  document.getElementById("errorMessages").innerHTML = "";

  const alpha = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  const phoneRegex = /^[0-9\-]+$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{1,7}$/;


  let firstname = document.getElementById("firstname").value.trim();
  if (!firstname || !alpha.test(firstname) || firstname.length > 20) {
    document.getElementById("firstnameError").innerHTML = "First name is required, max 20 chars, letters only.";
    errorMessages += "<p>First name is invalid.</p>";
    valid = false;
  }


  let lastname = document.getElementById("lastname").value.trim();
  if (!lastname || !alpha.test(lastname) || lastname.length > 20) {
    document.getElementById("lastnameError").innerHTML = "Last name is required, max 20 chars, letters only.";
    errorMessages += "<p>Last name is invalid.</p>";
    valid = false;
  }

  let email = document.getElementById("email").value.trim();
  if (!email || !emailRegex.test(email)) {
    document.getElementById("emailError").innerHTML = "Enter a valid email.";
    errorMessages += "<p>Email is invalid.</p>";
    valid = false;
  }

  // Add phone
  let phone = document.getElementById("phone").value.trim();
  if (!phone || !phoneRegex.test(phone) || phone.length > 15) {
    document.getElementById("phoneError").innerHTML = "Phone must be numeric, up to 15 digits.";
    errorMessages += "<p>Phone number is invalid.</p>";
    valid = false;
  }

  // Username
  let username = document.getElementById("username").value.trim();
  if (!username || username.length > 12) {
    document.getElementById("usernameError").innerHTML = "Username is required, max 12 characters.";
    errorMessages += "<p>Username is invalid.</p>";
    valid = false;
  }

  let password = document.getElementById("password").value.trim();
  if (!password || !passRegex.test(password)) {
    document.getElementById("passwordError").innerHTML = "Password must be max 7 chars, with upper, lower, number & special.";
    errorMessages += "<p>Password is invalid.</p>";
    valid = false;
  }

  let address = document.getElementById("address").value.trim();
  if (!address) {
    document.getElementById("addressError").innerHTML = "Address is required.";
    valid = false;
  }

  let city = document.getElementById("city").value.trim();
  if (!city) {
    document.getElementById("cityError").innerHTML = "City is required.";
    valid = false;
  }

  let state = document.getElementById("state").value;
  if (!state) {
    document.getElementById("stateError").innerHTML = "State is required.";
    valid = false;
  }


  let country = document.getElementById("country").value;
  if (!country) {
    document.getElementById("countryError").innerHTML = "Country is required.";
    valid = false;
  }

  let zipcode = document.getElementById("zipcode").value.trim();
  if (country === "USA" && (!/^\d{5}$/.test(zipcode))) {
    document.getElementById("zipcodeError").innerHTML = "Zip code required (5 digits) if USA.";
    valid = false;
  }

  document.getElementById("errorMessages").innerHTML = errorMessages;

  return valid;
}

