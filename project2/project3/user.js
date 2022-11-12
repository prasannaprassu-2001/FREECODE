function age(a){
  let present_Days = (365*90) - (a*365);
  let present_Weeks =  (52*90) - (a*52);
  let present_Months = (12*90) - (a*12);
  console.log("you have" +present_Days+ "days," +present_Weeks+ "weeks," +present_Months+ "months left");
}

age(21)