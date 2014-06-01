$("#top > div > ul.nav-top.signed-in > li:nth-child(3) > a").live("mousedown",
function() {
window.optimizely.push(['trackEvent', 'click_global_nav_implementation']);
console.log("clicked global nav implementation");
});