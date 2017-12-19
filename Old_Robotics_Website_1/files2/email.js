// all code created by Angela A. DeFrancesco
// email me @ angelad@email.com

var correct = true ;

function checkData() {
  correct = true ;

  if (document.member.name.value == "") {
    correct = false ;
    alert("Please enter your name.") ;
  }
  else {
    checkString("name",document.member.name.value) ;
  }

  if (document.member.email.value == "") {
    correct = false ;
    alert("Please enter your e-mail address.") ;
  }
  else {
    checkEmail() ;
  }

  checkString("year",document.member.year.value) ;

  if (document.member.major.value == "") {
    correct = false ;
    alert("Please enter your major.") ;
  }
  else {
    checkString("major",document.member.name.value) ;
  }

  checkString("ideas",document.member.ideas.value) ;
  checkString("homepage",document.member.homepage.value) ;

  return correct ;
}

var swear = new Array(4)
swear[0] = "FUCK" ;
swear[1] = "SHIT" ;
swear[2] = "ASSHOLE" ;
swear[3] = "BITCH" ;

function checkString(type,check) {
  if (check.length <= 3) {
    return ;
  }

  check = check.toUpperCase() ;
  for (var i = 0; i <= 3; i++) {
    if (check.indexOf(swear[i]) != -1) {
      alert("Invalid " + type + ".") ;
      correct = false ;
    }
  }
}

function checkEmail() {
  var EmailCorrect = false ;
  for (var i = 0; i <= document.member.email.value.length; i++) {
    if (document.member.email.value.charAt(i) == "@") {
      EmailCorrect = true ;
    }
  }
  var EMLength = document.member.email.value.length ;
  if (EmailCorrect == false) {
    alert("Invalid email.") ;
    correct = false ;
  }
}

function submit_form() {
  if (checkData()) {
    document.member.method = "POST" ;
    document.member.action = 
"http://www.pitt.edu/htbin/cgiemail/~sorc/robotics/emailform.txt" ;
    return 1 ;
  }
  else
    return 0 ;
}
