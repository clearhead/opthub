$("html").delegate(".section .name", "click", function(){ 
  window.optimizely.push(["activate", 947273371]);
});

var optly_interval = window.setInterval(function(){
  if (window.location.href.indexOf("project_id") > -1){
    window.optimizely.push(["activate", 947273371]);
    window.clearInterval(optly_interval);
  }
}, 50);