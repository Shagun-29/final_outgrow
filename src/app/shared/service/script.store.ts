interface Scripts {
    name: string;
    src: string;
  }
  
//   const MARKETING_SCRIPTS: Scripts[] = [
//     { name: 'GTM', src: '../../../assets/js/gtm.js' },
//     { name: 'Wootric', src: 'https://disutgh7q0ncc.cloudfront.net/beacon.js' }
//   ];
  
  export const ScriptStore: Scripts[] = [
    // ...MARKETING_SCRIPTS,
    //for plugins on builder page
    // { name: 'swiper', src: '../../../../assets/js/swiper.min.js' },
    { name : 'swiper', src:'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.jquery.min.js'},
    { name: 'jquery', src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js' },
    { name: 'bootstrap', src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' },
    { name : 'intercom', src: "../../../../assets/js/intercom2.js"}
  ];
  