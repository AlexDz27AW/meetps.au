<?php
/**
 * Template Name: Homepage Holder
 */
?>
<!DOCTYPE HTML>
<html class="no-js">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

<?php wp_head(); ?>

	<link rel="stylesheet" href="https://meet.ps/wp-content/uploads/2016/02/main3.css" />

	<meta name="google-site-verification" content="tPbciVLTs8ZHQ68a-62D_xpgH__GvIovsHH3iOi8bcU" />
	<meta name="google-site-verification" content="St56oYqdCfXLe1Sg3BpvmYc7SadHz6AGE3hXakMeCCc" />
	<meta name="google-site-verification" content="_mQlpqf0PBeZ854NdbaxXD05tSXveFtHRH-tW_Nl8V4" />
<meta name="google-site-verification" content="UCZo2qduggF_QAmvT5XcrqQihUU-wFgZZWczp4tfYJY" />
<meta name="google-site-verification" content="8oWJc17BgKQK9nwGQA-803OaE8tWdXG0Q-ZEViEI6Pg" />
<script>
window['_fs_debug'] = false;
window['_fs_host'] = 'www.fullstory.com';
window['_fs_org'] = '1J9MS';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
  if (e in m && m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'); return;}
  g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
  o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
  y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
  g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
  g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
  g.clearUserCookie=function(d,i){d=n.domain;while(1){n.cookie='fs_uid=;domain='+d+
  ';path=/;expires='+new Date(0);i=d.indexOf('.');if(i<0)break;d=d.slice(i+1)}}
})(window,document,window['_fs_namespace'],'script','user');
</script>
</head>

<body>

<?php if ( have_posts() ) while ( have_posts() ) : the_post();?>
	<?php the_content();?>
<?php endwhile; ?>


	<section id="footer">
		<div class="wrap clearfix">

			<div class="left-content">
				<div class="blog-posts-block">
					<h2><a href="/blog/">Blog</a></h2>

<?php
$the_query = new WP_Query( 'posts_per_page=4' );
if ( $the_query->have_posts() ) {
?>
					<ul class="blog-posts nav">
<?php
while ($the_query -> have_posts()) : $the_query -> the_post();
?>
						<li><h3><a href="<?php the_permalink() ?>"><?php the_title(); ?></a> <time datetime="<?php the_time('Y-m-d G:i'); ?>"><?php the_time('F j, Y'); ?></time></h3></li>
<?php endwhile; ?>
					</ul>
<?php }
wp_reset_postdata();
?>
				</div>

				<div class="clearfix">
					<a href="/" class="logo desk-only">
						<img src="https://meet.ps/wp-content/uploads/2015/12/logo.png" alt="Meeting Pulse" />
					</a>

					<div class="nav-holder">

<?php wp_nav_menu( array( 'theme_location' => 'homepage-footer-menu', 'container' => false, 'items_wrap' => '<ul id="%1$s" class="navigation nav">%3$s</ul>' ) ); ?>

						<p>2013–2016 &copy; <a href="//inmomentsoftware.com" target="_blank">inMoment Software</a></p>
					</div>
				</div>
			</div>

			<div class="right-side">
				<ul class="contacts nav">
					<li>
						<div class="icon-holder"><i class="edicon edicon-phone"></i></div>
						<a href="tel:+14158706338">(415) 870 6338</a>
					</li>
					<li>
						<div class="icon-holder"><i class="edicon edicon-email"></i></div>
						<a href="mailto:info@meetingpulse.net">info@meetingpulse.net</a>
					</li>
				</ul>
				<div class="social">
					<a href="//twitter.com/inmomentco" target="_blank"><i class="edicon edicon-twitter_2"></i></a>
					<a href="//plus.google.com/u/0/b/110501359949806734544/110501359949806734544"><i class="edicon edicon-gplus" target="_blank"></i></a>
					<a href="//linkedin.com/company/inmoment" target="_blank"><i class="edicon edicon-linkedin"></i></a>
				</div>
				<div class="stripe">
					<img src="https://meet.ps/wp-content/uploads/2016/01/stripe_footer.png" alt="Powered by stripe" />
				</div>
				<div class="ssl">
					<img src="https://meet.ps/wp-content/uploads/2016/01/ssl.png" alt="SSL Secure Connection" />
				</div>

				<a href="/" class="logo resp-only">
					<img src="https://meet.ps/wp-content/uploads/2015/12/logo.png" alt="Meeting Pulse" />
				</a>
			</div>

		</div>
	</section>

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
	
	<script src="/wp-content/uploads/2015/12/scrollreveal.js"></script>
	<script src="/wp-content/uploads/2015/12/jquery.bxslider.min_.js"></script>

<!-- BEGIN JIVOSITE CODE {literal} -->
<script type='text/javascript'>
(function(){ var widget_id = 'dvxWltVEOx';
var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);})();</script>
<!-- {/literal} END JIVOSITE CODE -->


<script type="text/javascript" src="https://app.meet.ps/js/cm.js"></script>

</body>
</html>