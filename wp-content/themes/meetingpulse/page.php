<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>

			<div class="b-content__article-wraper grid-table">
				<article <?php post_class("b-content__article"); ?> id="post-<?php the_ID(); ?>">
					<section class="b-content__article__story clearfix">
						<?php the_content(); ?>

						<?php
							wp_link_pages( array(
								'before'      => '<p class="page-links text-center"><span class="page-links-title">Pages:</span>',
								'after'       => '</p>',
								'link_before' => '<span>',
								'link_after'  => '</span>',
							) );
						?>
					</section>
				</article>
			</div>

<?php endwhile; ?>

<?php get_footer(); ?>
