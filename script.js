var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});

$(document).ready(function () {
  //Preloader
  $(".loader").fadeOut('slow');
  // Add scrollspy to <body>
  $("body").scrollspy({
    target: ".navbar",
    offset: 50
  });

  // Add smooth scrolling on all links inside the navbar
  $("#navbarNav a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate({
          scrollTop: $(hash).offset().top,
        },
        "slow",
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// fixed menu on scroll for desktop
$(window).scroll(function () {
  if ($(this).scrollTop() > 40) {
    $('#navbar_top').addClass("fixed-top");
    // add padding top to show content behind navbar
    $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
  } else {
    $('#navbar_top').removeClass("fixed-top");
    // remove padding top from body
    $('body').css('padding-top', '0');
  }
});
// end if



/* Counter */
var counted = 0;
$(window).scroll(function () {

  var oTop = $('#firstNum').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});