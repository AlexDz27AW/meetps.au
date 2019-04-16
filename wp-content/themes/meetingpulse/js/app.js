function getScrollBarWidth() {
  var e = jQuery("<div>").css({
      visibility: "hidden",
      width: 100,
      overflow: "scroll"
    }).appendTo("body"),
    t = jQuery("<div>").css({
      width: "100%"
    }).appendTo(e).outerWidth();
  return e.remove(), 100 - t
}
jQuery(document).ready(function(e) {
  var t, s, i, o;
  jQuery(".js-main").backstretch(["/wp-content/themes/meetingpulse/img/macbook.jpg", "/wp-content/themes/meetingpulse/img/main-bg.jpg", "/wp-content/themes/meetingpulse/img/main-bg-2.jpg", "/wp-content/themes/meetingpulse/img/main-bg-4.jpg"], {
    duration: 4e3,
    fade: 700
  }), jQuery(".tooltip").tooltipster({
    theme: ["tooltipster-noir", "tooltipster-noir-customized"],
    maxWidth: 250,
    delay: 200,
    trigger: "custom",
    triggerOpen: {
      click: !0,
      mouseenter: !0,
      touchstart: !0
    },
    triggerClose: {
      mouseleave: !0
    }
  }), jQuery(".js-accord-item").each(function() {
    var e = jQuery(this),
      t = e.find(".js-accord-head"),
      s = e.find(".js-accord-body");
    t.on("click", function(t) {
      t.target.classList.contains("table__tooltip") || (e.toggleClass("active"), s.slideToggle())
    })
  }), t = jQuery(".section__tabs.js-tabs"), s = t.find(".tabs__container"), t.each(function() {
    var e = jQuery(this),
      t = e.find(".js-tabs-link"),
      i = e.find(".js-tabs-item");
    t.on("click", function(e) {
      var o = jQuery(this),
        a = o.index(),
        n = e.target;
      return t.removeClass("active"), o.addClass("active"), i.hide(), i.eq(a).fadeIn(), n.classList.contains("one-time") ? (s.hide(), jQuery(".section__one-time-box").show(), jQuery(".section__box").hide()) : s.is(":visible") || (s.show(), jQuery(".section__one-time-box").hide(), jQuery(".section__box").show()), !1
    })
  }), jQuery(".services.js-tabs").each(function() {
    var e = jQuery(this),
      t = e.find(".js-tabs-link"),
      s = e.find(".js-tabs-item");
    t.on("click", function() {
      var e = jQuery(this),
        i = e.index();
      return navScroll = new SmoothScroll, navScroll.animateScroll(s.eq(i).offset().top - 50), t.removeClass("active"), e.addClass("active"), !1
    })
  }), jQuery(".section__tabs .js-register").on("click", function() {
    // Hack around subscription suffixes for the buy buttons.
    var e = jQuery(this),
      url = e.attr("href"),
      prefix = jQuery(".js-tabs-link.active").text() == "Yearly" ? "-Y" : "-M";
    e.attr("href", url.replace(/-[MY]$/, prefix));
  }),
    function() {
      var e, t = jQuery("body"),
        s = jQuery(".js-popup-wrap"),
        i = jQuery(".js-popup-close");

      function o() {
        t.hasClass("no-scroll") && (t.removeClass("no-scroll"), t.css("padding-right", 0), e && (e.removeClass("animation"), setTimeout(function() {
          e.removeClass("visible")
        }, 300)))
      }
      jQuery("[data-popup]").on("click", function(s) {
        s.preventDefault(), s.stopPropagation();
        var i = jQuery(this).data("popup"),
          o = (e = jQuery(i)).find(".field__input").first();
        t.addClass("no-scroll"), t.css("padding-right", getScrollBarWidth()), e.addClass("visible"), o.length && o.focus(), setTimeout(function() {
          e.addClass("animation")
        }, 10)
      }), i.on("click", function(e) {
        e.preventDefault(), o()
      }), s.on("click", function(e) {
        e.stopPropagation()
      }), jQuery(document).on("click", function() {
        o()
      }), jQuery(document).keyup(function(e) {
        27 === e.keyCode && o()
      })
    }(), jQuery(function() {
    var e = jQuery(".burger"),
      t = (jQuery(".js-menu"), jQuery(".burger-svg__bars"), jQuery(".burger-svg__bar"), jQuery(".burger-svg__bar-1")),
      s = jQuery(".burger-svg__bar-2"),
      i = jQuery(".burger-svg__bar-3"),
      o = !1,
      a = !1,
      n = new TimelineMax;
    e.on("click", function(e) {
      o || (o = !0, a ? (n.clear(), n.to(t, .3, {
        scaleX: 0,
        ease: Back.easeIn
      }).to(i, .3, {
        scaleX: 0,
        ease: Back.easeIn
      }, "-=0.3").set(t, {
        rotation: 0,
        y: 0
      }).set(s, {
        scaleX: 0,
        opacity: 1
      }).set(i, {
        rotation: 0,
        y: 0
      }).to(s, .5, {
        scaleX: 1,
        ease: Elastic.easeOut
      }).to(t, .5, {
        scaleX: 1,
        ease: Elastic.easeOut
      }, "-=0.4").to(i, .5, {
        scaleX: 1,
        ease: Elastic.easeOut,
        onComplete: function() {
          o = !1, a = !1
        }
      }, "-=0.5")) : (n.clear(), n.to(t, .3, {
        y: 6,
        ease: Power4.easeIn
      }).to(s, .3, {
        scaleX: 1,
        ease: Power4.easeIn
      }, "-=0.3").to(i, .3, {
        y: -6,
        ease: Power4.easeIn
      }, "-=0.3").to(t, .5, {
        rotation: 45,
        ease: Elastic.easeOut,
        transformOrigin: "50% 50%"
      }).set(s, {
        opacity: 0,
        immediateRender: !1
      }, "-=0.5").to(i, .5, {
        rotation: -45,
        ease: Elastic.easeOut,
        transformOrigin: "50% 50%",
        onComplete: function() {
          o = !1, a = !0
        }
      }, "-=0.5")))
    })
  }), i = jQuery(".burger"), o = jQuery(".js-menu"), i.on("click", function() {
    o.toggleClass("visible")
  }), jQuery(window).width() < 768 && (jQuery(".main__list, .company__list").addClass("owl-carousel"), jQuery(".owl-carousel.main__list").owlCarousel({
    responsiveClass: !0,
    items: 1,
    stagePadding: 55
  }), jQuery(".owl-carousel.company__list").owlCarousel({
    responsiveClass: !0,
    items: 2,
    stagePadding: 5,
    loop: !1
  })), jQuery(window).width() < 768 && jQuery(".js-accord-sm").each(function() {
    var e = jQuery(this),
      t = e.find(".js-accord-title"),
      s = e.find(".js-accord-text");
    t.on("click", function() {
      e.toggleClass("active"), s.slideToggle()
    })
  }), new SmoothScroll('a[href*="#"]', {
    speed: 600
  }),
    function() {
      var e = jQuery(".services__head");
      if (e[0]) {
        var t = e.offset().top;
        window.addEventListener("scroll", function() {
          window.pageYOffset >= t ? (e.css("position", "fixed"), e.css("top", "0px")) : (e.css("position", "static"), e.css("top", ""))
        })
      }
    }(), jQuery(window).scroll(function() {
    jQuery(".services__item.js-tabs-item").each(function(e) {
      var t, s, i, o;
      t = this, s = jQuery(window).scrollTop(), i = s + jQuery(window).height(), (o = jQuery(t).offset().top + 100) <= i && o >= s ? (jQuery(".services__link.js-tabs-link").removeClass("active"), jQuery(".services__link.js-tabs-link").eq(e).addClass("active")) : jQuery(".services__link.js-tabs-link").eq(e).removeClass("active")
    })
  }), jQuery("a[data-gaevent]").click(function(e) {
    var t, s = jQuery(this).data("gaevent");
    s && (t = s) && ga("send", "pageview", t)
  }), jQuery("#join_meeting_form").on("submit", function(e) {
    e.preventDefault();
    var t = jQuery(this).find("input").val().toLowerCase().replace(/[^\w\d-_]+/g, "");
    document.location.href = "https://meet.ps/" + t
  })
});

jQuery(document).ready(function(){
  jQuery('.js-popup-main-video, .js-popup-main-video .js-popup-close').on('click', function(){
      var video = jQuery('.js-popup-main-video iframe').attr("src");
      jQuery('.js-popup-main-video iframe').attr("src","");
      video = video.replace('&autoplay=1','');
      console.log(video);
      jQuery('.js-popup-main-video iframe').attr("src",video);
  })
})
