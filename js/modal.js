var link = document.querySelector(".modal-link");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector(".form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";
      
try {
  storage = localStorage.getItem("login");
}
catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    login.value = storage;
  }

  login.focus;
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.add("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  console.log("Нужно ввести имя и почту");
  }
  if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  });

  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.add("modal-error");
    }
  }
});