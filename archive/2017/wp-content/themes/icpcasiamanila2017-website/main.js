var $j = jQuery.noConflict();

// Prepare slick
  $j(function(){
  $j('#carousel').slick({
   autoplay: true,
   autoplaySpeed: 3000,
   dots: true
   });

  $j('.post h1, .post h2, .post h3, .post h4, .post h5, .post h6').addClass('sectionhead');

  // Media Query javascript
  if(document.documentElement.clientWidth < 952) {

   $j('#dates p b').removeClass('large text');

   // Make small title classes
   $j('#small_title').addClass('item ui medium header borderless');
  } else {
    $j('#small_title').removeClass('item ui medium header borderless').addClass('hidden');
    $j('#dates p b').addClass('large text');

    // Animated spiel
    $j('.spiel div h1').each(function( index ) {
      $j(this).delay(700*index).fadeIn(1400);
    });
  }

  // Toggle for sidebar
  $j('#sidebartoggle').click(function() {
   $j('.ui.sidebar').sidebar('toggle');
  });
  
  $j('.ui.sidebar .item').click(function() {
   $j('.ui.sidebar').sidebar('toggle');
  });

  // Move to top button
  $j('.top').click(function() {
   window.scrollTo(0, 0);
  });
  
  



});