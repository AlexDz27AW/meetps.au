<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
<?php get_template_part( 'header', 'meta' ); ?>

		<link rel='stylesheet' href='<?php echo esc_url( get_template_directory_uri() ); ?>/css/app.css' />
        <!--[if IE]>
		<link rel='stylesheet' href='<?php echo esc_url( get_template_directory_uri() ); ?>/css/app-ie.css' />
        <![endif]-->
        <script>
            window['_fs_debug'] = false;
            window['_fs_host'] = 'fullstory.com';
            window['_fs_org'] = '1J9MS';
            window['_fs_namespace'] = 'FS';
            (function(m,n,e,t,l,o,g,y){
                if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
                g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
                o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
                y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
                g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
                y="rec";g.shutdown=function(i,v){g(y,!1)};g.restart=function(i,v){g(y,!0)};
                g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
                g.clearUserCookie=function(){};
            })(window,document,window['_fs_namespace'],'script','user');
        </script>
        <script>
            jQuery(document).ready(function(){
                jQuery('#js-popup-main-video-btn').on('click', function(e){
                    e.stopPropagation();
                    var video = jQuery('.js-popup-main-video iframe').attr("src");
                    jQuery('.js-popup-main-video iframe').attr("src","");
                    video += '&autoplay=1';
                    console.log(video)
                    jQuery('.js-popup-main-video iframe').attr("src",video);
                })
            })
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
                                <a class="header__item" href="#features">Features</a>
                                <a class="header__item" href="#technology">Services</a>
                                <a class="header__item" href="#clients">Clients</a>
                                <a class="header__item" href="#pricing">Pricing</a>
                                <a class="header__item m" href="/blog" style="display: none">Blog</a>
                            </nav>
                            <div class="header__container"><a class="header__btn btn btn_border" href="https://app.meet.ps/login">Log in</a>
                                <div class="header__bottom"><a class="header__phone" href="#">USA <span class="header__numbers">415-450-9646</span></a><a class="header__phone" href="#">USA <span class="header__numbers">415-123-4321</span></a></div>
                            </div><button class="header__burger burger js-main-burger"><svg id="burger-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"><title>Show / Hide Navigation</title><rect class="burger-svg__base" width="50" height="50" fill="#1f201c"></rect><g class="burger-svg__bars" fill="#fff"><rect class="burger-svg__bar burger-svg__bar-1" x="14" y="18" width="22" height="2"></rect><rect class="burger-svg__bar burger-svg__bar-2" x="14" y="24" width="22" height="2"></rect><rect class="burger-svg__bar burger-svg__bar-3" x="14" y="30" width="22" height="2"></rect></g></svg></button>
                            <!-- links-->
                            <div class="header__links links"><a class="links__border" data-gaevent="try_for_free_header" href="#pricing">Try for free</a><a class="links__blue" data-gaevent="contact_sales_header" href="#" data-popup=".js-popup-calendar">Request a demo</a></div>
                        </div>
                    </header>
                </div>
                <div class="main__body">
                    <div class="main_video_icon">
                        <a href="#" id="js-popup-main-video-btn" data-popup=".js-popup-main-video">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 24 24">
                                <path fill="#fff" d="M12 24c-6.619 0-12-5.381-12-12s5.381-12 12-12 12 5.381 12 12-5.381 12-12 12zM12 0.47c-6.36 0-11.53 5.17-11.53 11.53s5.17 11.53 11.53 11.53 11.53-5.17 11.53-11.53-5.17-11.53-11.53-11.53z"></path>
                                <path fill="#fff" d="M9.797 15.998v-7.997l5.75 3.998-5.75 3.998zM10.31 8.986v6.034l4.339-3.014-4.339-3.019z"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="main__title">Real-time audience communications platform</div>
                    <div class="main__info">Bring live Interactivity to your meetings & events</div>
                    <!-- links-->
                    <div class="main__links links">
                        <a class="links__border" href="#pricing">Try for free</a>
                        <a class="links__blue" href="#" data-popup=".js-popup-calendar">Request a demo</a></div>
                </div>
                <div class="main__list">
                    <div class="main__item">
                        <div class="main__icon"><svg class="icon icon-main-1"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-main-1"></use></svg></div>
                        <div class="main__text">Meetings <br>& town halls</div>
                    </div>
                    <div class="main__item">
                        <div class="main__icon"><svg class="icon icon-main-2"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-main-2"></use></svg></div>
                        <div class="main__text">Conferences <br>& events</div>
                    </div>
                    <div class="main__item">
                        <div class="main__icon"><svg class="icon icon-main-3"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-main-3"></use></svg></div>
                        <div class="main__text">Livestreams <br>& broadcasts</div>
                    </div>
                    <div class="main__item">
                        <div class="main__icon"><svg class="icon icon-main-4"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-main-4"></use></svg></div>
                        <div class="main__text">Lectures <br>& classes</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- partners-->
        <div class="partners">
            <div class="partners__center center">
                <div class="partners__item"><img class="partners__pic" src="/wp-content/themes/meetingpulse/img/partners-1.png" width="130px"></div>
                <div class="partners__item"><img class="partners__pic" src="/wp-content/themes/meetingpulse/img/partners-2.png" width="121px"></div>
                <div class="partners__item"><img class="partners__pic" src="/wp-content/themes/meetingpulse/img/partners-3.png" width="110px"></div>
                <div class="partners__item"><img class="partners__pic" src="/wp-content/themes/meetingpulse/img/partners-4.png" width="135px"></div>
                <div class="partners__item"><img class="partners__pic" src="/wp-content/themes/meetingpulse/img/partners-5.png" width="133px"></div>
                <div class="partners__item"><img class="partners__pic" src="/wp-content/themes/meetingpulse/img/partners-6.png" width="150px"></div>
                <div class="partners__item"><img class="partners__pic" src="/wp-content/themes/meetingpulse/img/partners-7.png" width="73px"></div>
                <div class="partners__item"><img class="partners__pic" src="/wp-content/themes/meetingpulse/img/partners-8.png" width="135px"></div>
            </div>
        </div>
        <!-- conection-->
        <div id="features"></div>
        <div class="conection">
            <div class="conection__center center">
                <div class="conection__wrap">
                    <div class="conection__item">
                        <div class="conection__title">Interactivity</div>
                        <div class="conection__text">Enhance events and meetings with cloud-based audience communication tools.</div>
                    </div>
                    <div class="conection__item">
                        <div class="conection__title">Engagement</div>
                        <div class="conection__text">Create engaging conversations with your team or with a global audience.</div>
                    </div>
                    <div class="conection__item">
                        <div class="conection__title">Connection</div>
                        <div class="conection__text">Connect with thousands of people before, after, and during your meetings and events.</div>
                    </div>
                </div>
                <div class="conection__info">A versatile cloud platform with the features you need</div>
            </div>
        </div>
        <!-- quality-->
        <div class="quality">
            <div class="quality__center center">
                <div class="quality__inner">
                    <div class="quality__row">
                        <div class="quality__col">
                            <a class="quality__link-to-feature" href="/features#qa-section">
                                <div class="quality__item">
                                    <div class="quality__icon"><svg class="icon icon-quality-1"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-quality-1"></use></svg></div>
                                    <div class="quality__info">
                                        <div class="quality__title">Live Q&A sessions</div>
                                        <div class="quality__text">Initiate a conversation and find out what's on everyone's mind.</div>
                                    </div>
                                </div>
                            </a>
                            <a class="quality__link-to-feature" href="/features#polls-section">
                                <div class="quality__item">
                                    <div class="quality__icon"><svg class="icon icon-quality-2"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-quality-2"></use></svg></div>
                                    <div class="quality__info">
                                        <div class="quality__title">Live polling & surveys</div>
                                        <div class="quality__text">Gauge audience opinion with versatile live polls and surveys.</div>
                                    </div>
                                </div>
                            </a>
                            <a class="quality__link-to-feature" href="/features#pulse-section">
                                <div class="quality__item">
                                    <div class="quality__icon"><svg class="icon icon-quality-3"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-quality-3"></use></svg></div>
                                    <div class="quality__info">
                                        <div class="quality__title">Live audience feedback</div>
                                        <div class="quality__text">Keep your finger on the pulse of your audience in real time.</div>
                                    </div>
                                </div>
                            </a>
                            <a class="quality__link-to-feature" href="/features#raffles-section">
                                <div class="quality__item">
                                    <div class="quality__icon"><svg class="icon icon-quality-4"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-quality-4"></use></svg></div>
                                    <div class="quality__info">
                                        <div class="quality__title">Live raffles & quizes</div>
                                        <div class="quality__text">Create icebreaker games or offer rewards via friendly competitions.</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="quality__col">
                            <a class="quality__link-to-feature" href="/features#security-section">
                                <div class="quality__item">
                                    <div class="quality__icon"><svg class="icon icon-quality-5"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-quality-5"></use></svg></div>
                                    <div class="quality__info">
                                        <div class="quality__title">Security & encryption</div>
                                        <div class="quality__text">Enterprise level security: trusted by Fortune 100 companies.</div>
                                    </div>
                                </div>
                            </a>
                            <a class="quality__link-to-feature" href="/features">
                                <div class="quality__item">
                                    <div class="quality__icon"><svg class="icon icon-quality-6"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-quality-6"></use></svg></div>
                                    <div class="quality__info">
                                        <div class="quality__title">Effortless setup</div>
                                        <div class="quality__text">Takes minutes to get started, seconds to start a meeting.</div>
                                    </div>
                                </div>
                            </a>
                            <a class="quality__link-to-feature" href="/features">
                                <div class="quality__item">
                                    <div class="quality__icon"><svg class="icon icon-quality-7"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-quality-7"></use></svg></div>
                                    <div class="quality__info">
                                        <div class="quality__title">Easy attendee access</div>
                                        <div class="quality__text">Attendees join instantly via short link on their smartphone, tablet or laptop.</div>
                                    </div>
                                </div>
                            </a>
                            <a class="quality__link-to-feature" href="/features">
                                <div class="quality__item">
                                    <div class="quality__icon"><svg class="icon icon-quality-8"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-quality-8"></use></svg></div>
                                    <div class="quality__info">
                                        <div class="quality__title">Scalability</div>
                                        <div class="quality__text">Engage tens of thousands of active participants in any location worldwide.</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="quality__btns">
                <div class="quality__center center"><a class="quality__btn btn btn_purple" href="#"  data-gaevent="request_demo_main_features" data-popup=".js-popup-calendar">Request a demo</a><a class="quality__btn btn btn_white" href="/features">View all features</a></div>
            </div>
        </div>
        <!-- promise-->
        <div class="promise">
            <div class="promise__center center">
                <div class="promise__row">
                    <div class="promise__col">
                        <div class="promise__title">Our promise of simplicity.</div>
                        <div class="promise__text">
                            <p>We know how complex enterprise software can be.</p>
                            <p>We also know that every audience is made up of users with varying levels of technical experience.</p>
                        </div>
                    </div>
                    <div class="promise__col">
                        <div class="promise__text">
                            <p>We promise that our product will always remain intuitive, simple - so easy to use that you will love it.</p>
                            <p>This promise and principle is at the core of MeetingPulse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- technology-->
        <div id="technology"></div>
        <div class="technology">
            <div class="technology__head">
                <div class="technology__center center">
                    <div class="technology__title">Beyond the technology</div>
                </div>
            </div>
            <div class="technology__center center">
                <div class="technology__row">
                    <div class="technology__col">
                        <div class="technology__item">
                            <div class="technology__icon"><svg class="icon icon-technology-1"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-technology-1"></use></svg></div>
                            <div class="technology__wrap">
                                <div class="technology__name">Event design</div>
                                <div class="technology__text">We help you plan and setup your events based on our extensive audience engament experience. MeetingPulse has been used at over 1000 events.</div>
                            </div>
                        </div>
                        <div class="technology__item">
                            <div class="technology__icon"><svg class="icon icon-technology-2"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-technology-2"></use></svg></div>
                            <div class="technology__wrap">
                                <div class="technology__name">On-site support</div>
                                <div class="technology__text">Our experts provide on-site support to ensure a smooth and trouble free event so that you can focus on your own agenda.</div>
                            </div>
                        </div>
                        <div class="technology__item">
                            <div class="technology__icon"><svg class="icon icon-technology-3"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-technology-3"></use></svg></div>
                            <div class="technology__wrap">
                                <div class="technology__name">Integration</div>
                                <div class="technology__text">MeetingPulse is designed to seamlessly integrate with your corporate identity system. We provide an API for all of our events and data.</div>
                            </div>
                        </div>
                    </div>
                    <div class="technology__col">
                        <div class="technology__item">
                            <div class="technology__icon"><svg class="icon icon-technology-4"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-technology-4"></use></svg></div>
                            <div class="technology__wrap">
                                <div class="technology__name">Results analysis</div>
                                <div class="technology__text">We help you to measure and compare event results over time. We will analyze your data, create custom reports, and provide recommendations for the improvement of future events.</div>
                            </div>
                        </div>
                        <div class="technology__item">
                            <div class="technology__icon"><svg class="icon icon-technology-5"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-technology-5"></use></svg></div>
                            <div class="technology__wrap">
                                <div class="technology__name">Custom development</div>
                                <div class="technology__text">We've developed custom interactive solutions for national educational and legal organizations, fashion industry trade shows, annual conferences and more.</div>
                            </div>
                        </div>
                        <div class="technology__item">
                            <div class="technology__icon"><svg class="icon icon-technology-6"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-technology-6"></use></svg></div>
                            <div class="technology__wrap">
                                <div class="technology__name">Organizational consulting</div>
                                <div class="technology__text">Benefit from our experience of solving communication and transparency problems in large organizations. From needs analysis to implementation to measurable results.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="technology__btns">
                <div class="technology__center center">
                    <a class="technology__btn btn btn_white" data-gaevent="get_in_touch" href="#" data-popup=".js-popup-calendar">Get in touch</a>
                </div>
            </div>
        </div>
        <!-- company-->
        <div id="clients"></div>
        <div class="company">
            <div class="company__video"><video autoplay muted loop><source src="/wp-content/themes/meetingpulse/video/iStock-514252612.mp4" type="video/mp4"><source src="/wp-content/themes/meetingpulse/video/iStock-514252612.webm" type="video/webm"><source src="video/iStock-514252612.ogv" type="video/ogg"></video></div>
            <div class="company__bg"></div>
            <div class="company__container">
                <div class="company__center center">
                    <div class="company__list">
                        <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-1.png" width="150px"></div>
                        <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-2.png" width="123px"></div>
                        <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-3.png" width="115px"></div>
                        <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-4.png" width="141px"></div>
                        <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-5.png" width="139px"></div>
                        <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-6.png" width="148px"></div>
                        <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-7.png" width="76px"></div>
                        <div class="company__item"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-8.png" width="137px"></div>
                    </div>
                    <div class="company__title">Trusted by leading global corporations and Fortune 100 companies</div>
                    <div class="company__row">
                        <div class="company__col">
                            <div class="company__wrap">
                                <div class="company__logo"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-2.png" width="141px"></div>
                            </div>
                            <div class="company__text">The food manufacturing giant uses MeetingPulse to make their annual sales meetings and townhalls more impactful, interactive and engaging.</div>
                        </div>
                        <div class="company__col">
                            <div class="company__wrap">
                                <div class="company__logo"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-3.png" width="141px"></div>
                                <div class="company__name"></div>
                            </div>
                            <div class="company__text">Educational leaders including Kaplan International are using MeetingPulse to bring interactivity to their online educational forums and classroom instruction.</div>
                        </div>
                        <div class="company__col">
                            <div class="company__logo"><img class="company__pic" src="/wp-content/themes/meetingpulse/img/partners-w-4.png" width="166px"></div>
                            <div class="company__text">Innovative biotech firm (Nasdaq NVTA) uses MeetingPulse to improve culture and transparency by collecting staff questions before their all-hands.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- section-->
        <div id="pricing"></div>
        <div class="section">
            <div class="section__head">
                <div class="section__head_button">
                        <a class="table__btn btn btn_purple" href="https://meet.ps/login/signup/?referer=wp-full" data-gaevent="get_full_trial"  target="_blank">Free 2-week trial</a>

                        <a class="table__btn btn btn_white" href="#" data-popup=".js-popup-calendar" data-gaevent="request_demo">Request demo</a>
                        <a class="table__btn btn btn_white" href="mailto:info@meetingpulse.net" target="_blank">Contact us</a>

                </div>
                <div class="section__center center">
                    <div class="section__title">Pricing</div>
                </div>
            </div>
            <div class="section__center center">
                <!-- tabs-->
                <div class="section__tabs tabs js-tabs">
                    <div class="tabs__nav">
                        <div class="tabs__link js-tabs-link active">Monthly</div>
                        <div class="tabs__link js-tabs-link">Yearly</div>
                        <div class="tabs__link js-tabs-link one-time">One-time</div>
                    </div>
                    <div class="tabs__container">
                        <div class="tabs__table">
                            <!-- table-3-->
                            <div class="table table_five">
                                <!-- row-btns table-3-->
