try {

	(function(){

		var experiment604140159 = {};

		experiment604140159.timeout = setInterval(function(){ experiment604140159.iOSCallout(); }, 1000);

		experiment604140159.iOSCallout = function(){

			if( jQuery('#ios-callout').length === 0 ){
        
        jQuery('div#content').animate({'top' : '75px'});

				jQuery('div#top').after('<div id="callout-container" style="background: url(/static/img/noise.png) repeat; 75px; top:0px; position: absolute; width:100%;"><div id="ios-callout" class="alert-positive new-item" style="margin: 10px 0px; font-size: 12px; text-align:center; top: 32px; position: relative; width: 100%;"><b>COMING SOON: Optimizely for iOS.</b> Fast, powerful, and scalable optimization for native iOS apps. <a>Learn more</a>.</div><div id="callout-close" style="position: absolute; float: right; font-size: 10px; right: 20px; bottom: -12px;">X</div></div>');

			} else if( jQuery('#ios-callout').hasClass('hidden') ) {

				jQuery('#ios-callout').addClass('new-item').removeClass('hidden');

			}

		};

		jQuery(document).ready(function(){

			experiment604140159.iOSCallout();
      $.cookie('testCookie', 'testValue');

		});

	})();

} catch(error){

	if(typeof console === 'object'){

		console.log('Variation code for experiment 604140159 has a JavaScript error: ' + error);

	}

}