	<article id="post-<?php the_ID(); ?>" <?php post_class("article-preview grid-table grid-table--middle"); ?>>
		<figure class="article-preview__cover">
			<?php if ( has_post_thumbnail() ) : ?>
				<a href="<?php echo get_permalink(); ?>"><?php the_post_thumbnail('post-preview'); ?></a>
			<?php endif; ?>
		</figure>

		<section class="article-preview__inner">
			<?php the_title( sprintf( '<h2><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
			<?php the_excerpt(); ?>
			<footer class="article-preview__footer grid-table grid-table--middle">
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

				<div class="article-info">
					<a href="<?php echo get_permalink(); ?>#post-comments" class="article-info__act article-info__act--likes">
						<svg xmlns="http://www.w3.org/2000/svg" class="article-info__icon" viewBox="0 0 15 15"><polygon points="0 0 15 0 15 11 9 11 5 15 5 11 0 11 0 0"/></svg>
						<span class="article-info__counter disqus-comment-count" data-disqus-url="<?php echo get_permalink(); ?>">0 Comments</span>
					</a>
				</div>
			</footer>
		</section>
	</article>
