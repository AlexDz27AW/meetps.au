<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
<?php get_template_part( 'header', 'meta' ); ?>
        <link rel='stylesheet' href='<?php echo esc_url( get_template_directory_uri() ); ?>/css/app.css' />
        <script>
          window['_fs_debug'] = false;
          window['_fs_host'] = 'fullstory.com';
          window['_fs_org'] = '1J9MS';
          window['_fs_namespace'] = 'FS';
          (function(m,n,e,t,l,o,g,y){
            if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
            g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
            o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
              y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
            g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
            y="rec";g.shutdown=function(i,v){g(y,!1)};g.restart=function(i,v){g(y,!0)};
            g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
            g.clearUserCookie=function(){};
          })(window,document,window['_fs_namespace'],'script','user');
        </script>
	</head>
	<body <?php body_class(); ?>>
		<!-- Header -->
			<?php if ( is_search() || is_category() || is_archive() || (is_home() && ! is_front_page())) { ?>
                <?php get_template_part( 'header', 'inner' ); ?>
<!--			<div class="b-header__inner">-->
<!--				<div class="wrap">-->
<!--					--><?php //get_template_part( 'header', 'inner' ); ?>
<!---->
<!--					<div class="b-header__story grid-table">-->
<!--						<div class="b-header__story__content">-->
<!--							--><?php //if ( is_search() ) { ?>
<!--							<h1>--><?php //printf( 'Search Results for:<br /><span class="text-green">%s</span>', get_search_query() ); ?><!--</h1>-->
<!--							--><?php //} elseif ( is_category() ) { ?>
<!--							--><?php
//								the_archive_title( '<h1>', '</h1>' );
//								the_archive_description( '<p>', '</p>' );
//							?>
<!--							--><?php //} elseif ( is_home() && ! is_front_page() ) { ?>
<!--							<h1 class="text-brush">--><?php //single_post_title(); ?><!--</h1>-->
<!--							<p>All things important to know about<br />engaging and productive meetings</p>-->
<!--							--><?php //} else { ?>
<!--							<h1 class="text-brush">The Agenda</h1>-->
<!--							<p>All things important to know about<br />engaging and productive meetings</p>-->
<!--							--><?php //} ?>
<!--						</div>-->
<!--						<div class="b-header__story__sidebar b-header__subscribe">-->
<!--							<a href="#" class="b-header__subscribe__btn js-modal" data-target="#subscribe-modal"><i class="sprite-icon sprite-icon-plus"></i> Keep me posted</a>-->
<!--							<p>Sign up for blog updates and<br />get a free ebook</p>-->
<!--						</div>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->



			<?php } else { ?>


					<?php get_template_part( 'header', 'inner' ); ?>


			<?php } ?>
		<!-- // Header -->

		<main class="b-content wrap">

		<?php if ( ! is_single() && ! is_page() ) { ?>
		<?php get_template_part( 'panel', 'categories' ); ?>
		<?php } ?>