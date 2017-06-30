<?php get_header(); ?>

	<?php if ( have_posts() ) : ?>

		<?php while ( have_posts() ) : the_post();

			get_template_part( 'content', 'preview' );

		endwhile;

		the_posts_pagination( array(
			'prev_next'          => true,
			'prev_text'          => 'Previous',
			'next_text'          => 'Next'
		) );

	else :
		get_template_part( 'content', 'none' );
	endif; ?>

<?php get_footer(); ?>