import { Component, OnInit } from '@angular/core';
import  * as $ from 'jquery';
declare let jQuery: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(document).ready(function() {
      jQuery(".icon-close").click(function() {
        
      jQuery('body').removeClass('footer-cookies')
      jQuery('.section.sec-cookies').hide();
      });
      jQuery(".btn-understand").click(function() {
      jQuery('body').removeClass('footer-cookies')
      jQuery('.section.sec-cookies').hide();
      });
    
      });
  }

}
