function add(a, b, c){
if(a==10){
return 0;
}else if(b==10){
return a;
}else if(c==10){
    return a+b;
}else {
    return a+b+c
}

}
console.log(add(10, 20, 30))
console.log(add(20,10,30))
console.log(add(20,30,10))
console.log(add(20,30,40))