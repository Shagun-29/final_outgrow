import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiRequestService } from '../../../shared/services/api-request.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

declare var jQuery: any;
@Component({
  selector: 'app-idea-generator',
  templateUrl: './idea-generator.component.html',
  styleUrls: ['./idea-generator.component.css'],
  animations: [
    trigger('popOverState1', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0,
      })),
      state('move', style({
        transform: 'translateY(-100%)',
        'max-height':'0px'
      })),
      transition('show <=> hide', animate('1000ms ease')),
      transition('* => move', animate('1000ms ease')),
    ]),
    trigger('popOverState2', [
      state('show', style({
        opacity: 1,
        transform :'translateY(0%)'
      })),
      state('hide', style({
        opacity: 0
      })),
      state('move', style({
        transform: 'translateY(-100%)',
      })),
      transition('show => hide', animate('1000ms ease')),
      transition('hide=>show',animate('1000ms ease')),
      transition('* => *', animate('1500ms ease')),
    ]),
    trigger('popOverState3', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      state('move', style({
        transform: 'translateY(-100%)',
      })),
      transition('show <=> hide', animate('1000ms ease')),
      transition('* => *', animate('1500ms ease')),
    ]),
    trigger('popOverState4', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),
    trigger('popOverState5', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),
  ]

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
        console.log("error in getting categories is ::", error);
      })
  }

  getStarted() {
    let self = this;
    this.stateName_sec1 = 'move';
    this.stateName_sec2 = 'show';
    setTimeout(() => {
      this.stateName_sec1 = 'hide';
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
      console.log(self, this)
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
    this.stateName_sec2 = 'move';
    this.stateName_sec3 = 'show';
    setTimeout(() => {
      self.stateName_sec2 = 'hide';
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
    this.stateName_sec3 = 'move';
    this.stateName_sec4 = 'show';
    setTimeout(() => {
      this.stateName_sec3 = 'hide';
    }, 1000);
  }

  showIdeas() {
    let self = this;
    let regex = new RegExp('[\\w\\W]+(@)\\w{2,}(\\.)\\w{2,}')
    if (regex.test(this.emailField)) {
      this.emailError = false;
      this.stateName_secnew = 'show';
      this.stateName_sec4 = 'hide';
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
      console.log("error in getting funnel data is ::", error);
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