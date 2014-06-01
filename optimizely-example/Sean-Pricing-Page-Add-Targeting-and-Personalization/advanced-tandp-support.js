$('div.pricing-grids tbody tr:eq(4)').after('<tr><td>Targeting <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Target variations to visitors based on traffic source, language, cookie, browser, and more."></a></td><td>Targeting <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Target variations to visitors based on traffic source, language, cookie, browser, and more."></a></td><td>Targeting <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Target variations to visitors based on traffic source, language, cookie, browser, and more."></a></td><td>Advanced targeting <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Target variations to visitors based on advanced criteria like geography and IP address."></a></td></tr><tr> <td>Personalization <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Use targeting to deliver personalized experiences to the right audience."></a></td> <td>Personalization <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Use targeting to deliver personalized experiences to the right audience."></a></td> <td>Personalization <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Use targeting to deliver personalized experiences to the right audience."></a></td> <td>Advanced personalization <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Use advanced targeting to deliver even more personalized experiences to the right audience."></a></td> </tr>');

// success - bronze level
$('div.pricing-grids tbody tr:eq(21) td:eq(0)').html('Online support <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Massive library of online support resources at help.optimizely.com. Create online support tickets for issues specific to your account."></a>');

// success - silver level
$('div.pricing-grids tbody tr:eq(21) td:eq(1)').html('Email support <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Email our Customer Support team directly with billing or product-related questions."></a>');

// success - gold level
$('div.pricing-grids tbody tr:eq(21) td:eq(2)').html('Phone support <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Call our Customer Success team directly with billing or product-related questions."></a>');
$('div.pricing-grids tbody tr:eq(22) td:eq(2)').html('1 business day response');

// success - platinum level
$('div.pricing-grids tbody tr:eq(21)').after('<tr><td></td><td>2 business day response</td><td>Basic developer support <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Get help reviewing and troubleshooting html, css and javascript code changes."></a></td><td>Advanced developer support <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Get help reviewing and troubleshooting html, css and javascript code changes, API implementations, and integrations."></a></td>');

window.$.fn.tooltip.defaults = window.$.extend({}, window.$.fn.tooltip.defaults, {
    container: "body",
    delay: { show: 250, hide: 500 }
});

window.$("[data-toggle=tooltip]").tooltip().click(function() {
  return false;
});
var selector = ".tooltip";
window.$(document).on("mouseenter", selector, function(e) {
  var tooltip = $(this).data("tooltip");
  if (tooltip) {
    tooltip.hoverState = "in";
  }
})
.on("mouseleave", selector, function(e) {
  var tooltip = $(this).data("tooltip");
  if (tooltip) {
    tooltip.hoverState = "out";
    tooltip.$element.trigger("mouseleave");
  }
});