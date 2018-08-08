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
  }

}
