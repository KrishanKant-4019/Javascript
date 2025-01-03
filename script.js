// function sayHello(){
//     alert("Hello World")}
// document.write('<h1>This is my first JavaScript Page</h1>');
// var pi=3.14;
// var person="are you GODF";
// var answer='Yes I am!';
// document.write(pi + "<br>")
// document.write(person + "<br>")
// document.write(answer + "<br>")

// function myFunction(){
//     var carname="Welcome";
//     document.getElementById("demo").innerHTML=carname;
// }
// var num=10;
// console.log(num);
// console.log(typeof(num));
// num=false;
// console.log(num);
// console.log(typeof(num));
// num="Krishan Kant Jha"
// console.log(num);
// console.log(typeof(num));
// num=null
// console.log(num);
// console.log(typeof(num));
// var num=undefined;
// console.log(num);
// console.log(typeof(num));

// var person = {
//     firstName:"John",
//     lastName:"Doe",
//     id :5566,
//     getinfo:function(){
//         return this.firstName+" "+this.lastName;
//     }
// };
// document.getElementById("demo").innerHTML=person.getinfo();

// var person= {
//     name:'Ramesh',
//     age:30,
//     isMarried:true,
//     address:{
//         street:'vinay nagar,
//         flatNO:201
//     }
// };
// console.log(person);

// var person2=new Object()
// person2.name='krishankant';
// person2.age=32;
// person2.isMarried=true;
// person2.address={};
// person2.address.street="nagar road";
// person2['address']['flatNO']=33;
// console.log(person2);

// var person={
// name:'Jitendra Chauhan',
//     age:30,
//     isMarried:true,
//     child:['cheeku'],
//     getInfo:function(){
//     },
//     address : {
//         street:'vinay nagar',
//         flatNO:201
//     }
// };
// console.log(person.name);
// document.write(person.name);
// document.write("<br>")
// document.write(person.age);

// function myFunction(){
//     var carName="Volvo";
//     document.getElementById("demo1").innerHTML=typeof carName+" "+carName;
// }
// myFunction();
// document.getElementById("demo2").innerHTML=typeof carName;

// var locales={
//     europe:function(){
//         var myFriend="Monique";
        
//         var france=function(){
//             var paris=function(){
//                 console.log(myFriend);
//             };
//             paris();
//         };
//         france();
//     }
// };
// locales.europe();

// function show(){
//     var a="a is a local outer variable";
//     document.write(a+"<br>");

//     function disk(){
//         var b="b is a local inner variable";
//         document.write(b+"<br>");
//     }
//     disk();
// }
// show();

// var myVar="global";
// function check(){
//     var myVar="local";
//     document.write(myVar);
// }

// var name='John';
//  function first(){
//     var a = 'Hello!';
// second();
// var x= a+name;
// console.log(x);
//  }
//  function second(){
//     var b='Hi!';
//     third();
//     var z=b+name;
//     console.log(z);
//  }
//  function third(){
//     var c= 'Hey!';
//     var z= c+name;
//     console.log(z);
//  }
//  first();

// var age =20;
// if(age>18){
//     document.write("<b>You are eligible to cast the vote.</b>");
// }

// var grade='A';
// document.write("Entering switch block<br/>");
// switch(grade){
//     case'A':document.write("Good Job<br/>");
// break;
// case'B':document.write("Pretty good<br/>");
// break;
// case'C':document.write("Passed<br/>");
// break;
// case'D':document.write("Not so good<br/>");
// break;
// case'F':document.write("Failed<br/>");
// break;
// default:document.write("Unknown grade<br/>");
// }
// document.write("Exiting switch block");

// var i;
// for(i=0;i<3;i=i+1)
// {
//     console.log(i);
// }

// var count;
// document.write("Starting Loop"+"<br/>");
// for(count=0;count<10;count++){
//     document.write("Current Count:"+count);
//     document.write("<br/>");
// }
// document.write("Loop stopped!");

// for(var i=0;i<100;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i+"is an even number");
//     }
//     else{
//         console.log(i+"is an odd number");
//     }
// }

// var myArray=["A","B","C"];
// for(var i=0; i<myArray.length; i++)
// {
//     console.log("The member of myArray in index" + i + "is" + myArray[i]);
// }

// var count=0;
// document.write("Starting Loop");

