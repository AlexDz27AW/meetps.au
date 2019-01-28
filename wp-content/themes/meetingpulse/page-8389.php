<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <?php get_template_part( 'header', 'meta' ); ?>

    <link rel='stylesheet' href='<?php echo esc_url( get_template_directory_uri() ); ?>/css/app.css' />
    <!--[if IE]>
    <link rel='stylesheet' href='<?php echo esc_url( get_template_directory_uri() ); ?>/css/app-ie.css' />
    <![endif]-->
    <script type="text/javascript" src="/wp-includes/js/utm.js"></script>
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
            jQuery('#js-popup-main-video-btn1').on('click', function(e){
                e.stopPropagation();
                var video = jQuery('.js-popup-main-video1 iframe').attr("src");
                jQuery('.js-popup-main-video1 iframe').attr("src","");
                video += '&autoplay=1';
                console.log(video)
                jQuery('.js-popup-main-video1 iframe').attr("src",video);
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
			  	<div class="main__links" id="learn-more-button">
				<a class="links__blue" href="#pricing" >Learn More</a>
				</div>
                            <a class="header__item m" href="/blog" style="display: none">Blog</a>
                        </nav>
                        <div class="header__container"><a class="header__btn btn btn_border" href="https://app.meet.ps/login">Log in</a>
                            <div class="header__bottom"><a class="header__phone" href="#">USA <span class="header__numbers">415-450-9646</span></a><a class="header__phone" href="#">USA <span class="header__numbers">415-123-4321</span></a></div>
                        </div><button class="header__burger burger js-main-burger"><svg id="burger-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"><title>Show / Hide Navigation</title><rect class="burger-svg__base" width="50" height="50" fill="#1f201c"></rect><g class="burger-svg__bars" fill="#fff"><rect class="burger-svg__bar burger-svg__bar-1" x="14" y="18" width="22" height="2"></rect><rect class="burger-svg__bar burger-svg__bar-2" x="14" y="24" width="22" height="2"></rect><rect class="burger-svg__bar burger-svg__bar-3" x="14" y="30" width="22" height="2"></rect></g></svg></button>
                    </div>
                </header>
            </div>
            <div class="main__body">
				<div class="main_video_icon">
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/scZ9eUmzh_o?rel=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media" allowfullscreen></iframe>
                </div>

                <div class="main__title" style="font-size:40px;">Find out why people are leaving Poll Everywhere for MeetingPulse!</div>
                <div class="main__info">Upgrade your meetings and events with the latest, live interaction tools your attendees want!</div>
                <!-- links-->
                <div class="main__links" style="margin-top: 20px;margin-bottom: 20px;">
                    <a class="links__blue" href="#pricing" >Learn More</a>
                </div>
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
                                    <div class="quality__title">Live raffles & quizzes</div>
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
            <div class="quality__center center"><a class="quality__btn btn btn_white" href="/features">View all features</a></div>
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
			<div class="main_video_icon">
				<iframe width="100%" height="315" src="https://www.youtube.com/embed/r7ZK6VzlU4A?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
            <div style="text-align: center; margin-top: 40px;">
                <a class="links__blue" href="#pricing" style="background: white;">Learn More</a>
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
                            <div class="technology__text">We help you plan and setup your events based on our extensive audience engagement experience. MeetingPulse has been used at over 1000 events.</div>
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
                <a class="technology__btn btn btn_white" data-gaevent="get_in_touch" href="#pricing">Learn More</a>
            </div>
        </div>
    </div>
    <!-- company-->
    <div id="clients"></div>
    <div class="company">
        <div class="company__video"><video autoplay muted loop>
            <source src="/wp-content/themes/meetingpulse/video/iStock-514252612.mp4" type="video/mp4">
        </video></div>
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
            <div class="section__center center">
                <div class="section__title pricing_section__title">Pricing</div>
            </div>
        </div>
        <?php the_field('price_table'); ?>
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
            </div>
        </div>
    </div>
    <?php get_footer(); ?>
