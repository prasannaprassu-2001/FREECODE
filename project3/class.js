class student{
student_name ;
student_rno ;
student_email;
student_phoneno;
student_fees;
student_reading(){
console.log("Reading Maths Books")
}
student_writing(){
    console.log("writing notes")
}
 
constructor(name, rno, email, phoneno, fees){
this.student_name = name;
this.student_rno = rno;
this.student_email = email;
this.student_phoneno = phoneno;
this.student_fees = fees;
}
fees(fee){
    return this.student_fees = fee + 5000;
    
    } 
}
let a=new student();
console.log(a)
let a1=new student("vidya", 187, "vidyac122@gmail.com", 8088296882, 20000) 
let a2=new student("chana", 161, "chana123@gmail.com", 7338456901, 20000)
let a3=new student("ashok", 280, "ashok2342@gmail.com", 6363191963, 20000)
let a4=new student("teju", 287, "teju232@gmail.com", 987654321, 20000) 
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
a.student_reading();
a.student_writing();
a.fees(20000)
console.log(a)