var url			=	window.location.href;
	var intercom_id	=	'om2goh5g';
	if (url.toLowerCase().indexOf("outgrow.co") >= 0){
		intercom_id	=	'r841gnag';
	}
	window.intercomSettings = {
		app_id: intercom_id,
		custom_launcher_selector: '#intercom_trigger'
	};
	(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');
	ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};
	i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';
	s.async=true;s.src='https://widget.intercom.io/widget/r841gnag';
	var x=d.getElementsByTagName('script')[0];
	x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

	var schemaA = document.createElement('script');
	schemaA.type = 'application/ld+json';
	schemaA.text = JSON.stringify({
		"@context": "http://schema.org",
		"@type": "WebSite",
		"name": "Outgrow",
		"alternateName": "Outgrowco",
		"url": window.location.origin
	});
	var schemaB = document.createElement('script');
	schemaB.type = 'application/ld+json';
	schemaB.text = JSON.stringify({
		"@context": "http://schema.org",
		"@type": "Organization",
		"name": "Outgrow",
		"url": window.location.origin,
		"logo": "https://outgrow.co/images/logo.png",
		"email": "mailto:p@outgrow.co",
		"sameAs": [
			"https://www.facebook.com/OutgrowCo",
			"https://twitter.com/outgrowco",
			"https://www.linkedin.com/company/outgrow.co"
		],
		"contactPoint": [{
			"@type": "ContactPoint",
			"telephone": "+1-949-791-7659",
			"contactType": "Customer Service and Support"
		}],
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "401 Park Avenue",
			"addressLocality": "New York",
			"addressRegion": "NY",
			"postalCode": "10016-8808",
			"addressCountry": "US"
		},
		"telephone": "+1-949-791-7659",
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "4.9",
			"bestRating": "5",
			"worstRating": "4.5",
			"ratingCount": "48"
		}
	});
	document.querySelector('head').appendChild(schemaA);
	document.querySelector('head').appendChild(schemaB);