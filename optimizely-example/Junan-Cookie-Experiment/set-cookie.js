window.setCookie = function(c_name,value,exdays,c_domain) {
    c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
  }

$(document).ready(function() {
  window.setTimeout(function() {
      var plan = window.optly.account["subscription_plan"];
      var accountID = window.optly.account["accountId"];
      var email = window.optly.account["email"];
      if(window.optly.page.header.viewModel.isAdmin())
      {
        plan = "GAE_Admin";
      }
      var cookieName = "a5";
      var cookieValue = accountID + ';' + plan + ';' + email;
      window.setCookie(cookieName,cookieValue,730, ".optimizely.com");
  }, 3000);


});