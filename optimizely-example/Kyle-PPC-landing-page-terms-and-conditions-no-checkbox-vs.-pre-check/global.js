var krush = {};
krush.windowHeight = jQuery(window).height();
krush.headerHeight = jQuery('#header_compact').height();
krush.mainContainerHeight = krush.windowHeight - krush.headerHeight;
krush.mainContainer = jQuery('#main-container');
krush.form = jQuery('div.grid7.right');
krush.cta = jQuery('div.cta');
krush.formHeight = krush.form.height();
krush.formTopPadding = (function(){

	var topPadding;

	if(krush.windowHeight > 544){

		topPadding = (( ( (krush.windowHeight / 2) - (krush.formHeight / 2) ) - krush.headerHeight) + 'px');

		krush.mainContainer.css('height', krush.mainContainerHeight + 'px')

	} else {

		topPadding = krush.cta.css('padding-top');

	}

	return topPadding;

})();
jQuery('div.goals, div.noise, div.seo-customers, #metrics-container').hide();
krush.mainContainer.css('padding-bottom', '0').css('background-color', '#fbfbfb');
krush.cta.css({'padding': '0', 'border-bottom': '0'});
krush.form.attr('id', 'form').removeClass('right').addClass('center').css('padding-top', krush.formTopPadding);