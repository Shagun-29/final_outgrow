import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  loader = document.querySelector('.preloader');

  constructor() { }

  ngOnInit() {
    this.loader.classList.add('hide');

  }

}
