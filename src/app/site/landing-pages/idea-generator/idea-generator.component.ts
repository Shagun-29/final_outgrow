import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SelectModule } from 'ng2-select';
import { IdeaGenService } from '../../../shared/services/idea-gen.service';
import { GetDataService } from '../../../shared/service/get-data.service';
import 'rxjs/add/operator/map';
import { forEach } from '@angular/router/src/utils/collection';
import {NgSelectizeModule} from 'ng-selectize';
declare let jQuery: any;
declare let selectize: any;


@Component({
  selector: 'app-idea-generator',
  templateUrl: './idea-generator.component.html',
  styleUrls: ['./idea-generator.component.css']

})
export class IdeaGeneratorComponent implements OnInit {
  
  categories =[];
  subCategories =[];
  // categoryKey="";
  selectize : any;
  list:any;
  rawData=[];
  loader = document.querySelector('.preloader');
  // selectCategory : String = "Choose Category";
  // selectSubcategory = "Choose Sub-Category";
  item="";
  topFunnel=[];
  middleFunnel=[];
  bottomFunnel=[];
  constructor(private router: Router, title: Title, private getData:GetDataService) {
  }
  

  ngOnInit() {
    this.loader.classList.add('hide');
    let header = document.querySelector('.navbar-fixed-top');
    header.classList.add('show');
    let footer = document.querySelector('.footer-14');
    footer.classList.add('show');
    let footer1 = document.querySelector('.section-14');
    footer1.classList.add('hide');
    
    
    //console.log("::In Idea Geerator::",this.categories)
    console.log("Categories")
    this.getData.getCategories()
     .subscribe((res:any)=>{
      console.log("::Got Data::",res.values)
       console.log("::Got Data[0]::",res.values[0])

      res.values.forEach((dataCategory,i)=>{
        console.log(i,dataCategory[0])
        this.categories[i]=dataCategory[0];   
      }); 
      
      
    })


     
      // Function that validates email address through a regular expression.

   

  function clearAppendTabData (html = null) {
    jQuery('#top-funnel').empty();
    jQuery('#mid-funnel').empty();
    jQuery('#bottom-funnel').empty();
    if (html) {
        jQuery('#top-funnel').append(html.top)
        jQuery('#mid-funnel').append(html.middle)
        jQuery('#bottom-funnel').append(html.bottom)
    }
}



    jQuery(document).ready(function (){
      jQuery(".sec1-button").click(function (){
      jQuery(".sec1-bg").hide();
      jQuery(".sec2-bg").removeClass("hide");
      jQuery(".logo-top").removeClass("hide");
      jQuery('html, body').animate({
      scrollTop: jQuery('.sec2-bg').offset().top
      }, 1000);
      
      setTimeout(function(){
      jQuery(".sec1-bg").addClass("hide");
      }, 1000)
      });
   
      });

    

    let self=this;
    setTimeout(function(){
    console.log("Adding",this.categories)
        jQuery('.selectize-category').selectize({
          create: false,
          sortField: 'text',
          placeholder : ' Choose Category',
          onChange:function(event){  
              // self.categoryKey=event.replace(/ +/g, "")+"-Key";
              // console.log("::Event::",self.categoryKey);
              self.getData.getSubCategories(event)
              .subscribe((res:any)=>{
               console.log("::Got Data::",res)
                console.log("::Got Data[0]::",res.values[0])
                let len = res.values.length;
                //in process
                console.log("::Got Data[0] Length::",res.values.length);
                // for(let i=0;i<len;i++)
                // {
                //   console.log("-Count->",res.values[i] )
                //   for(let j=0;j<res.values[i].count;j++){
                //     console.log("-values->",res.values[i][j])
                //   }
                // }  
                // res.values.forEach((data,i)=>{
                //   console.log(i,"--Outside--",data)
                //   // data.forEach((t,j)=>{
                //   //   if(t == event){
                //   //     console.log("matched")
                //   //   }
                //   //   // console.log(i,"--Inside--",t)
                //   // })

                // })


                //working
               res.values.forEach((dataSubCategory,i)=>{
                 console.log(i,dataSubCategory[0])
                if(dataSubCategory[0].slice(3) != "Custom"){
                 self.subCategories[i]=dataSubCategory[0].slice(3); 
                } 
               }); 

              //  (async function subcat(){
              //    setTimeout(()=>{
              //     console.log("------------------subcat-----------------------",self.subCategories);
              //   jQuery(".selectize-sub-category").selectize.addOption({
              //    value:13, text:"abc"
              //   });
              //   jQuery(".selectize-sub-category").selectize.addItem(13)
              //    },0)
                
              //  })()
              (async function subcat(){
                setTimeout(()=>{
                 console.log("------------------subcat-----------------------",self.subCategories);
               jQuery(".selectize-sub-category").selectize({
                create: false,
                sortField: 'text',
                placeholder : ' Choose Sub Category',
                onChange:(event)=>{
                  console.log(event, '....Selectize.....')
                  // self.makeSubCategory(event);
                  // self.item=event
                  jQuery(".sec4-bg").removeClass("hide");
                  jQuery('html, body').animate({
                      scrollTop: jQuery('.sec4-bg').offset().top
                  }, 1000);
                  setTimeout(function(){
                      jQuery(".sec3-bg").addClass("hide");
                  }, 1000)
                }
               })
                },0)
                // console.log("::---Choose Item---::",self.item)
              })()
             })

              jQuery(".sec3-bg").removeClass("hide");
              jQuery('html, body').animate({
                  scrollTop: jQuery('.sec3-bg').offset().top
              }, 1000);
              setTimeout(function(){
                  jQuery(".sec2-bg").addClass("hide");
              }, 1000)
             
            //  jQuery('.selectize-category-result')[0].selectize.setValue(event);
          }
          
      }); 
    
      
      },2000)

      console.log("::Subcategory::",this.subCategories);
      
      
        // jQuery(".selectize-sub-category").
        // click(function(event){
        //   console.log("event")
        //     jQuery(".sec4-bg").removeClass("hide");
        //     jQuery('html, body').animate({
        //         scrollTop: jQuery('.sec4-bg').offset().top
        //     }, 1000);
        //     setTimeout(function(){
        //         jQuery(".sec3-bg").addClass("hide");
        //     }, 1000)

        //     // jQuery('.selectize-sub-category-result')[0].selectize.setValue(event);
        // })
    
        jQuery(".sec-button").click(function(){
              jQuery(".new-sec-bg").fadeIn("slow", function() {
                  jQuery(this).removeClass("hide");
              });
              jQuery(".sec4-bg").fadeOut("slow", function() {
                  jQuery(this).addClass("hide");
              });
              jQuery(".logo-top").removeClass("hide");
              jQuery('body').css('overflow-y','scroll');

          })
   
          // function makeSubCategory(event){
          //   this.getData.getSubCategories(event)
          //   .subscribe(res=>{
          //     console.log("-------END-------",res)
          //   })
          // }
}
}
