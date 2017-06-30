<?php get_header(); ?>

<div class="b-content__article-wraper grid-table">
	<?php while ( have_posts() ) : the_post(); ?>
	<article <?php post_class("b-content__article"); ?> id="post-<?php the_ID(); ?>">
		<section class="b-content__article__story clearfix">
			<?php
				$image_size = apply_filters( 'attachment_size', 'large' );

				echo wp_get_attachment_image( get_the_ID(), $image_size );
			?>

			<nav id="image-navigation" class="navigation image-navigation">
				<div class="nav-links">
					<div class="nav-previous"><?php previous_image_link( false, 'Previous Image' ); ?></div><div class="nav-next"><?php next_image_link( false, 'Next Image' ); ?></div>
				</div>
			</nav>

			<?php
				wp_link_pages( array(
					'before'      => '<p class="page-links text-center"><span class="page-links-title">Pages:</span>',
					'after'       => '</p>',
					'link_before' => '<span>',
					'link_after'  => '</span>',
				) );
			?>
		</section>

		<section class="b-content__article__author">
			<div class="article-author">
				<div class="article-author__pic">
					<?php
						$author_bio_avatar_size = apply_filters( 'theme_author_bio_avatar_size', 40 );
						echo get_avatar( get_the_author_meta( 'user_email' ), $author_bio_avatar_size );
					?>
				</div>
				<div class="article-author__name"><?php echo get_the_author(); ?></div>
				<div class="article-author__date"><time datetime="<?php echo get_the_date("Y-m-d\TH:i:s"); ?>"><?php echo get_the_date(); ?></time></div>
			</div>
		</section>
	</article>
	<?php endwhile; ?>

	<?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>
