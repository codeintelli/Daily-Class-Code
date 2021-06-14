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
});
