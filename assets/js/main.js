/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');
	
	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});


	$('.feature img').mouseover(function() {
			var src = $(this).prop('src');
			src = src.replace('.jpg', '.gif');
			$(this).attr('src', src);
		}).
		mouseout(function() {
			var src = $(this).prop('src');
			src = src.replace('.gif', '.jpg');
			$(this).attr('src', src);
		});

	var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	$('form [type=submit]').click(function() {
		return false;
		var error = '';

		if (!$('[name=name]').val().trim()) {
			error += 'Please enter your name. <br>';
		}

		if (!$('[name=email]').val().trim()) {
			error += 'Please enter your email. <br>';
		}
		else if (!regexp.test($('[name=email]').val().trim())) {
			error += 'Please enter a correct email format. <br>';
		}

		if (!$('[name=message]').val().trim()) {
			error += 'Please enter your message. <br> ';
		}

		$( "#dialog" ).dialog({
			draggable: false,
			buttons: [
			  {
				text: "OK",
				click: function() {
				  $( this ).dialog( "close" );
				}
			  }
			]
		  });
		//.dialog( "close" );
		//console.log(error);
		if (error) {
			console.log('error');
			//$('#modalBox').find('.content').html('<h3>Error</h3>'+error).modal();
			//$('#modalBox').modal();
			//$('<h3>Error</h3>'+error).appendTo('body').modal();
			$( "#dialog" ).html(error).dialog({
				title: "Error"
			});
		}
		else {
			//$('#modalBox').modal();
			//FormData.submit;
			//console.log('succes');
			$('form').find('input[type=text], input[type=email], textarea').val('');
			$( "#dialog" ).html('Message send successfully.').dialog({
				title: "Successful"
			});
			
		}

		
	});

})(jQuery);