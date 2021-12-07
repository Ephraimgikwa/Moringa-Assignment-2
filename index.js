var headerTitle =  document.children[0].children[1].children[0].children[0].children[0];

var headingTitle = document.getElementById('headingTitle');

headerTitle.textContent="Slow Shop";


var card = document.querySelector('.card');

var links = document.getElementsByTagName('a');

var linksArray = Array.from(links);

var navItems =  document.getElementsByClassName('nav-item');
var navList = Array.from(navItems);

var allDivs = document.querySelectorAll('div');

function myFunction() {
  var gender1= prompt("Please choose your gender \n Enter the word Male of Female" , "Female/Male");
  let gender = gender1.toUpperCase();
  if (gender == "MALE" || gender == "FEMALE")
  {
 var dob = prompt("Please enter your year of Birth" , "ddmmyyyy");
 let length = dob.length;
if (length == 8) {
	
	if(parseInt(dob))
	{
		let text = dob;
  let cc = parseInt(text.substring(4, 6));
  let yy = parseInt(text.substring(6,8));
  let mm = parseInt(text.substring(2,4));
  let dd = parseInt(text.substring(0,2));
 
 var ans = ((((cc/4)-2*cc-1)+(5*yy/4)+(26*(mm+1)/10)+dd)%7);


switch(parseInt(ans)) {
  case 4:
  	if (gender=="MALE"){
    alert("Your AKAN Name is Yaw");
    }
    else (alert("Your AKAN Name is Yaa"));
    break;
  case 1:
    if (gender=="MALE"){
    alert("Your AKAN Name is Kwadwo");
    }
    else (alert("Your AKAN Name is Akosua"));
    break;
  case 2:
  	if (gender=="MALE"){
    alert("Your AKAN Name is Kwabena");
    }
    else (alert("Your AKAN Name is Adwoa"));
    break;
  case 3:
  	if (gender=="MALE"){
    alert("Your AKAN Name is Kwaku");
    }
    else (alert("Your AKAN Name is Abenaa"));
    break;
  case 5:
  	if (gender=="MALE"){
    alert("Your AKAN Name is Kofi");
    }
    else (alert("Your AKAN Name is Akua"));
    break;
  case 6:
    if (gender=="MALE"){
    alert("Your AKAN Name is Kwame");
    }
    else (alert("Your AKAN Name is Afua"));
    break;
  case 7:
    if (gender=="MALE"){
    alert("Your AKAN Name is Kwasi");
    }
    else (alert("Your AKAN Name is Ama"));
    break;
  default:
    text = "I have never heard of that one..";
    break;
}
	}else alert("I only accept numbers in the formart DDMMYYYY");

	
}else(alert("Kindly check your Date of birth and enter in the formart DDMMYYYY"))

  
 }else (alert("Your Gender is needed to know your AKAN Name"));
   
}
