
var $frog, $leaves, $articleImg;

$frog = $('#frog');
$leaves = $('#leaves');
$articleImg = $('#images');
var s = skrollr.init();
function scrollToDiv(div) {
 $(window).scrollTop(div.offset().top).scrollLeft(div.offset().left);
}