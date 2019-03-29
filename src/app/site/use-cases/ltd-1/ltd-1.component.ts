import { Component, OnInit } from '@angular/core';
declare let jQuery: any;
@Component({
  selector: 'app-ltd-1',
  templateUrl: './ltd-1.component.html',
  styleUrls: ['./ltd-1.component.css']
})
export class Ltd1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  let load = document.querySelector('.preloader');
  load.classList.add('hide');
    
  let header = document.querySelector('.navbar-fixed-top');
  let footer = document.querySelector('.footer-14');
  header.classList.remove('hide');
  footer.classList.remove('hide');

	jQuery(".expand").click( function(event) {
		var $target = jQuery(event.target);
		jQuery(this).toggleClass('open');
		$target.closest(".expand").find(".detail").slideToggle(); 
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
	jQuery(".expand-rs").click( function(event) {
		// jQuery(this).parents('.expand').toggleClass('open');
		// jQuery(this).parents('.expand').find('.detail').slideToggle();
		
		var $target = jQuery(event.target);
		jQuery(this).toggleClass('open');
		// jQuery(this).parents('.expand').toggleClass('open');
		jQuery(this).children(".detail").slideToggle();

		//jQuery('.expand .expand-child > .detail').slideToggle();
	});
  }

}
