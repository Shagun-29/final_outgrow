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
  selectCategory : string = ""
  selectSubCategory : string = "";
  categories =[];
  subCategories =[];
  topFunnel1:any= ['a','b'];
   topFunnel=[];
   middleFunnel=[];
   bottomFunnel=[];

  // middleFunnel1:any=[];
  // bottomFunnel1:any=[]
  // categoryKey="";
  selectize : any;
  list:any;
  rawData=[];
  loader = document.querySelector('.preloader');
  // selectCategory : String = "Choose Category";
  // selectSubcategory = "Choose Sub-Category";
  item="";
  
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
    // console.log("Adding",this.categories);
        jQuery('.selectize-category').selectize({
          create: false,
          sortField: 'text',
          // placeholder : 'Choose Category',
          onChange:function(event){ 
             
            jQuery(".selectize-category-result option[value='"+ event +"']").attr('selected', 'selected')
            jQuery(".selectize-category-result").val(event);

            this.selectCategory=event;
            console.log('-----Event-----',event);
              // self.categoryKey=event.replace(/ +/g, "")+"-Key";
              // console.log("::Event::",self.categoryKey);
              self.getData.getSubCategories(event)
              .subscribe((res:any)=>{
               console.log("::Got Data::",res)
                console.log("::Got Data[0]::",res.values[0])
                let len = res.values.length;
               
                //working
               res.values.forEach((dataSubCategory,i)=>{
                 console.log(i,dataSubCategory[0]) 

                if(dataSubCategory[0].slice(3) != "Custom"){
                  if(self.subCategories[i] != "")
                 self.subCategories[i]=dataSubCategory[0].slice(3); 

                } 
               }); 

             
              (async function subcat(){
                setTimeout(()=>{
                 console.log("------------------subcat-----------------------",self.subCategories);
               jQuery(".selectize-sub-category").selectize({
                create: false,
                sortField: 'text',
                placeholder : ' Choose Sub Category',
                onChange:(event)=>{

                  jQuery(".selectize-sub-category-result option[value='"+ event +"']").attr('selected', 'selected')
                  jQuery(".selectize-sub-category-result").val(event);
                 
                  console.log(event, '....Selectize.....',res.values,event)
                  // self.makeSubCategory(event);
                  // self.item=event
                  // this.selectSubCategory=event
                  let keyValue = "key"+event;
                  // let topFunnel=[];
                  // let middleFunnel=[];
                  // let bottomFunnel=[];
                  let a1=[];

                 res.values.forEach((element,index) => {
                  //  console.log("Key"+event);
                   element.forEach((key,i) => {
                    // console.log(i,key);
                    if(key=="keyCustom"){
                      console.log("inside keycustom",key) 
                      a1=element
                      a1.forEach((keys,j) => {
                        if(j==1){
                          if(keys!="")
                          self.topFunnel.push(keys);
                        }else if(j==2){
                          if(keys!="")
                          self.middleFunnel.push(keys);
                        }else if(j==3){
                          if(keys!="")
                          self.bottomFunnel.push(keys);
                        }
                        
                      });
                    }if(key===keyValue){
                      console.log("inside selected key",keyValue);
                      a1=element
                      a1.forEach((keys,j) => {
                        if(j==1){
                          if(keys!="")
                          self.topFunnel.push(keys);
                        }else if(j==2){
                          if(keys!="")
                          self.middleFunnel.push(keys);
                        }else if(j==3){
                          if(keys!="")
                          self.bottomFunnel.push(keys);
                        }
                        
                      });
                    }

                   });
                   
                 });
                 console.log("Top Funnel",self.topFunnel)
                 console.log("Middle Funnel",self.middleFunnel)
                 console.log("Bottom Funnel",self.bottomFunnel)
                //  this.topFunnel1=topFunnel;
                //  this.middleFunnel1=middleFunnel;
                //  this.bottomFunnel1=bottomFunnel;
                 
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

      // console.log("::Subcategory::",this.subCategories,this.selectCategory);
      
      
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

       
            
         
  
  }
}
