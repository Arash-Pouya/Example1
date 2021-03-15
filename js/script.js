$(document).ready(function () {
  $(".sidebar-menu").mouseenter(function () {
    $(this).children(".expand").addClass("turn");
  });

  $(".sidebar-menu").mouseleave(function () {
    if ($(this).hasClass("open")) {
    } else {
      $(this).children(".expand").removeClass("turn");
    }
  });

  $(".sidebar-menu").click(function () {
    var $this = $(this);
    if ($this.hasClass("open")) {
      $(".sidebar-menu").removeClass("open");
      $(".sub-menu").stop(true).slideUp("fast");
      $(".expand").removeClass("turn");
      $this.removeClass("open");
      $this.children(".expand").removeClass("turn");
      $this.next().stop(true).slideUp("fast");
    } else {
      $(".sidebar-menu").removeClass("open");
      $(".sub-menu").stop(true).slideUp("fast");
      $(".expand").removeClass("turn");

      $this.addClass("open");
      $this.children(".expand").addClass("turn");
      $this.next().stop(true).slideDown("fast");
    }
  });
});
///////////////////////page scoll//////////////
$(function () {
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$("body").scrollspy({
  target: ".navbar-fixed-top",
});

// Closes the Responsive Menu on Menu Item Click
$(".navbar-collapse ul li a").click(function () {
  $(".navbar-toggle:visible").click();
});
