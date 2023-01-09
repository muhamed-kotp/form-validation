function validation() {
  let myPass_off, myMail_off, valid, myPass_Label;

  myMail_off = document.querySelector(".mail");
  myEmail_Lab = document.querySelector(".email_lab");
  myPass_off = document.querySelector(".pass");
  myPass_Label = document.querySelector(".pas_lab");
  valid = true;

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myMail_off.value)) {
    myEmail_Lab.innerHTML = "You should enter an invalid email address!";
    myEmail_Lab.style.visibility = "visible";
    return false;
  } else if (myPass_off.value === "") {
    myEmail_Lab.style.visibility = "hidden";
    myPass_Label.innerHTML = " You must enter a Password !";
    myPass_Label.style.visibility = "visible";
    return false;
  } else {
    return true;
  }
}

function comparison() {

  myFname = document.querySelector(".fname");
  myFnameLab = document.querySelector(".fname-lab");
  myLname = document.querySelector(".lname");
  myLnameLab = document.querySelector(".lname-lab");
  myMob = document.querySelector(".mob");
  myMobLab = document.querySelector(".mob-lab");
  mySignUpPass3 = document.querySelector(".pass3");
  mySignUpPass3Lab = document.querySelector(".pass3-lab");

  if (myFname.value === "") {
    displayFault(myFnameLab, "! Please Enter Your First Name ");

    return false;
  } else if (myLname.value === "") {
    resetFault();
    displayFault(myLnameLab, "! Please Enter Your Last Name ");
    return false;
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myMob.value)
  ) {
    resetFault();
    displayFault(myMobLab, "! Please Enter Your Valid Email ");
    return false;
  } else if (mySignUpPass3.value === "") {
    resetFault();
    displayFault(mySignUpPass3Lab, "! Please Enter Your Password ");
    return false;
  } else {
    return true;
  }
}

function displayFault(input, text) {
  input.innerHTML = text;
  input.style.color = "red";
}
function resetFault() {
  myFnameLab.innerHTML = "First Name";
  myFnameLab.style.color = "black";
  myLnameLab.innerHTML = "Last Name";
  myLnameLab.style.color = "black";
  myMobLab.innerHTML = "E-mail Account";
  myMobLab.style.color = "black";
  mySignUpPass3Lab.innerHTML = "Password";
  mySignUpPass3Lab.style.color = "black";
}
