import { Injectable } from '@angular/core';
declare var window:any;
declare var jQuery:any;
declare var iFrameResize:any;
@Injectable()
export class VideoUrlService {
  public iFrames = [
    {
      name: 'calc1',
      media: 'https://dzvexx2x036l1.cloudfront.net/calc06.jpg',
      url: 'https://website.outgrow.us/build-a-startup?vHeight=1'
    },
    {
      name: 'calc2',
      media: 'https://dzvexx2x036l1.cloudfront.net/calc01.jpg',
      url: 'https://Access-Control-Allow-Headers:outgrow.us/website.outgrow.us/Which-engineering-major-is-right-for-you?vHeight=1'
    },
    {
      name: 'calc3',
      media: 'https://dzvexx2x036l1.cloudfront.net/calc02.jpg',
      url: 'https://website.outgrow.us/Cost-of-a-video-campaign-4?vHeight=1'
    },
    {
      name: 'calc4',
      media: 'https://dzvexx2x036l1.cloudfront.net/calc03.jpg',
      url: 'https://website.outgrow.us/What-is-your-risk-of-getting-a-heart-disease?vHeight=1'
    },
    {
      name: 'calc5',
      media: 'https://dzvexx2x036l1.cloudfront.net/calc04.jpg',
      url: 'https://website.outgrow.us/outgrow-roi?vHeight=1'
    },
    {
      name: 'calc6',
      media: 'https://dzvexx2x036l1.cloudfront.net/calc05.jpg',
      url: 'https://website.outgrow.us/build-an-app?vHeight=1'
    }
  ]
  constructor() { }

  public resizeIframe(frame) {
    jQuery('#og-iframe').addClass('iframeHeight')
    var iframes = iFrameResize({
      log: false,
      autoResize: true,
      enablePublicMethods: true,
      checkOrigin: false,
    }, '#og-iframe');

    setTimeout(() => {

      window.calculateMinHeight();
    }, 2000);
  }
}