<!--                                <div class="table__row table__row_btns">-->
<!--                                    <div class="table__cell"></div>-->
<!--                                    <div class="table__cell">-->
<!--                                        <a class="table__btn btn btn_white" href="https://meet.ps/login/signup/?referer=wp-full" data-gaevent="get_free">Start now</a>-->
<!--                                        <span class="table__limited">No credit card required</span>-->
<!--                                    </div>-->
<!--                                    <div class="table__cell">-->
<!--                                        <a class="table__btn btn btn_white" href="https://meet.ps/login/signup?referer=wp-light" data-gaevent="get_trial" target="_blank">Free 2-week trial</a>-->
<!--                                        <span class="table__limited">No credit card required</span>-->
<!--                                    </div>-->
<!--                                    <div class="table__cell">-->
<!--                                        <a class="table__btn btn btn_purple" href="https://meet.ps/login/signup/?referer=wp-full" data-gaevent="get_full_trial"  target="_blank">Free 2-week trial</a>-->
<!--                                        <span class="table__limited">No credit card required</span>-->
<!--                                        <div class="table__value"></div>-->
<!--                                    </div>-->
<!--                                    <div class="table__cell">-->
<!--                                        <a class="table__btn btn btn_white" href="#" data-popup=".js-popup-calendar" data-gaevent="request_demo">Request demo</a>-->
<!--                                        <span class="table__limited">No credit card required</span>-->
<!--                                    </div>-->
<!--                                </div>-->
                                <!-- row-title table-3-->
                                <div class="table__row table__row_title">
                                    <div class="table__cell"></div>
                                    <div class="table__cell">
                                        <div class="table__title">Free</div>
                                        <div class="table__hide">Plan</div>
                                    </div>
                                    <div class="table__cell">
                                        <div class="table__title">Light</div>
                                        <div class="table__hide">Plan</div>
                                    </div>
                                    <div class="table__cell table__cell_full">
                                        <div class="table__title table__title_full">Full</div>
                                        <div class="table__hide">Plan</div>
                                        <div class="table__value_m"></div>
                                    </div>
                                    <div class="table__cell">
                                        <div class="table__title">Enterprise</div>
                                        <div class="table__hide">Plan</div>
                                    </div>
                                </div>
                                <!-- row-price table-3-->
                                <div class="table__row table__row_price js-tabs-item">
                                    <div class="table__cell"><span class="table__info">Monthly cost</span></div>
                                    <div class="table__cell"><span class="table__show table__show_from"></span><span>$0 </span><span class="table__show">/ mo</span></div>
                                    <div class="table__cell"><span class="table__show table__show_from"></span><span>$149 </span><span class="table__show">/ mo</span></div>
                                    <div class="table__cell"><span class="table__show table__show_from">From </span><span>$379 </span><span class="table__show">/ mo</span></div>
                                    <div class="table__cell"><a href="https://app.meet.ps/login/signup/?referer=wp-enterprise" class="try-for-free-purple" target="_blank">Try for free</a></div>
                                </div>
                                <div class="table__row table__row_price js-tabs-item" style="display: none;">
                                    <div class="table__cell"><span class="table__info">Yearly cost</span></div>
                                    <div class="table__cell"><span class="table__show table__show_from"></span><span>$0 </span><span class="table__show">/ mo</span></div>
                                    <div class="table__cell"><span class="table__show table__show_from"></span><span>$75 </span><span class="table__show">/ mo</span></div>
                                    <div class="table__cell"><span class="table__show table__show_from">From </span><span>$315 </span><span class="table__show">/ mo</span></div>
                                    <div class="table__cell"><a href="https://app.meet.ps/login/signup/?referer=wp-enterprise" class="try-for-free-purple" target="_blank">Try for free</a></div>
                                </div>
                                <div class="table__row table__row_price js-tabs-item" style="display: none;">
                                    <div class="table__cell"><span class="table__info">One-time cost</span></div>
                                    <div class="table__cell"><span>$0 </span><span class="table__show">/ mo</span></div>
                                    <div class="table__cell"><span>$79 </span><span class="table__show">/ mo</span></div>
                                    <div class="table__cell"><span class="table__show table__show_from">From </span><span>$499 </span><span class="table__show">/ mo</span></div>
                                    <div class="table__cell"><span class="table__show table__show_from">From </span><span>$599 </span><span class="table__show">/ mo</span></div>
                                </div>
                                <!-- row-1 table-3-->
                                <div class="table__row table__row_check">
                                    <div class="table__cell"><span class="table__info">Great for</span></div>
                                    <div class="table__cell">
                                        <ul class="check__bullets">
                                            <li><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg>Small events & meetings</li>
                                        </ul>
                                    </div>
                                    <div class="table__cell">
                                        <ul class="check__bullets">
                                            <li><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg>Larger meetings</li>
                                            <li><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg>Moderated Q&A</li>
                                        </ul>
                                    </div>
                                    <div class="table__cell">
                                        <ul class="check__bullets">
                                            <li><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg>Moderated town halls</li>
                                            <li><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg>Training & learning</li>
                                            <li><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg>Conferences and events</li>
                                            <li><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg>Friendly real-time competitions</li>
                                        </ul>
                                    </div>
                                    <div class="table__cell">
                                        <ul class="check__bullets">
                                            <li><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg>Enterprise deployment</li>
                                            <li><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg>Integrated solution</li>
                                            <li><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg>Online broadcasting</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="table__row">
                                    <div class="table__cell"><span class="table__info">Meetings</span><span class="table__tooltip tooltip" title="With all of our plans, you can run an unlimited number of meetings or events">i</span></div>
                                    <div class="table__cell"> <span class="table__footnote">Unlimited</span>
                                    </div>
                                    <div class="table__cell">Unlimited</div>
                                    <div class="table__cell">Unlimited</div>
                                    <div class="table__cell">Unlimited</div>
                                </div>
                                <!-- row-2 table-3-->
                                <div class="table__row">
                                    <div class="table__cell"><span class="table__info">Attendees</span><span class="table__tooltip tooltip" title="The number of unique attendees allowed to access a given meeting">i</span></div>
                                    <div class="table__cell">
                                        <div class="table__text">50</div><span class="table__tooltip tooltip" title="The meeting will reject attendees once it reaches the limit">i</span></div>
                                    <div class="table__cell">
                                        <div class="table__text">1000</div>
                                        <span class="table__limited">Additional: $2.99/ea</span>
                                        <span class="table__tooltip tooltip" title="Extra attendees can access the meeting but incur an overage fee">i</span></div>
                                    <div class="table__cell">
                                        <div class="table__text">1000</div>
                                        <span class="table__limited">Additional: $1.99/ea</span>
                                        <span class="table__tooltip tooltip" title="Extra attendees can access the meeting but incur an overage fee">i</span></div>
                                    <div class="table__cell">
                                        <div class="table__text">1500 & up</div>
                                        <span class="table__limited">Additional: $1.99/ea</span>
                                        <span class="table__tooltip tooltip" title="Extra attendees can access the meeting but incur an overage fee">i</span></div>
                                </div>
                                <!-- row-3 table-3-->
                                <div class="table__row">
                                    <div class="table__cell"><span class="table__info">Admins</span><span class="table__tooltip tooltip" title="Presenters or others within your organization who can create or manage meetings">i</span></div>
                                    <div class="table__cell">1</div>
                                    <div class="table__cell">1</div>
                                    <div class="table__cell">1</div>
                                    <div class="table__cell">
                                        <div class="table__text">2 & up</div>
                                        <span class="table__tooltip tooltip" title="Upgrade your plan with user accounts for the admins in your organization">i</span>
                                    </div>
                                </div>
                                <!-- row-4 table-3-->
                                <div class="table__wrap js-accord-item">
                                    <div class="table__row js-accord-head">
                                        <div class="table__cell"><span class="table__info">Security</span><span class="table__tooltip tooltip" title="We adhere to modern security standards for cloud software">i</span></div>
                                        <div class="table__cell"><svg class="icon icon-shield"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-shield"></use></svg></div>
                                        <div class="table__cell"><svg class="icon icon-shield"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-shield"></use></svg></div>
                                        <div class="table__cell"><svg class="icon icon-shield"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-shield"></use></svg></div>
                                        <div class="table__cell"><svg class="icon icon-shield"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-shield"></use></svg></div>
                                    </div>
                                    <div class="table__body js-accord-body">
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Standard Enterprise grade security</span><span class="table__tooltip tooltip" title="Authentication provided by the Google Cloud">i</span></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">SSL</span><span class="table__tooltip tooltip" title="All communication with our platform is encrypted">i</span></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table__wrap js-accord-item">
                                    <div class="table__row js-accord-head">
                                        <div class="table__cell"><span class="table__info">Basic Features</span></div>
                                        <div class="table__cell">
                                            <div style="opacity: .2;"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                    </div>
                                    <div class="table__body js-accord-body">
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Q&A with upvotes</span><span class="table__tooltip tooltip" title="Collect questions from your audience before, during or after the event. Attendees can upvote questions so you can focus on the most relevant questions.">i</span></div>
                                            <div
                                                    class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Anonymity</span><span class="table__tooltip tooltip" title="Attendees participate without revealing their identity">i</span></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Basic Polling</span></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg><span class="table__limited">Limit of 3</span></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Poll Type: Single answer</span></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Poll Type: Yes / No</span><span class="table__tooltip tooltip" title="A binary poll where respondent has to choose between two alternatives">i</span></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Poll Type: Rating</span><span class="table__tooltip tooltip" title="A type of poll where respondent has to reply with 1 to 10 answer">i</span></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">CSV Export</span><span class="table__tooltip tooltip" title="Export submitted questions and polls in CSV format">i</span></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>


                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Q&A: Moderation</span><span class="table__tooltip tooltip" title="See and approve submitted questions before they are shown to the audience">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Q&A: Editing</span><span class="table__tooltip tooltip" title="Edit submitted questions and comments for clarity.">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Q&A With Comments</span><span class="table__tooltip tooltip" title="Attendees can leave comments under each question. Boosts discussion and engagement">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Poll Type: Multiple answer</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Poll Type: Free text</span><span class="table__tooltip tooltip" title="Respondent can answer poll question with a free text answer ">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Polls: Hide results</span><span class="table__tooltip tooltip" title="Hides the poll results of the entire audience from attendees">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Prompt for name</span><span class="table__tooltip tooltip" title="Request attendee's name on login and link it to their meeting activity">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Prompt for email</span><span class="table__tooltip tooltip" title="Request attendee's email on login and link it to their meeting activity">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Broadcast View</span><span class="table__tooltip tooltip" title="Present polls and questions on the large screen in front of the room. Can also be embedded in slides.">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                    </div>
                                </div>
                                <div class="table__wrap js-accord-item">
                                    <div class="table__row js-accord-head">
                                        <div class="table__cell"><span class="table__info">Advanced Features</span></div>
                                        <div class="table__cell"></div>
                                        <div class="table__cell"></div>
                                        <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                    </div>
                                    <div class="table__body js-accord-body">

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Raffles</span><span class="table__tooltip tooltip" title="Boost audience engagement by running a raffle. In a raffle, a single audience member is selected at random. Great as ice breakers or a way to collect emails.">i</span></div>
                                            <div
                                                    class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Raffle for email</span><span class="table__tooltip tooltip" title="Ask attendees to submit their email in order to win a prize">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Pulse</span><span class="table__tooltip tooltip" title="Unique feature to monitor your audience's reaction in real time. Great for large online meetings where you can't read body language.">i</span></div>
                                            <div
                                                    class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Surveys</span><span class="table__tooltip tooltip" title="Group multiple poll questions to be shown on a single screen and display them before, during or after the meeting">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Surveys: Add instructions</span><span class="table__tooltip tooltip" title="Separate questions with custom instruction text">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Surveys: Optional questions</span><span class="table__tooltip tooltip" title="Include in your survey questions with no required answer">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Entry surveys </span><span class="table__tooltip tooltip" title="Surveys before or after the meeting that your attendee is required to answer">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Q&A: Pre-Meeting</span><span class="table__tooltip tooltip" title="Collect questions from attendees before the meeting even starts">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Follow up on unapproved questions</span><span class="table__tooltip tooltip" title="Get more info from the questioner by sending a comment to just them.">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Poll Type: NPS</span><span class="table__tooltip tooltip" title="Net Promoter Score poll — for measuring employee or customer satisfaction.">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Poll Type: Preference order</span><span class="table__tooltip tooltip" title="A type of poll where atendees have to rank all answers according to their preferences">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Polls: Add Images</span><span class="table__tooltip tooltip" title="Illustrate your question with an image. Or, use image as your answer.">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>


                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Text formatting</span><span class="table__tooltip tooltip" title="Use formatted text or text of different sizes">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Custom thank you message</span><span class="table__tooltip tooltip" title="Add a thank you message to be shown to the user after they answer all of your polls and survey question">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Share Meeting Materials</span><span class="table__tooltip tooltip" title="Upload presentation materials and other files. Link to helpful resources on the web.">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Email invitations</span><span class="table__tooltip tooltip" title="Let all the attendees know about the meeting at once using the feature to send bulk email invitations">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Collect follow-up emails</span><span class="table__tooltip tooltip" title="Leave a call-to-action to collect your audience's emails. For example, &quot;Join our newsletter&quot; or &quot;Receive a 10%-off coupon&quot;">i</span></div>
                                            <div
                                                    class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Email submitted Questions</span><span class="table__tooltip tooltip" title="Send all the submitted questions to your email">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Announcements</span><span class="table__tooltip tooltip" title="Broadcast a message to all attendee screens at once">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table__wrap js-accord-item">
                                    <div class="table__row js-accord-head">
                                        <div class="table__cell"><span class="table__info">Quizzes</span><span class="table__tooltip tooltip" title="Test your attendee's knowledge by making your polls quizzes.">i</span></div>
                                        <div class="table__cell"></div>
                                        <div class="table__cell"></div>
                                        <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                    </div>
                                    <div class="table__body js-accord-body">
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Make any multiple choice poll a quiz</span><span class="table__tooltip tooltip" title="Choosing this option will let you designate a correct answer">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Multiple correct options</span><span class="table__tooltip tooltip" title="Use a Multiple Answer poll to select multiple correct options">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Leaderboards</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Hide correct answer</span><span class="table__tooltip tooltip" title="Don't show attendees the right answer even after they've answered">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Limit to one response</span><span class="table__tooltip tooltip" title="Use this option if you want to prevent attendees from changing their answer">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table__wrap js-accord-item">
                                    <div class="table__row js-accord-head">
                                        <div class="table__cell"><span class="table__info">Identity Management</span><span class="table__tooltip tooltip" title="By default MeetingPulse allows for anonymous participation.  Options to manage user identity are available">i</span></div>
                                        <div class="table__cell"></div>
                                        <div class="table__cell"></div>
                                        <div class="table__cell">
                                            <div style="opacity: .2;">
                                                <svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg>
                                            </div>
                                        </div>
                                        <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                    </div>
                                    <div class="table__body js-accord-body">
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Password protection</span><span class="table__tooltip tooltip" title="Select a password for the meeting to share with attendees.">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>

                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Individual attendee codes</span><span class="table__tooltip tooltip" title="Create unique codes for each attendee to get in the meeting.">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">SSO with Active Directory or G Suite</span><span class="table__tooltip tooltip" title="Integrate with your corporate identity system for identity validation and security.">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg><span class="table__tooltip tooltip" title="Set-Up Fee May Apply">i</span></div>
                                        </div>

                                    </div>
                                </div>
                                <div class="table__wrap js-accord-item">
                                    <div class="table__row js-accord-head">
                                        <div class="table__cell"><span class="table__info">Customization</span><span class="table__tooltip tooltip" title="Make MeetingPulse look like your company's tool">i</span></div>
                                        <div class="table__cell"></div>
                                        <div class="table__cell"></div>
                                        <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                    </div>
                                    <div class="table__body js-accord-body">
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Custom domain</span><span class="table__tooltip tooltip" title="Select a custom URL for your meeting instead of meet.ps">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg><span class="table__tooltip tooltip" title="Requires available domain">i</span></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg><span class="table__tooltip tooltip" title="Requires available domain">i</span></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Logo and color branding</span><span class="table__tooltip tooltip" title="Attendees will see your logo and color scheme">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Embed in your web page</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Dedicated server</span><span class="table__tooltip tooltip" title="A hosted server dedicated to your organization in our cloud">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell">$</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table__wrap js-accord-item">
                                    <div class="table__row js-accord-head">
                                        <div class="table__cell"><span class="table__info">Shared Ownership</span><span class="table__tooltip tooltip" title="Share full or partial admin access to meetings for speakers, moderators and more">i</span></div>
                                        <div class="table__cell"></div>
                                        <div class="table__cell"></div>
                                        <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                    </div>
                                    <div class="table__body js-accord-body">
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Meeting Roles</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Speaker View</span><span class="table__tooltip tooltip" title="Designate another admin to answer questions while you moderate the questions">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Message the speaker</span><span class="table__tooltip tooltip" title="Send and receive private messages from the meeting's Speaker">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Share meeting templates</span><span class="table__tooltip tooltip" title="Create a meeting template to share with admins who can make a customized copy">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                        <div class="table__row">
                                            <div class="table__cell"><span class="table__info">Enterprise Dashboard</span><span class="table__tooltip tooltip" title="Keep track of your invited team by monitoring the meeting stats for everyone">i</span></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                            <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table__row">
                                    <div class="table__cell"><span class="table__info">Basic Reports</span><span class="table__tooltip tooltip" title="Autogenerated graphical reports with PDF print options">i</span></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                    <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                </div>
                                <div class="table__row">
                                    <div class="table__cell"><span class="table__info">Custom Reports</span><span class="table__tooltip tooltip" title="Our team generates a report tailored to your needs for each meeting.">i</span></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg><span class="table__tooltip tooltip" title="Some restrictions may apply">i</span></div>
                                </div>
                                <div class="table__row">
                                    <div class="table__cell"><span class="table__info">API Access</span></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg></div>
                                </div>
                                <div class="table__row">
                                    <div class="table__cell"><span class="table__info">Rapid-Response Monitoring</span><span class="table__tooltip tooltip" title="Schedule a rapid-response support specialist for your most important meetings, 24/7/365">i</span></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"><svg class="icon icon-check-yes"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-check-yes"></use></svg><span class="table__tooltip tooltip" title="Some restrictions may apply">i</span></div>
                                </div>
                                <div class="table__row">
                                    <div class="table__cell"><span class="table__info">Custom Development</span></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell">$</div>
                                </div>
                                <div class="table__row">
                                    <div class="table__cell"><span class="table__info">On-site support</span></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell"></div>
                                    <div class="table__cell">$</div>
                                </div>
                                <div class="table__row">
                                    <div class="table__cell"><span class="table__info">Support</span></div>
                                    <div class="table__cell"><span class="mob-fix">Knowledgebase only</span></div>
                                    <div class="table__cell"><span class="mob-fix">Email and chat</span></div>
                                    <div class="table__cell"><span class="mob-fix">Phone, email & chat</span></div>
                                    <div class="table__cell" style="text-align: center;"><span class="mob-fix">Rapid-response<br>monitoring</span><span class="table__tooltip tooltip" title="Some restrictions may apply">i</span></div>
                                </div>

                                <!-- row-btns table-3-->
