import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Http } from '@angular/http';


@Component({
  selector: 'app-outgrow-hr',
  templateUrl: './outgrow-hr.component.html',
  styleUrls: ['./outgrow-hr.component.css']
})
export class OutgrowHrComponent implements OnInit {
  loader = document.querySelector('.preloader');
  constructor(title:Title) { 
   title.setTitle('Improve Marketing and Sales ROI | Outgrow');
  }
  ngOnInit() {
    let header = document.querySelector('.navbar-fixed-top');
    header.classList.add('show');
    let footer = document.querySelector('.footer-14');
    footer.classList.add('show');
    this.loader.classList.add('hide');


  }

}
