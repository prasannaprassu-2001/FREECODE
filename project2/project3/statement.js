function age(){
    
    if(document.getElementById("t1").value>=20)
    {
   document.getElementById("r1").innerHTML="eligible to vote"
    }
    else{
        document.getElementById("r1").innerHTML="Not eligible to vote"
    }
}