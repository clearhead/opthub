$('.send-code-button').css( "display", "block");
$(".send-code-button").live("mousedown",
function() {
window.optimizely.push(['trackEvent', 'snippet_share1_click']);
console.log("clicked share link");
});
$("div#send-code-dialog input.submit").live("mousedown",
function() {
window.optimizely.push(['trackEvent', 'snippet_share2_submit']);
console.log("clicked submit email button");
});
$("#top > div > ul.nav-top.signed-in > li:nth-child(3) > a").live("mousedown",
function() {
window.optimizely.push(['trackEvent', 'click_global_nav_implementation']);
console.log("clicked global nav implementation");
});