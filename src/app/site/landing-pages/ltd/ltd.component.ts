import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ltd',
  templateUrl: './ltd.component.html',
  styleUrls: ['./ltd.component.css']
})
export class LtdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let load = document.querySelector('.preloader');
  load.classList.add('hide');
    
  let header = document.querySelector('.navbar-fixed-top');
  let footer = document.querySelector('.footer-14');
  header.classList.remove('hide');
  footer.classList.remove('hide');
  }

}
