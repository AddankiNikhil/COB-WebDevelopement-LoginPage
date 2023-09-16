var user_names=["Nikhil"]

var pass_list=["Nikhil@636"]


var stage="login";


function logger()
{
  var uid=document.getElementById("uid");

  var pass=document.getElementById("pass");

  var result=document.getElementById("Result");
     
  var ind=-1;
    for( var i=0;i<user_names.length;i++)
    {
       if(user_names[i]==uid.value)
          {
            ind=i;
          break;
        }
    }
    if (ind!=-1 && pass_list[ind]==pass.value)
    {
      result.textContent="Login Succesfull" ;
      result.style.backgroundColor = "Green";
      setTimeout(myurl,5000)
    }
    else if (ind==-1)
    {
      console.log(uid.value);
      console.log(pass.value);
      console.log(user_names);
      console.log(pass_list);
      result.textContent="Invalid Credentials" ;
      result.style.backgroundColor = "Red";
    }
    else{
      result.textContent="Incorrect Password" ;
      result.style.backgroundColor = "Red";
      
    }
}

function myurl()
{
  window.location.href = "https://www.google.com"
}


//Registration Part 
var  count=1;
function verifier()
{
  var reg_email=document.getElementById("reg-email");
  var reg_pass=document.getElementById("reg-pass");
  var reg_uid=document.getElementById("reg-uid");
  var result=document.getElementById("Result");
    
  if(reg_email.value!="" && reg_pass.value!="" && reg_uid.value!="")
    {
      user_names.push(reg_uid.value);
    
      pass_list.push(reg_pass.value);
      
      result.textContent="Signed Up Succesfully" ;
      result.style.backgroundColor = "Green";
    }
    else if(count==1)
    {
      result.textContent="";
      count++;
    }
    else 
    {
      result.textContent="Error while Signing up" ;
      result.style.backgroundColor = "Red"; 
    }   

  reg_uid.textContent="";
  reg_pass.textContent="";
  reg_email.textContent="";
  
}


function details(){
  //Dom manupulation
  if(stage=="login"){
  document.getElementById("Message").innerHTML="<h1>Sign up</h1><br>Thank you for <br>Signing up<br>"
  document.getElementById("heading").innerHTML="Welcome to Our Site<br>"
  document.querySelector(".left").innerHTML="<h2 class='reg-head'>SIGN UP Page</h2><input type='email' id='reg-email' class='reg-mail' placeholder='Email'><br><input type='text' id='reg-uid' placeholder='User Id'><br><input type='text' id='reg-pass' placeholder='Password'><br></label><button class='sign_up' id='reg-sign-up' onclick='verifier()'>Sign UP</button><p id='Result'></p>";  
  document.getElementById("log_sign_up").textContent="Login";
  document.querySelector("#reg-sign-up").addEventListener(onclick,verifier);
  document.getElementById("log_sign_up").addEventListener(onclick,logger);
  stage="register";
   }
   else
   {
    document.querySelector(".left").innerHTML="<h1>SignIn</h1><form class='login-details'><input type='text' placeholder='Enter userid' class='id' id='uid'><br><br><input type='password' placeholder='password' class='pass' id='pass'><br><br><script src='script.js'></script></form><button  class='sub'  id='sub' onclick='logger()'>SignIn</button><p id='Result'></p>"
    document.getElementById("log_sign_up").textContent="Don't Have an account yet?";
    document.getElementById("Message").innerHTML="Welcome Back!We are happy to have you<br>here .It's Great to have You back again.We hope you<br>had a safe and enjoyable time away";
    stage="login";

    //document.getElementById("").innerHTML="<h5>Sign Up</h5><br>Thank you for <br>Signing up<br>"   
   }
}