// while (count<10){
//     document.write("Current Count:"+count+"<br/>");
//     count++;
// }
// document.write("Loop stopped!");

// function myFunction()
// {
//     alert("Hello World!");
// }

// function sayHello(name,age){
//     document.write(name+" is "+age+" years old");
// }

// function add(a,b){
//     console.log(a+b);
//     document.write(a+b);
// }
// add(10,20);

// var res=mul(12,30);
// function mul(x,y){
//     return x*y;
// }
// document.write(res);

// const square=function(number){
//     return number*number;
// };
// const x=square(4);
// console.log(x);

// function myFunction(g1,g2){
//     return g1/g2;
// }
// const value= myFunction(8,2);
// console.log(value);

// function add(a,b){
//     console.log(a+b);
// }
// add(10,20);

// var add2=(a,b)=>{
//     console.log(a+b);
// };
// add(102,20);

// var add3=(a,b)=>{
//     console.log(a+b);
// };
// add(30,20);

// var a=100;
// var b=13;
// var c=10;
// var linebreak="<br>";

// document.write("a+b+c=");
// result=a+b+c;
// document.write(result);
// document.write(linebreak);

// document.write("a+b=");
// result=a+b;
// document.write(result);
// document.write(linebreak);

// var a=100;
// var b=13;
// var c=10;
// var linebreak="<br>";

// document.write("a-b=");
// result=a-b;
// document.write(result);
// document.write(linebreak);

// document.write("a/b=");
// result=a/b;
// document.write(result);
// document.write(linebreak);

// document.write("a%b=");
// result=a%b;
// document.write(result);
// document.write(linebreak);

// function myFunction(){
//     var x=5+5;
//     var y="5"+5;
//     var z="Hello"+5;
//     var demoP=document.getElementById("demo");
//     demoP.innerHTML=x+"<br>"+y+"<br>"+z;
// }

// var a=10;
// var b=20;
// var linebreak="<br>";

// document.write("(a==b)=>");
// result=(a==b);
// document.write(result);
// document.write(linebreak);

// document.write("(a<b)=>");
// result=(a<b);
// document.write(result);
// document.write(linebreak);

// document.write("(a>b)=>");
// result=(a>b);
// document.write(result);
// document.write(linebreak);

// document.write("(a!=b)=>");
// result=(a!=b);
// document.write(result);
// document.write(linebreak);

// document.write("(a>=b)=>");
// result=(a>=b);
// document.write(result);
// document.write(linebreak);

// document.write("(a<=b)=>");
// result=(a<=b);
// document.write(result);
// document.write(linebreak);

// let x=6;
// let y=3;
// console.log((x==10&&y>1));
// console.log((x==6||y==5));
// console.log(!(x==y));

// var age=19;
// var voteable=(age<18)?"Too young":"Old enough";
// document.write(voteable);

// var myCollection=[
//     1,
//     "meera mam",
//     true,
//     {
//         name:"Sanjeev",
//         age:30
//     },
//     function(name){
//         console.log(name);
//     },
//    ["abhishek","bacchan","amitabh","bacchan"]
// ]

// function information(firstName,lastname,language){
//     if(arguments.length===3){
//         console.log(firstName);
//         console.log(lastname);
//         console.log(language);
//     }
// }
// information();
// information('Krishan','Kant','Jha');

// function over(){
//     document.getElementById('mytext').style.color="#000"
// }
// function mout(){
//     document.getElementById('mytext').style.color="magenta"
// }

// var retVal=confirm("Do you want to continue?"); if(retVal==true){
//     alert("User wants to continue!");
// }else{
//     alert("User does not want to continue!");
// }

// var retVal=prompt("Enter your name:","your name here");
// alert("You have entered:"+retVal);

// var name=prompt("Enter Your Name","Name");
// document.write("<h2>Hello"+name+"</h2>");

var question="What is 10+10";
var answer= 20;
var response=prompt(question,"0");
for(count=0;count<3;count++);
{
    if(response!=answer)
    {
        confirm("Wrong,Press OK for another chance");
        response=prompt(question,"0");
        if(count==1)
        {
            alert("Better luck next time");
        }
    }
    else
    {
        alert("Great!you are right");
    }
}
var output=(response==answer)?correct:incorrect;
document.write("</br>");
document.write(output);