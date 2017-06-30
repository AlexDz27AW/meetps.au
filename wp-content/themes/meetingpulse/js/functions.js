jQuery(document).ready(function($)
{
	$(".js-scrollto").on('click', function (e)
	{
		e.preventDefault();

		var offset = $(this).data('offset') || 0;
		var speed = $(this).data('speed') || 300;

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top + offset 
		}, speed);
	});

	$(".js-headnav").on('click', function()
	{
		$($(this).data('target')).toggleClass('open-headnav');
	});

	// onScroll effects
	// https://github.com/jlmakes/scrollreveal.js
	window.sr = ScrollReveal({
		reset   : false,
		distance: '50px',
	});

	sr.reveal('.take-audience-pic, .poll-audience-pic, .second-feature-block .aside-block, .get-started-animation, .subscribe-panel__btn');

	// "Get Started" modal
	$('#contact_form').on('submit', function(e) {
		var form = $(this);
		if (!e.isDefaultPrevented()) {
			e.preventDefault();

			var country_data = $("#phone").intlTelInput("getSelectedCountryData");
			var data = {
				action: 'mk_contact_form',
				email: form.find('input[name="email"]').val().replace("*", "@"),
				name: form.find('input[name="name"]').val(),
				phone: form.find('input[name="phone"]').val(),
				country: country_data,
				size: form.find('select[name="size"]').val(),
				frequency: form.find('select[name="frequency"]').val(),
				features: []
			};

			$("input[name='features[]']:checked").each(function ()
			{
				data.features.push( $(this).parent().find('label').text() );
			});

			sendForm = function() {
				$.post('/blog_email_endpoint.php', data, function(response) {
					form.find('input#email, input#name, input#phone').val("");
					setTimeout(function(){
						window.location.href = '/pages/get-started-thanks/';
					},1000);
				});
			}; 

			if(data.email && data.name){
				sendForm();
			}

			ga('send','event','User_Action','get_started_contact_modal_home',1);
		}
	});


	$(document).on('click', '.js-modal', function(e){
		e.preventDefault();
		var $target = $(this).data('target');

		if ($(this).hasClass('active'))
		{
			$('body').removeClass('visible-modal');
			$($target).removeClass('open');
		}
		else
		{
			$(this).hasClass('active');
			$('body').addClass('visible-modal');
			$($target).addClass('open');

			$($target).find('.close').one('click', function()
			{
				$('body').removeClass('visible-modal');
				$($target).removeClass('open');
			});
		}
	});
});
