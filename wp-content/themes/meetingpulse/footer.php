		</main>

<?php get_template_part( 'panel', 'top_posts' ); ?>
<?php get_template_part( 'panel', 'subscribe' ); ?>

<?php
	$footer_menuParameters = array(
		'theme_location'  => 'footer',
		'container'       => false,
		'echo'            => false,
		'items_wrap'      => '%3$s',
		'depth'           => 0,
	);

	$footer_menu = strip_tags(wp_nav_menu( $footer_menuParameters ), '<a>' );
?>

		<!-- Footer -->
		<div class="b-footer">
			<div class="b-footer__top-line">
				<div class="wrap">
					<div class="grid-table grid-table--middle">
						<nav class="b-footer__top-line__nav b-footer__nav"><?php echo $footer_menu ?></nav>

						<div class="b-footer__about">
							<p><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo.png" srcset="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo.png 1x, <?php echo esc_url( get_template_directory_uri() ); ?>/images/logo@2x.png 2x" alt="<?php bloginfo( 'name' ); ?>" /></a></p>
							<p>An easy-to-use solution for your meetings with live audience Q&amp;A, polls, feedback, surveys and more.</p>
						</div>

						<div class="b-footer__contacts">
							<p><a href="tel:+4158706338"><i class="sprite-icon sprite-icon-phone" aria-hidden="true"></i> (415) 870 6338</a></p>
							<p><a href="mailto:info@meetingpulse.net"><i class="sprite-icon sprite-icon-email" aria-hidden="true"></i> info@meetingpulse.net</a></p>

							<div class="b-footer__social">
								<a href="https://twitter.com/inmomentco" target="_blank" aria-label="Twitter"><i class="sprite-icon sprite-social-twitter" aria-hidden="true"></i></a>
								<a href="https://www.facebook.com/MeetingPulse-595373143885894/" target="_blank" aria-label="Facebook"><i class="sprite-icon sprite-social-facebook" aria-hidden="true"></i></a>
								<a href="https://plus.google.com/u/0/b/110501359949806734544/110501359949806734544" aria-label="Google Plus"><i class="sprite-icon sprite-social-google" target="_blank" aria-hidden="true"></i></a>
								<a href="https://linkedin.com/company/inmoment" target="_blank" aria-label="Linkedin"><i class="sprite-icon sprite-social-linkedin" aria-hidden="true"></i></a>
							</div>
						</div>

						<div class="b-footer__grid-delimiter"></div>

						<div class="b-footer__payments">
							<i class="sprite-icon sprite-payments" aria-hidden="true"></i>
						</div>

						<div class="b-footer__safety">
							<p><i class="sprite-icon sprite-stripe" aria-label="Powered by Stripe"></i></p>
							<p><i class="sprite-icon sprite-ssl" aria-label="SSL Secure Connection"></i></p>
						</div>
					</div>
				</div>
			</div>

			<div class="b-footer__bottom-line">
				<div class="wrap">
					<div class="grid-table">
						<div class="b-footer__copy">2013–<?php echo date("Y") ?> &copy; <a href="http://inmomentsoftware.com/" target="_blank">inMoment Software</a></div>
						<nav class="b-footer__bottom-line__nav b-footer__nav"><?php echo $footer_menu ?></nav>
					</div>
				</div>
			</div>
		</div>
		<!-- // Footer -->

		<!-- MODAL -->
		<div id="subscribe-modal" class="b-modal">
			<div class="content">
				<div class="caption">Keep me posted</div>
				<form class="form" action="//meetingpulse.us3.list-manage.com/subscribe/post?u=1c901156b0bf4962b8e5bc627&amp;id=46928fc9b2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
					<div class="subcaption">Sign up for blog updates and<br />get a free ebook</div>
					<div class="form-row">
						<p>E-mail *</p>
						<input name="EMAIL" id="field-email" required type="email">
					</div>
					<div class="form-row">
						<p>First Name</p>
						<input type="text" name="FNAME" id="field-FNAME" />
					</div>
					<div class="form-row">
						<p>Last Name</p>
						<input type="text" name="LNAME" id="field-LNAME" />
					</div>
					<div class="submit-row">
						<button type="submit"  name="subscribe">Subscribe</button>
					</div>
					<input name="b_1c901156b0bf4962b8e5bc627_46928fc9b2" tabindex="-1" value="" type="hidden" />
				</form>
			</div>
			<div class="close"></div>
		</div>

<div id="enter-meeting-modal" class="b-modal b-modal--meet">
    <div class="content">
        <form action="#" method="post" class="form" id="enter-meeting_form">
            <div class="form-row">
                <p>Enter Meeting name</p>
                <input name="slug" required type="text">
            </div>
            <div class="submit-row">
                <button type="submit">Join meeting</button>
            </div>
            <div class="helper">Or simply open meet.ps/meetingname<br />in your browser</div>
        </form>
    </div>
    <div class="close"></div>
</div>
<script>
    jQuery(document).ready(function($) {
        $('#enter-meeting_form').on('submit', function(e) {
            e.preventDefault();

            var slug = $('#enter-meeting_form').find('[name="slug"]').val();
            window.location = 'https://meet.ps/' + slug;
        });
    });
</script>

		<div id="get-started-modal" class="b-modal">
			<div class="content">
				<div class="caption">Get Started with MeetingPulse</div>
				<form action="#" method="post" class="form" id="contact_form">
					<div class="subcaption">Claim Your Free 2-week Trial</div>
					<div class="form-row">
						<p>Business E-mail *</p>
						<input type="email" name="email" required />
					</div>
					<div class="form-row">
						<p>Name *</p>
						<input type="text" name="name" required />
					</div>
					<div class="form-row">
						<p>Phone *</p>
						<input style="padding-left:50px;" type="text" id="phone" name="phone" required />
					</div>
					<div class="submit-row">
						<button type="submit">Request Trial</button>
					</div>
				</form>
			</div>
			<div class="close"></div>
		</div>
		<!-- // MODAL END -->

<?php wp_footer(); ?>

		<script src="//use.typekit.net/stf3ybl.js"></script>
		<script>try{Typekit.load();}catch(e){}</script>

		<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/scrollreveal.js"></script>
		<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/jquery.bxslider.min_.js"></script>

<?php if (!is_page( 7638 )) :  ?> 
		<!-- BEGIN JIVOSITE CODE -->

		<script type='text/javascript'>
		(function(){ var widget_id = 'dvxWltVEOx';
		var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);})();</script>
		<!-- END JIVOSITE CODE -->

<?php endif; ?>

<link rel="stylesheet" href="/wp-includes/intl-tel-input/build/css/intlTelInput.css" />
<style>
.intl-tel-input .country-list .flag-box,
.intl-tel-input .country-list .country-name {
    color: #444;
}
</style>
<script src="/wp-includes/intl-tel-input/build/js/intlTelInput.js"></script>
<script>
	jQuery(document).ready(function($) {
		$("#phone").intlTelInput();
	});
</script>

<script type='text/javascript'>
jQuery(document).ready(function($) {
$('.i-header').find('a[href*="/pages/get-started"]').addClass('js-modal').data('target', '#get-started-modal');
});
</script>

	</body>
</html>