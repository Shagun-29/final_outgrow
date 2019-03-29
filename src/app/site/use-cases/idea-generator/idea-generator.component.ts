import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiRequestService } from '../../../shared/services/api-request.service';

declare var jQuery: any;
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
  emailError: boolean = false;
  subCategoryError: boolean = false;
  topFunnel = [];
  middleFunnel = [];
  bottomFunnel = [];
  loader = document.querySelector('.preloader');
  stateName_sec1 = 'show';
  stateName_sec2 = 'hide';
  stateName_sec3 = 'hide';
  stateName_sec4 = 'hide';
  stateName_secnew = 'hide';
  loading: boolean = true;
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
      this.loading = false;
      this.tempVar = response.json().values;
      this.tempVar.forEach(value => {
        this.categories.push(value[0]);
      });
      this.categories = this.sortArray(this.categories);
    },
      (error: any) => {
      })
  }

  getStarted() {
    jQuery('.sec2-bg').removeClass('hide');
    jQuery('html, body').animate({
      scrollTop: jQuery('.sec2-bg').offset().top
    }, 1000);
    setTimeout(function () {
      jQuery(".sec1-bg").addClass("hide");
    }, 1000)
    let self = this;
    setTimeout(() => {
      let options = [];
      this.categories.map(category => {
        options.push({ label: category, value: category })
      })
      jQuery('.selectize-category').selectize({
        options: options,
        labelField: 'label',
        placeholder: 'Choose Category',
        onChange: function (event) {
          self.selectedOption.category = event;
          self.categorySelected(event);
        }
      }
      );
    }, 1000);
  }

  categorySelected(event) {
    let self = this;
    this.subCategories ? this.subCategories.splice(0, this.subCategories.length) : '';
    this.tempVar.forEach(value => {
      if (value[0] === event)
        this.subCategories.push(...value.slice(1, value.length));
    });
    this.subCategories = this.sortArray(this.subCategories);
    jQuery('.sec3-bg').removeClass('hide');
    jQuery('html, body').animate({
      scrollTop: jQuery('.sec3-bg').offset().top
    }, 1000);
    setTimeout(function () {
      jQuery(".sec2-bg").addClass("hide");
    }, 1000)
    setTimeout(() => {
      let options = [];
      this.subCategories.map(subCategory => {
        options.push({ label: subCategory, value: subCategory })
      })
      jQuery('.selectize-sub-category').selectize({
        options: options,
        labelField: 'label',
        placeholder: 'Choose Sub Category',
        onChange: function (event) {
          self.selectedOption.subCategory = event;
          self.subCategorySelected()
        }
      }
      );
    }, 1000);
  }

  subCategorySelected() {
    jQuery('.sec4-bg').removeClass('hide');
    jQuery('html, body').animate({
      scrollTop: jQuery('.sec4-bg').offset().top
    }, 1000);
    setTimeout(function () {
      jQuery(".sec3-bg").addClass("hide");
    }, 1000)
  }

  showIdeas() {
    let self = this;
    let enteredEmail=this.emailField.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g)
    if (enteredEmail==this.emailField) {
      this.emailError = false;
      jQuery(".new-sec-bg").fadeIn("slow", function () {
        jQuery(this).removeClass("hide");
      });
      jQuery(".sec4-bg").fadeOut("slow", function () {
        jQuery(this).addClass("hide");
      });
      jQuery('body').css('overflow-y', 'scroll');
      setTimeout(() => {
        let options = []
        this.categories.map(category => {
          options.push({ label: category, value: category })
        })
        jQuery('.selectize-category-result').selectize({
          options: options,
          labelField: 'label',
          placeholder: 'Choose Category',
          onChange: function (event) {
            self.selectedOption.category_new = event;
            self.newCategoryChanges(event);
            jQuery('.selectize-sub-category-result')[0].selectize.destroy();
            setTimeout(() => {
              self.initSelectize();
            });
          }
        }
        );
        self.initSelectize();
        jQuery('.selectize-category-result')[0].selectize.setValue(this.selectedOption.category);
      }, 500);
      this.parseFunnel(this.selectedOption.category, this.selectedOption.subCategory);
    } else {
      this.emailError = true;
    }
  }

  initSelectize() {
    let self = this;
    let options = []
    this.subCategories.map(subCategory => {
      options.push({ label: subCategory, value: subCategory })
    })
    jQuery('.selectize-sub-category-result').selectize({
      options: options,
      labelField: 'label',
      placeholder: 'Choose Sub-Category',
      onChange: function (event) {
        self.selectedOption.subCategory_new = event;
        self.newSubCategoryChanges();
      }
    }
    );
    jQuery('.selectize-sub-category-result')[0].selectize.setValue(this.selectedOption.subCategory);
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
    this.subCategories = this.sortArray(this.subCategories);
  }

  newSubCategoryChanges() {
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
    subCategory = subCategory.trim().replace(/\s/, '');
    let funnelSubCategory = 'key' + subCategory;
    this.apiRequestService.getSubCategories(funnelCategory).subscribe((response: any) => {
      let data = response.json().values;
      this.clearFunnels();
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
    })

  }

  sortArray(newArray) {
    return newArray.sort(function (a, b) {
      var newArrayA = a.trim().toLowerCase(), newArrayB = b.trim().toLowerCase();
      if (newArrayA < newArrayB)
        return -1
      if (newArrayA > newArrayB)
        return 1
      return 0
    })
  }

}