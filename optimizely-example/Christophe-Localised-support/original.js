$('body').prepend('<div class="localized butterbar announce" style="display: block;">Optimizely will soon discontinue support for this website in your language. Will you keep using Optimizely in English?<a class="localized-btn localized-btn-yes" >Yes</a><a  class="localized-btn localized-btn-no" >No</a><a class="localized-close closer">x</a></div>');

var m = document.URL.match("project_id=([\\d]*)&")

function createCookie(name,value,days) {
    if (days) {
        var date = new Date(); 
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

$("a.localized-close").click(function() {
  createCookie("showLocalizedButterbar","false",1);
  window['optimizely'].push(["trackEvent", "localized-other", {"revenue":m[1]}]);
  $('.localized').remove();
});

$(".localized-btn-yes").click(function(){
  createCookie("showLocalizedButterbar","false",365);
  window['optimizely'].push(["trackEvent", "localized-yes", {"revenue":m[1]}]);
  $('.localized').remove();
});

$(".localized-btn-no").click(function(){
  createCookie("showLocalizedButterbar","false",365);
  window['optimizely'].push(["trackEvent", "localized-no", {"revenue":m[1]}]);
  $('.localized').remove();
});


// somehow the subscription_plan is not available at document ready so I added a timeout of 2 sec
setTimeout(function() {
  if ((typeof window.optly !== 'undefined') && (typeof window.optly.account !== 'undefined') && (typeof window.optly.account.subscription_plan !== 'undefined')) { 
    optimizely.push(['addToSegment', 'plan_type', window.optly.account.subscription_plan]);
  } else {
    optimizely.push(['addToSegment', 'plan_type', 'other']);
  }
}, 2000);