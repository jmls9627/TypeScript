var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hello ts");
//types
var mystring = "hello ts";
mystring = 22 + "";
var mynumb = 22;
var mybool = true;
var myvar = "hello";
myvar = false;
//Arrays
var anyArray = ["", "", ""];
var anyArray = [true, 22, "hello"];
var StringArray = ["itme1", "item2", "item3"];
var NumberArray = [1, 2, 3, 4];
var boolArray = [true, false, true];
//tuple
var strNumtuple;
strNumtuple = ["hello", 145];
// void, undefined,null
var myvoid = undefined;
var mynull = null;
var myundefined = undefined;
//functions
function getsum(num1, num2) {
    return num1 + num2;
}
var mysum = function (num1, num2) {
    if (typeof (num1) === "string") {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstname, lastname) {
    if (lastname == undefined) {
        return firstname;
    }
    return firstname + " " + lastname; // `${firstname} ${lastname}`
}
document.write(getName("Jose", "Manuel"));
/*function showtodo(todo: {title: string ; text: string}){
    console.log(`${todo.title}-${todo.text}`)
}*/
function showtodo(todo) {
    console.log(todo.title + "-" + todo.text);
}
var mytodo = { title: "eat dinner", text: "lorem" };
showtodo(mytodo);
document.write();
// Classes
var user = /** @class */ (function () {
    function user(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    user.prototype.register = function () {
        console.log(this.name + " is registered!");
    };
    user.prototype.showmeage = function () {
        return this.age;
    };
    user.prototype.AgeInYears = function () {
        return this.age + " years";
    };
    user.prototype.payinvoice = function () {
        console.log(this.name + " paideinvoice");
    };
    return user;
}());
var jose = new user("jose", "jose@gmail.com", 23);
console.log(jose.AgeInYears());
var member = /** @class */ (function (_super) {
    __extends(member, _super);
    function member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    member.prototype.payinvoice = function () {
        _super.prototype.payinvoice.call(this);
    };
    return member;
}(user));
var gordon = new member(1, "pepone", "pepone@gmail.com", 23);
