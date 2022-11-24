// Only change code below this line
function countdown(n){
    if(n>1){
     return[];
    }else{
      const count=countdown(n+1);
      count.push(n);
      return count;
    }
  }
  console.log(countdown(5))
  // Only change code above this line