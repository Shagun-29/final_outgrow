import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Http } from '@angular/http';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
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
