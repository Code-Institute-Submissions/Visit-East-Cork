// Function to Toggle Area Cards - Inspiration taken from michellecclement's Milestone 2 Project as noted in README File
$(document).ready(function () {
  $(".invisible").hide();
});
$(".show-more-btn").click(function () {
  $(this).siblings("p").removeClass('invisible').toggle("slow");
});


$(function(){
   $(".show-more-btn").click(function () {

        if ($(this).text() === 'Show More') {
            $(this).text('Show Less');
    
        } else {
            $(this).text('Show More');
        }
    });
});