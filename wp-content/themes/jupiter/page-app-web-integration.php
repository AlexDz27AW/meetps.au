<?php
global $post,
$mk_options;
$page_layout = get_post_meta( $post->ID, '_layout', true );
$padding = get_post_meta( $post->ID, '_padding', true );


if ( empty( $page_layout ) ) {
	$page_layout = 'full';
}
$padding = ($padding == 'true') ? 'no-padding' : '';

get_header(); ?>
<div id="theme-page" <?php echo get_schema_markup('main'); ?>>
	<div class="mk-main-wrapper-holder">
		<div id="mk-page-id-<?php echo $post->ID; ?>" class="theme-page-wrapper mk-main-wrapper <?php echo $page_layout; ?>-layout <?php echo $padding; ?> mk-grid vc_row-fluid">
			<div class="theme-content <?php echo $padding; ?>" itemprop="mainContentOfPage">
				<?php if ( have_posts() ) while ( have_posts() ) : the_post();?>
						<?php the_content();?>
						<div class="clearboth"></div>
						<?php wp_link_pages( 'before=<div id="mk-page-links">'.__( 'Pages:', 'mk_framework' ).'&after=</div>' ); ?>
				<?php endwhile; ?>

<?php

do {

    // First, we'll need to get the data on our would-be-attendee.
    // We'll need some unique id for them and something to generate the attendee name.
    $current_user = wp_get_current_user();
    if (!$current_user->user_login) {
        echo "<p>You must be logged in if you want to participate in a meeting.</p>";
        break;
    }

    // Together with your secret this will constitute the request payload to send.
    $payload = array(
        "key" => "4GvXisPMqyKF3Ve4",
        "id" => $current_user->user_login,
        "name" => $current_user->user_firstname . ' ' . $current_user->user_lastname
    );

    // Configure and use cURL to make a server-side request.
    $curl = \curl_init();
    $headers = [
        "Accept: application/json",
        "Content-Type: application/json"
    ];

    $opts =  array(
      // Make sure to use proper certificate chain bundle or your https request may fail.
      CURLOPT_CAINFO => $_SERVER['DOCUMENT_ROOT'] . '/wp-includes/certificates/ca-bundle.crt',
      CURLOPT_HEADER => 0,
      CURLOPT_HTTPHEADER => &$headers,
      CURLOPT_RETURNTRANSFER => 1,
      CURLOPT_FOLLOWLOCATION => 1,
      CURLOPT_URL => "https://app.meetingpulse.net/api/auth/attendee",
      CURLOPT_POST => 1,
      // The API talks in JSON, so encode the payload accordingly.
      CURLOPT_POSTFIELDS => \json_encode($payload)
    );

    // Execute the request
    \curl_setopt_array($curl, $opts);
    $output = \curl_exec($curl);
    $json = \json_decode($output, true);

    // Might be a good idea to check that there's no errors returned.
    if (!$json || !$json["result"]) {
        // Debug using raw response, if you wish.
        echo "<p>Failed to obtain the access data for the meeting. ({$output})</p>";
        // Output the human-readable error if you wish, but again, it's mostly for diagnostics.
        if (isset($json["error"]) && isset($json["error"]["message"]))
            echo "<p>Error: {$json['error']['message']}</p>";
        break;
    }

    // At this point we've got the auth token. Just use it in the embed URL!
    $token = $json["result"]["token"];
    echo "<iframe id=\"iframe\" src='https://app.meetingpulse.net/attendee/app-web-integration/?t={$token}' style='display: none; height: 640px; width: 480px; border: solid 0px transparent;'></iframe>";

} while(0);

?>

<br />
<a id="toggler" href="#">toggle visibility</a>
<script>
setTimeout(function() {
    $("#toggler").on("click", function(e) {
        e.preventDefault();
        var iframe = $("#iframe");
        iframe.toggle();

        //if (iframe.css("visibility"))
        //    iframe.css("visibility", '');
        //else
        //    iframe.css("visibility", "hidden");
    });
}, 1000);
</script>

			</div>
			<?php
				if($mk_options['pages_comments'] == 'true') {
					comments_template( '', true ); 	
				}
			?>
		<?php if ( $page_layout != 'full' ) get_sidebar(); ?>
		<div class="clearboth"></div>
		</div>
		<div class="clearboth"></div>
	</div>	
</div>
<?php get_footer(); ?>
