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

					<section class="b-content__article__comments" id="post-comments">
						<?php
						if ( comments_open() ) :
							comments_template();
						endif;
						?>
					</section>
				</article>

				<?php get_sidebar(); ?>
			</div>