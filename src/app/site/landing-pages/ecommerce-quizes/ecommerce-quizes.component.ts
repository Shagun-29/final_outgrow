import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce-quizes',
  templateUrl: './ecommerce-quizes.component.html',
  styleUrls: ['./ecommerce-quizes.component.css']
})
export class EcommerceQuizesComponent implements OnInit {

  constructor() { }

  loader = document.querySelector('.preloader');
  ngOnInit() {
    let header = document.querySelector('.navbar-fixed-top');
    header.classList.add('show');
    let footer = document.querySelector('.footer-14');
    footer.classList.add('show');
    this.loader.classList.add('hide');
  }

}