<!--                                <div class="table__row table__row_btns">-->
<!--                                    <div class="table__cell"></div>-->
<!--                                    <div class="table__cell"><a class="table__btn btn btn_white" href="https://meet.ps/login/signup/?referer=wp-full" data-gaevent="get_free">Start now</a></div>-->
<!--                                    <div class="table__cell"><a class="table__btn btn btn_white" href="https://meet.ps/login/signup?referer=wp-light" data-gaevent="get_trial">Free 2-week trial</a></div>-->
<!--                                    <div class="table__cell"><a class="table__btn btn btn_purple" href="https://meet.ps/login/signup/?referer=wp-full" data-gaevent="get_full_trial" target="_blank">Free 2-week trial</a></div>-->
<!--                                    <div class="table__cell"><a class="table__btn btn btn_white" href="#" data-popup=".js-popup-calendar" data-gaevent="request_demo">Request demo</a></div>-->
<!--                                </div>-->
                                <!-- row-other table-3-->
                                <div class="table__row table__row_other">
                                    <div class="table__cell"></div>
                                    <div class="table__cell"><a class="table__btn btn btn_purple" href="#">Get started</a></div>
                                    <div class="table__cell"><a class="table__btn btn btn_purple" href="#">Try for free</a></div>
                                    <div class="table__cell"><a class="table__btn btn btn_purple" href="#">Inquire</a></div>
                                    <div class="table__cell"><a class="table__btn btn btn_purple" href="#">Inquire</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!--One time message-->
                <div class="section__one-time-box" style="display: none;">For a one-time event, please purchase one of our monthly plans.</div>
                <!-- links-->
                <div class="section__table_bottom">
                    <div class="section__table_bottom-head">
                        Start your free trial
                    </div>
                    <div class="section__table_bottom-text">No matter which plan you end up choosing, you can
