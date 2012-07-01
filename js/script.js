// remap jQuery to $
(function($) {

})(this.jQuery);

// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function() {
	log.history = log.history || []; // store logs to an array for reference
	log.history.push(arguments);
	if (this.console) {
		console.log(Array.prototype.slice.call(arguments));
	}
};

// catch all document.write() calls
(function(doc) {
	var write = doc.write;
	doc.write = function(q) {
		log('document.write(): ', arguments);
		if (/docwriteregexwhitelist/.test(q))
			write.apply(doc, arguments);
	};
})(document);

// wymeditor
jQuery(function() {
	jQuery('.wymeditor').wymeditor();
});

/*******************************************************************************
 * /* fix footer to bottom and smoke above it /
 ******************************************************************************/

$(function() {
	$(window).resize(function() {
		placeFooter();
		centerCloud();
	});
	placeFooter();
	centerCloud();
	// hide it before it's positioned
	$('#fixedbase').css('display', 'inline');
});

function placeFooter() {
	var windHeight = $(window).height();
	var footerHeight = $('#fixedbase').height();
	var offset = parseInt(windHeight) - parseInt(footerHeight);
	var smokeoffset = parseInt(offset) - parseInt(footerHeight) + 440;
	$('#fixedbase').css('top', offset);
	$('#fixedsmoke').css('top', smokeoffset);
}

function centerCloud() {
	var windWidth = $(window).width();
	var cloudWidth = $('#cloudpopup').width();
	var widthoffset = (parseInt(windWidth) / 2) - (parseInt(cloudWidth) / 2);
	$('#cloudpopup').css('left', widthoffset);

}

/*******************************************************************************
 * /* Cloud Popup and hover functions /
 ******************************************************************************/

function CloudpopUp() {

	if ($('#cloudpopup').is(":visible")) {
		$('#cloudpopup').stop(true, true).fadeOut();
	} 

		$('#cloudpopup').stop(true, true).fadeIn();
	
}

function hideCloudpopUp() {
	$('#cloudpopup').stop().fadeOut();

}

function hoverMenu(menu, cloud) {

	$(menu).hover(function() {
		$(cloud).stop(true, true).fadeIn();
	}, function() {
		$(cloud).stop(true, true).fadeOut();
	});

}

$(document).ready(function() {

	/***************************************************************************
	 * /* handle Cloud Popup /
	 **************************************************************************/
	var mouse_is_inside;

	$('#cloudpopup').hover(function() {
		mouse_is_inside = true;
	}, function() {
		mouse_is_inside = false;
	});

	$("body").mouseup(function() {

		if ($('#cloudpopup').is(":visible")) {

			if (!mouse_is_inside) {
				hideCloudpopUp()
			}
		} else {

		}

	});

	/***************************************************************************
	 * /* handle Menu Hover /
	 **************************************************************************/
	hoverMenu('#home-menu', '#home-cloud');
	hoverMenu('#about-menu', '#about-cloud');

	hoverMenu('#what-menu', '#what-cloud');

	hoverMenu('#portfolio-menu', '#portfolio-cloud');

	$('#about-menu').click(CloudpopUp);

	$('#what-menu').click(CloudpopUp);

});
