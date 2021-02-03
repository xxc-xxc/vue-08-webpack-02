import $ from 'jquery'
import "./css/1.css"
import "./css/1.less"
import "./css/1.scss"

$(function(){
    $("li:odd").css("background","cyan");
    $("li:even").css("background","red");
})

class Person {
    static name = "xxc";
}

console.log(Person.name);