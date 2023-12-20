
/*
  Functions for Slide Changing on Home Page 

*/
var slideNum=1;
function nextSlide(){
  slideNum++;
  if(slideNum==5){
    slideNum=1;
  }
  return slideDisplayer();

}
function prevSlide(){
  slideNum--;
  if(slideNum==0){
    slideNum=4;
  }
  return slideDisplayer();
  
}
function slideButton(x){
  slideNum=x;
  return slideDisplayer();
}



function slideDisplayer(){
  if(slideNum==1){
    document.querySelector( ".slide1").style.display="block";
    document.querySelector( ".slide2").style.display="none";
    document.querySelector( ".slide3").style.display="none";
    document.querySelector( ".slide4").style.display="none";
    document.getElementById("mainSlideTablet").src="images/viking_axe.jpg";
    document.querySelector("#cardImg1").src="images/viking_gods.png";
    document.querySelector("#cardImg2").src="images/viking_axe.jpg";
    document.querySelector("#cardImg3").src="images/viking_boat.jpg";
    document.querySelector("#c1h4").innerHTML="Norse Gods";
    document.querySelector("#c2h4").innerHTML="Viking Axes";
    document.querySelector("#c3h4").innerHTML="Viking Boat";

  }
  else if(slideNum==2){
    document.querySelector( ".slide2").style.display="block";
    document.querySelector( ".slide1").style.display="none";
    document.querySelector( ".slide3").style.display="none";
    document.querySelector( ".slide4").style.display="none";
    document.getElementById("mainSlideTablet").src="images/viking_boat.jpg";
    document.querySelector("#cardImg1").src="images/viking_axe.jpg";
    document.querySelector("#cardImg2").src="images/viking_boat.jpg";
    document.querySelector("#cardImg3").src="images/viking_girl.png";
    document.querySelector("#c1h4").innerHTML="Viking Axes";
    document.querySelector("#c2h4").innerHTML="Viking Boat";
    document.querySelector("#c3h4").innerHTML="Viking Attire";
  }
  else if(slideNum==3){
    document.querySelector( ".slide3").style.display="block";
    document.querySelector( ".slide1").style.display="none";
    document.querySelector( ".slide2").style.display="none";
    document.querySelector( ".slide4").style.display="none";
    document.getElementById("mainSlideTablet").src="images/viking_girl.png";
    document.querySelector("#cardImg1").src="images/viking_boat.jpg";
    document.querySelector("#cardImg2").src="images/viking_girl.png";
    document.querySelector("#cardImg3").src="images/viking_gods.png";
    document.querySelector("#c1h4").innerHTML="Viking Boat";
    document.querySelector("#c2h4").innerHTML="Viking Attire";
    document.querySelector("#c3h4").innerHTML="Norse Gods";
  }
  else{
    document.querySelector( ".slide4").style.display="block";
    document.querySelector( ".slide1").style.display="none";
    document.querySelector( ".slide2").style.display="none";
    document.querySelector( ".slide3").style.display="none";
    document.getElementById("mainSlideTablet").src="images/viking_gods.png";
    document.querySelector("#cardImg1").src="images/viking_girl.png";
    document.querySelector("#cardImg2").src="images/viking_gods.png";
    document.querySelector("#cardImg3").src="images/viking_axe.jpg";
    document.querySelector("#c1h4").innerHTML="Viking Attire";
    document.querySelector("#c2h4").innerHTML="Norse Gods";
    document.querySelector("#c3h4").innerHTML="Viking Axes";
  }

}

/*
  Fa Fa Bars function for mobile and tablet view
*/
function burgerMenu() {
  var menu = document.getElementById("navLinks");
  if (menu.style.display == "block") 
  {
      menu.style.display = "none";
  }
  else 
  {
      menu.style.display = "block";
  }
}


/*
  Mobile View Slide Change Function 
*/
var mobileSlide=1;
function mobileSlideChange(){
  mobileSlide++;
  if (mobileSlide==5){
    mobileSlide=1;
  }
  
  if(mobileSlide==1){
    document.querySelector("#mainSlide").src="images/mobileslide1.png";
  }
  else if(mobileSlide==2){
    document.querySelector("#mainSlide").src="images/mobileslide2.png";
  }
  else if(mobileSlide==3){
    document.querySelector("#mainSlide").src="images/mobileslide3.png";
  }
  else{
    document.querySelector("#mainSlide").src="images/mobileslide4.png";
  }

}

/*
  Shows html content swapping
*/

function primeVideo(){
  document.querySelector(".contentNetflix").style.display="none";
  document.querySelector(".contentPV").style.display="grid";
}
function netflix(){
  document.querySelector(".contentPV").style.display="none";
  document.querySelector(".contentNetflix").style.display="grid";
}