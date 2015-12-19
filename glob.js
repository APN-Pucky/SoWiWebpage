function init() {
	initSticky();
	initNavElem();
}

function initNavElem() {
	$('.navelem').click(function() {
		$('#ifrm').attr('src',$(this).attr('ref'));
		resizeIframe();
	});
}
function initSticky() {
	$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','2').css('z-index','500').removeClass('original').hide();

	scrollIntervalID = setInterval(stickIt, 10);
}

function stickIt() {
  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

<<<<<<< HEAD:glob.js
  if ($(window).scrollTop() >= (orgElementTop)) {
=======
  if ($(window).scrollTop() >= (orgElementTop) - 2) {
    // scrolled past the original position; now only show the cloned, sticky element.
>>>>>>> 1f2f7329a9f72004cb68ee5a2dda09305963e989:stickyMenu.js

    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}

function resizeIframe() {
		$('#ifrm').css({'height':1+'px'});
		$('#ifrm').css({'height': (document.getElementById('ifrm').contentWindow.document.body.scrollHeight+10) + 'px'});
}



init();
