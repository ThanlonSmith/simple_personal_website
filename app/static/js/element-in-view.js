(function(a){a.fn.visible=function(h){var b=a(this),c=a(window),j=c.scrollTop(),i=j+c.height(),e=b.offset().top,d=e+b.height(),g=h===true?d:e,f=h===true?e:d;return((f<=i)&&(g>=j))}})(jQuery);$(window).on("scroll",function(){$(".about-us .title h2,.about-us .text-box,.sec-title,.about-section-two .content-column h2,.footer-logo img,.portfolio-item-full-width .content-column h2,.about-section-two .image-column .inner-column,.page-title .drops-icon,.page-title h1 span,.portfolio-single.style-two .text-column .inner-column,.portfolio-single.style-two .info-column .inner-column,.page-title .drop-icon-small,.page-title .drop-icon,.error-page-section .icon-2,.error-page-section .icon-1,.error-section .btn-style-one,.page-title .drops-icon").each(function(b,a){var a=$(a);if(a.visible(true)){a.addClass("now-in-view")}else{a.removeClass("now-in-view")}})});$(document).on("ready",function(){$(".about-us .title h2,.about-us .text-box,.sec-title,.about-section-two .content-column h2,.footer-logo img,.portfolio-item-full-width .content-column h2,.about-section-two .image-column .inner-column,.page-title .drops-icon,.page-title h1 span,.portfolio-single.style-two .text-column .inner-column,.portfolio-single.style-two .info-column .inner-column,.page-title .drop-icon-small,.page-title .drop-icon,.error-page-section .icon-2,.error-page-section .icon-1,.error-section .btn-style-one,.page-title .drops-icon").each(function(b,a){var a=$(a);if(a.visible(true)){a.addClass("now-in-view")}else{a.removeClass("now-in-view")}})});