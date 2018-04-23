window.showPlan = function (a){
	if(a=='m'){
		console.log(jQuery(this));
		jQuery('#monthly').addClass('active').siblings('.cycle-tab').removeClass('active');
		jQuery('#m').addClass('active').siblings('.pricing-cards').removeClass('active');
	}
	else if(a=='s'){
		jQuery('#half-yearly').addClass('active').siblings('.cycle-tab').removeClass('active');
		jQuery('#s').addClass('active').siblings('.pricing-cards').removeClass('active');
	}
	else if(a=='y'){
		jQuery('#annually').addClass('active').siblings('.cycle-tab').removeClass('active');
		jQuery('#y').addClass('active').siblings('.pricing-cards').removeClass('active');
	}
}
window.showIntercom = function () {
    console.log('intercom');
    jQuery(document).find('.intercom-launcher').click();
}
window.close_accordion_section = function () {
	jQuery('.accordion .accordion-section-title').removeClass('active');
	jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
}

window.selectPlan = function(plantype) {
createCookie('ltd', plantype, 365, '.' + window.location.hostname);
return true;
}

jQuery(document).ready(function() {
	jQuery('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});

	jQuery('a.toggle-dots-white').click(function(e) {
		jQuery(this).parent().find('.billing-grey-bottom').slideToggle('slow');
		jQuery(this).toggleClass('sliding');
		if (jQuery(this).hasClass("sliding")) {
            jQuery('a.toggle-dots-white p').html('Less info');
            jQuery('a.toggle-dots-white i').html('keyboard_arrow_up');
        } else {
            jQuery('a.toggle-dots-white p').html('More info');
            jQuery('a.toggle-dots-white i').html('keyboard_arrow_down');
        }
	});
	jQuery('a.toggle-dots-grey').click(function(e) {
		jQuery(this).parent().find('.billing-white-bottom').slideToggle('slow');
		jQuery(this).toggleClass('slidings');
		if (jQuery(this).hasClass("slidings")) {
            jQuery('a.toggle-dots-grey p').html('Less info');
            jQuery('a.toggle-dots-grey i').html('keyboard_arrow_up');
        } else {
            jQuery('a.toggle-dots-grey p').html('More info');
            jQuery('a.toggle-dots-grey i').html('keyboard_arrow_down');
        }
	});

	var acc = document.getElementsByClassName("plusminus");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].onclick = function() {
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
	  	}
	}

	jQuery(".expand").click( function(event) {
		var $target = jQuery(event.target);
		jQuery(this).toggleClass('open');
		$target.closest(".expand").find(".detail").slideToggle(); 
	});

	jQuery(".expand-rs").click( function(event) {
		// jQuery(this).parents('.expand').toggleClass('open');
		// jQuery(this).parents('.expand').find('.detail').slideToggle();
		
		var $target = jQuery(event.target);
		jQuery(this).toggleClass('open');
		// jQuery(this).parents('.expand').toggleClass('open');
		jQuery(this).children(".detail").slideToggle();

		//jQuery('.expand .expand-child > .detail').slideToggle();
	});

	jQuery('.expand-all').click( function(event){
		if(jQuery(this).hasClass('open')){
			jQuery('.expand').removeClass('open');
			jQuery(".detail").slideUp("slow");
		}
		else{
			jQuery('.expand').addClass('open');
			jQuery(".detail").slideToggle();
		}
		jQuery(this).toggleClass('open');
	});


	jQuery('#monthly').click(function(event){
		jQuery('.monthly-price').css('display', 'block');
		jQuery('.annual-price').css('display', 'none');
		jQuery('.s-annual-price').css('display', 'none');
	});

	jQuery('#half-yearly').click(function(event){
		jQuery('.monthly-price').css('display', 'none');
		jQuery('.annual-price').css('display', 'none');
		jQuery('.s-annual-price').css('display', 'block');
	});

	jQuery('#annually').click(function(event){
		jQuery('.monthly-price').css('display', 'none');
		jQuery('.annual-price').css('display', 'block');
		jQuery('.s-annual-price').css('display', 'none');
	});

	jQuery('.toggle-more').click(function(event){
		var $target = jQuery(event.target);
		var d = jQuery(this).children("i").html();
		if(d === 'add'){
			jQuery(this).children("i").html('remove');
			jQuery(this).children("p").html('show less');
		}
		else{
			jQuery(this).children("i").html('add');
			jQuery(this).children("p").html('show more');
		}
		jQuery(this).parents('.pricing-bottom').toggleClass('open');
		$target.closest(".pricing-bottom").find(".features").slideToggle();  
	});
	
    
	jQuery('li').click(function() {
		jQuery(this).addClass('active').siblings().removeClass('active'); 
	});


});