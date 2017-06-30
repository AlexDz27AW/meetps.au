<?php
get_header();

if ( have_posts() ) {

	// blog page
	if ( is_single() ) {
		get_template_part( 'content' );

	// catalog (category/archive/...)
	} else {

		while ( have_posts() ) : the_post();
			get_template_part( 'content', 'preview' );
		endwhile;

		the_posts_pagination( array(
			'prev_next'          => true,
			'prev_text'          => 'Previous',
			'next_text'          => 'Next'
		) );

	}

// no results
} else {
	get_template_part( 'content', 'none' );
}

get_footer();
?>
