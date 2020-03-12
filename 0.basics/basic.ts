console.log("hello ts");

//types
 
var mystring :string="hello ts";
mystring = 22 + "";

var mynumb:number = 22;
var mybool: boolean = true;

var myvar: any= "hello";
myvar = false;


//Arrays
var anyArray :any[]=["","",""];
var anyArray :any[]=[true,22,"hello"];

var StringArray :string[]=["itme1","item2","item3"];

var NumberArray :number[]=[1,2,3,4];

var boolArray :boolean[]=[true,false,true];

//tuple

var strNumtuple: [string, number];
strNumtuple = ["hello",145];


// void, undefined,null

let myvoid:void =undefined;
let mynull:null=null;
let myundefined:undefined=undefined;

//functions

function getsum(num1:number,num2:number):number{
return num1+num2;
}


let mysum = function(num1: number |string, num2: number |string ): number{
    if(typeof(num1)==="string"){
        num1=parseInt(num1);
    }
    if(typeof(num2)==="string"){
        num2=parseInt(num2);
    }
    
    return num1+num2;
}

function getName(firstname:string, lastname:string):string{
    if(lastname==undefined){
        return firstname;
    }
    return firstname +" "+lastname; // `${firstname} ${lastname}`
}

document.write(getName("Jose","Manuel"));


//Interfaces


interface Itodo{
    title:string;
    text:string;
}

/*function showtodo(todo: {title: string ; text: string}){
    console.log(`${todo.title}-${todo.text}`)
}*/

function showtodo(todo:Itodo){
    console.log(`${todo.title}-${todo.text}`)
}

let mytodo:Itodo={title:"eat dinner",text:"lorem"}

showtodo(mytodo);

document.write();



// Classes

class user{
  protected name: string;
  protected email: string;
  protected age: number;

    constructor(name: string, email: string, age: number){
     this.name=name;
     this.email=email;
     this.age=age;
    }

    register(){
        console.log(`${this.name} is registered!`);
    }

    showmeage(){
        return this.age;
    }
    
   public AgeInYears(){
       return this.age +" years";
   }

   payinvoice(){
    console.log(`${this.name} paideinvoice`);

   }
}
 var jose =new user("jose","jose@gmail.com",23);
console.log(jose.AgeInYears());



class member extends user{
    
    id:number;

   constructor(id,name,email,age){
      super(name,email,age);
      
      this.id=id;
   }
   payinvoice(){
       super.payinvoice();
   }
}
 var gordon= new member(1, "pepone","pepone@gmail.com",23);