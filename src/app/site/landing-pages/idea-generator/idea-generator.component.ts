import { Component, OnInit, animate } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiRequestService } from '../../../shared/services/api-request.service';
import { constants } from 'os';

declare let jQuery: any;

@Component({
  selector: 'app-idea-generator',
  templateUrl: './idea-generator.component.html',
  styleUrls: ['./idea-generator.component.css']

})
export class IdeaGeneratorComponent implements OnInit {
  selectedOption: { category: any; subCategory: any; category_new: any; subCategory_new: any; };
  emailField: any;
  categories = [];
  subCategories = [];
  tempVar: any;
  section_1: boolean = false;
  section_2: boolean = true;
  section_3: boolean = true;
  section_4: boolean = true;
  emailError: boolean = false;
  subCategoryError: boolean = false;
  topFunnel = [];
  middleFunnel = [];
  bottomFunnel = [];
  loader = document.querySelector('.preloader');
  optionCatSelected="";
  optionSubCatSelected="";
  subcategory2="";
  selectedOption_category_new="";
  selectedOption_subCategory_new=""


  constructor(public title: Title,
    public apiRequestService: ApiRequestService) {
    title.setTitle("Idea Generator | Outgrow");
    this.selectedOption = {
      category: null,
      subCategory: null,
      category_new: null,
      subCategory_new: null
    }
  }

  ngOnInit() {
    this.loader.classList.add('hide');
    let header = document.querySelector('.navbar-fixed-top');
    header.classList.add('show');
    let footer = document.querySelector('.footer-14');
    footer.classList.add('show');
    let footer1 = document.querySelector('.section-14');
    footer1.classList.add('hide');
    this.getCategories();
  }

  getCategories() {
    this.apiRequestService.getCategories().subscribe((response) => {
      this.tempVar = response.json().values;
      this.tempVar.forEach(value => {
        this.categories.push(value[0]);
      });
      this.categories = this.sortArray(this.categories);
    },
      (error: any) => {
        console.log("error in getting categories is ::", error);
      })
      setTimeout(() => {
        let self=this
        jQuery('.selectize-category').selectize({
            create: false,
            sortField: 'text',
            placeholder : 'Choose Category',
            onChange:function(event){ 
              self.optionCatSelected=event;
               console.log("--event--",event)
              self.categorySelected(event)
            }
          }
        );
      }, 2000);
      
  }

  getStarted() {
    this.section_2 = false;
    this.animate('sec2-bg');
    // setTimeout(function () {
    //   this.section_1 = true;
    // }, 1000);
    this.section_1 = true;
  }

  categorySelected(event) {
    this.subCategories ? this.subCategories.splice(0, this.subCategories.length) : '';
    console.log("-----Sub Category-----",this.subCategories)
    this.tempVar.forEach(value => {
      if (value[0] === event)
        this.subCategories.push(...value.slice(1, value.length));
    });
    this.subCategories = this.sortArray(this.subCategories);
    this.section_3 = false;
    this.animate('sec3-bg');
    this.section_2 = true;
    setTimeout(() => {
      let self=this
      jQuery('.selectize-sub-category').selectize({
          create: false,
          sortField: 'text',
          placeholder : 'Choose Sub-Category',
          onChange:function(event){ 
            self.optionSubCatSelected=event;
             console.log("--event--",event)
            self.subCategorySelected(event)
          }
        }
      );
    }, 2000);
    // setTimeout(function () {
    //   this.section_2 = true;
    // }, 1000);
   
  }

  subCategorySelected(event) {
    // let self=this;
    console.log('--Sub Category--')
    this.section_4 = false;
    this.animate('sec4-bg');
    // setTimeout(function () {
    //   this.section_3 = true;
    // }, 1000);

    this.section_3 = true;
    
  }

  animate(className) {
    jQuery('html, body').animate({
      scrollTop: jQuery(`.${className}`).offset().top
    }, 1000);

    
  }

