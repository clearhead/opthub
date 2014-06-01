// only run if cookie is not present
if (document.cookie.indexOf("optimizely_976702261_popup=shown") == -1) {
  var interval = setInterval(
       function() {
           if ($(".settings-menu").css('display') == "block" && window.optly.account.permissions.indexOf("edit-project") != -1) { 
             
             // pop open the collaborators tab
             setTimeout(function () {$("#manage-collaborators-button").click();
             $("#settings-dialog-container div[data-bind*='users'] h1").text("Invite your colleagues");
                                    },1000);
             // set a cookie that we've shown it
             var weekInMs = 1000 * 60 * 60 * 24 * 7; // 1 week
             var expireDate = new Date ( new Date ().getTime () + weekInMs );
             document.cookie="optimizely_976702261_popup=shown;Path=/;expires=" + expireDate.toGMTString();
             
             // stop looping
             clearInterval(interval);
           }
  }, 500);
}