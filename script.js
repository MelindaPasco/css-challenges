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

// Challenge 7 - Burger menu
$('.ch007_user').click(function() {
    let src = $(this).find("img").attr('src');
    let name = $(this).find("p").text();
    $('#ch007_portrait img').attr("src", src);
    $('#ch007_header').addClass('active');
    $('#ch007_footer').addClass('active');
    $('#ch007_footer p').text(name);
    $('#ch007_portrait').addClass('active');
});
$('#ch007_close').click(function() {
    $('#ch007_header').removeClass('active');
    $('#ch007_footer').removeClass('active');
    $('#ch007_portrait').removeClass('active');
});