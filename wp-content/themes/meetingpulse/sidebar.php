<div class="b-content__sidebar">
	<div class="b-content__sidebar__inner">
		<?php if ( is_active_sidebar( 'sidebar' ) ) : ?>
		<div id="widget-area" class="nav">
			<?php dynamic_sidebar( 'sidebar' ); ?>
		</div>
		<?php endif; ?>
	</div>
</div>