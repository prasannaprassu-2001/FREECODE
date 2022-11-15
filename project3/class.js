class student{
s_name ;
s_rno ;
s_email;
s_phoneno;
s_fees;
student_reading(){
console.log("Reading Maths Books")
}
student_writing(){
    console.log("writing notes")
}
 
constructor(name, rno, email, phoneno, fees){
this.s_name = name;
this.s_rno = rno;
this.s_email = email;
this.s_phoneno = phoneno;
this.s_fees = fees;
}
fees(fee){
    return this.s_fees = fee + 5000;
    
    } 
}
class chstudent extends student{
    s1_address;
constructor(name, rno, email, phoneno, fees, address){
    super(name, rno, email, phoneno, fees)
    this.s1_address = address;
    
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

let b=new chstudent();
console.log(b)
let b1=new chstudent("vidya", 187, "vidyac122@gmail.com", 8088296882, 20000, "Hosur") 
let b2=new chstudent("chana", 161, "chana123@gmail.com", 7338456901, 20000, "tirupati")
let b3=new chstudent("ashok", 280, "ashok2342@gmail.com", 6363191963, 20000, "Bangalore")
let b4=new chstudent("teju", 287, "teju232@gmail.com", 987654321, 20000, "Chitradurga") 
console.log(b1)
console.log(b2)
console.log(b3)
console.log(b4)
