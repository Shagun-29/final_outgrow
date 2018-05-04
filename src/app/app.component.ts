import { Component, OnInit  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public href: string = "";
    url: string = "asdf";
    text=[];
    flag:boolean=true;
  constructor(private router: Router) { }

  ngOnInit() {
    this.href = window.location.href;
    console.log("---------------------->",this.href.split('/'));
    this.text=this.href.split('/');
    if(this.text[this.text.length-1] == "idea-generator"){
        this.flag=false;
    }
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}

}

