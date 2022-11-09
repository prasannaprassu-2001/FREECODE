function display(cal){
document.getElementById('operation').value += cal;
}
function bb(){
    document.getElementById('operation').value=" ";
}
function play(){
    let result=eval(document.getElementById('operation').value);
    document.getElementById('operation').value = result;
}
function del(){
    result.value = result.value.slice(0, -1);
}
