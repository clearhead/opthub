var interval = setInterval(
       function() {
           if ($(".settings-menu").css('display') == "block" && window.optly.account.permissions.indexOf("edit-project") != -1) { 
             
               $(".header-buttons").css({"width":"550px"});
              $(".settings-menu").after("<div class='container'><div class='button' onclick='optimizely.$(\"#manage-collaborators-button\").click();'><span>Add Users</span></div></div>");

             
             // stop looping
             clearInterval(interval);
           }
  }, 500);