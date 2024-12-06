document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const popup = document.querySelector(".app__popup");
  const overlay = document.querySelector(".overlay");
  const closePopup = document.querySelector("#close-popup");
  const contentItems = document.querySelectorAll(".app__content-item");
  const formPopup = document.querySelector("#popup-form");

  // handle open/close question
  if (contentItems) {
    contentItems.forEach((item) => {
      const heading = item.querySelector(".content-item-heading");

      heading.addEventListener("click", () => {
        contentItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active");
          }
        });

        item.classList.toggle("active");
      });
    });
  }

  // handle display popup with cookie when view page
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) {
        return value;
      }
    }
    return null;
  }

  if (getCookie("popupDisplayed") !== "true") {
    popup.style.visibility = "visible";
    overlay.style.display = "block";
  } else {
    popup.style.visibility = "hidden";
    overlay.style.display = "none";
  }

  // handle close popup
  function handleClosePopup() {
    popup.style.visibility = "hidden";
    overlay.style.display = "none";
    setCookie("popupDisplayed", "true", 7);
  }

  // eventListener
  overlay.addEventListener("click", function () {
    handleClosePopup();
  });

  closePopup.addEventListener("click", function () {
    handleClosePopup();
  });

  // handle submit form
  formPopup.addEventListener("submit", function (event) {
    alert(`Email: ${event.target[0].value}`);
    handleClosePopup();
  });
});
