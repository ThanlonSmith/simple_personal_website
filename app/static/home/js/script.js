(function(b){function l(){if(b(".preloader").length){b(".preloader").delay(200).fadeOut(500)}}if(b(".scroll-nav").length){b(".scroll-nav ul").onePageNav()}b('[data-toggle="tooltip"]').tooltip();b(".mobile-menu .scroll-nav .navigation li a").on("click",function(){var a=b(window).width();if(a<=1199){b(".mobile-menu .navbar-toggle").trigger("click")}});b(".typed-title").typed({stringsElement:b(".typing-title"),backDelay:1000,typeSpeed:0,loop:true});function i(){var a=b(window).width();if(a<=1199){}else{b(".card-inner").niceScroll()}}i();var p=b(window).width();var m=b(window).height();var h=b(".card-outer .container");var n=b(".card-outer .card-inner-box");var g=b(".card-item");var d=h.data("animation-in");var e=h.data("animation-out");b(".main-menu").on("click","a",function(){var t=b(this).attr("href");var s=parseFloat(b(t).offset().top);var a=b(t);var w=b(".main-menu li");var v=b(".main-menu li.home");var u=b(this).closest("li");var r=b(".lnks .lnk.discover");if(!u.hasClass("active")&b("#home").length){w.removeClass("active");h.find(g).removeClass("animated "+d);if(b(h).hasClass("opened")){h.find(g).addClass("animated "+e)}u.addClass("active");h.addClass("opened");h.find(a).removeClass("animated "+e);h.find(a).addClass("animated "+d);b(g).addClass("hide-item");b(a).removeClass("hide-item");b(a).addClass("active")}if(!v.hasClass("active")){b(n).addClass("offsetleft")}else{b(n).removeClass("offsetleft")}return false});if(b(".dial").length){b(".dial").appear(function(){var r=b(this);var a=r.attr("data-fgColor");var s=r.attr("value");r.knob({value:0,min:0,max:100,skin:"tron",readOnly:true,thickness:0.12,dynamicDraw:true,displayInput:false});b({value:0}).animate({value:s},{duration:2000,easing:"swing",progress:function(){r.val(Math.ceil(this.value)).trigger("change")}})},{accY:0})}function o(){if(b(".round-dial").length){b(".round-dial").each(function(){var r=b(this);var a=r.attr("data-fgColor");var s=r.attr("value");r.knob({value:0,min:0,max:100,skin:"tron",readOnly:true,thickness:0.12,dynamicDraw:true,displayInput:false});b({value:0}).animate({value:s},{duration:0,easing:"swing",progress:function(){r.val(Math.ceil(this.value)).trigger("change")}})})}}o();function j(){if(b(".masonry-items-container").length){var r=b(window);var a=b(".masonry-items-container");a.isotope({itemSelector:".masonry-item",masonry:{columnWidth:".column-width"},animationOptions:{duration:500,easing:"linear"}});r.on("resize",function(){a.isotope({itemSelector:".masonry-item",animationOptions:{duration:500,easing:"linear",queue:false}})})}}j();function k(){if(b(".masonry-two").length){var r=b(window);var a=b(".masonry-two");a.isotope({itemSelector:".masonry-item",masonry:{columnWidth:".masonry-item",},animationOptions:{duration:500,easing:"linear"}});r.on("resize",function(){a.isotope({itemSelector:".masonry-item",animationOptions:{duration:500,easing:"linear",queue:false}})})}}k();if(b(".portfolio-carousel-one").length){b(".portfolio-carousel-one").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",loop:true,mouseDrag:false,margin:30,nav:true,smartSpeed:700,autoplay:true,autoplayTimeout:7000,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:1},1024:{items:1},}})}if(b(".portfolio-carousel-two").length){b(".portfolio-carousel-two").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",loop:true,mouseDrag:false,margin:30,nav:true,smartSpeed:700,autoplay:true,autoplayTimeout:7000,navText:['<span class="arrow-left"></span>','<span class="arrow-right"></span>'],responsive:{0:{items:1},600:{items:1},1024:{items:1},}})}if(b(".portfolio-carousel-three").length){b(".portfolio-carousel-three").owlCarousel({loop:true,margin:20,nav:true,smartSpeed:700,autoplay:4000,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:2},800:{items:3},1024:{items:4},1600:{items:5}}})}if(b(".testimonial-carousel").length){b(".testimonial-carousel").owlCarousel({loop:true,margin:20,nav:true,smartSpeed:700,autoplay:4000,navText:['<span class="arrow-left"></span>','<span class="arrow-right"></span>'],responsive:{0:{items:1},600:{items:1},1024:{items:1},}})}if(b(".single-item-carousel").length){b(".single-item-carousel").owlCarousel({loop:true,margin:20,nav:true,smartSpeed:700,autoplay:4000,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:1},1024:{items:1},}})}if(b(".lightbox-image").length){b(".lightbox-image").fancybox({openEffect:"fade",closeEffect:"fade",helpers:{media:{}}})}if(b("#contact-form").length){b("#contact-form").validate({rules:{username:{required:true},email:{required:true,email:true},phone:{required:true},message:{required:true}}})}if(b(".scroll-to-target").length){b(".scroll-to-target").on("click",function(){var a=b(this).attr("data-target");b("html, body").animate({scrollTop:b(a).offset().top},1500)})}if(b(".progress-line").length){b(".progress-line").appear(function(){var a=b(this);var r=a.data("width");b(a).css("width",r+"%")},{accY:0})}if(b(".tabs-box").length){b(".tabs-box .tab-buttons .tab-btn").on("click",function(a){a.preventDefault();var r=b(b(this).attr("data-tab"));if(b(r).is(":visible")){return false}else{r.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn");b(this).addClass("active-btn");r.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0);r.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab");b(r).fadeIn(300);b(r).addClass("active-tab")}})}if(b(".wow").length){var q=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:true,live:true});q.init()}if(b(".count-box").length){b(".count-box").appear(function(){var a=b(this),s=a.find(".count-text").attr("data-stop"),t=parseInt(a.find(".count-text").attr("data-speed"),10);if(!a.hasClass("counted")){a.addClass("counted");b({countNum:a.find(".count-text").text()}).animate({countNum:s},{duration:t,easing:"linear",step:function(){a.find(".count-text").text(Math.floor(this.countNum))},complete:function(){a.find(".count-text").text(this.countNum)}})}},{accY:0})}function f(){if(b(".bottom-parallax").length){var t=b(window).scrollTop();var s=b(".main-footer").height();var r=b(".page-wrapper").height();var a=r-s-1100;if(t>=a){b("body").addClass("parallax-visible")}else{b("body").removeClass("parallax-visible")}}}f();if(b(".sticky-box").length){var c=new StickySidebar(".portfolio-single .content-column .inner",{topSpacing:80,bottomSpacing:0,containerSelector:".sticky-container",innerWrapperSelector:".sticky-box"})}if(b("#scroll-container").length){b("#scroll-container").multiscroll({navigation:true,css3:true})}b(window).on("scroll",function(){f()});b(window).on("load",function(){l();j();k()});b(window).on("resize",function(){i()})})(window.jQuery);