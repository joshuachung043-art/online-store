// LOGIN
function login() {
  const email = document.getElementById("loginEmail").value;

  const password = document.getElementById("loginPassword").value;

  if (email === "" || password === "") {
    alert("Please fill in all login fields.");
    return;
  }

  document.getElementById("authPage").style.display = "none";

  document.getElementById("mainWebsite").style.display = "block";
}

// REGISTER
function register() {
  const name = document.getElementById("registerName").value;

  const email = document.getElementById("registerEmail").value;

  const password = document.getElementById("registerPassword").value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill in all register fields.");
    return;
  }

  alert("Account created successfully!");

  document.getElementById("authPage").style.display = "none";

  document.getElementById("mainWebsite").style.display = "block";
}
