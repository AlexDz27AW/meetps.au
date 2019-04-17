<?php

/**
 * Template Name: Presentations landing page
 */

?>

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
  <div class="main js-main lp-main">
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
            <div class="main__links" id="learn-more-button">
              <a class="links__blue link-white" href="#pricing" >Contact sales</a>
            </div>
            <div class="header__container"><a class="header__btn btn btn_border" href="https://app.meet.ps/login">Log in</a>
              <div class="header__bottom"><a class="header__phone" href="#">USA <span class="header__numbers">415-450-9646</span></a><a class="header__phone" href="#">USA <span class="header__numbers">415-123-4321</span></a></div>
            </div><button class="header__burger burger js-main-burger"><svg id="burger-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"><title>Show / Hide Navigation</title><rect class="burger-svg__base" width="50" height="50" fill="#1f201c"></rect><g class="burger-svg__bars" fill="#fff"><rect class="burger-svg__bar burger-svg__bar-1" x="14" y="18" width="22" height="2"></rect><rect class="burger-svg__bar burger-svg__bar-2" x="14" y="24" width="22" height="2"></rect><rect class="burger-svg__bar burger-svg__bar-3" x="14" y="30" width="22" height="2"></rect></g></svg></button>
          </div>
        </header>
      </div>
      <div class="main__body">
        <div class="main__title">The Easiest Way To Make Your Presentation Better!</div>
        <div class="main__info">Upgrade your meetings and events with the latest, live interaction tools your attendees want!</div>
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
  <!-- simple-setup-->
  <div class="simple-setup">
    <div class="section-icon-title-wrapper center">

      <div class="section-icon-title simple-setup__section-icon-title">
        <div class="section-icon-title__icon">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="40" height="40" fill="url(#pattern0)"/>
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
              <rect width="40" height="40" fill="url(#pattern1)"/>
            </mask>
            <g mask="url(#mask0)">
              <rect width="40" height="40" rx="5" fill="white"/>
            </g>
            <circle cx="20" cy="19" r="14" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9541 9.39954L15.0314 23.0991V15.5754H12.6929V29.3995L28.6929 11.0151L26.9541 9.39954Z" fill="#8665FF"/>
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0" transform="scale(0.00195312)"/>
              </pattern>
              <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0" transform="scale(0.00195312)"/>
              </pattern>
              <image id="image0" width="512" height="512" xlink:href="data:image/png;base64,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"/>
            </defs>
          </svg>
        </div>
        <h2 class="simple-setup__title section-icon-title__title">Super Simple Setup</h2>
      </div>

    </div>

    <div class="simple-setup__section-features-list-wrapper center">
      <ul class="section-features-list">
        <li class="section-features-list__item">
          <div class="section-features-list-item__icon">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.0889 4.2107L28.0887 4.21062C25.8466 3.26398 23.4619 2.78 21 2.78C18.5381 2.78 16.1534 3.26398 13.9113 4.21062L13.9111 4.2107C11.7403 5.12887 9.78998 6.44575 8.11787 8.11787C6.44575 9.78998 5.12887 11.7403 4.2107 13.9111L4.21062 13.9113C3.26396 16.1534 2.78 18.5451 2.78 21C2.78 23.4549 3.26396 25.8466 4.21062 28.0887L4.2107 28.0889C5.12887 30.2597 6.44575 32.21 8.11787 33.8821C9.78998 35.5542 11.7403 36.8711 13.9111 37.7893L13.9113 37.7894C16.1534 38.736 18.5381 39.22 21 39.22C23.4549 39.22 25.8466 38.736 28.0887 37.7894L28.0889 37.7893C30.2597 36.8711 32.21 35.5542 33.8821 33.8821C35.5542 32.21 36.8711 30.2597 37.7893 28.0889L37.7894 28.0887C38.736 25.8466 39.22 23.4549 39.22 21C39.22 18.5451 38.736 16.1534 37.7894 13.9113L37.7893 13.9111C36.8711 11.7403 35.5542 9.78998 33.8821 8.11787C32.21 6.44575 30.2597 5.12887 28.0889 4.2107ZM0.3 21C0.3 9.56668 9.56668 0.3 21 0.3C32.4333 0.3 41.7 9.56668 41.7 21C41.7 32.4333 32.4333 41.7 21 41.7C9.56668 41.7 0.3 32.4333 0.3 21Z" fill="#8665FF" stroke="#8665FF" stroke-width="0.6"/>
              <path d="M22.2401 20.356V20.4803L22.328 20.5681L27.256 25.4961C27.7408 25.981 27.7408 26.764 27.256 27.2489L27.2559 27.2489L27.2535 27.2513C27.01 27.5005 26.6958 27.623 26.3831 27.623C26.065 27.623 25.7441 27.5037 25.5033 27.263L25.5032 27.2629L19.7601 21.5128V7.90301C19.7601 7.21469 20.3118 6.66301 21.0001 6.66301C21.6884 6.66301 22.2401 7.21469 22.2401 7.90301V20.356Z" fill="#8665FF" stroke="#8665FF" stroke-width="0.6"/>
            </svg>
          </div>
          <div class="section-features-list-item__text">
            Make your presentation more engaging in less than 3 minutes!
          </div>
        </li>
        <li class="section-features-list__item">
          <div class="section-features-list-item__icon">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.9132 1.00373C4.65698 1.03673 4.46869 1.25801 4.4784 1.51615V24.4209C2.52374 24.6694 1 26.329 1 28.3496C1 30.3703 2.52374 32.0454 4.4784 32.2939V40.2753C4.47646 40.4092 4.52887 40.5373 4.62204 40.6305C4.71521 40.7256 4.84138 40.78 4.97531 40.78C5.10925 40.78 5.23542 40.7256 5.32859 40.6305C5.42176 40.5373 5.47417 40.4092 5.47223 40.2753V32.2939C7.42689 32.0454 8.95062 30.3703 8.95062 28.3496C8.95062 26.329 7.42689 24.6694 5.47223 24.4209V1.51615C5.47805 1.37057 5.41982 1.22887 5.31112 1.12988C5.20436 1.03088 5.05878 0.986239 4.9132 1.00371V1.00373ZM20.8144 1.00373C20.5582 1.03673 20.3699 1.25801 20.3796 1.51615V9.51348C18.425 9.76194 16.9012 11.4215 16.9012 13.4422C16.9012 15.4628 18.425 17.138 20.3796 17.3864V40.2753C20.3777 40.4092 20.4301 40.5373 20.5233 40.6305C20.6165 40.7256 20.7426 40.78 20.8766 40.78C21.0105 40.78 21.1367 40.7256 21.2298 40.6305C21.323 40.5373 21.3754 40.4092 21.3735 40.2753V17.3864C23.3281 17.138 24.8519 15.4628 24.8519 13.4422C24.8519 11.4215 23.3281 9.76194 21.3735 9.51348V1.51615C21.3793 1.37057 21.3211 1.22887 21.2124 1.12988C21.1056 1.03088 20.96 0.986239 20.8144 1.00371V1.00373ZM36.7157 1.00373C36.4595 1.03673 36.2712 1.25801 36.2809 1.51615V24.4209C34.3262 24.6694 32.8025 26.329 32.8025 28.3496C32.8025 30.3703 34.3262 32.0454 36.2809 32.2939V40.2753C36.2789 40.4092 36.3314 40.5373 36.4245 40.6305C36.5177 40.7256 36.6439 40.78 36.7778 40.78C36.9117 40.78 37.0379 40.7256 37.1311 40.6305C37.2243 40.5373 37.2767 40.4092 37.2747 40.2753V32.2939C39.2294 32.0454 40.7531 30.3703 40.7531 28.3496C40.7531 26.329 39.2294 24.6694 37.2747 24.4209V1.51615C37.2805 1.37057 37.2223 1.22887 37.1136 1.12988C37.0069 1.03088 36.8613 0.986239 36.7157 1.00371V1.00373ZM20.8766 10.4605C22.5284 10.4605 23.858 11.7902 23.858 13.442C23.858 15.0938 22.5284 16.4235 20.8766 16.4235C19.2247 16.4235 17.8951 15.0938 17.8951 13.442C17.8951 11.7902 19.2247 10.4605 20.8766 10.4605ZM4.97532 25.3679C6.62716 25.3679 7.9568 26.6976 7.9568 28.3494C7.9568 30.0012 6.62716 31.3309 4.97532 31.3309C3.32348 31.3309 1.99384 30.0012 1.99384 28.3494C1.99384 26.6976 3.32348 25.3679 4.97532 25.3679ZM36.7778 25.3679C38.4297 25.3679 39.7593 26.6976 39.7593 28.3494C39.7593 30.0012 38.4297 31.3309 36.7778 31.3309C35.126 31.3309 33.7963 30.0012 33.7963 28.3494C33.7963 26.6976 35.126 25.3679 36.7778 25.3679Z" fill="#8665FF"/>
              <path d="M4.9132 1.00373L5.04094 1.99554L5.9132 1.88319V1.00373H4.9132ZM4.4784 1.51615H5.4784V1.49736L5.47769 1.47858L4.4784 1.51615ZM4.4784 24.4209L4.60449 25.4129L5.4784 25.3018V24.4209H4.4784ZM4.4784 32.2939H5.4784V31.4129L4.60449 31.3018L4.4784 32.2939ZM4.4784 40.2753L5.47829 40.2898L5.4784 40.2825V40.2753H4.4784ZM4.62204 40.6305L5.33644 39.9307L5.32914 39.9234L4.62204 40.6305ZM5.32859 40.6305L4.62145 39.9234L4.61425 39.9307L5.32859 40.6305ZM5.47223 40.2753H4.47223V40.2825L4.47233 40.2898L5.47223 40.2753ZM5.47223 32.2939L5.34613 31.3018L4.47223 31.4129V32.2939H5.47223ZM5.47223 24.4209H4.47223V25.3018L5.34613 25.4129L5.47223 24.4209ZM5.47223 1.51615L4.47303 1.47618L4.47223 1.49616V1.51615H5.47223ZM5.31112 1.12988L4.63114 1.86317L4.63778 1.86922L5.31112 1.12988ZM4.9132 1.00371L4.79407 0.0108264L3.9132 0.116512V1.00371H4.9132ZM20.8144 1.00373L20.9422 1.99554L21.8144 1.88319V1.00373H20.8144ZM20.3796 1.51615H21.3796V1.49736L21.3789 1.47858L20.3796 1.51615ZM20.3796 9.51348L20.5057 10.5055L21.3796 10.3944V9.51348H20.3796ZM20.3796 17.3864H21.3796V16.5055L20.5057 16.3944L20.3796 17.3864ZM20.3796 40.2753L21.3795 40.2898L21.3796 40.2825V40.2753H20.3796ZM20.5233 40.6305L21.2377 39.9307L21.2304 39.9234L20.5233 40.6305ZM21.2298 40.6305L20.5227 39.9234L20.5155 39.9307L21.2298 40.6305ZM21.3735 40.2753H20.3735V40.2825L20.3736 40.2898L21.3735 40.2753ZM21.3735 17.3864L21.2474 16.3944L20.3735 16.5055V17.3864H21.3735ZM21.3735 9.51348H20.3735V10.3944L21.2474 10.5055L21.3735 9.51348ZM21.3735 1.51615L20.3743 1.47618L20.3735 1.49616V1.51615H21.3735ZM21.2124 1.12988L20.5324 1.86317L20.539 1.86922L21.2124 1.12988ZM20.8144 1.00371L20.6953 0.0108264L19.8144 0.116512V1.00371H20.8144ZM36.7157 1.00373L36.8434 1.99554L37.7157 1.88319V1.00373H36.7157ZM36.2809 1.51615H37.2809V1.49736L37.2802 1.47858L36.2809 1.51615ZM36.2809 24.4209L36.407 25.4129L37.2809 25.3018V24.4209H36.2809ZM36.2809 32.2939H37.2809V31.4129L36.407 31.3018L36.2809 32.2939ZM36.2809 40.2753L37.2808 40.2898L37.2809 40.2825V40.2753H36.2809ZM36.4245 40.6305L37.1389 39.9307L37.1316 39.9234L36.4245 40.6305ZM37.1311 40.6305L36.4239 39.9234L36.4167 39.9307L37.1311 40.6305ZM37.2747 40.2753H36.2747V40.2825L36.2748 40.2898L37.2747 40.2753ZM37.2747 32.2939L37.1486 31.3018L36.2747 31.4129V32.2939H37.2747ZM37.2747 24.4209H36.2747V25.3018L37.1486 25.4129L37.2747 24.4209ZM37.2747 1.51615L36.2755 1.47618L36.2747 1.49616V1.51615H37.2747ZM37.1136 1.12988L36.4336 1.86317L36.4403 1.86922L37.1136 1.12988ZM36.7157 1.00371L36.5966 0.0108264L35.7157 0.116512V1.00371H36.7157ZM4.78546 0.0119231C4.01888 0.110655 3.44987 0.776002 3.4791 1.55372L5.47769 1.47858C5.48752 1.74002 5.29507 1.96281 5.04094 1.99554L4.78546 0.0119231ZM3.4784 1.51615V24.4209H5.4784V1.51615H3.4784ZM4.3523 23.4289C1.91216 23.7391 0 25.8114 0 28.3496H2C2 26.8465 3.13531 25.5997 4.60449 25.4129L4.3523 23.4289ZM0 28.3496C0 30.8829 1.90726 32.9751 4.3523 33.2859L4.60449 31.3018C3.14021 31.1157 2 29.8576 2 28.3496H0ZM3.4784 32.2939V40.2753H5.4784V32.2939H3.4784ZM3.4785 40.2608C3.47264 40.6648 3.63056 41.0532 3.91493 41.3376L5.32914 39.9234C5.42717 40.0214 5.48027 40.1537 5.47829 40.2898L3.4785 40.2608ZM3.90767 41.3303C4.18477 41.6132 4.56669 41.78 4.97531 41.78V39.78C5.11606 39.78 5.24564 39.8381 5.33641 39.9307L3.90767 41.3303ZM4.97531 41.78C5.38396 41.78 5.76586 41.6131 6.04293 41.3303L4.61425 39.9307C4.70497 39.8381 4.83453 39.78 4.97531 39.78V41.78ZM6.03569 41.3376C6.32006 41.0532 6.47798 40.6648 6.47212 40.2608L4.47233 40.2898C4.47036 40.1537 4.52346 40.0214 4.62149 39.9234L6.03569 41.3376ZM6.47223 40.2753V32.2939H4.47223V40.2753H6.47223ZM5.59832 33.2859C8.04336 32.9751 9.95062 30.8829 9.95062 28.3496H7.95062C7.95062 29.8576 6.81041 31.1157 5.34613 31.3018L5.59832 33.2859ZM9.95062 28.3496C9.95062 25.8114 8.03846 23.7391 5.59832 23.4289L5.34613 25.4129C6.81531 25.5997 7.95062 26.8465 7.95062 28.3496H9.95062ZM6.47223 24.4209V1.51615H4.47223V24.4209H6.47223ZM6.47143 1.55612C6.48892 1.11878 6.31404 0.690699 5.98445 0.390538L4.63778 1.86922C4.5256 1.76705 4.46718 1.62236 4.47303 1.47618L6.47143 1.55612ZM5.99107 0.396617C5.65872 0.0884354 5.21702 -0.0399172 4.79407 0.0108264L5.03232 1.99659C4.90054 2.0124 4.75 1.97333 4.63117 1.86314L5.99107 0.396617ZM3.9132 1.00371V1.00373H5.9132V1.00371H3.9132ZM20.6867 0.0119231C19.9201 0.110655 19.3511 0.776002 19.3804 1.55372L21.3789 1.47858C21.3888 1.74002 21.1963 1.96281 20.9422 1.99554L20.6867 0.0119231ZM19.3796 1.51615V9.51348H21.3796V1.51615H19.3796ZM20.2535 8.52146C17.8134 8.83163 15.9012 10.904 15.9012 13.4422H17.9012C17.9012 11.9391 19.0366 10.6922 20.5057 10.5055L20.2535 8.52146ZM15.9012 13.4422C15.9012 15.9755 17.8085 18.0677 20.2535 18.3785L20.5057 16.3944C19.0415 16.2083 17.9012 14.9502 17.9012 13.4422H15.9012ZM19.3796 17.3864V40.2753H21.3796V17.3864H19.3796ZM19.3797 40.2608C19.3739 40.6648 19.5318 41.0532 19.8162 41.3376L21.2304 39.9234C21.3284 40.0214 21.3815 40.1537 21.3795 40.2898L19.3797 40.2608ZM19.8089 41.3303C20.086 41.6132 20.4679 41.78 20.8766 41.78V39.78C21.0173 39.78 21.1469 39.8381 21.2377 39.9307L19.8089 41.3303ZM20.8766 41.78C21.2852 41.78 21.6671 41.6131 21.9442 41.3303L20.5155 39.9307C20.6062 39.8381 20.7358 39.78 20.8766 39.78V41.78ZM21.9369 41.3376C22.2213 41.0532 22.3792 40.6648 22.3734 40.2608L20.3736 40.2898C20.3716 40.1537 20.4247 40.0214 20.5227 39.9234L21.9369 41.3376ZM22.3735 40.2753V17.3864H20.3735V40.2753H22.3735ZM21.4996 18.3785C23.9446 18.0677 25.8519 15.9755 25.8519 13.4422H23.8519C23.8519 14.9502 22.7117 16.2083 21.2474 16.3944L21.4996 18.3785ZM25.8519 13.4422C25.8519 10.904 23.9397 8.83163 21.4996 8.52146L21.2474 10.5055C22.7166 10.6922 23.8519 11.9391 23.8519 13.4422H25.8519ZM22.3735 9.51348V1.51615H20.3735V9.51348H22.3735ZM22.3727 1.55612C22.3902 1.11878 22.2153 0.690699 21.8857 0.390538L20.539 1.86922C20.4268 1.76705 20.3684 1.62236 20.3743 1.47618L22.3727 1.55612ZM21.8923 0.396617C21.56 0.0884354 21.1183 -0.0399172 20.6953 0.0108264L20.9336 1.99659C20.8018 2.0124 20.6512 1.97333 20.5324 1.86314L21.8923 0.396617ZM19.8144 1.00371V1.00373H21.8144V1.00371H19.8144ZM36.5879 0.0119231C35.8214 0.110655 35.2524 0.776002 35.2816 1.55372L37.2802 1.47858C37.29 1.74002 37.0976 1.96281 36.8434 1.99554L36.5879 0.0119231ZM35.2809 1.51615V24.4209H37.2809V1.51615H35.2809ZM36.1548 23.4289C33.7146 23.7391 31.8025 25.8114 31.8025 28.3496H33.8025C33.8025 26.8465 34.9378 25.5997 36.407 25.4129L36.1548 23.4289ZM31.8025 28.3496C31.8025 30.8829 33.7098 32.9751 36.1548 33.2859L36.407 31.3018C34.9427 31.1157 33.8025 29.8576 33.8025 28.3496H31.8025ZM35.2809 32.2939V40.2753H37.2809V32.2939H35.2809ZM35.281 40.2608C35.2751 40.6648 35.4331 41.0532 35.7174 41.3376L37.1316 39.9234C37.2297 40.0214 37.2828 40.1537 37.2808 40.2898L35.281 40.2608ZM35.7102 41.3303C35.9873 41.6132 36.3692 41.78 36.7778 41.78V39.78C36.9186 39.78 37.0481 39.8381 37.1389 39.9307L35.7102 41.3303ZM36.7778 41.78C37.1865 41.78 37.5684 41.6131 37.8454 41.3303L36.4167 39.9307C36.5075 39.8381 36.637 39.78 36.7778 39.78V41.78ZM37.8382 41.3376C38.1226 41.0532 38.2805 40.6648 38.2746 40.2608L36.2748 40.2898C36.2728 40.1537 36.3259 40.0214 36.424 39.9234L37.8382 41.3376ZM38.2747 40.2753V32.2939H36.2747V40.2753H38.2747ZM37.4008 33.2859C39.8459 32.9751 41.7531 30.8829 41.7531 28.3496H39.7531C39.7531 29.8576 38.6129 31.1157 37.1486 31.3018L37.4008 33.2859ZM41.7531 28.3496C41.7531 25.8114 39.841 23.7391 37.4008 23.4289L37.1486 25.4129C38.6178 25.5997 39.7531 26.8465 39.7531 28.3496H41.7531ZM38.2747 24.4209V1.51615H36.2747V24.4209H38.2747ZM38.2739 1.55612C38.2914 1.11878 38.1165 0.690699 37.7869 0.390538L36.4403 1.86922C36.3281 1.76705 36.2697 1.62236 36.2755 1.47618L38.2739 1.55612ZM37.7936 0.396617C37.4612 0.0884354 37.0195 -0.0399172 36.5966 0.0108264L36.8348 1.99659C36.703 2.0124 36.5525 1.97333 36.4337 1.86314L37.7936 0.396617ZM35.7157 1.00371V1.00373H37.7157V1.00371H35.7157ZM20.8766 11.4605C21.9761 11.4605 22.858 12.3424 22.858 13.442H24.858C24.858 11.2379 23.0807 9.46051 20.8766 9.46051V11.4605ZM22.858 13.442C22.858 14.5416 21.9761 15.4235 20.8766 15.4235V17.4235C23.0807 17.4235 24.858 15.6461 24.858 13.442H22.858ZM20.8766 15.4235C19.777 15.4235 18.8951 14.5416 18.8951 13.442H16.8951C16.8951 15.6461 18.6724 17.4235 20.8766 17.4235V15.4235ZM18.8951 13.442C18.8951 12.3424 19.777 11.4605 20.8766 11.4605V9.46051C18.6724 9.46051 16.8951 11.2379 16.8951 13.442H18.8951ZM4.97532 26.3679C6.07488 26.3679 6.9568 27.2498 6.9568 28.3494H8.9568C8.9568 26.1453 7.17945 24.3679 4.97532 24.3679V26.3679ZM6.9568 28.3494C6.9568 29.449 6.07488 30.3309 4.97532 30.3309V32.3309C7.17945 32.3309 8.9568 30.5535 8.9568 28.3494H6.9568ZM4.97532 30.3309C3.87576 30.3309 2.99384 29.449 2.99384 28.3494H0.993835C0.993835 30.5535 2.77119 32.3309 4.97532 32.3309V30.3309ZM2.99384 28.3494C2.99384 27.2498 3.87576 26.3679 4.97532 26.3679V24.3679C2.77119 24.3679 0.993835 26.1453 0.993835 28.3494H2.99384ZM36.7778 26.3679C37.8774 26.3679 38.7593 27.2498 38.7593 28.3494H40.7593C40.7593 26.1453 38.9819 24.3679 36.7778 24.3679V26.3679ZM38.7593 28.3494C38.7593 29.449 37.8774 30.3309 36.7778 30.3309V32.3309C38.9819 32.3309 40.7593 30.5535 40.7593 28.3494H38.7593ZM36.7778 30.3309C35.6783 30.3309 34.7963 29.449 34.7963 28.3494H32.7963C32.7963 30.5535 34.5737 32.3309 36.7778 32.3309V30.3309ZM34.7963 28.3494C34.7963 27.2498 35.6783 26.3679 36.7778 26.3679V24.3679C34.5737 24.3679 32.7963 26.1453 32.7963 28.3494H34.7963Z" fill="#8665FF"/>
            </svg>
          </div>
          <div class="section-features-list-item__text">
            The MeetingPulse PowerPoint add-in will let access all of our features seamlessly
          </div>
        </li>
        <li class="section-features-list__item">
          <div class="section-features-list-item__icon">
            <svg width="44" height="49" viewBox="0 0 44 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.942 25.7002C41.5621 25.3198 41.1023 25.0291 40.596 24.849C40.0897 24.669 39.5497 24.6042 39.0152 24.6595C39.1481 24.0791 39.1393 23.4752 38.9895 22.899C38.8397 22.3227 38.5534 21.7911 38.1548 21.3492C37.7562 20.9072 37.2571 20.5679 36.6997 20.3601C36.1424 20.1523 35.5432 20.0819 34.9529 20.1551C35.0097 19.89 35.0382 19.6195 35.0378 19.3483C35.0373 18.4087 34.6882 17.5029 34.0581 16.8065C33.4281 16.1101 32.5621 15.6729 31.6282 15.5796L38.0449 9.15605C38.7547 8.4461 39.1537 7.48296 39.1541 6.4785C39.1546 5.47405 38.7564 4.51056 38.0472 3.8C37.338 3.08944 36.3759 2.69 35.3725 2.68957C34.3692 2.68913 33.4067 3.08774 32.6969 3.79769L20.0215 16.4868C19.161 17.3482 18.1237 17.9448 17.0209 18.2128C16.1941 18.4139 15.359 18.4162 14.6873 18.2258C14.0235 17.192 13.4003 16.3458 13.2655 16.1647C11.8986 14.2972 10.6393 12.3965 9.17083 10.1164C7.66083 7.77522 5.75199 6.7687 3.93317 7.35607C3.44661 7.51273 2.98498 7.79832 2.51966 8.22856C1.69518 8.99246 0.94088 9.84971 1.00366 10.9445C1.04982 11.7832 1.53361 12.5356 2.26345 13.6743C2.67892 14.3189 3.19087 15.1217 3.7379 16.1235C4.06612 16.7266 4.31309 17.3519 4.57484 18.0141C4.67824 18.2766 4.7858 18.5479 4.89798 18.8196C5.23774 19.6334 5.66936 20.7115 5.99712 21.8331C6.53815 23.6816 6.24455 25.4604 5.93434 27.3417C5.71045 28.6971 5.47917 30.0987 5.56503 31.5665C5.67444 33.4233 6.19562 35.306 7.1138 37.1619C7.97936 38.912 9.1519 40.5354 10.5987 41.9819C13.2687 44.6548 16.5537 46.4017 19.8543 46.8998C20.4697 46.994 21.0913 47.0419 21.7138 47.0431C22.6378 47.0471 23.5582 46.9281 24.4508 46.6891C25.9437 46.2838 27.2298 45.5486 28.2731 44.5042L38.8638 33.9053L41.9415 30.8243C42.6193 30.1443 42.9999 29.2229 43 28.2623C43.0001 27.3018 42.6196 26.3803 41.942 25.7002ZM37.045 22.1917C37.4797 22.6277 37.7239 23.2186 37.7239 23.8346C37.7239 24.4506 37.4797 25.0415 37.045 25.4775L36.8239 25.6993L33.7462 28.7803L33.5241 29.0026C33.3092 29.2208 33.0532 29.3942 32.771 29.513C32.4887 29.6317 32.1858 29.6934 31.8797 29.6945C31.5736 29.6956 31.2702 29.636 30.9872 29.5192C30.7041 29.4024 30.447 29.2308 30.2305 29.0141C30.014 28.7974 29.8425 28.5399 29.7258 28.2566C29.6091 27.9733 29.5495 27.6696 29.5505 27.3632C29.5516 27.0567 29.6131 26.7535 29.7317 26.4709C29.8503 26.1884 30.0236 25.9321 30.2415 25.7168L32.0031 23.9534L33.7642 22.1904C34.1999 21.7559 34.7899 21.512 35.4049 21.5123C36.0199 21.5126 36.6097 21.7569 37.045 22.1917ZM31.2548 16.9452C31.729 16.9452 32.1927 17.0859 32.587 17.3496C32.9814 17.6134 33.2887 17.9883 33.4702 18.4269C33.6517 18.8655 33.6992 19.3482 33.6067 19.8138C33.5141 20.2795 33.2857 20.7072 32.9503 21.0429L31.0221 22.9732L29.261 24.7376L29.0948 24.9044C28.6451 25.3546 28.0352 25.6075 27.3992 25.6075C26.7633 25.6075 26.1534 25.3546 25.7037 24.9044C25.254 24.4543 25.0013 23.8437 25.0013 23.207C25.0013 22.5704 25.254 21.9598 25.7037 21.5096L27.3355 19.8756L29.5597 17.649C29.7817 17.4254 30.0458 17.248 30.3368 17.1272C30.6278 17.0064 30.9398 16.9445 31.2548 16.9452ZM27.2958 43.5263C25.5619 45.2616 22.9934 45.9756 20.063 45.5315C17.0546 45.0767 14.042 43.469 11.5796 41.0026C11.3334 40.7562 11.0969 40.5055 10.8701 40.2508C11.5677 40.4508 12.2896 40.5534 13.0153 40.5558C13.4085 40.5563 13.801 40.5237 14.1888 40.4582C15.9711 40.1555 17.3837 39.1541 18.2737 37.5626C18.3138 37.4963 18.3402 37.4226 18.3512 37.3459C18.3622 37.2692 18.3577 37.191 18.3378 37.1161C18.318 37.0412 18.2833 36.971 18.2358 36.9099C18.1883 36.8487 18.129 36.7977 18.0613 36.76C17.9937 36.7223 17.9192 36.6986 17.8422 36.6903C17.7652 36.6821 17.6874 36.6895 17.6133 36.712C17.5393 36.7346 17.4705 36.7718 17.4111 36.8216C17.3518 36.8713 17.303 36.9325 17.2678 37.0015C16.544 38.2955 15.443 39.0774 13.9958 39.3233C12.2928 39.6126 10.504 39.0802 9.38641 38.3334C9.00566 37.7614 8.66166 37.1658 8.35651 36.55C7.52142 34.8614 7.04779 33.158 6.949 31.4879C6.87145 30.175 7.08056 28.9101 7.30122 27.5709C7.62437 25.6189 7.95674 23.6008 7.32754 21.4473C6.98039 20.26 6.5303 19.1366 6.17669 18.2882C6.06867 18.0294 5.96388 17.7641 5.86278 17.5076C5.59735 16.8357 5.32268 16.1411 4.95383 15.4632C4.38326 14.416 3.85423 13.5902 3.43045 12.9266C2.84095 12.0065 2.41487 11.3415 2.38763 10.8664C2.37101 10.5729 2.4855 10.1515 3.46138 9.24894C3.77483 8.95826 4.06843 8.77156 4.35833 8.67821C6.02759 8.13891 7.46603 10.0322 8.00521 10.871C9.48935 13.1729 10.7625 15.0944 12.1511 16.99L12.1543 16.9942C12.8657 17.9508 14.7792 20.7189 15.082 22.0208C15.1236 22.1998 15.2346 22.355 15.3905 22.4521C15.4677 22.5003 15.5536 22.5327 15.6434 22.5475C15.7331 22.5624 15.8248 22.5594 15.9134 22.5388C16.002 22.5182 16.0856 22.4803 16.1596 22.4273C16.2335 22.3743 16.2963 22.3072 16.3443 22.2299C16.3924 22.1527 16.4248 22.0667 16.4396 21.9768C16.4545 21.887 16.4515 21.7952 16.4309 21.7065C16.3026 21.1547 15.9863 20.462 15.6 19.7545C16.1886 19.7683 16.7765 19.7038 17.3482 19.5627C18.697 19.2351 19.9601 18.5114 21.0006 17.4697L33.676 4.77832C34.1257 4.32815 34.7356 4.07524 35.3716 4.07524C36.0076 4.07524 36.6175 4.32815 37.0672 4.77832C37.5169 5.2285 37.7695 5.83907 37.7695 6.47572C37.7695 7.11236 37.5169 7.72293 37.0672 8.17311L28.5801 16.6679L24.7236 20.5281C24.1442 21.1064 23.7678 21.8573 23.6509 22.6681C23.5341 23.4788 23.6831 24.3056 24.0756 25.0243C24.4681 25.7431 25.0829 26.315 25.8276 26.6541C26.5724 26.9933 27.407 27.0815 28.2062 26.9054C28.1329 27.4966 28.2029 28.0967 28.4104 28.6549C28.6179 29.2132 28.9567 29.7132 29.3981 30.1126C29.8396 30.5121 30.3706 30.7991 30.9464 30.9496C31.5221 31.1 32.1256 31.1093 32.7057 30.9768C32.6507 31.5116 32.7155 32.0519 32.8953 32.5585C33.0751 33.0651 33.3655 33.5252 33.7453 33.9053C34.3183 34.4799 35.0683 34.844 35.8738 34.9386L27.2958 43.5263ZM40.9629 29.8446L39.517 31.2915L37.8842 32.926C37.4648 33.3449 36.8965 33.5801 36.3041 33.5801C35.7116 33.5801 35.1434 33.3449 34.7239 32.926C34.3055 32.5061 34.0706 31.9373 34.0706 31.3442C34.0706 30.7511 34.3055 30.1822 34.7239 29.7623L37.8035 26.6795C38.2247 26.2693 38.7903 26.0418 39.3779 26.046C39.9655 26.0502 40.5278 26.2859 40.9431 26.702C41.3584 27.1181 41.5933 27.6812 41.597 28.2695C41.6007 28.8577 41.3729 29.4232 40.9629 29.8446Z" fill="#8665FF" stroke="#8665FF" stroke-width="2"/>
              <path d="M13.122 7.30969C13.1635 7.35576 13.214 7.39297 13.2705 7.41904C13.3269 7.44511 13.3882 7.4595 13.4504 7.46134C13.5126 7.46317 13.5746 7.45242 13.6325 7.42972C13.6905 7.40703 13.7431 7.37287 13.7873 7.32933C13.8315 7.28579 13.8664 7.23377 13.8897 7.17644C13.913 7.11911 13.9243 7.05767 13.923 6.99586C13.9216 6.93404 13.9076 6.87315 13.8818 6.81688C13.856 6.76061 13.819 6.71014 13.7729 6.66854L11.4776 4.36588C11.392 4.27997 11.2754 4.23137 11.1537 4.23077C11.0319 4.23018 10.9149 4.27763 10.8284 4.36269C10.7419 4.44775 10.6929 4.56346 10.6923 4.68435C10.6917 4.80524 10.7395 4.92142 10.8252 5.00733L13.122 7.30969Z" fill="#8665FF" stroke="#8665FF" stroke-width="2"/>
              <path d="M15.9643 4.9335C15.9946 5.03975 16.0692 5.13464 16.1758 5.20262C16.2824 5.2706 16.4148 5.30765 16.5512 5.30769C16.5962 5.30766 16.641 5.30368 16.6849 5.29583C16.762 5.28186 16.8349 5.25588 16.8995 5.2194C16.9641 5.18291 17.019 5.13662 17.0612 5.08317C17.1033 5.02972 17.1319 4.97016 17.1452 4.90789C17.1586 4.84563 17.1564 4.78187 17.1389 4.72026L16.1923 1.38552C16.1764 1.32269 16.1449 1.26305 16.0997 1.21008C16.0545 1.15712 15.9965 1.1119 15.9291 1.0771C15.8618 1.04229 15.7863 1.01859 15.7073 1.00739C15.6283 0.996198 15.5473 0.99773 15.469 1.0119C15.3908 1.02607 15.3169 1.05259 15.2516 1.0899C15.1864 1.12722 15.1311 1.17457 15.0891 1.22919C15.0471 1.2838 15.0192 1.34457 15.007 1.40792C14.9948 1.47128 14.9986 1.53594 15.0181 1.59811L15.9643 4.9335Z" fill="#8665FF" stroke="#8665FF" stroke-width="2"/>
              <path d="M19.6416 5.28024C19.766 5.32329 19.9025 5.31546 20.0211 5.25849C20.1397 5.20152 20.2307 5.10006 20.2742 4.9764L21.4339 1.65689C21.4772 1.53304 21.4693 1.39715 21.4119 1.27911C21.3545 1.16107 21.2523 1.07054 21.1277 1.02746C21.0032 0.984367 20.8666 0.992241 20.7479 1.04935C20.6292 1.10645 20.5382 1.20811 20.4948 1.33196L19.3351 4.65147C19.2919 4.77527 19.3 4.91104 19.3575 5.02895C19.4149 5.14685 19.5171 5.23723 19.6416 5.28024Z" fill="#8665FF" stroke="#8665FF" stroke-width="2"/>
              <path d="M21.5563 7.27553C21.6277 7.37869 21.7313 7.44457 21.8444 7.45869C21.9574 7.47281 22.0707 7.43402 22.1592 7.35083L24.5321 5.12047C24.5761 5.07932 24.6126 5.02849 24.6396 4.97089C24.6667 4.91329 24.6837 4.85004 24.6898 4.78476C24.6959 4.71947 24.6909 4.65344 24.6751 4.59041C24.6592 4.52739 24.6329 4.46861 24.5976 4.41744C24.5623 4.36627 24.5187 4.3237 24.4693 4.29218C24.4198 4.26065 24.3656 4.24077 24.3096 4.23369C24.2535 4.2266 24.1969 4.23245 24.1428 4.25088C24.0887 4.26932 24.0383 4.29999 23.9944 4.34114L21.6209 6.5735C21.5325 6.65669 21.4761 6.77733 21.464 6.90895C21.4519 7.04056 21.4851 7.1724 21.5563 7.27553Z" fill="#8665FF" stroke="#8665FF" stroke-width="2"/>
            </svg>
          </div>
          <div class="section-features-list-item__text">
            Easy as 1,2,3,4!
          </div>
        </li>
      </ul>

      <div class="section-features__images">
        <img class="section-features-images__img section-features-images__img-first" src="<?php echo get_template_directory_uri() . '/img/pp-1-viol.png' ?>" alt="Power Point image">
        <img class="section-features-images__img section-features-images__img-second" src="<?php echo get_template_directory_uri() . '/img/pp-2.png' ?>" alt="Power Point image">
      </div>
    </div>

  </div>

  <!-- engage-->
  <div class="engage" style="background-image: url(<?php echo get_template_directory_uri() . '/img/engage-bg-cc.jpg' ?>);">
    <div class="section-icon-title-wrapper engage__section-icon-title-wrapper center">
      <div class="section-icon-title engage__section-icon-title">
      <div class="section-icon-title__icon engage__section-icon-title-icon">
        <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 22.1446V27.9906H4.02104V21.9016C4.02786 20.6743 4.36519 19.4715 4.99758 18.4196C4.64325 18.3054 4.27396 18.2444 3.90173 18.2384C2.86688 18.2408 1.87515 18.6532 1.14381 19.3854C0.412475 20.1175 0.00116668 21.1097 0 22.1446Z" fill="#8665FF"/>
          <path d="M5.31574 21.9016V30.739H11.4754V20.7925C11.4892 19.2959 11.8619 17.8245 12.5624 16.5019C12.0504 16.3399 11.5175 16.2535 10.9805 16.2456C10.2369 16.2438 9.50019 16.3889 8.81269 16.6724C8.1252 16.9559 7.50041 17.3723 6.97416 17.8978C6.4479 18.4232 6.03051 19.0473 5.74593 19.7344C5.46134 20.4214 5.31515 21.1579 5.31574 21.9016Z" fill="#8665FF"/>
          <path d="M30.9532 16.2544C30.4108 16.2586 29.8719 16.3419 29.3536 16.5018C30.0507 17.8219 30.419 19.2907 30.4273 20.7836V30.739H36.6135V21.9015C36.6112 20.4022 36.0137 18.9652 34.9523 17.9063C33.8909 16.8474 32.4524 16.2532 30.9532 16.2544Z" fill="#8665FF"/>
          <path d="M38.0187 18.2384C37.6451 18.2444 37.2743 18.3054 36.9185 18.4196C37.5471 19.4731 37.8841 20.6748 37.895 21.9016V27.9906H41.916V22.1446C41.9149 21.1105 41.5042 20.119 40.7738 19.3869C40.0434 18.6549 39.0528 18.2419 38.0187 18.2384Z" fill="#8665FF"/>
          <path d="M21.797 11.1478C24.6443 10.6856 26.5778 8.00274 26.1156 5.15546C25.6534 2.30818 22.9706 0.37468 20.1233 0.836858C17.276 1.29904 15.3425 3.98188 15.8047 6.82916C16.2669 9.67644 18.9497 11.6099 21.797 11.1478Z" fill="#8665FF"/>
          <path d="M10.9541 14.8935C12.904 14.8935 14.4846 13.3128 14.4846 11.3629C14.4846 9.41302 12.904 7.83234 10.9541 7.83234C9.00421 7.83234 7.42352 9.41302 7.42352 11.3629C7.42352 13.3128 9.00421 14.8935 10.9541 14.8935Z" fill="#8665FF"/>
          <path d="M33.4593 13.8564C34.8381 12.4776 34.8381 10.2422 33.4593 8.86344C32.0805 7.48467 29.8451 7.48467 28.4663 8.86344C27.0876 10.2422 27.0876 12.4776 28.4663 13.8564C29.8451 15.2352 32.0805 15.2352 33.4593 13.8564Z" fill="#8665FF"/>
          <path d="M3.89733 16.8907C5.20782 16.8907 6.27018 15.8284 6.27018 14.5179C6.27018 13.2074 5.20782 12.145 3.89733 12.145C2.58684 12.145 1.52448 13.2074 1.52448 14.5179C1.52448 15.8284 2.58684 16.8907 3.89733 16.8907Z" fill="#8665FF"/>
          <path d="M38.0187 16.8907C39.3292 16.8907 40.3916 15.8284 40.3916 14.5179C40.3916 13.2074 39.3292 12.145 38.0187 12.145C36.7082 12.145 35.6459 13.2074 35.6459 14.5179C35.6459 15.8284 36.7082 16.8907 38.0187 16.8907Z" fill="#8665FF"/>
          <path d="M20.958 12.6046C19.8824 12.604 18.8172 12.8153 17.8233 13.2266C16.8294 13.6378 15.9262 14.2408 15.1654 15.0012C14.4046 15.7615 13.8011 16.6644 13.3894 17.6581C12.9776 18.6517 12.7657 19.7168 12.7657 20.7924V34H29.1415V20.7924C29.1415 18.6216 28.2794 16.5397 26.7449 15.0043C25.2103 13.4689 23.1288 12.6057 20.958 12.6046Z" fill="#8665FF"/>
        </svg>
      </div>
      <h2 class="simple-setup__title section-icon-title__title">Engage your audience</h2>
    </div>
    </div>

    <ul class="section-features-list center">
      <li class="section-features-list__item">
        <div class="section-features-list-item__icon">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58691 13.1503L5.6509 13.6032C5.84452 14.7665 6.23174 15.8002 7.00786 16.7043C8.23518 18.2548 10.109 19.1606 12.1782 19.1606C13.5351 19.1606 14.7624 18.7733 15.8617 17.9973L16.6362 17.3508C17.3467 16.7043 17.9292 15.9298 18.3164 14.9601C19.6734 11.5998 17.9932 7.78662 14.6328 6.42945L14.18 6.23584L11.8533 12.0526L5.58691 13.1503ZM14.6342 7.65698C17.2185 8.94992 18.3818 11.9872 17.3481 14.7011C17.0249 15.5412 16.572 16.122 15.9911 16.7045L12.6948 12.5681L14.6342 7.65698ZM15.2151 17.3508C14.311 17.9316 13.2757 18.2549 12.114 18.2549C10.3698 18.2549 8.8176 17.4787 7.7199 16.1218C7.20304 15.4114 6.81584 14.7649 6.68622 13.9248L11.9204 13.1487L15.2151 17.3508Z" fill="white"/>
            <path d="M5.58691 13.1503L5.50064 12.6578L5.02415 12.7413L5.09183 13.2203L5.58691 13.1503ZM5.6509 13.6032L5.15567 13.6732L5.15769 13.6853L5.6509 13.6032ZM7.00786 16.7043L7.3999 16.394L7.39372 16.3861L7.38723 16.3786L7.00786 16.7043ZM15.8617 17.9973L16.1501 18.4057L16.1666 18.3941L16.1822 18.3811L15.8617 17.9973ZM16.6362 17.3508L16.9566 17.7346L16.9648 17.7278L16.9727 17.7206L16.6362 17.3508ZM18.3164 14.9601L17.8528 14.7729L17.8521 14.7747L18.3164 14.9601ZM14.6328 6.42945L14.4362 6.88929L14.4456 6.89307L14.6328 6.42945ZM14.18 6.23584L14.3765 5.7761L13.9059 5.57486L13.7157 6.05015L14.18 6.23584ZM11.8533 12.0526L11.9396 12.5451L12.2141 12.497L12.3176 12.2383L11.8533 12.0526ZM14.6342 7.65698L14.858 7.20983L14.3697 6.96555L14.1692 7.47333L14.6342 7.65698ZM17.3481 14.7011L17.8147 14.8807L17.8153 14.8791L17.3481 14.7011ZM15.9911 16.7045L15.6001 17.0161L15.9494 17.4545L16.3452 17.0576L15.9911 16.7045ZM12.6948 12.5681L12.2297 12.3844L12.1235 12.6534L12.3037 12.8797L12.6948 12.5681ZM15.2151 17.3508L15.4853 17.7715L15.9475 17.4746L15.6086 17.0423L15.2151 17.3508ZM7.7199 16.1218L7.31558 16.416L7.32312 16.4263L7.33118 16.4363L7.7199 16.1218ZM6.68622 13.9248L6.61288 13.4302L6.11537 13.504L6.19207 14.001L6.68622 13.9248ZM11.9204 13.1487L12.3139 12.8402L12.1345 12.6115L11.847 12.6541L11.9204 13.1487ZM5.09183 13.2203L5.15582 13.6731L6.14599 13.5332L6.082 13.0804L5.09183 13.2203ZM5.15769 13.6853C5.36169 14.911 5.77693 16.038 6.62848 17.03L7.38723 16.3786C6.68655 15.5624 6.32735 14.622 6.14412 13.5211L5.15769 13.6853ZM6.61581 17.0146C7.94039 18.688 9.96011 19.6606 12.1782 19.6606V18.6606C10.2578 18.6606 8.52997 17.8216 7.3999 16.394L6.61581 17.0146ZM12.1782 19.6606C13.6373 19.6606 14.9655 19.242 16.1501 18.4057L15.5734 17.5888C14.5593 18.3047 13.4329 18.6606 12.1782 18.6606V19.6606ZM16.1822 18.3811L16.9566 17.7346L16.3158 16.9669L15.5413 17.6134L16.1822 18.3811ZM16.9727 17.7206C17.7317 17.03 18.3619 16.1945 18.7807 15.1456L17.8521 14.7747C17.4965 15.6652 16.9617 16.3786 16.2997 16.981L16.9727 17.7206ZM18.78 15.1473C20.2433 11.5237 18.4291 7.42345 14.8201 5.96584L14.4456 6.89307C17.5572 8.14978 19.1034 11.6759 17.8528 14.7729L18.78 15.1473ZM14.8294 5.96971L14.3765 5.7761L13.9834 6.69558L14.4363 6.8892L14.8294 5.96971ZM13.7157 6.05015L11.3891 11.8669L12.3176 12.2383L14.6442 6.42153L13.7157 6.05015ZM11.767 11.5601L5.50064 12.6578L5.67319 13.6428L11.9396 12.5451L11.767 11.5601ZM14.4105 8.10414C16.7616 9.28043 17.8245 12.0456 16.8808 14.5231L17.8153 14.8791C18.9391 11.9288 17.6753 8.61941 14.858 7.20983L14.4105 8.10414ZM16.8814 14.5216C16.5912 15.276 16.1871 15.7999 15.6371 16.3515L16.3452 17.0576C16.9568 16.4442 17.4586 15.8064 17.8147 14.8807L16.8814 14.5216ZM16.3822 16.3929L13.0858 12.2564L12.3037 12.8797L15.6001 17.0161L16.3822 16.3929ZM13.1598 12.7517L15.0993 7.84064L14.1692 7.47333L12.2297 12.3844L13.1598 12.7517ZM14.9448 16.9301C14.1197 17.4603 13.1778 17.7549 12.114 17.7549V18.7549C13.3735 18.7549 14.5024 18.403 15.4853 17.7715L14.9448 16.9301ZM12.114 17.7549C10.5279 17.7549 9.11595 17.0526 8.10863 15.8074L7.33118 16.4363C8.51926 17.9049 10.2118 18.7549 12.114 18.7549V17.7549ZM8.12423 15.8277C7.6207 15.1356 7.29141 14.5682 7.18037 13.8485L6.19207 14.001C6.34028 14.9616 6.78538 15.6872 7.31558 16.416L8.12423 15.8277ZM6.75956 14.4194L11.9937 13.6433L11.847 12.6541L6.61288 13.4302L6.75956 14.4194ZM11.5269 13.4572L14.8216 17.6593L15.6086 17.0423L12.3139 12.8402L11.5269 13.4572Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4407 4.66817L12.9878 4.47456C11.8885 4.02171 10.7908 3.89372 9.62747 4.08733C7.88333 4.34657 6.33274 5.25064 5.29892 6.67156C4.26524 8.09249 3.81235 9.83832 4.0716 11.5184L4.13559 11.9713L10.9201 11.0016L13.4407 4.66817ZM4.97594 10.9378C4.91196 9.64483 5.29918 8.35353 6.07528 7.25419C6.97934 6.02687 8.27232 5.25079 9.75886 5.05715C10.0821 4.99316 10.3397 4.99316 10.5989 4.99316C11.1158 4.99316 11.6326 5.05715 12.1495 5.25241L10.2101 10.1631L4.97594 10.9378Z" fill="white"/>
            <path d="M13.4407 4.66817L13.9052 4.85306L14.0855 4.40009L13.6372 4.20843L13.4407 4.66817ZM12.9878 4.47456L13.1844 4.01477L13.1783 4.01225L12.9878 4.47456ZM9.62747 4.08733L9.701 4.58197L9.70956 4.58054L9.62747 4.08733ZM5.29892 6.67156L4.89461 6.3774L4.89459 6.37742L5.29892 6.67156ZM4.0716 11.5184L4.56672 11.4485L4.56575 11.4422L4.0716 11.5184ZM4.13559 11.9713L3.6405 12.0413L3.71057 12.5371L4.20633 12.4663L4.13559 11.9713ZM10.9201 11.0016L10.9909 11.4966L11.2776 11.4556L11.3847 11.1865L10.9201 11.0016ZM4.97594 10.9378L4.47656 10.9625L4.50381 11.5131L5.04914 11.4324L4.97594 10.9378ZM6.07528 7.25419L5.67263 6.95759L5.66682 6.96583L6.07528 7.25419ZM9.75886 5.05715L9.82344 5.55296L9.83979 5.55084L9.85596 5.54763L9.75886 5.05715ZM12.1495 5.25241L12.6145 5.43607L12.801 4.96403L12.3262 4.78467L12.1495 5.25241ZM10.2101 10.1631L10.2833 10.6578L10.569 10.6155L10.6751 10.3468L10.2101 10.1631ZM13.6372 4.20843L13.1844 4.01482L12.7913 4.9343L13.2441 5.12792L13.6372 4.20843ZM13.1783 4.01225C11.9941 3.52446 10.8021 3.38496 9.54539 3.59411L9.70956 4.58054C10.7795 4.40248 11.7829 4.51895 12.7974 4.93687L13.1783 4.01225ZM9.55396 3.59276C7.68377 3.87074 6.0112 4.8427 4.89461 6.3774L5.70324 6.96573C6.65427 5.65858 8.08289 4.82241 9.70099 4.58189L9.55396 3.59276ZM4.89459 6.37742C3.78824 7.89823 3.2968 9.77591 3.57745 11.5947L4.56575 11.4422C4.32789 9.90072 4.74223 8.28674 5.70325 6.9657L4.89459 6.37742ZM3.57652 11.5884L3.6405 12.0413L4.63067 11.9013L4.56668 11.4485L3.57652 11.5884ZM4.20633 12.4663L10.9909 11.4966L10.8494 10.5066L4.06484 11.4763L4.20633 12.4663ZM11.3847 11.1865L13.9052 4.85306L12.9761 4.48329L10.4556 10.8167L11.3847 11.1865ZM5.47533 10.9131C5.41713 9.73709 5.7689 8.55513 6.48375 7.54256L5.66682 6.96583C4.82946 8.15193 4.40678 9.55257 4.47656 10.9625L5.47533 10.9131ZM6.47786 7.55073C7.30362 6.4297 8.47615 5.72847 9.82344 5.55296L9.69427 4.56134C8.06849 4.77312 6.65507 5.62403 5.67271 6.95765L6.47786 7.55073ZM9.85596 5.54763C10.1265 5.49408 10.3405 5.49316 10.5989 5.49316V4.49316C10.3389 4.49316 10.0377 4.49225 9.66176 4.56667L9.85596 5.54763ZM10.5989 5.49316C11.0739 5.49316 11.5274 5.5519 11.9728 5.72015L12.3262 4.78467C11.7378 4.5624 11.1577 4.49316 10.5989 4.49316V5.49316ZM11.6844 5.06875L9.74502 9.97948L10.6751 10.3468L12.6145 5.43607L11.6844 5.06875ZM10.1369 9.66853L4.90274 10.4432L5.04914 11.4324L10.2833 10.6578L10.1369 9.66853Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7229 26.5916H27.7532V38.4809H23.6824V31.8257H22.7127V38.4809H18.5762V25.4285H17.6081V38.4809H13.5357V29.4336H12.5676V38.4809H8.43112V33.5702H7.46141V38.4809H5.45801V39.4506H30.7904V38.4809H28.723L28.7229 26.5916Z" fill="white" stroke="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.4436 27.1725V1H1V39.1912C1 41.4522 2.87377 43.3277 5.13647 43.3277H38.5463C40.8073 43.3277 42.6828 41.4539 42.6828 39.1912L42.6812 27.1725H35.4436ZM5.13489 42.3578C3.39074 42.3578 1.96814 40.9369 1.96814 39.1911L1.96978 1.96973H34.474V39.1928C34.474 40.4857 35.0549 41.5834 35.9606 42.3595L5.13489 42.3578ZM41.7753 39.1928C41.7753 40.9369 40.3544 42.3595 38.6086 42.3595C36.8644 42.3595 35.4418 40.9386 35.4418 39.1928L35.4435 28.1418H41.7769L41.7753 39.1928Z" fill="white"/>
            <path d="M35.4436 27.1725H34.9436V27.6725H35.4436V27.1725ZM35.4436 1H35.9436V0.5H35.4436V1ZM1 1V0.5H0.5V1H1ZM42.6828 39.1912H43.1828V39.1912L42.6828 39.1912ZM42.6812 27.1725L43.1812 27.1724L43.1811 26.6725H42.6812V27.1725ZM5.13489 42.3578L5.13492 41.8578H5.13489V42.3578ZM1.96814 39.1911L1.46814 39.1911V39.1911H1.96814ZM1.96978 1.96973V1.46973H1.4698L1.46978 1.9697L1.96978 1.96973ZM34.474 1.96973H34.974V1.46973H34.474V1.96973ZM35.9606 42.3595L35.9606 42.8595L37.3126 42.8596L36.286 41.9798L35.9606 42.3595ZM41.7753 39.1928L41.2753 39.1927V39.1928H41.7753ZM35.4418 39.1928L34.9418 39.1927V39.1928H35.4418ZM35.4435 28.1418V27.6418H34.9436L34.9435 28.1418L35.4435 28.1418ZM41.7769 28.1418L42.2769 28.1419L42.277 27.6418H41.7769V28.1418ZM35.9436 27.1725V1H34.9436V27.1725H35.9436ZM35.4436 0.5H1V1.5H35.4436V0.5ZM0.5 1V39.1912H1.5V1H0.5ZM0.5 39.1912C0.5 41.7283 2.5975 43.8277 5.13647 43.8277V42.8277C3.15005 42.8277 1.5 41.1762 1.5 39.1912H0.5ZM5.13647 43.8277H38.5463V42.8277H5.13647V43.8277ZM38.5463 43.8277C41.0834 43.8277 43.1828 41.7302 43.1828 39.1912H42.1828C42.1828 41.1776 40.5313 42.8277 38.5463 42.8277V43.8277ZM43.1828 39.1912L43.1812 27.1724L42.1812 27.1726L42.1828 39.1913L43.1828 39.1912ZM42.6812 26.6725H35.4436V27.6725H42.6812V26.6725ZM5.13489 41.8578C3.66671 41.8578 2.46814 40.6606 2.46814 39.1911H1.46814C1.46814 41.2132 3.11477 42.8578 5.13489 42.8578V41.8578ZM2.46814 39.1911L2.46978 1.96975L1.46978 1.9697L1.46814 39.1911L2.46814 39.1911ZM1.96978 2.46973H34.474V1.46973H1.96978V2.46973ZM33.974 1.96973V39.1928H34.974V1.96973H33.974ZM33.974 39.1928C33.974 40.6462 34.6302 41.878 35.6353 42.7392L36.286 41.9798C35.4795 41.2888 34.974 40.3252 34.974 39.1928H33.974ZM35.9606 41.8595L5.13492 41.8578L5.13486 42.8578L35.9606 42.8595L35.9606 41.8595ZM41.2753 39.1928C41.2753 40.661 40.0781 41.8595 38.6086 41.8595V42.8595C40.6307 42.8595 42.2753 41.2129 42.2753 39.1928H41.2753ZM38.6086 41.8595C37.1404 41.8595 35.9418 40.6623 35.9418 39.1928H34.9418C34.9418 41.2149 36.5885 42.8595 38.6086 42.8595V41.8595ZM35.9418 39.1929L35.9435 28.1419L34.9435 28.1418L34.9418 39.1927L35.9418 39.1929ZM35.4435 28.6418H41.7769V27.6418H35.4435V28.6418ZM41.2769 28.1418L41.2753 39.1927L42.2753 39.1928L42.2769 28.1419L41.2769 28.1418Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.0933 30.1458H39.063V31.1155H38.0933V30.1458Z" fill="white" stroke="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.0933 33.0532H39.063V34.0229H38.0933V33.0532Z" fill="white" stroke="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.0933 35.9607H39.063V36.9304H38.0933V35.9607Z" fill="white" stroke="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.0933 38.8699H39.063V39.8396H38.0933V38.8699Z" fill="white" stroke="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4512 16.4451H32.7291V17.4148H20.4512V16.4451Z" fill="white" stroke="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8721 12.8911H32.7294V13.8608H21.8721V12.8911Z" fill="white" stroke="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3926 9.33716H32.7296V10.3069H24.3926V9.33716Z" fill="white" stroke="white"/>
          </svg>

        </div>
        <div class="section-features-list-item__text">
          You can automatically run the Q&A, polls, quizzes, leaderboards, from withing PowerPoint
        </div>
      </li>
      <li class="section-features-list__item">
        <div class="section-features-list-item__icon">
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.6 29.9H4.7C2.7 29.9 1 28.2 1 26.2V4.7C1 2.7 2.7 1 4.7 1H38.6C40.6 1 42.3 2.7 42.3 4.7V20.4H28.3C27.3 20.4 26.6 21 26.6 22.2C26.6 25 26.5 29.7 26.6 29.9ZM4.7 2.3C3.4 2.3 2.3 3.4 2.3 4.7V26.2C2.3 27.5 3.3 28.5 4.6 28.5H25.2C25.2 28.5 25.2 24.6 25.2 22.1C25.2 20.5 26.2 19.1 28 19.1H40.9V4.7C40.9 3.4 39.9 2.4 38.6 2.4H4.7V2.3Z" fill="white" stroke="white"/>
            <path d="M22.6 29.9001H4.8C2.7 29.9001 1 28.2001 1 26.1001V23.8001C1 23.4001 1.3 23.1001 1.7 23.1001H25.8C26.2 23.1001 26.6 23.5001 26.6 23.9001V26.1001C26.6 28.3001 24.7 29.9001 22.6 29.9001ZM25.2 24.5001H2.3V26.1001C2.3 27.4001 3.4 28.5001 4.7 28.5001H25.2" fill="white"/>
            <path d="M25.2 24.5001H2.3V26.1001C2.3 27.4001 3.4 28.5001 4.7 28.5001H25.2M22.6 29.9001H4.8C2.7 29.9001 1 28.2001 1 26.1001V23.8001C1 23.4001 1.3 23.1001 1.7 23.1001H25.8C26.2 23.1001 26.6 23.5001 26.6 23.9001V26.1001C26.6 28.3001 24.7 29.9001 22.6 29.9001Z" stroke="white"/>
            <path d="M20.9 29.3999V33.8999H22.2C21.8 33.8999 21.5 34.1999 21.5 34.5999C21.5 34.9999 21.8 35.2999 22.2 35.2999H25.6C26 35.2999 26.3 34.9999 26.3 34.5999C26.3 34.1999 26 33.8999 25.6 33.8999H22.3V29.3999H20.9Z" fill="white" stroke="white"/>
            <path d="M41.6 45.3H28.1C26.5 45.3 25.3 44 25.3 42.5V40.6C25.3 40.1 25.7 39.6 26.3 39.6H43.6C44.1 39.6 44.6 40 44.6 40.6V42.5C44.4 44 43.1 45.3 41.6 45.3ZM26.6 41V42.5C26.6 43.3 27.3 44 28.1 44H41.6C42.4 44 43.1 43.3 43.1 42.5V41H26.6Z" fill="white" stroke="white"/>
            <path d="M41.7 45.3H27.9C26.4 45.3 25.2 44.1 25.2 42.6V21.8C25.2 20.3 26.4 19.1 27.9 19.1H41.7C43.2 19.1 44.4 20.3 44.4 21.8V42.6C44.4 44.1 43.2 45.3 41.7 45.3ZM27.8 20.6C27.1 20.6 26.6 21.2 26.6 21.8V42.6C26.6 43.3 27.2 43.9 27.9 43.9H41.7C42.4 43.9 43 43.3 43 42.6V21.6C43 21 42.5 20.5 41.9 20.5H27.8V20.6Z" fill="white" stroke="white"/>
            <path d="M20.3 45.3H18.5C18 45.3 17.6 44.9 17.6 44.4V33.7001C17.6 33.2001 18 32.8 18.5 32.8H20.3C21.5 32.8 22.5 33.8 22.5 35V43.1C22.5 44.3 21.5 45.3 20.3 45.3ZM19 43.9H20.3C20.8 43.9 21.2 43.5 21.2 43V34.9C21.2 34.4 20.8 34 20.3 34H19V43.9Z" fill="white" stroke="white"/>
            <path d="M20.3 45.3H3.2C2 45.3 1 44.3 1 43.1V35C1 33.8 2 32.8 3.2 32.8H20.3C21.5 32.8 22.5 33.8 22.5 35V43.1C22.5 44.3 21.5 45.3 20.3 45.3ZM3.2 34.1C2.7 34.1 2.3 34.5 2.3 35V43.1C2.3 43.6 2.7 44 3.2 44H20.3C20.8 44 21.2 43.6 21.2 43.1V35C21.2 34.5 20.8 34.1 20.3 34.1H3.2Z" fill="white" stroke="white"/>
            <path d="M38.4 27.7001L33.5 32.6001L32.3 31.4001C32 31.1001 31.5 31.1001 31.2 31.4001C30.9 31.7001 30.9 32.2001 31.2 32.5001L32.9 34.2001C33 34.3001 33.2 34.4001 33.4 34.4001C33.6 34.4001 33.8 34.3001 33.9 34.2001L39.4 28.7001C39.7 28.4001 39.7 27.9001 39.4 27.6001C39.2 27.4001 38.7 27.4001 38.4 27.7001Z" fill="white" stroke="white"/>
            <path d="M19.6 16C19.7 16.1 19.9 16.2 20.1 16.2C20.3 16.2 20.5 16.1 20.6 16L26.6 10C26.9 9.70005 26.9 9.20005 26.6 8.90005C26.3 8.60005 25.8 8.60005 25.5 8.90005L20 14.4L18.6 13C18.3 12.7 17.8 12.7 17.5 13C17.2 13.3 17.2 13.8 17.5 14.1L19.6 16Z" fill="white" stroke="white"/>
            <path d="M13.7 36.4C13.4 36.1 12.9 36.1 12.6 36.4L9.39998 39.6L8.79998 39.0001C8.49998 38.7001 7.99998 38.7001 7.69998 39.0001C7.39998 39.3001 7.39998 39.8 7.69998 40.1L8.89998 41.3001C8.99998 41.4001 9.19998 41.5001 9.39998 41.5001C9.59998 41.5001 9.79998 41.4001 9.89998 41.3001L13.6 37.6C14 37.2 14 36.7 13.7 36.4Z" fill="white" stroke="white"/>
          </svg>

        </div>
        <div class="section-features-list-item__text">
          As soon as the slideshow gets to the poll's slide, MeetingPulse will launch the poll and
          send it to attendee's devices
        </div>
      </li>
      <li class="section-features-list__item">
        <div class="section-features-list-item__icon">
          <svg width="29" height="45" viewBox="0 0 29 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.6793 1H4.46977C2.55667 1 1 2.29722 1 3.89174V41.2893C1 42.8838 2.55667 44.181 4.46977 44.181H24.6793C26.5924 44.181 28.149 42.8838 28.149 41.2893V3.89174C28.149 2.29722 26.5924 1 24.6793 1ZM2.29543 6.98325H26.8536V34.2523H2.29543V6.98325ZM4.46977 2.07953H24.6793C25.8782 2.07953 26.8536 2.89233 26.8536 3.89174V5.90373H2.29543V3.89174C2.29543 2.89233 3.2708 2.07953 4.46977 2.07953ZM24.6793 43.1015H4.46977C3.2708 43.1015 2.29543 42.2887 2.29543 41.2893V35.3319H26.8536V41.2893C26.8536 42.2887 25.8782 43.1015 24.6793 43.1015Z" fill="white" stroke="white"/>
            <path d="M14.4941 36.6243C13.0059 36.6243 11.7953 37.8353 11.7953 39.3234C11.7953 40.8115 13.0059 42.022 14.4941 42.022C15.9823 42.022 17.1929 40.8115 17.1929 39.3234C17.1929 37.8353 15.9823 36.6243 14.4941 36.6243ZM14.4941 40.8592C13.6472 40.8592 12.9582 40.1705 12.9582 39.3234C12.9582 38.4763 13.6472 37.7871 14.4941 37.7871C15.341 37.7871 16.03 38.4763 16.03 39.3234C16.03 40.1705 15.341 40.8592 14.4941 40.8592Z" fill="white" stroke="white"/>
          </svg>
        </div>
        <div class="section-features-list-item__text">
          Their phones become part of your presentation experience
        </div>
      </li>
    </ul>
  </div>
  <!--pricing-->
  <div id="pricing"></div>
  <div class="pricing lp-pricing section">
    <div class="section__head">
      <div class="section__center pricing__section-center center pricing-center">
        <div class="section__title pricing_section__title">Pricing</div>
      </div>
    </div>

    <section class="pricing-table">

      <div class="tabs__nav pricing-tabs-nav pricing-table-center">
        <div class="tabs__link pricing-tabs-link js-tabs-link active">Yearly</div>
        <div class="tabs__link pricing-tabs-link js-tabs-link">Monthly</div>
        <div class="tabs__link pricing-tabs-link js-tabs-link one-time">One-time</div>
      </div>

      <section class="pricing-table-content pricing-table-center">
          <div class="pricing-table-row pricing-table-row-titles">
            <div class="pricing-table-row-col pricing-table-row-col-title">
              <b class="pricing-table-row-titles__title">
                Free
              </b>
              <span class="pricing-table-row-titles__subtitle">
                A free app with basic features. <a class="pricing-table-row-titles-subtitle__link" href="javascript:void(0);">Learn more</a>
              </span>
            </div>

            <div class="pricing-table-row-col pricing-table-row-col-title">
              <b class="pricing-table-row-titles__title">
                Light
              </b>
              <span class="pricing-table-row-titles__subtitle">
                The best option if you want to start small. <a class="pricing-table-row-titles-subtitle__link" href="javascript:void(0);">More</a>
              </span>
            </div>

            <div class="pricing-table-row-col pricing-table-row-col-title">
              <b class="pricing-table-row-titles__title">
                Full
              </b>
              <span class="pricing-table-row-titles__subtitle">
                Enjoy full feature and capability access. <a class="pricing-table-row-titles-subtitle__link" href="javascript:void(0);">Learn more</a>
              </span>
            </div>
          </div>

          <div class="pricing-table-row pricing-table-row--highlight">
            <div class="pricing-table-row-col">
              <span class="pricing-table-row-col__text">$0 / Free &nbsp;</span>
              <svg width="21" class="i-sign pricing-table-row-col__i-sign" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.73944 20.8651C6.51984 20.7018 3.60344 19.0471 1.85044 16.3901C0.926218 14.9893 0.393398 13.4783 0.224658 11.7791C0.179346 11.3205 0.179346 10.4135 0.224658 9.95487C0.393408 8.25487 0.926218 6.74467 1.85044 5.34387C3.3895 3.01027 5.86844 1.41727 8.63404 0.984469C9.18872 0.897751 9.56686 0.869629 10.1887 0.869629C10.8106 0.869629 11.1887 0.897749 11.7434 0.984469C14.509 1.41729 16.988 3.01027 18.527 5.34387C19.4512 6.74465 19.984 8.25567 20.1528 9.95487C20.1981 10.4135 20.1981 11.3205 20.1528 11.7791C19.92 14.1229 18.9551 16.2065 17.3356 17.8635C15.6801 19.5572 13.4896 20.6017 11.1176 20.8283C10.8051 20.858 10.016 20.8791 9.73946 20.865L9.73944 20.8651ZM10.8182 19.9484C14.7554 19.6597 18.0233 16.9428 19.0042 13.1427C19.8068 10.0314 18.9027 6.72523 16.6269 4.44953C14.3512 2.17383 11.0442 1.26963 7.93376 2.07226C3.91681 3.10911 1.10645 6.73262 1.10645 10.8775C1.10645 15.0678 3.96876 18.7087 8.05095 19.7126C8.92859 19.9287 9.9341 20.0145 10.8182 19.9493V19.9484ZM9.48553 12.7932V9.71362H10.8934V15.873H9.48553V12.7932ZM9.48553 6.56572V5.86182H10.8934V7.26964H9.48553V6.56572Z" fill="black"/>
              </svg>
            </div>
            <div class="pricing-table-row-col">
              <span class="pricing-table-row-col__text">$79 / mo &nbsp;</span>
              <svg width="21" class="i-sign pricing-table-row-col__i-sign" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.73944 20.8651C6.51984 20.7018 3.60344 19.0471 1.85044 16.3901C0.926218 14.9893 0.393398 13.4783 0.224658 11.7791C0.179346 11.3205 0.179346 10.4135 0.224658 9.95487C0.393408 8.25487 0.926218 6.74467 1.85044 5.34387C3.3895 3.01027 5.86844 1.41727 8.63404 0.984469C9.18872 0.897751 9.56686 0.869629 10.1887 0.869629C10.8106 0.869629 11.1887 0.897749 11.7434 0.984469C14.509 1.41729 16.988 3.01027 18.527 5.34387C19.4512 6.74465 19.984 8.25567 20.1528 9.95487C20.1981 10.4135 20.1981 11.3205 20.1528 11.7791C19.92 14.1229 18.9551 16.2065 17.3356 17.8635C15.6801 19.5572 13.4896 20.6017 11.1176 20.8283C10.8051 20.858 10.016 20.8791 9.73946 20.865L9.73944 20.8651ZM10.8182 19.9484C14.7554 19.6597 18.0233 16.9428 19.0042 13.1427C19.8068 10.0314 18.9027 6.72523 16.6269 4.44953C14.3512 2.17383 11.0442 1.26963 7.93376 2.07226C3.91681 3.10911 1.10645 6.73262 1.10645 10.8775C1.10645 15.0678 3.96876 18.7087 8.05095 19.7126C8.92859 19.9287 9.9341 20.0145 10.8182 19.9493V19.9484ZM9.48553 12.7932V9.71362H10.8934V15.873H9.48553V12.7932ZM9.48553 6.56572V5.86182H10.8934V7.26964H9.48553V6.56572Z" fill="black"/>
              </svg>
            </div>
            <div class="pricing-table-row-col">
              <span class="pricing-table-row-col__text">$249 / mo &nbsp;</span>
              <svg width="21" class="i-sign pricing-table-row-col__i-sign" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.73944 20.8651C6.51984 20.7018 3.60344 19.0471 1.85044 16.3901C0.926218 14.9893 0.393398 13.4783 0.224658 11.7791C0.179346 11.3205 0.179346 10.4135 0.224658 9.95487C0.393408 8.25487 0.926218 6.74467 1.85044 5.34387C3.3895 3.01027 5.86844 1.41727 8.63404 0.984469C9.18872 0.897751 9.56686 0.869629 10.1887 0.869629C10.8106 0.869629 11.1887 0.897749 11.7434 0.984469C14.509 1.41729 16.988 3.01027 18.527 5.34387C19.4512 6.74465 19.984 8.25567 20.1528 9.95487C20.1981 10.4135 20.1981 11.3205 20.1528 11.7791C19.92 14.1229 18.9551 16.2065 17.3356 17.8635C15.6801 19.5572 13.4896 20.6017 11.1176 20.8283C10.8051 20.858 10.016 20.8791 9.73946 20.865L9.73944 20.8651ZM10.8182 19.9484C14.7554 19.6597 18.0233 16.9428 19.0042 13.1427C19.8068 10.0314 18.9027 6.72523 16.6269 4.44953C14.3512 2.17383 11.0442 1.26963 7.93376 2.07226C3.91681 3.10911 1.10645 6.73262 1.10645 10.8775C1.10645 15.0678 3.96876 18.7087 8.05095 19.7126C8.92859 19.9287 9.9341 20.0145 10.8182 19.9493V19.9484ZM9.48553 12.7932V9.71362H10.8934V15.873H9.48553V12.7932ZM9.48553 6.56572V5.86182H10.8934V7.26964H9.48553V6.56572Z" fill="black"/>
              </svg>
            </div>
          </div>

          <div class="pricing-table-row">
            <div class="pricing-table-row-col">
              <span class="pricing-table-row-col__text">50 attendees &nbsp;</span>
              <svg width="21" class="i-sign pricing-table-row-col__i-sign" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.73944 20.8651C6.51984 20.7018 3.60344 19.0471 1.85044 16.3901C0.926218 14.9893 0.393398 13.4783 0.224658 11.7791C0.179346 11.3205 0.179346 10.4135 0.224658 9.95487C0.393408 8.25487 0.926218 6.74467 1.85044 5.34387C3.3895 3.01027 5.86844 1.41727 8.63404 0.984469C9.18872 0.897751 9.56686 0.869629 10.1887 0.869629C10.8106 0.869629 11.1887 0.897749 11.7434 0.984469C14.509 1.41729 16.988 3.01027 18.527 5.34387C19.4512 6.74465 19.984 8.25567 20.1528 9.95487C20.1981 10.4135 20.1981 11.3205 20.1528 11.7791C19.92 14.1229 18.9551 16.2065 17.3356 17.8635C15.6801 19.5572 13.4896 20.6017 11.1176 20.8283C10.8051 20.858 10.016 20.8791 9.73946 20.865L9.73944 20.8651ZM10.8182 19.9484C14.7554 19.6597 18.0233 16.9428 19.0042 13.1427C19.8068 10.0314 18.9027 6.72523 16.6269 4.44953C14.3512 2.17383 11.0442 1.26963 7.93376 2.07226C3.91681 3.10911 1.10645 6.73262 1.10645 10.8775C1.10645 15.0678 3.96876 18.7087 8.05095 19.7126C8.92859 19.9287 9.9341 20.0145 10.8182 19.9493V19.9484ZM9.48553 12.7932V9.71362H10.8934V15.873H9.48553V12.7932ZM9.48553 6.56572V5.86182H10.8934V7.26964H9.48553V6.56572Z" fill="black"/>
              </svg>
            </div>
            <div class="pricing-table-row-col">
              <span class="pricing-table-row-col__text">150 attendees &nbsp;</span>
              <svg width="21" class="i-sign pricing-table-row-col__i-sign" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.73944 20.8651C6.51984 20.7018 3.60344 19.0471 1.85044 16.3901C0.926218 14.9893 0.393398 13.4783 0.224658 11.7791C0.179346 11.3205 0.179346 10.4135 0.224658 9.95487C0.393408 8.25487 0.926218 6.74467 1.85044 5.34387C3.3895 3.01027 5.86844 1.41727 8.63404 0.984469C9.18872 0.897751 9.56686 0.869629 10.1887 0.869629C10.8106 0.869629 11.1887 0.897749 11.7434 0.984469C14.509 1.41729 16.988 3.01027 18.527 5.34387C19.4512 6.74465 19.984 8.25567 20.1528 9.95487C20.1981 10.4135 20.1981 11.3205 20.1528 11.7791C19.92 14.1229 18.9551 16.2065 17.3356 17.8635C15.6801 19.5572 13.4896 20.6017 11.1176 20.8283C10.8051 20.858 10.016 20.8791 9.73946 20.865L9.73944 20.8651ZM10.8182 19.9484C14.7554 19.6597 18.0233 16.9428 19.0042 13.1427C19.8068 10.0314 18.9027 6.72523 16.6269 4.44953C14.3512 2.17383 11.0442 1.26963 7.93376 2.07226C3.91681 3.10911 1.10645 6.73262 1.10645 10.8775C1.10645 15.0678 3.96876 18.7087 8.05095 19.7126C8.92859 19.9287 9.9341 20.0145 10.8182 19.9493V19.9484ZM9.48553 12.7932V9.71362H10.8934V15.873H9.48553V12.7932ZM9.48553 6.56572V5.86182H10.8934V7.26964H9.48553V6.56572Z" fill="black"/>
              </svg>
            </div>
            <div class="pricing-table-row-col">
              <span class="pricing-table-row-col__text">500+ attendees &nbsp;</span>
              <svg width="21" class="i-sign pricing-table-row-col__i-sign" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.73944 20.8651C6.51984 20.7018 3.60344 19.0471 1.85044 16.3901C0.926218 14.9893 0.393398 13.4783 0.224658 11.7791C0.179346 11.3205 0.179346 10.4135 0.224658 9.95487C0.393408 8.25487 0.926218 6.74467 1.85044 5.34387C3.3895 3.01027 5.86844 1.41727 8.63404 0.984469C9.18872 0.897751 9.56686 0.869629 10.1887 0.869629C10.8106 0.869629 11.1887 0.897749 11.7434 0.984469C14.509 1.41729 16.988 3.01027 18.527 5.34387C19.4512 6.74465 19.984 8.25567 20.1528 9.95487C20.1981 10.4135 20.1981 11.3205 20.1528 11.7791C19.92 14.1229 18.9551 16.2065 17.3356 17.8635C15.6801 19.5572 13.4896 20.6017 11.1176 20.8283C10.8051 20.858 10.016 20.8791 9.73946 20.865L9.73944 20.8651ZM10.8182 19.9484C14.7554 19.6597 18.0233 16.9428 19.0042 13.1427C19.8068 10.0314 18.9027 6.72523 16.6269 4.44953C14.3512 2.17383 11.0442 1.26963 7.93376 2.07226C3.91681 3.10911 1.10645 6.73262 1.10645 10.8775C1.10645 15.0678 3.96876 18.7087 8.05095 19.7126C8.92859 19.9287 9.9341 20.0145 10.8182 19.9493V19.9484ZM9.48553 12.7932V9.71362H10.8934V15.873H9.48553V12.7932ZM9.48553 6.56572V5.86182H10.8934V7.26964H9.48553V6.56572Z" fill="black"/>
              </svg>
            </div>
          </div>

        <div class="pricing-table-row">
          <div class="pricing-table-row-col">
            <span class="pricing-table-row-col__text">Basic live Q&A &nbsp;</span>
            <svg width="21" class="i-sign pricing-table-row-col__i-sign" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.73944 20.8651C6.51984 20.7018 3.60344 19.0471 1.85044 16.3901C0.926218 14.9893 0.393398 13.4783 0.224658 11.7791C0.179346 11.3205 0.179346 10.4135 0.224658 9.95487C0.393408 8.25487 0.926218 6.74467 1.85044 5.34387C3.3895 3.01027 5.86844 1.41727 8.63404 0.984469C9.18872 0.897751 9.56686 0.869629 10.1887 0.869629C10.8106 0.869629 11.1887 0.897749 11.7434 0.984469C14.509 1.41729 16.988 3.01027 18.527 5.34387C19.4512 6.74465 19.984 8.25567 20.1528 9.95487C20.1981 10.4135 20.1981 11.3205 20.1528 11.7791C19.92 14.1229 18.9551 16.2065 17.3356 17.8635C15.6801 19.5572 13.4896 20.6017 11.1176 20.8283C10.8051 20.858 10.016 20.8791 9.73946 20.865L9.73944 20.8651ZM10.8182 19.9484C14.7554 19.6597 18.0233 16.9428 19.0042 13.1427C19.8068 10.0314 18.9027 6.72523 16.6269 4.44953C14.3512 2.17383 11.0442 1.26963 7.93376 2.07226C3.91681 3.10911 1.10645 6.73262 1.10645 10.8775C1.10645 15.0678 3.96876 18.7087 8.05095 19.7126C8.92859 19.9287 9.9341 20.0145 10.8182 19.9493V19.9484ZM9.48553 12.7932V9.71362H10.8934V15.873H9.48553V12.7932ZM9.48553 6.56572V5.86182H10.8934V7.26964H9.48553V6.56572Z" fill="black"/>
            </svg>
          </div>
          <div class="pricing-table-row-col">
            <span class="pricing-table-row-col__text">Basic live Q&A &nbsp;</span>
            <svg width="21" class="i-sign pricing-table-row-col__i-sign" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.73944 20.8651C6.51984 20.7018 3.60344 19.0471 1.85044 16.3901C0.926218 14.9893 0.393398 13.4783 0.224658 11.7791C0.179346 11.3205 0.179346 10.4135 0.224658 9.95487C0.393408 8.25487 0.926218 6.74467 1.85044 5.34387C3.3895 3.01027 5.86844 1.41727 8.63404 0.984469C9.18872 0.897751 9.56686 0.869629 10.1887 0.869629C10.8106 0.869629 11.1887 0.897749 11.7434 0.984469C14.509 1.41729 16.988 3.01027 18.527 5.34387C19.4512 6.74465 19.984 8.25567 20.1528 9.95487C20.1981 10.4135 20.1981 11.3205 20.1528 11.7791C19.92 14.1229 18.9551 16.2065 17.3356 17.8635C15.6801 19.5572 13.4896 20.6017 11.1176 20.8283C10.8051 20.858 10.016 20.8791 9.73946 20.865L9.73944 20.8651ZM10.8182 19.9484C14.7554 19.6597 18.0233 16.9428 19.0042 13.1427C19.8068 10.0314 18.9027 6.72523 16.6269 4.44953C14.3512 2.17383 11.0442 1.26963 7.93376 2.07226C3.91681 3.10911 1.10645 6.73262 1.10645 10.8775C1.10645 15.0678 3.96876 18.7087 8.05095 19.7126C8.92859 19.9287 9.9341 20.0145 10.8182 19.9493V19.9484ZM9.48553 12.7932V9.71362H10.8934V15.873H9.48553V12.7932ZM9.48553 6.56572V5.86182H10.8934V7.26964H9.48553V6.56572Z" fill="black"/>
            </svg>
          </div>
          <div class="pricing-table-row-col">
            <span class="pricing-table-row-col__text">Advanced live Q&A &nbsp;</span>
            <svg width="21" class="i-sign pricing-table-row-col__i-sign" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.73944 20.8651C6.51984 20.7018 3.60344 19.0471 1.85044 16.3901C0.926218 14.9893 0.393398 13.4783 0.224658 11.7791C0.179346 11.3205 0.179346 10.4135 0.224658 9.95487C0.393408 8.25487 0.926218 6.74467 1.85044 5.34387C3.3895 3.01027 5.86844 1.41727 8.63404 0.984469C9.18872 0.897751 9.56686 0.869629 10.1887 0.869629C10.8106 0.869629 11.1887 0.897749 11.7434 0.984469C14.509 1.41729 16.988 3.01027 18.527 5.34387C19.4512 6.74465 19.984 8.25567 20.1528 9.95487C20.1981 10.4135 20.1981 11.3205 20.1528 11.7791C19.92 14.1229 18.9551 16.2065 17.3356 17.8635C15.6801 19.5572 13.4896 20.6017 11.1176 20.8283C10.8051 20.858 10.016 20.8791 9.73946 20.865L9.73944 20.8651ZM10.8182 19.9484C14.7554 19.6597 18.0233 16.9428 19.0042 13.1427C19.8068 10.0314 18.9027 6.72523 16.6269 4.44953C14.3512 2.17383 11.0442 1.26963 7.93376 2.07226C3.91681 3.10911 1.10645 6.73262 1.10645 10.8775C1.10645 15.0678 3.96876 18.7087 8.05095 19.7126C8.92859 19.9287 9.9341 20.0145 10.8182 19.9493V19.9484ZM9.48553 12.7932V9.71362H10.8934V15.873H9.48553V12.7932ZM9.48553 6.56572V5.86182H10.8934V7.26964H9.48553V6.56572Z" fill="black"/>
            </svg>
          </div>
        </div>

        <div class="pricing-table-row">
          <div class="pricing-table-row-col">
            <span class="pricing-table-row-col__text">Basic live polling (3 polls) &nbsp;</span>
            <svg width="21" class="i-sign pricing-table-row-col__i-sign" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.73944 20.8651C6.51984 20.7018 3.60344 19.0471 1.85044 16.3901C0.926218 14.9893 0.393398 13.4783 0.224658 11.7791C0.179346 11.3205 0.179346 10.4135 0.224658 9.95487C0.393408 8.25487 0.926218 6.74467 1.85044 5.34387C3.3895 3.01027 5.86844 1.41727 8.63404 0.984469C9.18872 0.897751 9.56686 0.869629 10.1887 0.869629C10.8106 0.869629 11.1887 0.897749 11.7434 0.984469C14.509 1.41729 16.988 3.01027 18.527 5.34387C19.4512 6.74465 19.984 8.25567 20.1528 9.95487C20.1981 10.4135 20.1981 11.3205 20.1528 11.7791C19.92 14.1229 18.9551 16.2065 17.3356 17.8635C15.6801 19.5572 13.4896 20.6017 11.1176 20.8283C10.8051 20.858 10.016 20.8791 9.73946 20.865L9.73944 20.8651ZM10.8182 19.9484C14.7554 19.6597 18.0233 16.9428 19.0042 13.1427C19.8068 10.0314 18.9027 6.72523 16.6269 4.44953C14.3512 2.17383 11.0442 1.26963 7.93376 2.07226C3.91681 3.10911 1.10645 6.73262 1.10645 10.8775C1.10645 15.0678 3.96876 18.7087 8.05095 19.7126C8.92859 19.9287 9.9341 20.0145 10.8182 19.9493V19.9484ZM9.48553 12.7932V9.71362H10.8934V15.873H9.48553V12.7932ZM9.48553 6.56572V5.86182H10.8934V7.26964H9.48553V6.56572Z" fill="black"/>
            </svg>
          </div>
          <div class="pricing-table-row-col">
            <span class="pricing-table-row-col__text">Basic live polling &nbsp;</span>
            <svg width="21" class="i-sign pricing-table-row-col__i-sign" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.73944 20.8651C6.51984 20.7018 3.60344 19.0471 1.85044 16.3901C0.926218 14.9893 0.393398 13.4783 0.224658 11.7791C0.179346 11.3205 0.179346 10.4135 0.224658 9.95487C0.393408 8.25487 0.926218 6.74467 1.85044 5.34387C3.3895 3.01027 5.86844 1.41727 8.63404 0.984469C9.18872 0.897751 9.56686 0.869629 10.1887 0.869629C10.8106 0.869629 11.1887 0.897749 11.7434 0.984469C14.509 1.41729 16.988 3.01027 18.527 5.34387C19.4512 6.74465 19.984 8.25567 20.1528 9.95487C20.1981 10.4135 20.1981 11.3205 20.1528 11.7791C19.92 14.1229 18.9551 16.2065 17.3356 17.8635C15.6801 19.5572 13.4896 20.6017 11.1176 20.8283C10.8051 20.858 10.016 20.8791 9.73946 20.865L9.73944 20.8651ZM10.8182 19.9484C14.7554 19.6597 18.0233 16.9428 19.0042 13.1427C19.8068 10.0314 18.9027 6.72523 16.6269 4.44953C14.3512 2.17383 11.0442 1.26963 7.93376 2.07226C3.91681 3.10911 1.10645 6.73262 1.10645 10.8775C1.10645 15.0678 3.96876 18.7087 8.05095 19.7126C8.92859 19.9287 9.9341 20.0145 10.8182 19.9493V19.9484ZM9.48553 12.7932V9.71362H10.8934V15.873H9.48553V12.7932ZM9.48553 6.56572V5.86182H10.8934V7.26964H9.48553V6.56572Z" fill="black"/>
            </svg>
          </div>
          <div class="pricing-table-row-col">
            <span class="pricing-table-row-col__text">Advanced live polling &nbsp;</span>
            <svg width="21" class="i-sign pricing-table-row-col__i-sign" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.73944 20.8651C6.51984 20.7018 3.60344 19.0471 1.85044 16.3901C0.926218 14.9893 0.393398 13.4783 0.224658 11.7791C0.179346 11.3205 0.179346 10.4135 0.224658 9.95487C0.393408 8.25487 0.926218 6.74467 1.85044 5.34387C3.3895 3.01027 5.86844 1.41727 8.63404 0.984469C9.18872 0.897751 9.56686 0.869629 10.1887 0.869629C10.8106 0.869629 11.1887 0.897749 11.7434 0.984469C14.509 1.41729 16.988 3.01027 18.527 5.34387C19.4512 6.74465 19.984 8.25567 20.1528 9.95487C20.1981 10.4135 20.1981 11.3205 20.1528 11.7791C19.92 14.1229 18.9551 16.2065 17.3356 17.8635C15.6801 19.5572 13.4896 20.6017 11.1176 20.8283C10.8051 20.858 10.016 20.8791 9.73946 20.865L9.73944 20.8651ZM10.8182 19.9484C14.7554 19.6597 18.0233 16.9428 19.0042 13.1427C19.8068 10.0314 18.9027 6.72523 16.6269 4.44953C14.3512 2.17383 11.0442 1.26963 7.93376 2.07226C3.91681 3.10911 1.10645 6.73262 1.10645 10.8775C1.10645 15.0678 3.96876 18.7087 8.05095 19.7126C8.92859 19.9287 9.9341 20.0145 10.8182 19.9493V19.9484ZM9.48553 12.7932V9.71362H10.8934V15.873H9.48553V12.7932ZM9.48553 6.56572V5.86182H10.8934V7.26964H9.48553V6.56572Z" fill="black"/>
            </svg>
          </div>
        </div>

        <div class="pricing-table-row">
          <div class="pricing-table-row-col"></div>
          <div class="pricing-table-row-col"></div>
          <div class="pricing-table-row-col">
            <span class="pricing-table-row-col__text">Surveys &nbsp;</span>
            <svg width="21" class="i-sign pricing-table-row-col__i-sign" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.73944 20.8651C6.51984 20.7018 3.60344 19.0471 1.85044 16.3901C0.926218 14.9893 0.393398 13.4783 0.224658 11.7791C0.179346 11.3205 0.179346 10.4135 0.224658 9.95487C0.393408 8.25487 0.926218 6.74467 1.85044 5.34387C3.3895 3.01027 5.86844 1.41727 8.63404 0.984469C9.18872 0.897751 9.56686 0.869629 10.1887 0.869629C10.8106 0.869629 11.1887 0.897749 11.7434 0.984469C14.509 1.41729 16.988 3.01027 18.527 5.34387C19.4512 6.74465 19.984 8.25567 20.1528 9.95487C20.1981 10.4135 20.1981 11.3205 20.1528 11.7791C19.92 14.1229 18.9551 16.2065 17.3356 17.8635C15.6801 19.5572 13.4896 20.6017 11.1176 20.8283C10.8051 20.858 10.016 20.8791 9.73946 20.865L9.73944 20.8651ZM10.8182 19.9484C14.7554 19.6597 18.0233 16.9428 19.0042 13.1427C19.8068 10.0314 18.9027 6.72523 16.6269 4.44953C14.3512 2.17383 11.0442 1.26963 7.93376 2.07226C3.91681 3.10911 1.10645 6.73262 1.10645 10.8775C1.10645 15.0678 3.96876 18.7087 8.05095 19.7126C8.92859 19.9287 9.9341 20.0145 10.8182 19.9493V19.9484ZM9.48553 12.7932V9.71362H10.8934V15.873H9.48553V12.7932ZM9.48553 6.56572V5.86182H10.8934V7.26964H9.48553V6.56572Z" fill="black"/>
            </svg>
          </div>
        </div>

        <div class="pricing-table-row">
          <div class="pricing-table-row-col"></div>
          <div class="pricing-table-row-col"></div>
          <div class="pricing-table-row-col">
            <span class="pricing-table-row-col__text">Raffles &nbsp;</span>
            <svg class="i-sign pricing-table-row-col__i-sign" width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.73944 20.8651C6.51984 20.7018 3.60344 19.0471 1.85044 16.3901C0.926218 14.9893 0.393398 13.4783 0.224658 11.7791C0.179346 11.3205 0.179346 10.4135 0.224658 9.95487C0.393408 8.25487 0.926218 6.74467 1.85044 5.34387C3.3895 3.01027 5.86844 1.41727 8.63404 0.984469C9.18872 0.897751 9.56686 0.869629 10.1887 0.869629C10.8106 0.869629 11.1887 0.897749 11.7434 0.984469C14.509 1.41729 16.988 3.01027 18.527 5.34387C19.4512 6.74465 19.984 8.25567 20.1528 9.95487C20.1981 10.4135 20.1981 11.3205 20.1528 11.7791C19.92 14.1229 18.9551 16.2065 17.3356 17.8635C15.6801 19.5572 13.4896 20.6017 11.1176 20.8283C10.8051 20.858 10.016 20.8791 9.73946 20.865L9.73944 20.8651ZM10.8182 19.9484C14.7554 19.6597 18.0233 16.9428 19.0042 13.1427C19.8068 10.0314 18.9027 6.72523 16.6269 4.44953C14.3512 2.17383 11.0442 1.26963 7.93376 2.07226C3.91681 3.10911 1.10645 6.73262 1.10645 10.8775C1.10645 15.0678 3.96876 18.7087 8.05095 19.7126C8.92859 19.9287 9.9341 20.0145 10.8182 19.9493V19.9484ZM9.48553 12.7932V9.71362H10.8934V15.873H9.48553V12.7932ZM9.48553 6.56572V5.86182H10.8934V7.26964H9.48553V6.56572Z" fill="black"/>
            </svg>
          </div>
        </div>

        <div class="pricing-table-row">
          <div class="pricing-table-row-col"></div>
          <div class="pricing-table-row-col"></div>
          <div class="pricing-table-row-col">
            <span class="pricing-table-row-col__text">more...</span>
          </div>
        </div>
        </section>

    </section>

    <section class="pricing-cta center pricing-center">
      <section class="pricing-cta-section">
        <a class="btn pricing-cta__btn numbers__cta-btn btn-shadow btn_white" href="javascript:void(0);" >Sign up</a>
        <a class="pricing-cta__details-link" href="javascript:void(0);">View details</a>
      </section>
      <section class="pricing-cta-section">
        <a class="btn pricing-cta__btn numbers__cta-btn btn-shadow btn_blue" href="javascript:void(0);" >Free 2 week trial</a>
        <a class="pricing-cta__details-link" href="javascript:void(0);">View plan details</a>
      </section>
      <section class="pricing-cta-section">
        <a class="btn pricing-cta__btn numbers__cta-btn btn-shadow btn_blue" href="javascript:void(0);" >Inquire</a>
        <a class="pricing-cta__details-link" href="javascript:void(0);">View details or request a demo</a>
      </section>
    </section>

    <section class="pricing-view-plan center">
      <div class="pricing-view-plan-links-wrapper">
        <a class="btn pricing-view-plan-comparison-btn pricing-view-plan__comparison-btn btn--transp" href="javascript:void(0);">View full plan comparison</a>
        <div class="pricing-view-plan__pricing-view-plan-links-wrapper">
          <a class="pricing-view-plan-link pricing-view-plan__link" href="javascript:void(0);">For non-profits</a>
          <a class="pricing-view-plan-link pricing-view-plan__link" href="javascript:void(0);">For education</a>
        </div>
      </div>
    </section>
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
        <div class="numbers__cta">
          <div class="numbers__cta-btns-wrapper">
            <a class="btn numbers__cta-btn numbers-cta-btns-wrapper__cta-btn btn_white" href="javascript:void(0);" >Try it now</a>
            <a class="btn numbers__cta-btn numbers-cta-btns-wrapper__cta-btn btn_white numbers__cta-btn--transp" href="javascript:void(0);" >Request a demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php get_footer('lp'); ?>
