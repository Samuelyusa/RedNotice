import 'regenerator-runtime';
import './style/template/css/style.css';
import './style/template/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style/template/js/owl.carousel.js';
import './style/template/lib/owlcarousel/assets/owl.carousel.min.css';
import './style/template/lib/owlcarousel/assets/owl.theme.default.min.css';

import 'jquery';
// import './style/template/js/jquery.min.js';
import 'jquery.easing';
import './style/template/lib/waypoints/waypoints.min.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/owl.carousel.js'
// import 'owl.carousel/docs/assets/owlcarousel/assets/owl.carousel.min.css';
// import 'owl.carousel/docs/assets/owlcarousel/assets/owl.theme.default.min.css';
import 'owl.carousel';

import 'moment/moment.js';
import 'waypoints/src/waypoint.js';

import './style/template/js/main2.js';

import slide_1 from './style/template/img/slide_1.jpeg';
import slide_2 from './style/template/img/slide_2.jpeg'; 
import slide_3 from './style/template/img/slide_3.jpeg'; 

import poster_1 from './style/template/img/poster_1.jpeg';
import poster_2 from './style/template/img/poster_2.jpg'; 
import poster_3 from './style/template/img/poster_3.jpg'; 
import poster_4 from './style/template/img/poster_4.jpg'; 
import poster_5 from './style/template/img/poster_5.jpg'; 
import poster_6 from './style/template/img/poster_6.jpg'; 
import poster_7 from './style/template/img/poster_7.jpg'; 


document.querySelector('#Slide_1').src = slide_1;
document.querySelector('#Slide_2').src = slide_2;
document.querySelector('#Slide_3').src = slide_3;

// document.querySelector('#poster_1').src = poster_1;
// document.querySelector('#poster_2').src = poster_2;
// document.querySelector('#poster_3').src = poster_3;
// document.querySelector('#poster_4').src = poster_4;
// document.querySelector('#poster_5').src = poster_5;
// document.querySelector('#poster_6').src = poster_6;
// document.querySelector('#poster_7').src = poster_7;




import main from './script/main.js';
console.log("app.js dijalankan");
main();