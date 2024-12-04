document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const popup = document.querySelector(".app__popup");
  const closePopup = document.querySelector("#close-popup");
  const contentItems = document.querySelectorAll(".app__content-item");
  const formPopup = document.querySelector("#popup-form");

  // handle open/close question
  if (contentItems) {
    contentItems.forEach((item) => {
      const heading = item.querySelector(".content-item-heading");
      const icon = heading.querySelector(".content-item-heading__icon");
      heading.addEventListener("click", () => {
        contentItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active");
            const otherIcon = otherItem.querySelector(
              ".content-item-heading__icon"
            );
            if (otherIcon) {
              otherIcon.innerHTML = '<i class="fa-solid fa-plus"></i>';
            }
          }
        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
          icon.innerHTML = '<i class="fa-solid fa-minus"></i>';
        } else {
          icon.innerHTML = '<i class="fa-solid fa-plus"></i>';
        }
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
  } else {
    popup.style.visibility = "hidden";
  }

  // handle close popup

  function handleClosePopup() {
    popup.style.visibility = "hidden";
    setCookie("popupDisplayed", "true", 7);
  }

  closePopup.addEventListener("click", function () {
    handleClosePopup();
  });

  // handle submit form
  formPopup.addEventListener("submit", function (event) {
    alert(`Email: ${event.target[0].value}`);
    handleClosePopup();
  });
});
