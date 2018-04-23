//Google Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PDL5P5M');
// <!-- End Google Tag Manager -->

	/*_linkedin_data_partner_id = "35384";
	</script><script type="text/javascript">
	(function(){var s = document.getElementsByTagName("script")[0];
	var b = document.createElement("script");
	b.type = "text/javascript";b.async = true;
	b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
	s.parentNode.insertBefore(b, s);})();*/


	/*<script type="text/javascript" src="https://static.leaddyno.com/js"></script>*/
	// <!-- Facebook Pixel Code -->

	!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
	n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
	document,'script','https://connect.facebook.net/en_US/fbevents.js');

	<noscript>
		<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1616934098622761&ev=PageView&noscript=1" />
	</noscript>
	// <!-- DO NOT MODIFY -->
	// <!-- End Facebook Pixel Code -->
	<script>
		urla = window.location.href;
		if (urla.toLowerCase().indexOf("outgrow.co") < 0) { //For .us and local
		let trackerProp = {
				'ga':"UA-82638968-1",
				'kissmetrics':"41ec14671b03954fde573bdbeb2ec11956b53ce7"
			};
		}

		else { //For .co
			let trackerProp = {
				'ga':"UA-85018378-1",
				'kissmetrics':"0a75a54b2fbeb2fefd728e55b0dc6bff06580cb8",
				'leaddyno':"41c6592b3fbd4a29945c14f3e766a12a1d796246",
				'pixel': "1616934098622761",
			};

			LeadDyno.domain = "outgrow.co";
			LeadDyno.key = trackerProp.leaddyno;
			LeadDyno.recordVisit();
			LeadDyno.autoWatch();

			fbq('init', trackerProp.pixel);
			fbq('track', 'PageView');
			fbq('track', 'ViewContent');
		}
	</script>

	// <!-- <script src="https://cdn.optimizely.com/js/7042601109.js" async defer></script> -->

	<script type="text/javascript">var _kmq = _kmq || [];
		var _kmk = _kmk || trackerProp.kissmetrics;
		function _kms(u){
		  setTimeout(function(){
			var d = document, f = d.getElementsByTagName('script')[0],
			s = d.createElement('script');
			s.type = 'text/javascript'; s.async = true; s.src = u;
			f.parentNode.insertBefore(s, f);
		  }, 1)
		}
		_kms('//i.kissmetrics.com/i.js');
		_kms('//scripts.kissmetrics.com/' + _kmk + '.2.js');
	</script>

	// // <!-- <script>
	// 	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	// 	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	// 	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	// 	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	// 	ga('create', trackerProp.ga, 'auto');
	// 	ga('send', 'pageview');
	// // </script> -->

	// <!-- Analytics Tracking Snippets Ends -->