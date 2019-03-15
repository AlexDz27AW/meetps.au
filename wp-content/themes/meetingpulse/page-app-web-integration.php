<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
<?php get_template_part( 'header', 'meta' ); ?>
		<link rel='stylesheet' href='<?php echo esc_url( get_template_directory_uri() ); ?>/css/app.css' />
        <link rel='stylesheet' href='<?php echo esc_url( get_template_directory_uri() ); ?>/css/simple.css?3' />

        <script type="text/javascript">

document.addEventListener("DOMContentLoaded", function() {
    $(".js_iframe-example").on("click", function(e) {
        e.preventDefault();
        var section = $(this).next();
        if (section.is(":visible")) {
            return;
        }
        section.toggle();
        var contents = section.find("script").html();
        section.append($(contents));
    });
});

        </script>
    </head>

	<body <?php body_class(); ?>>

    <div class="out">
        <div class="top">
            <div class="top__center center">
                <div class="top__text">MeetingPulse Audience engagement solutions</div>
                <div class="top__wrap">
                    <a class="top__item top__item_m top__item_phone" href="tel:4154509646">
                        <div class="top__country">USA</div>
                        <div class="top__number">415-450-9646</div>
                    </a>
                    <a class="top__item top__item_blog" href="/blog">blog</a><a class="top__item top__item_login" href="https://app.meet.ps/login">log in</a>
                    <a class="top__item top__item_m top__item_entry" href="#" data-popup=".js-popup-sm">
                        <div class="top__icon"><svg class="icon icon-entry"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-entry"></use></svg></div>
                        <div class="top__unfo"> Join a meeting</div>
                    </a>
                </div>
            </div>
        </div>
        <!-- main-->
        <div class="main js-main">
            <div class="main__bg"></div>
            <div class="main__center center" style="min-height: auto;">
                <div class="main__header js-menu">
                    <header class="header">
                        <div class="header__wrap">
                            <!-- logo-->
                            <a class="header__logo logo logo_white" href="/">
                                <div class="logo__name">meeting <br>pulse</div>
                                <div class="logo__wrap">
                                    <div class="logo__icon"><svg class="icon icon-logo"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-logo"></use></svg></div>
                                    <div class="logo__text">live audience platform</div>
                                </div>
                            </a>
                            <nav class="header__nav">
                            </nav>
                            <div class="header__container"><a class="header__btn btn btn_border" href="https://app.meet.ps/login">Log in</a>
                                <div class="header__bottom"><a class="header__phone" href="#">USA <span class="header__numbers">415-450-9646</span></a><a class="header__phone" href="#">USA <span class="header__numbers">415-123-4321</span></a></div>
                            </div><button class="header__burger burger js-main-burger"><svg id="burger-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"><title>Show / Hide Navigation</title><rect class="burger-svg__base" width="50" height="50" fill="#1f201c"></rect><g class="burger-svg__bars" fill="#fff"><rect class="burger-svg__bar burger-svg__bar-1" x="14" y="18" width="22" height="2"></rect><rect class="burger-svg__bar burger-svg__bar-2" x="14" y="24" width="22" height="2"></rect><rect class="burger-svg__bar burger-svg__bar-3" x="14" y="30" width="22" height="2"></rect></g></svg></button>
                            <!-- links-->
                        </div>
                    </header>
                </div>
            </div>
        </div>

    </div>



    <div class="simple-section">

        <p>Currently, the MeetingPulse application can be integrated in these ways:</p>

        <h3>Simple embed</h3>

        <p>
            Given a link to a meeting (e.g. <a href="https://meet.ps/some-meeting">https://meet.ps/some-meeting</a>),
            you can just add an embed to your page with an <strong>iframe</strong> tag. Make sure to provide the height
            and width for the frame for best results. Your attendees will appear in the meeting as anonymous users,
            unless you enable name and/or email prompt for new visitors.
        </p>

        <a class="js_iframe-example" href="#show-example">Show simple example</a>
        <div class="example">
            <script type="text/template">
                <iframe width="480" height="640" src="https://mp-embed-public.meetingpulse.net/attendee" frameborder="0" allow="encrypted-media"></iframe>
            </script>
        </div>

        <hr />

        <h3>Embed and authenticate attendees</h3>
        <p>
            If you want to embed the app in your site and authenticate your visitors based on their login session
            on your site, you have two options
        </p>

        <ol>
            <li>You can take advantage of our API and generate access tokens for your visitors yourself. This requires a server-side call.</li>
            <li>Alternatively, you can craft a sign-up payload to be used with your embed, so that authentication goes on client-side.</li>
        </ol>

        <p>
            This way, each user that has been authenticated with your site can access the MeetingPulse app via
            an <strong>iframe</strong> and be recognized by the app. We support passing user names and emails this way.
            Please <a href="mailto:support@meetingpulse.net">contact support</a> for more info if you are interested
            in this solution.
        </p>

<?php

do {

    $current_user = wp_get_current_user();
    if (!$current_user->user_login) {
        break;
    }

    // Together with your secret this will constitute the request payload to send.
    $payload = array(
        "client" => "meetingpulse",
        "id" => $current_user->user_login,
        "name" => trim($current_user->user_firstname . ' ' . $current_user->user_lastname),
        "email" => $current_user->user_email
    );

    $str = "4GvXisPMqyKF3Ve4" . trim($payload["id"]) . trim($payload["name"]) . trim($payload["email"]);
    $payload["signature"] = hash("sha256", $str);

    // Stringifed JSON packed into base64 and url-escaped
    $jsonString = json_encode($payload);
    $request = urlencode(base64_encode($jsonString));

        echo <<<HEREDOC

        <a class="js_iframe-example" href="#show-example">Show embed example</a>
        <div class="example">
            <script type="text/template">
                <iframe width="480" height="640" src="https://mp-embed-auth.meetingpulse.net/attendee/?i={$request}" frameborder="0" allow="encrypted-media"></iframe>
            </script>
        </div>

HEREDOC;

} while(0);

?>

        <hr />

        <h3>Embed a simple MeetingPulse widget</h3>

        <p>
            Instead of embedding a frame with a fully-fledged application, you may wish to limit the interface
            to some minimalisic widget. Currently we only support a ribbon with Pulse buttons. If you need to show
            those buttons on your site, you will need to embed a frame with a URL of the format
            <i><a href="https://meet.ps/widgets/widgets-demo-pulse/pulse">https://meet.ps/widgets/&lt;your-meeting-name&gt;/pulse</a></i>.
        </p>

        <p>Make sure to make the frame long enough if you want all buttons to be on the same line.</p>

        <p>
            Another solution would be to set up a meeting to have only one feature and slide. If you embed a meeting this way,
            it will only show a single slide without any extra menus, which can be used to your advantage if you want something simpler.
        </p>

        <a class="js_iframe-example" href="#show-example">Show widget example</a>
        <div class="example">
            <script type="text/template">
                <iframe width="640" height="315" src="https://www.youtube.com/embed/35JydfJZgIM?rel=0&amp;controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <iframe width="640" height="100" src="https://mp-embed-widget.meetingpulse.net/widgets/mp-embed-widget/pulse" frameborder="0" allow="encrypted-media"></iframe>
            </script>
        </div>

        <hr />

    </div>

<?php


do {

    // NB: old/legacy integration way, is here for historical reasons.
    break;

    // First, we'll need to get the data on our would-be-attendee.
    // We'll need some unique id for them and something to generate the attendee name.
    $current_user = wp_get_current_user();
    if (!$current_user->user_login) {
        echo "<p style='text-align: center; padding: 2em 0 0;'>App embed/authentication demo unavailable: please log into WP first.</p>";
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
      CURLOPT_URL => "https://app.meet.ps/api/auth/attendee",
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

    break; // disable for now.

    echo <<<HEREDOC

<div class="aws-section" style="text-align: center;">
    <h2>App embedded in the page, user authenticated against Wordpress login session</h2>
    <iframe id="iframe-app" src="https://app.meet.ps/attendee/app-web-integration/?t={$token}" style="height: 640px; width: 480px; border: solid 0px transparent; margin: 0 auto;"></iframe>
</div>

HEREDOC;

} while(0);

?>


<?php get_footer(); ?>

