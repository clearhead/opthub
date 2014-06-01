try {

	(function(){

		var experiment596651247 = {};

		experiment596651247.timeout = setInterval(function(){ experiment596651247.optieCallout(); }, 1000);

		experiment596651247.optieCallout = function(){

			if( jQuery('div.loser, div.winner').length > 0 ){

				if( jQuery('#optie-callout').length === 0 ){

					jQuery('div.goal:first').before('<p id="optie-callout" class="alert-positive new-item" style="margin-bottom: 34px">Congratulations! One or more of your goals has reached statistical significance. You should share these results with the <a href="http://community.optimizely.com/t5/Testing-Ideas-Successes/bd-p/testing-stories" target="_blank" id="optie-link">Optiverse community</a>!</p>');

				} else if( jQuery('#optie-callout').hasClass('hidden') ) {

					jQuery('#optie-callout').addClass('new-item').removeClass('hidden');

				}

			} else {

				jQuery('#optie-callout').removeClass('new-item').addClass('hidden');

			}

		};

		jQuery(document).ready(function(){

			experiment596651247.optieCallout();

		});

	})();

} catch(error){

	if(typeof console === 'object'){

		console.log('Variation code for experiment 596651247 has a JavaScript error: ' + error);

	}

}