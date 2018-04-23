window.openTestimonial = function (sectionId) {
    var sections = document.querySelectorAll('.protfolio-inner-section');
    sections.forEach(function (section) {
        section.classList.add('testhide','hide');
    });
    
    var arrowSections = document.querySelectorAll('.arrow_box');
    arrowSections.forEach(function (section) {
        section.classList.remove('testactive');
    });

    var showSection = document.getElementById(sectionId);
    showSection.classList.remove('testhide','hide');
    
    var activeImg = document.getElementById(`${sectionId}-img`);
    activeImg.classList.add('testactive');
}
window.submitEbookData = function (e) {
    e.preventDefault(), jQuery("#ebook-error").html("");
    var o = jQuery("#ebook-email").val(),
        t = jQuery("#ebook-name").val();
    return "" == o || "" == t ? void jQuery("#ebook-error").html("Please fill in the required fields") : void jQuery.ajax({
        url: "js/ebookhandler.php",
        type: "POST",
        data: {
            email: o,
            name: t,
            group_id: 4043919
        },
        beforeSend: function() {
            jQuery("#ebook-submit").html("Preparing your course ... ")
        },
        success: function(e) {
            var a = JSON.parse(e);
            a.error ? (jQuery("#ebook-error").html("There were some errors in the data you provided"), jQuery("#ebook-submit").html('Get Access<i class="material-icons">arrow_downward</i>')) : (jQuery("#ebook-submit").fadeOut(), -1 != window.location.href.indexOf("outgrow.co") && sendNotification(o, t), setTimeout(function() {
                window.location.href = "http://resources.outgrow.co/courses/lead-generation-with-calculators/ebook"
            }, 200))
        },
        error: function(e) {
            jQuery("#ebook-error").html("We are a little backed right now. Please try again."), jQuery("#ebook-submit").html('Get Access<i class="material-icons">arrow_downward</i>')
        }
    })
}

window.sendNotification = function (e, o) {
    jQuery.ajax({
        url: "js/mailer.php",
        data: {
            email: e,
            name: o
        },
        method: "POST",
        success: function(e) {
            console.log(e)
        },
        error: function(e) {
            console.log(e)
        }
    })
}

window.runTimeout = function() {
    setTimeout(function () {
        jQuery('.content-loader').addClass('hide');   
    }, 5000);
    setTimeout(function () {
        console.log('Loading timeout calculate height');
        calculateMinHeight();
    }, 500);
}

window.display = function (url) {
    document.getElementById('og-iframe').src = url;
    jQuery('#og-iframe').addClass('iframeHeight')
    calculateMinHeight();
    
    setTimeout(calculateMinHeight, 2000);
}

window.onNavigatorClick = function () {
    setInterval(function () {
        console.log('Changng active class');
        var navigatorParent = document.querySelector('.navigator-parent');
        var navigators = navigatorParent.children;

        var activeIndex = 0;

        for (let i=0; i<navigators.length; i++) {
            // var navigator = navigators[i];
            if (navigators[i].classList.contains('iav')) {
                activeIndex = i;
            }
        }

        var imageSliders = document.querySelectorAll('.jssor-slide-image');
        
        for (let i=0; i<imageSliders.length; i++) {
            // var imageSlider = imageSliders[index];
            if (imageSliders[i].classList.contains('jssor-active')) {
                imageSliders[i].classList.remove('jssor-active');
            }
        }

        imageSliders[activeIndex].classList.add('jssor-active');
    }, 500);
}

jQuery.noConflict();
jQuery.material.init();
jQuery(document).ready(function() {
	calculateMinHeight();

    jQuery('.calc-links a').on('click',function(){
		jQuery('a').removeClass('active');
		jQuery(this).addClass('active');
    });
    
    jQuery('.navbar-nav li a').on('click',function(){
		jQuery('li a').removeClass('active');
		jQuery(this).addClass('active');
    });
    
	var iframes = iFrameResize({
        log: false,
        autoResize: true,
        enablePublicMethods: true,
        checkOrigin: false,
    },'#og-iframe');

	var url = setLoginSignup();

	console.log(url);

    jQuery('#btnBuildCalc1 > a').prop('href', url);

    runTimeout();
    // initTestimonial();

    // jQuery(".swiper-button-next4").click(function(){
    //     jQuery(".swiper-slide-first").css("margin-left", "-370px");
    // });
    // jQuery(".swiper-button-prev4").click(function(){
    //     jQuery(".swiper-slide-first").css("margin-left", "-370px");
    // });


    jssor_1_slider_init = function() {

        var jssor_1_options = {
            $AutoPlay: 1,
            $SlideWidth: 720,
            $Cols: 2,
            $Align: 280,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
            }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        /*#region responsive code begin*/

        var MAX_WIDTH = 1366;

        function ScaleSlider() {
            var containerElement = jssor_1_slider.$Elmt.parentNode;
            var containerWidth = containerElement.clientWidth;

            if (containerWidth) {

                var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                jssor_1_slider.$ScaleWidth(expectedWidth);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }

        ScaleSlider();

        $Jssor$.$AddEvent(window, "load", ScaleSlider);
        $Jssor$.$AddEvent(window, "resize", ScaleSlider);
        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
        /*#endregion responsive code end*/
    };

    jssor_1_slider_init();
    onNavigatorClick();
});