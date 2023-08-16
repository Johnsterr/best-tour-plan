$(document).ready(function () {
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    // Keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },

    // Keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    //autoHeight
    autoHeight: {
      enabled: true,
    },
  });

  $(document).keyup(function (a) {
    if ("Escape" === a.key || 27 === a.keyCode) {
      a = $(".modal__overlay");
      var b = $(".modal__dialog");
      a.removeClass("modal__overlay--visible");
      b.removeClass("modal__dialog--visible");
    }
  });

  $(".newsletter").parallax({ imageSrc: "img/newsletter-bg.jpg", speed: 0.4 });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    // var lockBody = $("body");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    // lockBody.addClass("_lock");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  //Обработка форм
  $(".form-validate").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: { required: !0, minlength: 2 },
        email: { required: !0, email: !0 },
        phone: { minlength: 16 },
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name is at least 2 letters.",
        },
        email: {
          required: "Enter your email address ",
          email: "name@domain.com. ",
        },
        phone: "Please specify your phone",
      },
    });
  });

  $(".phone").mask("+7(999)999-99-99");

  AOS.init();
});
