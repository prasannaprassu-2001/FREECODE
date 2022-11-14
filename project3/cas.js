function st(){
    document.getElementById("perc").value=(document.getElementById("om").value/document.getElementById("mm").value)*100
var percentage=document.getElementById("perc").value;
var g;
switch (Math.floor(percentage/10)){
    case 9:
        case 8:g="Outstanding"
        break;
        case 7:g="Distinction"
        break;
        case 6:g="Good"
        break;
        case 5:g="Average"
        break;
        case 6:g="Pass"
        break;
        default:g="Fail"
        break;
}
document.getElementById("grade").value=g;
}






























// prompt tm = document.getElementById('om').value
// prompt mo = document.getElementById('mm').value
// function st(a,b){

//     return percentage = (a/b)*100;
   
// }

//  alert document.getElementById("pe").innerHTML=(st(mo,tm));