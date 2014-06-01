var setFreePlanInfo = function() {
  if ($($("#top div")[0]).css("display") == "none") {
    window.setTimeout(setFreePlanInfo, 1000);
    return;
  }
  
  if (window.optly.account.accountId == null || window.optly.account.subscription_plan == null) {
    $("#free-plan-promo").css("display", "block");
  } else {
    $("#free-plan-promo").css("display", "none");
    if (window.optly.account.subscription_plan == "Free Package V1") {
      $(".personalized-pricing-message").html('<div id="current_subscription_info">Your current plan is Free. Check out <a href="/dashboard">your dashboard</a>!<br /><br /></div>');
    }
  }
}

window.setTimeout(setFreePlanInfo, 1000);