
//Login page. Toggles different sign in forms.
function showUser() {
  var user=document.getElementById("userlogin");
  user.style.display= "block";
  var res=document.getElementById("reslogin");
  res.style.display= "none";
  var shel=document.getElementById("shelterlogin");
  shel.style.display= "none";
  window.location.href="userView.html";
}
function showRes() {
  var user=document.getElementById("userlogin");
  user.style.display= "none";
  var res=document.getElementById("reslogin");
  res.style.display= "block";
  var shel=document.getElementById("shelterlogin");
  shel.style.display= "none";
}
function showShel() {
  var user=document.getElementById("userlogin");
  user.style.display= "none";
  var res=document.getElementById("reslogin");
  res.style.display= "none";
  var shel=document.getElementById("shelterlogin");
  shel.style.display= "block";
}

//User login page. 
function getShelters() {
  var form=document.getElementById("userGetShelters");
  var locField=document.getElementById("cityorzip");
  var location=locField.value;
  var distField=document.getElementById("userdistance");
  var distance=distField.value;
  if (location=="" || distance=="Choose Distance") {
    document.getElementById("userinvalidinput").style.display="block";
    return;
  }
  else {
    document.getElementById("userinvalidinput").style.display="none";
  }
  window.location.href="ListOfShelters.html";
}

//Signup form
function showResSignup() {
  console.log("res");
  var resform=document.getElementById("restaurantsignup");
  var shelform=document.getElementById("sheltersignup");
  resform.style.display="block";
  shelform.style.display="none";
}
function showShelSignup() {
  console.log("shel");
  var resform=document.getElementById("restaurantsignup");
  var shelform=document.getElementById("sheltersignup");
  resform.style.display="none";
  shelform.style.display="block";
  
}

//Restuarant view. 
function colorIndicate(){
  var bedAvail=document.getElementById("bedAvailability");
  var foodavail=document.getElementById("foodAvailability");
  if(bedAvail.value<10)
  {
    bedAvail.style.color="red";
  }
  else
  {
    bedAvail.style.color="green";
  }
  if(foodavail.value<10)
  {
    foodavail.style.color="red";
  }
  else
  {
    foodavail.style.color="green";
  }
}
function updateAvail()
{
  var newval=document.getElementById("newavail").value;
  if(newval=="" || newval<0){
    document.getElementById("userinvalidAvail").style.display="block";
    return;
  }
  var indic=document.getElementById("currentAvail");
  if(newval==0)
  {
    indic.style.color="grey";
    indic.style.border="2px solid grey";
  }
  else if(newval<10)
  {
    indic.style.color="#D72600";
    indic.style.border="2px solid #D72600";

  }
  else{
    indic.style.color="green";
    indic.style.border="2px solid green";
  }
  document.getElementById("currentAvail").innerHTML=newval;
  
}

//Shelter View
function showShelterForm() {
  var form=document.getElementById("ShelterUpdateForm");
  form.style.display="block";
  document.getElementById("shelterBedAvil").value=document.getElementById("bedavil").innerHTML;
  document.getElementById("shelterFoodAvil").value=document.getElementById("foodavil").innerHTML;
}

function updateShelterInfo() {
  var food = document.getElementById("shelterFoodAvil").value;
  var bed = document.getElementById("shelterBedAvil").value;
  if (food<0 || bed<0) {
    document.getElementById("shelInvNum").style.display="block";
    return;
  }
  document.getElementById("foodavil").innerHTML=food;
  document.getElementById("bedavil").innerHTML=bed;
  form=document.getElementById("ShelterUpdateForm");
  document.getElementById("shelInvNum").style.display="none";
  form.style.display="none";
}

