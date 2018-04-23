jQuery(window).load(function () {
function fn(highlighted) {
var size = 1;
var button = 1;
var button_class = "gallery-header-center-right-links-current";
var normal_size_class = "gallery-content-center-normal";
var full_size_class = "gallery-content-center-full";
var jQuerycontainer = jQuery('.gallery-content-center');
    console.log(highlighted);
jQuerycontainer.isotope({itemSelector : '.abc', filter: highlighted,});
//jQuerycontainer.isotope({itemSelector : '.abc', filter: '.saas',});



function check_button(){
	jQuery('.gallery-header-center-right-links').removeClass(button_class);
	if(button==1){
		jQuery("#industry").addClass(button_class);
		jQuery("#gallery-header-center-left-title").html('All cards'); 
		}
	if(button==2){
		$("#category").addClass(button_class);
		$("#gallery-header-center-left-title").html('Studio Gallery');
		}
	
}
function check_size(){
	jQuery(".gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
	if(size==0){
		jQuery(".gallery-content-center").addClass(normal_size_class); 
		jQuery(".gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
		}
	if(size==1){
		jQuery(".gallery-content-center").addClass(full_size_class); 
		jQuery(".gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
		}
	jQuerycontainer.isotope({itemSelector : '.abc'});
}


	
jQuery("#filter-all").click(function() { jQuerycontainer.isotope({ filter: '.all' }); button = 0; check_button(); });
jQuery("#industry").click(function() {  $container.isotope({ filter: '.usecase-industry' }); button = 1; check_button();  });
jQuery("#category").click(function() {  $container.isotope({ filter: '.usecase-category' }); button = 2; check_button();  });
jQuery(".gallery-header-center-left-icon").click(function() { if(size==0){size=1;}else if(size==1){size=0;} check_size(); });


check_button();
check_size();
 }
 
 
// fn(".saas");
fn();
 $('.tab-title a').on('click', function() {
	  setTimeout( function() {
		  //fn('.cost');
		  fn();
	 });
});
});

