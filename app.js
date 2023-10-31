document.getElementById('theme-toggle').addEventListener('click', function() {
    var darkTheme = document.getElementById('dark-theme');
    var lightTheme = document.getElementById('light-theme');

    darkTheme.toggleAttribute('disabled');
    lightTheme.toggleAttribute('disabled');
});


$('.back').hide();

$('.front', '.flashcard').hover(function() {
    $(this).hide();
    $(this).siblings('.back').addClass( "animated flipInY fast" ).show();
});

$('.back', '.flashcard').mouseleave(function() {
  $(this).hide();
  $(this).siblings('.front').addClass( "animated flipInY fast" ).show();
});