function age(){
    
    if(document.getElementById("t1").value>=20)
    {
   document.getElementById("r1").innerHTML="eligible to vote"
   document.getElementById("r1").style.color="green"
   
    }
    else{
        document.getElementById("r1").innerHTML="Not eligible to vote"
        document.getElementById("r1").style.color="red"
        
    }
   
}
