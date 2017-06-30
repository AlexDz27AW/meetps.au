				<div class="i-header grid-table grid-table--middle">
					<div class="i-header__logo">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo.png" srcset="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo.png 1x, <?php echo esc_url( get_template_directory_uri() ); ?>/images/logo@2x.png 2x" alt="<?php bloginfo( 'name' ); ?>" /></a>
					</div>
					<ul class="nav i-header__nav">
					<?php
						wp_nav_menu( array(
							'theme_location'  => 'header',
							'container'       => false,
							'items_wrap'      => '%3$s',
						) );
					?>
					</ul>
					<div class="i-header__resp-navigation">
						<ul class="nav va">
							<?php
								wp_nav_menu( array(
									'theme_location'  => 'header',
									'container'       => false,
									'items_wrap'      => '%3$s',
								) );
							?>
							<li><a href="tel:+4158706338"><i class="sprite-icon sprite-icon-phone"></i> (415) 870 6338</a></li>
							<li><a href="https://app.meet.ps/login.html">Sign in</a></li>
						</ul>
					</div>
					<div class="i-header__right-side">
<?php if( is_page(6971) ) { ?>
						<a class="i-header__link js-modal" href="#" data-target="#enter-meeting-modal">Join Meeting</a>
<?php } else { ?>
						<a class="i-header__link" href="tel:+4158706338"><i class="sprite-icon sprite-icon-phone"></i> (415) 870 6338</a>
<?php } ?>
						<a class="i-header__link i-header__link--bordered" href="https://app.meet.ps/login.html">Sign in</a>
					</div>
					<div class="i-header__hamburger js-headnav" data-target=".b-header"><i></i><i></i><i></i></div>
				</div>