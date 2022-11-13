function result(){
    
    if(document.getElementById("t1").value==document.getElementById("t2").value)
    {
   document.getElementById("r1").innerHTML="both are equal"
    }
    else if(document.getElementById("t1").value>document.getElementById("t2").value)
    {
        document.getElementById("r1").innerHTML="First no. is greater than second no."
    }
    else{
        document.getElementById("r1").innerHTML="First no. is smaller than second no." 
    }
}