function form(){
    let one=document.getElementById("userName").value;
    if(one==""){
        document.getElementById("user").innerHTML="Enter required username";
        return false
    }
    let two=document.getElementById("pass").value;
    let three=document.getElementById("repass").value;

    if(two !== three){
        document.getElementById("repassword").innerHTML="Enter correct password";
        return false
    }
    let four=document.getElementById("mail").value;
    if(four==""){
    document.getElementById("email").innerHTML="Enter correct Email";
return false
    }
    
    let five=document.getElementById("phone").value;
    if(five.length <10 && five.length >10){
     document.getElementById("number1").innerHTML="Please Enter 10 numbers";
     return false
    }
   return true

}
