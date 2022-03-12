// Login.html

function Login()
{
  var user = document.getElementById("user").value;
  sessionStorage.setItem("user", user);
  var pass = document.getElementById("pass").value;

  if (user == "Shaheer" && pass == "group1" || user == "Aman" && pass == "group1" || user == "Anthony" && pass == "group1" || user == "Ayman" && pass == "group1" || user == "Puja" && pass == "group1" || user == "Fariah" && pass == "group1" || user == "Alex" && pass == "group1" || user == "Jorge" && pass == "group1")
   {
    
    alert ("Login Successful");
    window.location.href="FRAME.html";
    }
  else
   {
    alert ("Login Failed")
    }
 }


// Cart.html

function addition()
 {
   var num1= document.getElementById("cb").value;
   var num2= document.getElementById("cp").value;
   var num3= document.getElementById("sh").value;
   document.getElementById("checkout").innerHTML=+num1*19.99+ +num2*49.99+ +num3*24.99;
  }

function addtocart()
 {
   alert("Added items to cart!");
   window.location.href="FRAME.html";
  }


// faq.html

questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
   btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// left.html

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


window.onload = function welcome() {

var user2 = sessionStorage.getItem("user");

let text = document.getElementById("login").innerHTML;

if (user2 === "Aman")
  {document.getElementById("login").innerHTML = text.replace("Login", "Welcome Aman!")}
else if (user2 == "Shaheer")
  {document.getElementById("login").innerHTML = text.replace("Login", "Welcome Shaheer!")}
else if (user2 == "Anthony")
  {document.getElementById("login").innerHTML = text.replace("Login", "Welcome Anthony!")}
else if (user2 == "Ayman")
  {document.getElementById("login").innerHTML = text.replace("Login", "Welcome Ayman!")}
else if (user2 == "Puja")
  {document.getElementById("login").innerHTML = text.replace("Login", "Welcome Puja!")}
else if (user2 == "Fariah")
  {document.getElementById("login").innerHTML = text.replace("Login", "Welcome Fariah!")}
else if (user2 == "Alex")
  {document.getElementById("login").innerHTML = text.replace("Login", "Welcome Alex!")}
else if (user2 == "Jorge")
  {document.getElementById("login").innerHTML = text.replace("Login", "Welcome Jorge!")}
else
  {document.getElementById("login").innerHTML = text.replace("Login", "Login")}

}


