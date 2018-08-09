import { Component, OnInit } from '@angular/core';

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
  }

}
