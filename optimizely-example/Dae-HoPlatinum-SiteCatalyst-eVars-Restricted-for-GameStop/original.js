/* _optimizely_evaluate=force */
//Restricts selectable eVar and prop vars to only 37 for GameStop, created by Dae-Ho
window.optlyGSInterval = setInterval(function() {
  if ($("#sc_evar_select > option").length > 0 && $("#sc_prop_select > option").length > 0) {
	  $("#sc_evar_select > option").each(function () {
		  if ($(this).attr("value") != 37) {
			  $(this).remove();
		  }
	  });
    
    $("#sc_prop_select > option").each(function () {
		  if ($(this).attr("value") != 37) {
			  $(this).remove();
		  }
	  });

	  clearInterval(window.optlyGSInterval);
  }
}, 50);
/* _optimizely_evaluate=safe */