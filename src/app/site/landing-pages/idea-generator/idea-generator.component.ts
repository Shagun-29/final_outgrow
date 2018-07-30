import { Component, OnInit, animate } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiRequestService } from '../../../shared/services/api-request.service';
import { IdeaGenService } from '../../../shared/service/idea-gen.service';

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

  constructor(public title: Title,
    public apiRequestService: ApiRequestService,
    public ideaGenService: IdeaGenService) {
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
    },
      (error: any) => {
        console.log("error in getting categories is ::", error);
      })
  }

  getStarted() {
    this.section_2 = false;
    this.animate('sec2-bg');
    // setTimeout(function () {
    //   this.section_1 = true;
    // }, 1000);
    this.section_1=true;
  }

  categorySelected(event) {
    this.subCategories ? this.subCategories.splice(0, this.subCategories.length) : '';
    this.tempVar.forEach(value => {
      if (value[0] === event)
        this.subCategories.push(...value.slice(1, value.length));
    });
    this.section_3 = false;
    this.animate('sec3-bg');
    // setTimeout(function () {
    //   this.section_2 = true;
    // }, 1000);
    this.section_2 = true;
  }

  subCategorySelected(event) {
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
      this.parseFunnel(this.selectedOption.category, this.selectedOption.subCategory);
    } else {
      this.emailError = true;
    }
  }
  
  newCategoryChanges(event) {
    if (this.selectedOption.category === this.selectedOption.category_new) {
      this.subCategoryError = false;
    }
    else {
      this.selectedOption.subCategory_new = null;
      this.subCategoryError = true;
    }
    this.clearFunnels();
    this.subCategories ? this.subCategories.splice(0, this.subCategories.length) : '';
    this.tempVar.forEach(value => {
      if (value[0] === event)
        this.subCategories.push(...value.slice(1, value.length));
    });
  }

  newSubCategoryChanges() {
    this.clearFunnels();
    this.subCategoryError = false;
    this.parseFunnel(this.selectedOption.category_new ? this.selectedOption.category_new : this.selectedOption.category, this.selectedOption.subCategory_new);
  }

  clearFunnels() {
    this.topFunnel ? this.topFunnel.splice(0, this.topFunnel.length) : null;
    this.middleFunnel ? this.middleFunnel.splice(0, this.middleFunnel.length) : null;
    this.bottomFunnel ? this.bottomFunnel.splice(0, this.bottomFunnel.length) : null;
  }

  parseFunnel(category, subCategory) {
    let funnelCategory = category;
    let funnelSubCategory = this.ideaGenService.getSubCategoryKey(subCategory);
    this.apiRequestService.getSubCategories(funnelCategory).subscribe((response: any) => {
      let data = response.json().values;
      data.forEach(value => {
        if (value[0] === funnelSubCategory) {
          this.topFunnel.push(...value.slice(1, 2));
          this.middleFunnel.push(...value.slice(2, 3));
          this.bottomFunnel.push(...value.slice(3));
        }
      })
    }, (error) => {
      console.log("error in getting funnel data is ::", error);
    })
  }

}
