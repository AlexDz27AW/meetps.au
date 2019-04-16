</main>
  <!-- description-->
  <div class="description">
    <div class="description__center center">
      <div class="description__row">
        <div class="description__col">
          <div class="description__title">FAQ</div>
          <!-- question-->
          <div class="description__question question">
            <div class="question__wrap">
              <div class="question__item js-accord-item">
                <div class="question__head js-accord-head">Do you integrate with powerpoint/keynote?
                  <div class="question__icon"><svg class="icon icon-arrow-down"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-arrow-down"></use></svg></div>
                </div>
                <div class="question__body js-accord-body">Sure, more about it <a href="https://help.meet.ps/best-practices/presenting-meetingpulse-with-powerpoint" target="_blank">here</a></div>
              </div>
              <div class="question__item js-accord-item">
                <div class="question__head js-accord-head">What platforms do you support?
                  <div class="question__icon"><svg class="icon icon-arrow-down"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-arrow-down"></use></svg></div>
                </div>
                <div class="question__body js-accord-body">We want 100% of your audience to be engaged, which is why we developed MeetingPulse to work in a web browser. Your audience can join from their iPhone, their Amazon fire tablet, their Linux laptop, their Windows PC or any other device
                  that has a web browser.</div>
              </div>
              <div class="question__item js-accord-item">
                <div class="question__head js-accord-head">Can I customize MeetingPulse?
                  <div class="question__icon"><svg class="icon icon-arrow-down"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-arrow-down"></use></svg></div>
                </div>
                <div class="question__body js-accord-body"> To make MeetingPulse a seamless addition to your meetings, we offer custom themes. We'll use your logo and your colors for the attendee and broadcast view. Your company name will be included in the webpage's title.<br><br>Your meeting
                  can have its own domain. This is great if you are going to promote your meeting offline. For example, you could use <a href="#">acme<?php echo date('Y'); ?>.com</a> instead of <a href="#">meet.ps/acme-all-hands</a></div>
              </div>
              <div class="question__item js-accord-item">
                <div class="">More questions? <a href="https://help.meet.ps/" data-gaevent="faq_morequestions">Ask</a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="description__col">
          <div class="description__title">The Agenda <span>// Blog</span></div>
          <div class="description__blog">

            <?php
            $args = array(
              'numberposts' => 2,
              //                                    'category' => 5,
              'post_status' => 'publish',
            );

            $result = wp_get_recent_posts($args);

            foreach( $result as $p ){ ?>
              <div class="description__box">
                <div class="description__preview decription__pic">
                  <img src="https://meet.ps/wp-content/uploads/2018/10/74x58xjavier-allegue-barros-761133-unsplash-380x300.jpg.pagespeed.ic.8KoMv9IIQt.webp" alt="">
                </div>
                <div class="description__info"><a href="<?php echo get_permalink($p['ID']) ?>"><?php echo $p['post_title'] ?></a></div>
              </div>
            <?php } ?>
          </div>

        </div>
      </div>
    </div>
  </div>

<?php
$footer_menuParameters = array(
  'theme_location'  => 'footer',
  'container'       => false,
  'echo'            => false,
  'items_wrap'      => '%3$s',
  'depth'           => 0,
);

$footer_menu = strip_tags(wp_nav_menu( $footer_menuParameters ), '<a>' );
?>

