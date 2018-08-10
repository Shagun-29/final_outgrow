import { Component, OnInit  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoadingService } from './shared/service/loading.service';
import { CookieService } from '../../node_modules/ngx-cookie-service';

declare var window:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public href: string = "";
    url: string = "";
    text=[];
    flag:boolean=true;
    show:boolean=false;
    show1:boolean=true;
    show2:boolean=false;
 
  constructor(private router: Router,private loadingService: LoadingService,private _cookieService:CookieService) { }
  ngOnInit() {
      if(this._cookieService.get('storage')){
        let login = document.querySelector('.login');
        let dashboard = document.querySelector('.dashboard');
        let getStarted = document.querySelector('.nav-lead-input');
        login.classList.add('hide');
        dashboard.classList.remove('hide');
        getStarted.classList.add('hide')
      }else{
      }
    
    this.href = window.location.href;
    this.text=this.href.split('/');
    if(this.text[this.text.length-1] == "idea-generator"){
        this.flag=false;
    }
    else{
        this.flag=true;
    }
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}
ngAfterViewInit(){
   
    
    this.loadingService.isLoading
    .subscribe((res)=>{
        if(res){
        this.show=true;
        this.show1=false;
        }
    });
}
  
}

