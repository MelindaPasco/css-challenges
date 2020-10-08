// Challenge 1 - Burger menu
$('#ch001_menu').click(function() {
    $(this).toggleClass('active');
    $(this).find('div').removeClass('ch001_default');
});

// Challenge 5 - Notifications
$('#ch005_search').bind('click', function() {
    $('#ch005_input').toggleClass('active');
});

$('#ch005_menu').bind('click', function() {
    $('#ch005_box').toggleClass('visible');
    $('#ch005_sidepanel').toggleClass('active');
});