start by test-driving the Full Plan of Meeting Pulse</div>
                    <div class="section__table_bottom-buttons">
                        <a class="table__btn btn btn_purple" href="https://meet.ps/login/signup/?referer=wp-full" data-gaevent="get_full_trial"  target="_blank">Free 2-week trial</a>

                        <a class="table__btn btn btn_white" href="#" data-popup=".js-popup-calendar" data-gaevent="request_demo">Request demo</a>
                    </div>
                    <div class="section__table_bottom-details">No payment required.  Test drive the full featured platform for 2 weeks for free</div>

                </div>
            </div>
        </div>
        <!-- numbers-->
        <div class="numbers">
            <div class="numbers__center center">
                <div class="numbers__row">
                    <!-- logo-->
                    <div class="numbers__logo">
                        <a class="logo logo_white" href="#">
                            <div class="logo__name">meeting <br>pulse</div>
                            <div class="logo__wrap">
                                <div class="logo__icon"><svg class="icon icon-logo"><use xlink:href="/wp-content/themes/meetingpulse/img/sprite.svg#icon-logo"></use></svg></div>
                                <div class="logo__text">live audience platform</div>
                            </div>
                        </a>
                    </div>
                    <div class="numbers__info">
                        <div class="numbers__item">
                            <div class="numbers__value">25,000</div>
                            <div class="numbers__text">questions asked by participants</div>
                        </div>
                        <div class="numbers__item">
                            <div class="numbers__value">3,500+</div>
                            <div class="numbers__text">meetings & events</div>
                        </div>
                        <div class="numbers__item">
                            <div class="numbers__value">400,000+</div>
                            <div class="numbers__text">happy attendees</div>
                        </div>
                    </div>
                    <div class="numbers__btns">
                        <a class="numbers__btn btn btn_white btn_big" href="#pricing">Try it for free</a>
                        <a class="numbers__btn btn btn_border btn_big" href="#pricing">Request a demo</a>
                    </div>
                </div>
            </div>
        </div>
<?php get_footer(); ?>
