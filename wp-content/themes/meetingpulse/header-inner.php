
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
    <div class="main main_features">
        <div class="main__bg"></div>
        <div class="main__center center">
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
                            <a class="header__item" href="/#features">Features</a>
                            <a class="header__item" href="/#technology">Services</a>
                            <a class="header__item" href="/#clients">Clients</a>
                            <a class="header__item" href="/#pricing">Pricing</a>
                            <a class="header__item m" href="/blog" style="display: none">Blog</a>
                        </nav>
                        <div class="header__container"><a class="header__btn btn btn_border" href="https://app.meet.ps/login">Log in</a>
                            <div class="header__bottom"><a class="header__phone" href="#">USA <span class="header__numbers">415-450-9646</span></a><a class="header__phone" href="#">USA <span class="header__numbers">415-450-9646</span></a></div>
                        </div><button class="header__burger burger js-main-burger"><svg id="burger-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"><title>Show / Hide Navigation</title><rect class="burger-svg__base" width="50" height="50" fill="#1f201c"></rect><g class="burger-svg__bars" fill="#fff"><rect class="burger-svg__bar burger-svg__bar-1" x="14" y="18" width="22" height="2"></rect><rect class="burger-svg__bar burger-svg__bar-2" x="14" y="24" width="22" height="2"></rect><rect class="burger-svg__bar burger-svg__bar-3" x="14" y="30" width="22" height="2"></rect></g></svg></button>
                        <!-- links-->
                        <div class="header__links links">
                        <a class="links__border" data-gaevent="try_for_free_header" href="/#pricing">Try for free</a>
                        <a class="links__white" href="#" data-gaevent="contact_sales_header" data-popup=".js-popup-calendar">Contact sales</a></div>
                    </div>
                </header>
            </div>
            <div class="main__body">
                <div class="main__title"><?php if (is_page(8267)) {
                    echo 'Platform features';
                    } else {
                        single_post_title();
                    } ?>
                </div>
                <div class="main__info">
                  <?php if (is_page(8267)): ?>
                    A full list of MeetingPulse Platform <br>features & capabilities
                  <?php else : ?>
                  By <?php echo get_the_author(); ?> on <time datetime="<?php echo get_the_date("Y-m-d\TH:i:s"); ?>"><?php echo get_the_date(); ?></time>
                      <?php endif; ?>
                  </div>


                <!-- links-->
                <div class="main__links links"><a class="links__white" href="#" data-popup=".js-popup-calendar">Contact sales</a></div>
            </div>
        </div>
    </div>
