let screenUserEnter=document.getElementById("screen-user-enter")
let userWelcome=document.getElementById("user-welcome")
let emailLogin =document.getElementById("email-login")
let passLogin =document.getElementById("pass-login")
let nameSignUp =document.getElementById("name-signup")
let passSignUp =document.getElementById("pass-signup")
let emailSignUp =document.getElementById("email-signup")
let spanREd=document.getElementById("span-red1")
let spanREd2=document.getElementById("span-red2")
let spanGreen=document.getElementById("span-green1")
let spanREd3=document.getElementById("span-red3")
let userName=document.getElementById("user-name")
let spanRed4=document.getElementById("span-red4")
let indexOfUser
var regexEmail
var regexPassword
var regexName
nameSignUp.addEventListener("change",function(){
   regexName=/^[A-Z][a-z]{2,8}$/
  if(regexName.test(nameSignUp.value)){
    nameSignUp.classList.add("is-valid")
    nameSignUp.classList.remove("is-invalid")
  }
  else{
    nameSignUp.classList.add("is-invalid")
  }
})
passSignUp.addEventListener("change",function(){
   regexPassword=/^[0-9]{5}$/
  if(regexPassword.test(passSignUp.value)){
    passSignUp.classList.add("is-valid")
    passSignUp.classList.remove("is-invalid")
  }
  else{
    passSignUp.classList.add("is-invalid")
  }
})
emailSignUp.addEventListener("change",function(){
  regexEmail=/^[A-Z][a-z]{2,10}(@gmail\.com)$/
  if(regexEmail.test(emailSignUp.value)){
    emailSignUp.classList.add("is-valid")
    emailSignUp.classList.remove("is-invalid")
  }
  else{
    emailSignUp.classList.add("is-invalid")
  }
})

let userList=[]
if (localStorage.getItem("users")) {
  userList = JSON.parse(localStorage.getItem("users"))
}
function SignUp(){
    screenUserEnter.classList.remove("d-none")
    passLogin.value=""
    emailLogin.value=""
    spanREd3.classList.add("d-none")
}
function login(){
    screenUserEnter.classList.add("d-none")
    emailSignUp.value=""
    emailSignUp.classList.remove("is-valid")
    emailSignUp.classList.remove("is-invalid")
    passSignUp.value=""
    passSignUp.classList.remove("is-valid")
    passSignUp.classList.remove("is-invalid")
    nameSignUp.value=""
    nameSignUp.classList.remove("is-valid")
    nameSignUp.classList.remove("is-invalid")
    spanREd2.classList.add("d-none")
    spanREd.classList.add("d-none")
    spanGreen.classList.add("d-none")
    spanRed4.classList.add("d-none")

}
function addUser(){

if(regexEmail.test(emailSignUp.value)&& regexName.test(nameSignUp.value)&&regexPassword.test(passSignUp.value) ){
 
  
    let x;
    for(let i=0;i<userList.length;i++){
      if(emailSignUp.value==userList[i].email){
        x=5
      }
    }
   if(x==5){
    spanREd2.classList.remove("d-none")
    spanREd.classList.add("d-none")
    spanGreen.classList.add("d-none")
    spanRed4.classList.add("d-none")
   }
  
    else{
      spanGreen.classList.remove("d-none")
      spanREd.classList.add("d-none")
      spanREd2.classList.add("d-none")
      spanRed4.classList.add("d-none")
      let user={
          name:nameSignUp.value ,
          password:passSignUp.value ,
          email:emailSignUp.value 
      }
      userList.push(user)
      localStorage.setItem("users", JSON.stringify(userList))
    }
  
}
 else{
  spanRed4.classList.remove("d-none")
  spanREd.classList.add("d-none")
  spanREd2.classList.add("d-none")
  spanGreen.classList.add("d-none")

 }
  
 
}
function enterUser(){
  let y=false
  for(let i=0 ;i<userList.length;i++){
    if(emailLogin.value==userList[i].email &&passLogin.value==userList[i].password){
      indexOfUser=i
      y=true
    }
  }
  if(y==false){
    spanREd3.classList.remove("d-none")
  }
  else{
    userWelcome.classList.remove("d-none")
    userName.innerHTML=`Welcome `+userList[indexOfUser].name+``
  }
}
function logoutUser(){
  userWelcome.classList.add("d-none") 
  spanREd3.classList.add("d-none") 
}







































































































3


