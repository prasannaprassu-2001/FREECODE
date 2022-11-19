 /* function vehicle(a, b){
if(b){
    a = a - 5
    
} if(a>=61 && a<=81){
    return 1
}else if(a <= 60){
    return 0
}else{
    return 2
}
}
console.log(vehicle(60, false))
console.log(vehicle(65, false))
console.log(vehicle(65, true))  */
 
/* function array(r){
console.log(r.reverse());
}
let rev = ['vidya', 'chana', 'ashok']
array(rev) */

function array(m){
   
 console.log(Math.max(...m));
 console.log(Math.min(...m));
}
let mum = [10, 20, 30, 40, 50]
array(mum)