$('div.pricing-grids tbody tr:eq(4)').after('<tr><td>Targeting</td><td>Targeting</td><td>Targeting</td><td>Targeting</td></tr><tr> <td>Personalization <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Use targeting to deliver personalized experiences to the right audience."></a></td> <td>Personalization <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Use targeting to deliver personalized experiences to the right audience."></a></td> <td>Personalization <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Use targeting to deliver personalized experiences to the right audience."></a></td> <td>Personalization <a href="#" class="help-button" data-toggle="tooltip" tabindex="-1" title="" data-original-title="Use targeting to deliver personalized experiences to the right audience."></a></td> </tr>');


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