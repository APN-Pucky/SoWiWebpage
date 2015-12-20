var $gbifrmheight = 1000;

function init() {
	initSticky();
	initNavElem();
}

function initNavElem() {
	$('.gb').click(function() {
		$('#ifrm').attr('src',$(this).attr('ref'));
	});
	$('.navelem').click(function() {
		$('#ifrm').attr('src',$(this).attr('ref'));
	});
}
function initSticky() {
	$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','2').css('z-index','500').removeClass('original').hide();

	scrollIntervalID = setInterval(stickIt, 10);
}

function stickIt() {
  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop - 2)) {

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
		//var h = $('#ifrm').height();
		$('#ifrm').css({'height':1+'px'});
		try
		{
			$('#ifrm').css({'height': (document.getElementById('ifrm').contentWindow.document.body.scrollHeight+10) + 'px'});
		}
		catch(err)
		{
			$('#ifrm').css({'height':$gbifrmheight+'px'});
		}
}



init();
