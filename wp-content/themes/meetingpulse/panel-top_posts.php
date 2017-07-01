<?php
	// The Query
	$plr_posts = new WP_Query( array(
		"posts_per_page" => 3,
		"post_type" => "post",
		//"meta_key" => "views",
		//"orderby" => "meta_value_num",
		"orderby" => "post_date",
		"order" => "DESC",
		"ignore_sticky_posts" => true
	) );
?>

<?php if ( $plr_posts->have_posts() ) { ?>
<!-- Blog popular articles -->
<div class="blog-cards wrap clearfix">
	<?php while ( $plr_posts->have_posts() ) { ?>
	<?php $plr_posts->the_post(); ?>
	<div class="blog-cards__box">
		<?php if ( has_post_thumbnail() ) {
			$background_src = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), "pop-card" );
			$background_src = $background_src[0];
		} ?>
		<div class="blog-cards__cover">
			<article class="blog-cards__inner">
				<header class="article-author article-author--white">
					<div class="article-author__pic">
						<?php
							$author_bio_avatar_size = apply_filters( 'theme_author_bio_avatar_size', 40 );
							echo get_avatar( get_the_author_meta( 'user_email' ), $author_bio_avatar_size );
						?>
					</div>
					<div class="article-author__name"><?php echo get_the_author(); ?></div>
					<div class="article-author__date"><time datetime="<?php echo get_the_date("Y-m-d\TH:i:s"); ?>"><?php echo get_the_date(); ?></time></div>
				</header>
				<section class="blog-cards__story">
					<?php the_title( sprintf( '<h3><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h3>' ); ?>
					<?php echo str_replace("Facebook Twitter Google+ Pinterest ", "", get_the_excerpt()); ?>
				</section>
				<footer class="article-info article-info--white">
					<a href="<?php get_permalink( get_the_ID() ) ?>" class="article-info__act article-info__act--comments">
						<svg xmlns="http://www.w3.org/2000/svg" class="article-info__icon" viewBox="0 0 15 15"><polygon points="0 0 15 0 15 11 9 11 5 15 5 11 0 11 0 0"/></svg>
						<span class="article-info__counter disqus-comment-count" data-disqus-url="<?php echo get_permalink(); ?>">0 Comments</span>
					</a>
				</footer>
			</article>
		</div>
	</div>
	<?php } ?>
</div>
<!-- // Blog popular articles -->
<?php } ?>