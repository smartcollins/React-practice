import './App.css';
import { useState, useEffect } from "react";
import Intro2 from "./Intro2"
import Intro3 from "./Intro3"
import SignUp from "./SignUp"


function Intro(){
// const ads = ["https://923971.smushcdn.com/2326753/wp-content/uploads/2022/02/wp-easycart-multilingual.png?lossy=1&strip=1&webp=1","https://bestgasandelectricity.co.uk/wp-content/uploads/2021/12/undraw_The_world_is_mine_re_j5cr-1024x753.png.webp","https://i0.wp.com/cloudwell.io/wp-content/uploads/2022/02/packaged-solutions.png?resize=300%2C264&ssl=1"]
	// function onNext(){
	// 	ads.map(item=>(
	// 		<img src={item} alt="Ads"/>
	// 	))
	// 	console.log('it ran')

	// }

	const [nextPhase,setNextPhase] = useState(false);
	const [signUp,setSignUp] = useState(false);
	function onNext(){
		setNextPhase(true)
	}

	function onSkip(){
		setSignUp(true)
	}

	return(
			<div className="intro">
				{
					nextPhase ? 
						<Intro2/> :
					signUp ? 
						<SignUp/> :
					<div>
						<img src="https://923971.smushcdn.com/2326753/wp-content/uploads/2022/02/wp-easycart-multilingual.png?lossy=1&strip=1&webp=1" alt="logo"/>
						<h2>Donate easily, quickly, right on target all over the world</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
						<div>
						  <span class="on"></span> 
						  <span class="dot"></span> 
						  <span class="dot"></span> 
						</div>
						<div className="btn">
							<button onClick={setSignUp}>Skip</button>
							<button onClick={setNextPhase}>Next</button>
						</div>
					</div>
				}
			</div>
		)
}

export default Intro;



// <Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
// tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
// quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
// consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
// cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
// proident, sunt in culpa qui officia deserunt mollit anim id est laborum.





// <!DOCTYPE html>
// <html>
// <head>
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <style>
// * {box-sizing: border-box;}
// body {font-family: Verdana, sans-serif;}
// .mySlides {display: none;}
// img {vertical-align: middle;}

// /* Slideshow container */
// .slideshow-container {
//   max-width: 1000px;
//   position: relative;
//   margin: auto;
// }

// /* Caption text */
// .text {
//   color: #f2f2f2;
//   font-size: 15px;
//   padding: 8px 12px;
//   position: absolute;
//   bottom: 8px;
//   width: 100%;
//   text-align: center;
// }

// /* Number text (1/3 etc) */
// .numbertext {
//   color: #f2f2f2;
//   font-size: 12px;
//   padding: 8px 12px;
//   position: absolute;
//   top: 0;
// }

// /* The dots/bullets/indicators */
// .dot {
//   height: 15px;
//   width: 15px;
//   margin: 0 2px;
//   background-color: #bbb;
//   border-radius: 50%;
//   display: inline-block;
//   transition: background-color 0.6s ease;
// }

// .active {
//   background-color: #717171;
// }

// /* Fading animation */
// .fade {
//   animation-name: fade;
//   animation-duration: 1.5s;
// }

// @keyframes fade {
//   from {opacity: .4} 
//   to {opacity: 1}
// }

// /* On smaller screens, decrease text size */
// @media only screen and (max-width: 300px) {
//   .text {font-size: 11px}
// }
// </style>
// </head>
// <body>

// <h2>Automatic Slideshow</h2>
// <p>Change image every 2 seconds:</p>

// <div class="slideshow-container">

// <div class="mySlides fade">
//   <div class="numbertext">1 / 3</div>
//   <img src="img_nature_wide.jpg" style="width:100%">
//   <div class="text">Caption Text</div>
// </div>

// <div class="mySlides fade">
//   <div class="numbertext">2 / 3</div>
//   <img src="img_snow_wide.jpg" style="width:100%">
//   <div class="text">Caption Two</div>
// </div>

// <div class="mySlides fade">
//   <div class="numbertext">3 / 3</div>
//   <img src="img_mountains_wide.jpg" style="width:100%">
//   <div class="text">Caption Three</div>
// </div>

// </div>
// <br>

// <div style="text-align:center">
//   <span class="dot"></span> 
//   <span class="dot"></span> 
//   <span class="dot"></span> 
// </div>

// <script>
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
// </script>

// </body>
// </html> 
