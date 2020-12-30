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

// Challenge 7 - Gallery
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

// Challenge 8 - Upload
ch008Done = false;
$('#ch008_inputfile').change(function (){
    ch008FileName = $(this)[0].files[0].name;
    $('#ch008_filename').fadeIn();
    if (ch008FileName.length > 14) {
        ch008FileName = ch008FileName.slice(0,13) + "..."
    }
	$('#ch008_filename').html(ch008FileName);
	$('#ch008_drop').hide();
});

$('#ch008_button').bind('click', function() {
    ch008Upload();
});

function ch008Upload() {
    if (ch008FileName != "") {
        $('#ch008_content label').hide();
        $('#ch008_button').html("Uploading...");
        $('#ch008_button').css('cursor', 'default');
        $('#ch008_filename').fadeOut();
        $('#ch008_load').show();
        $('#ch008_load').addClass('active');
        $('#ch008_progress').addClass('active');
        ch008Timeout = window.setTimeout(ch008Over, 3000);
    }

    if (ch008Done === true) {
        ch008Done = false;
        $('#ch008_button').html("Upload file");
        $('#ch008_content label').show();
        $('#ch008_drop').show();
        $('#ch008_done').removeClass('active');
        $('#ch008_progress').removeClass('active');
    }
}
function ch008Over() {
    ch008Done = true;
    ch008FileName = "";
    $('#ch008_button').html("Done");
    $('#ch008_button').css('cursor', 'pointer');
    $('#ch008_load').hide();
    $('#ch008_load').removeClass('active');
    $('#ch008_done').addClass('active');
}