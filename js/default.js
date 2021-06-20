$(document).ready(function () {
  // jQuery methods go here...

  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header__background").addClass("header__background--fixed");
      $(".header__nav").addClass("header__fixed");
    } else {
      $(".header__background").removeClass("header__background--fixed");
      $(".header__nav").removeClass("header__fixed");
    }
  });

  /* window resize ----*/
  $(window).resize(function () {
    /* Show / hide menu and language icon when resize */
    if ($(window).width() >= 1024) {
      $(".language__inner").show();
      $("#language__active").hide();
      $(".header .menu").show();
    } else {
      $(".language__inner").hide();
      $("#language__active").show();
      $(".header .menu").hide();
    }
    /* Show / hide branding ---- for user who usually resize browers or screen */
    if ($(window).width() >= 768) {
      $(".branding__item:not(:first-child)").show();
      $(".branding__item:first-child").hide();
    } else {
      $(".branding__item:not(:first-child)").hide();
      $(".branding__item:first-child").show();
    }
    if ($(window).width() < 320) {
       $("#language__active").hide();
       /* Hide language with small phone ---- */
    }

    $("#header__toogle").removeClass("fixed");
    $("#header__toogle").text("MENU");
    $(".language").removeClass("language__fixed--left");
    $(".language").removeClass("language__fixed--under");
  });

  /*language -------*/
  $('input[name="language"]').click(function () {
    let language_value = $(this).next();   
    $("#language__active").text(language_value.text());
    if ($(window).width() < 992) {
      $(".language__inner").slideToggle(500);
    }
  });
  $("#language__active").click(function () {
    let language_value = $("#language__active").text();

    $(".language__inner").slideToggle(500);
  });
  /*toogle nav - hide / show menu -------*/
  $("#header__toogle").click(function () {
    $(".header .menu").toggle({ direction: "right" }, 1000);
    $(this).toggleClass("fixed");
    if ($(this).text() == "MENU") {
      $(this).text("CLOSE");
    } else {
      $(this).text("MENU");
    }
    $(".language").toggleClass("language__fixed--left");
    if ($(window).width() < 320) {
      $(".language").removeClass("language__fixed--left");
      $(".language").toggleClass("language__fixed--under");
      $("#language__active").toggle();
    }
  });

  /*.branding  -------*/
  $(".branding__item:first-child").click(function () {
    $(".branding__item:not(:first-child)").slideToggle();
  });
  $(".branding__item:not(:first-child)").click(function () {
    $(".branding__item:first-child").text($(this).text());
    $(".branding__item:not(:first-child)").removeClass("active");
    $(this).toggleClass("active");
    if ($(window).width() < 768) {
      $(".branding__item:not(:first-child)").slideToggle();
    }
  });

  /*Slider in LATEST WORKS*/
  $(".slider__dot--right").click(function () {
    let scroll = $(".slider__item").width() + 20;
    let position = $(".slider__list").scrollLeft();
    $(".slider__list").animate(
      { scrollLeft: position + scroll },
      500,
      "linear"
    );
  });
  $(".slider__dot--left").click(function () {
    let scroll = $(".slider__item").width() + 20;
    let position = $(".slider__list").scrollLeft();
    $(".slider__list").animate(
      { scrollLeft: position - scroll },
      500,
      "linear"
    );
  });
  /*End Slider in LATEST WORKS*/
});
