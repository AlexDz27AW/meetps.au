<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
<?php get_template_part( 'header', 'meta' ); ?>
	</head>
	<body <?php body_class(); ?>>
		<!-- Header -->
		<div class="b-header">
			<?php if ( is_search() || is_category() || is_archive() || (is_home() && ! is_front_page())) { ?>

			<div class="b-header__inner">
				<div class="wrap">
					<?php get_template_part( 'header', 'inner' ); ?>

					<div class="b-header__story grid-table">
						<div class="b-header__story__content">
							<?php if ( is_search() ) { ?>
							<h1><?php printf( 'Search Results for:<br /><span class="text-green">%s</span>', get_search_query() ); ?></h1>
							<?php } elseif ( is_category() ) { ?>
							<?php
								the_archive_title( '<h1>', '</h1>' );
								the_archive_description( '<p>', '</p>' );
							?>
							<?php } elseif ( is_home() && ! is_front_page() ) { ?>
							<h1 class="text-brush"><?php single_post_title(); ?></h1>
							<p>All things important to know about<br />engaging and productive meetings</p>
							<?php } else { ?>
							<h1 class="text-brush">The Agenda</h1>
							<p>All things important to know about<br />engaging and productive meetings</p>
							<?php } ?>
						</div>
						<div class="b-header__story__sidebar b-header__subscribe">
							<a href="#" class="b-header__subscribe__btn js-modal" data-target="#subscribe-modal"><i class="sprite-icon sprite-icon-plus"></i> Keep me posted</a>
							<p>Sign up for blog updates and<br />get a free ebook</p>
						</div>
					</div>
				</div>
			</div>
			<div class="b-header__cover" style="background-image: url('<?php echo header_image(); ?>');"></div>

			<?php } elseif ( is_single() || is_page() ) { ?>

			<div class="b-header__inner">
				<div class="wrap">
					<?php get_template_part( 'header', 'inner' ); ?>

					<?php while ( have_posts() ) : the_post(); ?>
					<div class="b-header__post-details">
						<h1><?php the_title(); ?></h1>
						<p>By <?php echo get_the_author(); ?> on <time datetime="<?php echo get_the_date("Y-m-d\TH:i:s"); ?>"><?php echo get_the_date(); ?></time></p>
					</div>

					<?php
					// Move post's thumbnail to header's background
					if ( has_post_thumbnail() ) {
						$background_src = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), "header" );
						$background_src = $background_src[0];

						echo '<style>.b-header__cover { background-image: url(' . $background_src . ') !important; }</style>';
					}
					?>
					<?php endwhile; ?>
				</div>
			</div>
			<div class="b-header__cover" style="background-image: url('<?php echo header_image(); ?>');"></div>

			<?php } else { ?>

			<div class="b-header__inner">
				<div class="wrap">
					<?php get_template_part( 'header', 'inner' ); ?>
				</div>
			</div>

			<?php } ?>
		</div>
		<!-- // Header -->

		<main class="b-content wrap">

		<?php if ( ! is_single() && ! is_page() ) { ?>
		<?php get_template_part( 'panel', 'categories' ); ?>
		<?php } ?>