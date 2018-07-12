		</main>
<!--        --><?php //if (! is_front_page() && ! is_page(7894)) { ?>
        <?php if (true) { ?>
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
                                        <div class="question__head js-accord-head">Does MeetingPulse work with PowerPoint?
                                            <div class="question__icon"><svg class="icon icon-arrow-down"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-arrow-down"></use></svg></div>
                                        </div>
                                        <div class="question__body js-accord-body">Sure, more about it <a href="https://help.meet.ps/meetingpulse-introduction/presenting-meetin" target="_blanck">here</a></div>
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
                                            can have its own domain. This is great if you are going to promote your meeting offline. For example, you could use <a href="acme2018.com">acme2018.com</a> instead of <a href="meet.ps/acme-all-hands">meet.ps/acme-all-hands</a></div>
                                    </div>
                                    <div class="question__item js-accord-item">
                                        <div class="question__head js-accord-head"> <a href="https://help.meet.ps/" data-gaevent="faq_morequestions">More questions?</a></div>
                                    </div>
                                    <div class="question__help">
                                        <div class="question__item">Want to know more about what MeetingPulse can do? Go to the <a class="question__link" href="/features">features page</a>.</div>
                                        <div class="question__item">Still need help? <a class="question__link" href="mailto:support@meetingpulse.net">Contact us</a>.</div>
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
                                        <div class="description__preview"><img class="description__pic" src="<?php echo get_the_post_thumbnail( $p['ID'], array(74, 74), array('class' => 'post_thumbnail') )?>"></div>
                                        <div class="description__info"><a href="<?php echo get_permalink($p['ID']) ?>"><?php echo $p['post_title'] ?></a></div>
                                    </div>
                                <?php } ?>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        <?php }?>

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

        <footer class="footer">
            <div class="footer__body">
                <div class="footer__center center">
                    <div class="footer__row">
                        <div class="footer__col">
                            <div class="footer__logo">
                                <a class="logo" href="/">
                                    <div class="logo__name">meeting <br>pulse</div>
                                    <div class="logo__wrap">
                                        <div class="logo__icon"><svg class="icon icon-logo"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-logo"></use></svg></div>
                                        <div class="logo__text footer__company">Live audience <br>interaction platform </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="footer__col">
                            <div class="footer__wrap">
                                <div class="footer__list"><a class="footer__link" href="mailto:info@meetingpulse.net">info@meetingpulse.net</a><a class="footer__link" href="tel:4154509646">USA: 415-450-96-46</a></div>
                            </div>
                        </div>
                        <div class="footer__col">
                            <div class="footer__list last"><a class="footer__link" href="/terms-of-service/">TERMS</a><a class="footer__link" href="/privacy-policy/">PRIVACY</a><a class="footer__link" href="https://help.meet.ps/">HELP</a></div>
                        </div>
                    </div>
                </div>
            </div>
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
                        <div class="footer__copyright">2013–2018 © MeetingPulse by <a href="http://inmomentsoftware.com/" target="_blank">inMoment Software</a></div>
                        <div class="footer__preview"><img class="footer__pic" src="/wp-content/themes/meetingpulse/img/bit.png" width="84px"><img class="footer__card" src="/wp-content/themes/meetingpulse/img/cards.png" width="181px"></div>
                    </div>
                </div>
            </div>
            <!-- Calendly inline widget begin-->
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
            <!-- Calendly inline widget end-->
        </footer>
        </div>
        <div class="popup js-popup">
            <div class="popup__wrap js-popup-wrap">
                <div class="popup__title">Contact sales</div>
                <div class="popup__text">Our team will be in touch shortly</div>
                <form class="popup__form form form_popup">
                    <div class="form__wrap">
                        <!-- field-->
                        <div class="form__field field">
                            <div class="field__in"><input class="field__input" type="text" placeholder="Name *" required></div>
                        </div>
                        <!-- field-->
                        <div class="form__field field">
                            <div class="field__in"><input class="field__input" type="text" placeholder="Busines email *" required></div>
                        </div>
                        <!-- field-->
                        <div class="form__field field">
                            <div class="field__in"><input class="field__input" type="text" placeholder="Phone *" required></div>
                        </div>
                        <!-- field-->
                        <div class="form__field field">
                            <div class="field__in"><input class="field__input" type="text" placeholder="Company" required></div>
                        </div>
                        <!-- field-->
                        <div class="form__field field">
                            <div class="field__in"><input class="field__input" type="text" placeholder="Title" required></div>
                        </div>
                    </div>
                    <div class="form__btns"><button class="form__btn btn btn_border">Submit request</button></div>
                </form><button class="popup__btn js-popup-close"><svg class="icon icon-check-no"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-no"></use></svg></button></div>
        </div>
        <div class="popup popup_calendar js-popup-calendar">
            <div class="popup__wrap js-popup-wrap">
                <div class="popup__title">Schedule a call</div>
                <div class="popup__calendar">
                    <div class="calendly-inline-widget" data-url="https://calendly.com/meetingpulse/demo" style="min-width:320px;height:580px;"></div>
                </div><button class="popup__btn js-popup-close"><svg class="icon icon-check-no"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-no"></use></svg></button></div>
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
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TLT3HV5');</script>
        <!-- End Google Tag Manager -->
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