  showIdeas() {
  
    let regex = new RegExp('[\\w\\W]+(@)\\w{2,}(\\.)\\w{2,}')
    if (regex.test(this.emailField)) {
      this.emailError = false;
      jQuery(".new-sec-bg").fadeIn("slow", function () {
        jQuery(this).removeClass("hide");
      });
      jQuery(".sec4-bg").fadeOut("slow", function () {
        jQuery(this).addClass("hide");
      });
      console.log(this.optionSubCatSelected, this.optionCatSelected);
      // this.parseFunnel(this.selectedOption.category, this.selectedOption.subCategory);
      this.parseFunnel(this.optionCatSelected, this.optionSubCatSelected);

    } else {
      this.emailError = true;
    }
    let self=this
    jQuery('.select-cat').selectize({
          create: false,
          sortField: 'text',
          placeholder : 'Choose Category',
          onChange:function(event){ 
            
             console.log("--event--",event);
             self.optionCatSelected=event
             self.selectedOption_category_new=event;
            self.newCategoryChanges(event)
          }
        }
      );
    
      jQuery('.select-sub-cat').selectize({
        create: false,
        sortField: 'text',
        placeholder : 'Choose Sub-Category',
        onChange:function(event){ 
          
           console.log("--event--",event);
          //  self.selectedOption_subCategory_new=event;
          //  self.optionSubCatSelected=event
          // self.newSubCategoryChanges()
        }
      
      }
    );

  }

  
  newCategoryChanges(event) {
    console.log("--",event)
    if (this.optionCatSelected === this.selectedOption_category_new) {
      console.log("In IF")
      this.subCategoryError = false;
    }
    else {
      console.log('ELSE')
      this.selectedOption_subCategory_new = null;
      this.subCategoryError = true;
    }
    this.clearFunnels();
    console.log("-->",this.subCategories);
    this.subCategories ? this.subCategories.splice(0, this.subCategories.length) : '';
    this.tempVar.forEach(value => {
      if (value[0] === event)
        this.subCategories.push(...value.slice(1, value.length));
    });
    this.subCategories = this.sortArray(this.subCategories);
    
  }

  newSubCategoryChanges() {
    this.clearFunnels();
    this.subCategoryError = false;
    this.parseFunnel(this.selectedOption_category_new ? this.selectedOption_category_new : this.optionCatSelected, this.selectedOption_subCategory_new);
  }

  clearFunnels() {
    this.topFunnel ? this.topFunnel.splice(0, this.topFunnel.length) : null;
    this.middleFunnel ? this.middleFunnel.splice(0, this.middleFunnel.length) : null;
    this.bottomFunnel ? this.bottomFunnel.splice(0, this.bottomFunnel.length) : null;
  }

  parseFunnel(category, subCategory) {
    let funnelCategory = category;
    subCategory = subCategory.replace(/\s/, '');
    let funnelSubCategory = 'key' + subCategory;
    console.log("::funnel category::"+funnelCategory+"::Funnel subCategory::"+funnelSubCategory)
    console.log("--00000-",funnelCategory,'---')
    this.apiRequestService.getSubCategories(funnelCategory)
    .subscribe((response: any) => {
      console.log('-response-',response)
      let data = response.json().values;

      data.forEach(value => {
        if (value[0] === funnelSubCategory) {
          value[1] && this.topFunnel.push(...value.slice(1, 2));
          value[2] && this.middleFunnel.push(...value.slice(2, 3));
          value[3] && this.bottomFunnel.push(...value.slice(3));

        }
      });
      data.forEach(value => {
        if (value[0] === 'keyCustom') {
          value[1] && this.topFunnel.push(...value.slice(1, 2));
          value[2] && this.middleFunnel.push(...value.slice(2, 3));
          value[3] && this.bottomFunnel.push(...value.slice(3));
        }
      });
    }, (error) => {
      console.log("error in getting funnel data is ::", error);
    })
  }

  sortArray(newArray) {
    return newArray.sort(function (a, b) {
      var newArrayA = a.toLowerCase(), newArrayB = b.toLowerCase();
      if (newArrayA < newArrayB)
        return -1
      if (newArrayA > newArrayB)
        return 1
      return 0
    })
  }

}
