for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function() 
{ 
     var ch=this.innerHTML;
    var src="sounds/"+ch+".mp3";
     var audio=new Audio(src);
     audio.play();
     addStyleToButton(ch);
     
});
}

/*function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function calculator(a,b,operator) {
    return operator(a,b);
}

console.log(calculator(2,3,multiply));*/

//creating structure

/*var ballboy={
 name:"ballboy1",
 age:21,
 country:"Canada",
  language: "english"
}

alert(ballboy.name+"  "+ballboy.age);*/

// CONSTRUCTOR
function Ballboy(name,age,country,language){
    this.name=name;
    this.age=age;
    this.country=country;
    this.language=language;
    this.clean=function(){
        alert("cleaning in progress");
    }
}

var ballboy1=new Ballboy("abcd",21,"can","hen");
//alert(ballboy1.name+ballboy1.country)
//ballboy1.clean();


//from keyboard
document.addEventListener("keydown",function(keypressed){
    var ch=keypressed.key;
    //alert(ch);
    var src="sounds/"+ch+".mp3";
     var audio=new Audio(src);
     
     audio.play();
     addStyleToButton(keypressed.key);



});

function addStyleToButton(keyy){
    var activeButton=document.querySelector("."+keyy);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}