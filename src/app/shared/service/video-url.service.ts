import { Injectable } from '@angular/core';
declare var window:any;
declare var jQuery:any;
declare var iFrameResize:any;
@Injectable()
export class VideoUrlService {

  constructor() { }
  public videoURL(type,frame){
    if(type == "a"){
      // this.video = document.getElementById("frame1");
      console.log(frame.src);
      frame.src="https://website.outgrow.us/build-a-startup?vHeight=1";


    }
    else if(type == "b"){
      frame.src="https://website.outgrow.us/Which-engineering-major-is-right-for-you?vHeight=1";
    }
    else if(type == "c"){
      frame.src="https://website.outgrow.us/Cost-of-a-video-campaign-4?vHeight=1";
    }
    else if(type == "d"){
      frame.src="https://website.outgrow.us/What-is-your-risk-of-getting-a-heart-disease?vHeight=1";
    }
    else if(type == "e"){
      frame.src="https://website.outgrow.us/outgrow-roi?vHeight=1";
    }
    else if(type == "f"){
      frame.src="https://website.outgrow.us/build-an-app?vHeight=1";
    }
    jQuery('#og-iframe').addClass('iframeHeight')
    var iframes = iFrameResize({
      log: false,
      autoResize: true,
      enablePublicMethods: true,
      checkOrigin: false,
  },'#og-iframe');
    
    setTimeout(()=>{

      window.calculateMinHeight();},2000);
  }
}