<footer class="footer lp-footer center">
  <section class="footer__top">
    <div class="footer-col-left">
      <div class="footer__logo">
        <a href="<?php echo get_home_url('/') ?>" class="logo">
          <span class="logo__name">
            meeting
            <br>
            pulse
            <br>
            <svg class="icon icon-logo"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-logo"></use></svg>
          </span>
        </a>
      </div>
      <div class="footer__company">
        Live audience
        <br>
        interaction platform
      </div>
      <div class="footer__list">
        <a class="footer__link" href="mailto:info@meetingpulse.net">info@meetingpulse.net</a>
        <a class="footer__link" href="tel:4154509646">USA: 415-450-9646</a>
        <a class="footer__link" href="tel:4154509646">UK: 415-450-9646</a>
        <a class="footer__link" href="javascript:void(0);">LIVE CHAT</a>
      </div>
    </div>
    <div class="footer-col-right">
      <ul class="footer-site-menu">
        <li class="footer-site-menu-item">
          <a href="#" class="footer-site-menu-item__link">
            COMPANY
          </a>
        </li>
        <li class="footer-site-menu-item">
          <a href="#" class="footer-site-menu-item__link">
            TEAM
          </a>
        </li>
        <li class="footer-site-menu-item">
          <a href="#" class="footer-site-menu-item__link">
            HELP
          </a>
        </li>
        <li class="footer-site-menu-item">
          <a href="#" class="footer-site-menu-item__link">
            SECURITY
          </a>
        </li>
        <li class="footer-site-menu-item">
          <a href="#" class="footer-site-menu-item__link">
            TERMS
          </a>
        </li>
        <li class="footer-site-menu-item">
          <a href="#" class="footer-site-menu-item__link">
            PRIVACY
          </a>
        </li>
        <li class="footer-site-menu-item">
          <a href="#" class="footer-site-menu-item__link">
            CAREERS
          </a>
        </li>
        <li class="footer-site-menu-item">
          <a href="#" class="footer-site-menu-item__link">
            FOR RESELLERS
          </a>
        </li>
      </ul>

      <section class="footer__lists">
        <div class="footer__list">
          <a class="footer__link" href="#">Industries</a>
          <a class="footer__link" href="#">Corporate Meetings</a>
          <a class="footer__link" href="#">UK: 415-450-9646</a>
          <a class="footer__link" href="javascript:void(0);">Conferences and Events</a>
          <a class="footer__link" href="javascript:void(0);">Conferences and Events</a>
          <a class="footer__link" href="javascript:void(0);">Livestream and Broadcasts</a>
          <a class="footer__link" href="javascript:void(0);">Lectures & Classes</a>
          <a class="footer__link" href="javascript:void(0);">Government & Non-profit Assemblies</a>
          <a class="footer__link" href="javascript:void(0);">More</a>
        </div>
        <div class="footer__list">
          <a class="footer__link" href="#">Platform</a>
          <a class="footer__link" href="#">Live polling tool</a>
          <a class="footer__link" href="#">Live audience Q&A</a>
          <a class="footer__link" href="javascript:void(0);">Audience Survey tools</a>
          <a class="footer__link" href="javascript:void(0);">Audience Response System</a>
          <a class="footer__link" href="javascript:void(0);">Audience Feedback</a>
          <a class="footer__link" href="javascript:void(0);">More</a>
        </div>
        <div class="footer__list">
          <a class="footer__link" href="#">Services</a>
          <a class="footer__link" href="#">Event Design</a>
          <a class="footer__link" href="#">On-site Event Management</a>
          <a class="footer__link" href="javascript:void(0);">Custom reports & data analysis</a>
          <a class="footer__link" href="javascript:void(0);">Custom interactions</a>
          <a class="footer__link" href="javascript:void(0);">API / Integration</a>
          <a class="footer__link" href="javascript:void(0);">More</a>
        </div>
      </section>
    </div>
  </section>
  <div class="footer__bottom">
    <div class="footer__center center">
      <div class="footer__line">
        <!-- social-->
        <div class="footer__social social">
          <a class="social__link" href="https://www.facebook.com/MeetingPulse-595373143885894/"><svg class="icon icon-fb"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-fb"></use></svg></a>
          <a class="social__link" href="https://twitter.com/inmomentco" target="_blanck"><svg class="icon icon-tw"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-tw"></use></svg></a>
          <a class="social__link" href="https://www.linkedin.com/company/inmoment" target="_blanck"><svg class="icon icon-in"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-in"></use></svg></a>
          <a class="social__link" href="https://plus.google.com/u/0/110501359949806734544" target="_blanck"><svg class="icon icon-google"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-google"></use></svg></a>
          <a class="social__link" href="https://angel.co/meetingpulse" target="_blanck"><svg class="icon icon-social"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-social"></use></svg></a>
        </div>
        <div class="footer__copyright">2013–<?php echo date('Y'); ?> © MeetingPulse by <a href="http://inmomentsoftware.com/" target="_blank">inMoment Software</a></div>
        <div class="footer__preview"><img class="footer__pic" src="/wp-content/themes/meetingpulse/img/bit.png" width="84px"><img class="footer__card" src="/wp-content/themes/meetingpulse/img/cards.png" width="181px"></div>
      </div>
    </div>
  </div>
</footer>
</div>

<div class="popup popup_main_video js-popup-main-video">
  <div class="popup__wrap js-popup-wrap">
    <div class="popup-head-video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/scZ9eUmzh_o?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <button class="popup__btn js-popup-close"><svg class="icon icon-check-no"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-no"></use></svg></button>
  </div>
</div>
<div class="popup popup_main_video js-popup-main-video1">
  <div class="popup__wrap js-popup-wrap" style="background: none !important;max-width: 680px;">
    <div class="popup-head-video">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/r7ZK6VzlU4A?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <button class="popup__btn js-popup-close" style="top:0px;"><svg class="icon icon-check-no"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-no"></use></svg></button>
  </div>
</div>
<div class="popup popup_sm js-popup-sm">
  <div class="popup__wrap js-popup-wrap">
    <div class="popup__title">Join a meeting</div>
    <form class="popup__form form form_popup" id="join_meeting_form">
      <div class="form__wrap">
        <!-- field-->
        <div class="form__field field">
          <div class="field__in">
            <input class="field__input" type="text" placeholder="Meeting Id" required></div>
        </div>
      </div>
      <div class="form__btns"><button class="form__btn btn btn_border btn_icon">Join now<span class="btn__icon"><svg class="icon icon-entry"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-entry"></use></svg></span></button></div>
    </form><button class="popup__btn js-popup-close"><svg class="icon icon-check-no"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-no"></use></svg></button></div>
</div>
<script>
  window.intercomSettings = {
    app_id: "ubl9mgf7"
  };
</script>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TLT3HV5"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/ubl9mgf7';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>
<script src="/wp-content/themes/meetingpulse/js/tooltipster.bundle.min.js"></script>
<script src="/wp-content/themes/meetingpulse/js/jquery.backstretch.min.js"></script>
<script src="/wp-content/themes/meetingpulse/js/owl.carousel.min.js"></script>
<script src="/wp-content/themes/meetingpulse/js/tweenMax.min.js"></script>
<script src="/wp-content/themes/meetingpulse/js/smooth-scroll.min.js"></script>

<?php wp_footer(); ?>

</body>
</html>
