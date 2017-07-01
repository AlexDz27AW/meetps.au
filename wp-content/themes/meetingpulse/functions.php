<?php
/**
 * Theme functions and definitions
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 810;
}


if ( ! function_exists( 'theme_steup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function theme_steup() {

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	// This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'header' => 'Header Menu',
		'footer'  => 'Footer Menu',
	) );


	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
	) );


	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 */
	add_theme_support( 'post-thumbnails' );
	// catalog images
	add_image_size( 'post-preview', 380, 300, true );
	add_image_size( 'post-preview--retina', 760, 600, true );
	// top news
	add_image_size( 'pop-card', 350, 440, true );
	// custom header background
	add_image_size( 'header', 1600, 600, true );


	/*
	 * Change content's excerpt lenght
	 */
	function theme_excerpt_length($length) {
		return 25;
	}
	add_filter('excerpt_length', 'theme_excerpt_length');


	/*
	 * Enable support for Custom Header Image
	 */
	$args = array(
		'width'         => 1600,
		'height'        => 600,
		'default-image' => get_template_directory_uri() . '/images/blog-header-cover.jpg',
		'uploads'       => true,
	);
	add_theme_support( 'custom-header', $args );

	add_filter('navigation_markup_template', 'my_navigation_template', 10, 2 );
	function my_navigation_template( $template, $class ){
		return '
		<nav class="pagination %1$s" aria-label="Page navigation">
			%3$s
		</nav>
		';
	}
}
endif; // theme_steup
add_action( 'after_setup_theme', 'theme_steup' );


/**
 * Register widget area.
 */
function theme_widgets_init() {
	register_sidebar( array(
		'name'          => 'Widget Area',
		'id'            => 'sidebar',
		'description'   => 'Add widgets here to appear in your sidebar.',
		'before_widget' => '<div class="b-content__sidebar__panel b-content__sidebar__panel--%2$s" id="%1$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3>',
		'after_title'   => '</h3>'
	) );
}
add_action( 'widgets_init', 'theme_widgets_init' );

/**
 * JavaScript Detection.
 *
 * Adds a `js` class to the root `<html>` element when JavaScript is detected.
 */
function theme_javascript_detection() {
	echo "<script>(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);</script>\n";
}
add_action( 'wp_head', 'theme_javascript_detection', 0 );


/**
 * Enqueue scripts and styles.
 */
function theme_scripts() {
	wp_enqueue_style( 'theme-style', get_stylesheet_uri() );
	wp_enqueue_script( 'theme-script', get_template_directory_uri() . '/js/functions.js', array( 'jquery' ), '20161004', true );
}
add_action( 'wp_enqueue_scripts', 'theme_scripts' );
