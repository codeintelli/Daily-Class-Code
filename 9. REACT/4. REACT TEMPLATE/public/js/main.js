$(document).ready(function () {
  // * NAVBAR LOGIC ON SCROLL
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });

  // *VIDEO POPUP LOGIC

  const videoSrc = $("#player-1").attr("src");
  $(".video-play-btn, .video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").hasClass("open");
      $(".video-popup").removeClass("open");
      $("#pLayer-1").attr("src", "");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == "") {
        $("#player-1").attr("src", videoSrc);
      }
    }
  });

  //* Feature Section
  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // fun fact section tilt effect
  $(".js-tilt").tilt({
    scale: 1.03,
  });

  // // * RIPPLE EFFECT
  // $("#ripple-effect").ripples({
  //   dropRadius: 20,
  //   perturbance: 0,
  // });

  //* Feature Section
  $(".screenshot-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // team section owl carousel

  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // team section owl carousel

  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // scroll it

  $.scrollIt({
    topOffset: -50,
  });

  // DARK MODE AND LIGHT MODE LOGIC
  function toggleTheme() {
    if (localStorage.getItem("code-intelli") !== null) {
      if (localStorage.getItem("code-intelli") === "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }
  $(".toogle-theme i").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("code-intelli", "dark");
    } else {
      localStorage.setItem("code-intelli", "light");
    }
    updateIcon();
  });

  toggleTheme();

  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toogle-theme i").removeClass("bx-moon");
      $(".toogle-theme i").addClass("bx-sun");
    } else {
      $(".toogle-theme i").removeClass("bx-sun");
      $(".toogle-theme i").addClass("bx-moon");
    }
  }

  // navbar-collapse
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});
