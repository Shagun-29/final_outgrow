import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-why-interactive-home',
  templateUrl: './why-interactive-home.component.html',
  styleUrls: ['./why-interactive-home.component.css','../../../../assets/css/allPage_minified.css','../../../../assets/css/custom-sa.css','../../../../assets/css/sahil-hover.css','../../../../assets/css/home-responsive.css','../../../../assets/css/why-responsive.css']
})
export class WhyInteractiveHomeComponent implements OnInit {

  constructor(router:Router, title:Title) {
    title.setTitle("Why Interactive Content ? | Outgrow");
   }

  ngOnInit() {
  }

}
