window.addEventListener("scroll", () => {
  var scroll = Math.floor(window.scrollY);

  if (scroll > 0) {
    document.querySelector("header").style.backgroundColor = "#D9D9D9";
    document.querySelector("header").style.height = "10vh";
    document.querySelector(".cattyHeader").style.width = "35px";
    document.querySelector(".side_header").style.top = "10vh";
    document.querySelector(".side_header").style.height = "90vh";
  } else {
    document.querySelector("header").style.backgroundColor = "transparent";
    document.querySelector("header").style.height = "15vh";
    document.querySelector(".cattyHeader").style.width = "50px";
    document.querySelector(".side_header").style.top = "15vh";
    document.querySelector(".side_header").style.height = "85vh";
  }
});

document.querySelectorAll(".btn-login")[0].addEventListener("click", () => {
  document.querySelector(".login").classList.add("visibility");
});

document.querySelectorAll(".btn-login")[1].addEventListener("click", () => {
  document.querySelector(".login").classList.add("visibility");
});

document.querySelector(".login-arrowBack").addEventListener("click", () => {
  document.querySelector(".login").classList.remove("visibility");
});

document.querySelector(".btn-signUp").addEventListener("click", () => {
  document.querySelector(".signup").classList.add("visibility");
});

document.querySelector(".signup-arrowBack").addEventListener("click", () => {
  document.querySelector(".signup").classList.remove("visibility");
});

function validate_login() {
  var name = document.form_login.username.value;
  var password = document.form_login.password.value;
  var account = [
    ["jerome", "james"],
    ["123", "456"],
  ];

  if (name == "") {
    document.form_login.username.focus();
    return false;
  } else if (password == "") {
    document.form_login.password.focus();
    return false;
  } else {
    if (name.includes(account[0][0]) && password.includes(account[1][0])) {
      alert("Login Successfully!");
      return true;
    } else if (
      name.includes(account[0][1]) &&
      password.includes(account[1][1])
    ) {
      alert("Login Successfully!");
      return true;
    } else {
      alert("Account does not Exist, Please try again.");
      return false;
    }
  }
}

document.querySelector(".menu_image").addEventListener("click", () => {
  document
    .querySelector(".side_header")
    .classList.toggle("side_header_visible");
});

for (
  var i = 0;
  i < Math.floor(document.querySelectorAll("section").length);
  i++
) {
  document
    .querySelectorAll("section")
    [i].addEventListener("click", function () {
      document
        .querySelector(".side_header")
        .classList.toggle("side_header_visible");
    });
}
