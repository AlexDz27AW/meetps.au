<!DOCTYPE HTML>
<html class="no-js">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

<?php wp_head(); ?>

	<link rel="stylesheet" href="/wp-content/uploads/2015/12/main1.css" />

	<meta name="google-site-verification" content="tPbciVLTs8ZHQ68a-62D_xpgH__GvIovsHH3iOi8bcU" />
	<meta name="google-site-verification" content="St56oYqdCfXLe1Sg3BpvmYc7SadHz6AGE3hXakMeCCc" />
	<meta name="google-site-verification" content="_mQlpqf0PBeZ854NdbaxXD05tSXveFtHRH-tW_Nl8V4" />
</head>

<body>

<?php if ( have_posts() ) while ( have_posts() ) : the_post();?>
	<?php the_content();?>
<?php endwhile; ?>

<?php
global $mk_options;

	do_action( 'side_dashboard');

	if($mk_options['analytics']){
		?>
		<script type="text/javascript">
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', '<?php echo stripslashes($mk_options['analytics']); ?>']);
		  _gaq.push(['_trackPageview']);

		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();

		</script>
	<?php } ?>

	<?php 
		if ($mk_options['go_to_top'] != 'false') {
			echo '<a href="#" class="mk-go-top"><i class="mk-icon-chevron-up"></i></a>';
		}
	?>
	
	<?php
		do_action('quick_contact');
		do_action('full_screen_search_form');
	?>


	<!-- Apply custom styles before runing other javascripts as they 
	might be based on those styles as well -->
	<?php
		global $app_dynamic_styles;
		global $app_modules;

		$app_dynamic_styles_ids = array();
		$app_dynamic_styles_inject = '';

		$ken_styles_length = count($app_dynamic_styles);

		if ($ken_styles_length > 0) {
			foreach ($app_dynamic_styles as $key => $val) { 
				$app_dynamic_styles_ids[] = $val["id"]; 
				$app_dynamic_styles_inject .= $val["inject"];
			};
		}

		$modulesLength = count($app_modules);


		if ($modulesLength > 0) {
			foreach ($app_modules as $key => $val) { 
				$modules[] = $val["name"]; 
				$params[] = $val["params"];
			};
		}

	?>
	<script type="text/javascript">
		var dynamic_styles = '<?php echo mk_clean_init_styles($app_dynamic_styles_inject); ?>';
		var dynamic_styles_ids = (<?php echo json_encode($app_dynamic_styles_ids); ?> != null) ? <?php echo json_encode($app_dynamic_styles_ids); ?> : [];

		var styleTag = document.createElement('style'),
			head = document.getElementsByTagName('head')[0];

		styleTag.type = 'text/css';
		styleTag.setAttribute('data-ajax', '');
		styleTag.innerHTML = dynamic_styles;
		head.appendChild(styleTag);
	</script>
	<!-- Custom styles applied -->

	<?php wp_footer(); ?>

	<script src="//use.typekit.net/stf3ybl.js"></script>
	<script>try{Typekit.load();}catch(e){}</script>	

</body>
</html>