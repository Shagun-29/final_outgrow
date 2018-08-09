
    console.log("-------------intercom-------------")
    jQuery(window).load(function() {
        window.closeCookieDialog = function(closeOnReload) {
           jQuery('.footer-14').addClass('hide');
           // jQuery('.intercom-launcher-discovery-frame').removeClass('custom-intercom');
           // jQuery('.intercom-launcher-frame').removeClass('custom-intercom');
           // jQuery('.intercom-launcher-badge-frame').removeClass('custom-intercom');
           jQuery('.intercom-launcher-discovery-frame').removeAttr('style');
           jQuery('.intercom-launcher-frame').removeAttr('style');
           jQuery('.intercom-launcher-badge-frame').removeAttr('style');
           jQuery('.intercom-borderless-frame').removeAttr('style');
           jQuery('.intercom-messenger-frame').css('bottom', 'calc(20px + 80px)');
           if (closeOnReload) {
               document.cookie = "disableCookieDialog='true'; expires=Thu, 29 Dec 2022 12:00:00 UTC"
           }
       }, window.setIntercomLauncherPos = function() {
           const timeout = setTimeout(() => clearInterval(interval), 30000);
           const intercomMessengerInterval = setInterval(() => {
               const iframe = document.querySelector('.intercom-messenger-frame');
               const launcherBadge = document.querySelector('.intercom-launcher-badge-frame');
               const cookieSection = document.querySelector('.footer-14');
               const intercomBorderlessFrame = document.querySelector('.intercom-borderless-frame');
       
               if (!cookieSection.classList.contains('hide')) {
                   if (iframe) {
                       jQuery('.intercom-messenger-frame').css('bottom', '160px');
                   }
                   if (launcherBadge) {
                       jQuery('.intercom-launcher-badge-frame').css('bottom','134px');
                   }
                   if(intercomBorderlessFrame) {
                       jQuery('.intercom-borderless-frame').css('bottom', '160px');
                   }
       
               }
           }, 1000)
           const interval = setInterval(() => {
               console.log('testing');
               const cookieSection = document.querySelector('.sec-cookies');
               const iframe = document.querySelector('.intercom-launcher-discovery-frame');
               if (iframe && !cookieSection.classList.contains('hide')) {
                   iframe.style.bottom = '90px';
                   document.querySelector('.intercom-launcher-frame').style.bottom = '90px'
                   console.log('setting custom intercom css')
                   clearInterval(interval)
               }
           }, 1000)
       },window.showCookieDialog = function() {
           const disableCookieDialog = readCookie('disableCookieDialog');
           if (disableCookieDialog == undefined || disableCookieDialog === 'false') {
               jQuery('.sec-cookies').removeClass('hide');
           }
       }
   })

