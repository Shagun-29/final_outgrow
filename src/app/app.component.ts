import { Component, OnInit  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoadingService } from './shared/service/loading.service';

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

 
  constructor(private router: Router,private loadingService: LoadingService) { }
  ngOnInit() {

    //   setTimeout(()=>{
    //       this.show1=false;
    //       this.show2=true;
    //   },2000)


    // this.loadingService.isLoading
    // .subscribe((res)=>{
    //     console.log('in Subscription',res)
    //     if(!res){
    //     this.show=true;
    //     this.show1=false;
    //     }
    // });

    // this.loadingService.isLoading.next(false)

    // this.header.classList.add('hide');
    // this.footer.classList.add('hide');

    this.href = window.location.href;
    console.log("---------------------->",this.href.split('/'));
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
        console.log('in Subscription',res)
        if(res){
        this.show=true;
        this.show1=false;
        }
    });
}
  
}

