import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outgrow-hr',
  templateUrl: './outgrow-hr.component.html',
  styleUrls: ['./outgrow-hr.component.css']
})
export class OutgrowHrComponent implements OnInit {
  loader = document.querySelector('.preloader');

  constructor() { }

  ngOnInit() {
    this.loader.classList.add('hide');

  }

}
