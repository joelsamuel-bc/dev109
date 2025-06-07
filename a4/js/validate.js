

function validateForm() {
  let valid = true;
  let errorMessages = "";
  let firstErrorField = null;

  document.querySelectorAll(".error").forEach(el => el.innerHTML = "");
  document.getElementById("errorMessages").innerHTML = "";

  const alpha = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  const phoneRegex = /^[0-9\-]+$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{1,7}$/;

  function setError(id, message) {
    document.getElementById(id + "Error").innerHTML = message;
    if (!firstErrorField) firstErrorField = document.getElementById(id);
    valid = false;
  }

  let firstname = document.getElementById("firstname").value.trim();
  if (!firstname || !alpha.test(firstname) || firstname.length > 20) {
    setError("firstname", "First name is required, max 20 chars, letters only.");
    errorMessages += "<p>First name is invalid.</p>";
  }

  let lastname = document.getElementById("lastname").value.trim();
  if (!lastname || !alpha.test(lastname) || lastname.length > 20) {
    setError("lastname", "Last name is required, max 20 chars, letters only.");
    errorMessages += "<p>Last name is invalid.</p>";
  }

  let email = document.getElementById("email").value.trim();
  if (!email || !emailRegex.test(email)) {
    setError("email", "Enter a valid email.");
    errorMessages += "<p>Email is invalid.</p>";
  }

  let phone = document.getElementById("phone").value.trim();
  if (!phone || !phoneRegex.test(phone) || phone.length > 15) {
    setError("phone", "Phone must be numeric, up to 15 digits.");
    errorMessages += "<p>Phone number is invalid.</p>";
  }

  let username = document.getElementById("username").value.trim();
  if (!username || username.length > 12) {
    setError("username", "Username is required, max 12 characters.");
    errorMessages += "<p>Username is invalid.</p>";
  }

  let password = document.getElementById("password").value.trim();
  if (!password || !passRegex.test(password)) {
    setError("password", "Password must be max 7 chars, with upper, lower, number & special.");
    errorMessages += "<p>Password is invalid.</p>";
  }

  let address = document.getElementById("address").value.trim();
  if (!address) {
    setError("address", "Address is required.");
  }

  let city = document.getElementById("city").value.trim();
  if (!city) {
    setError("city", "City is required.");
  }

  let state = document.getElementById("state").value;
  if (!state) {
    setError("state", "State is required.");
  }

  let country = document.getElementById("country").value;
  if (!country) {
    setError("country", "Country is required.");
  }

  let zipcode = document.getElementById("zipcode").value.trim();
  if (country === "USA" && (!/^\d{5}$/.test(zipcode))) {
    setError("zipcode", "Zip code required (5 digits) if USA.");
  }

  document.getElementById("errorMessages").innerHTML = errorMessages;

  if (firstErrorField) firstErrorField.focus();
  return valid;
}
