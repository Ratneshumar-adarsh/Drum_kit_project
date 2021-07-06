var arr=document.querySelectorAll("button");
for(var i=0;i<arr.length;i++){
     document.querySelectorAll("button")[i].addEventListener("click",function () {
          var word=this.innerHTML;
          
          makeSound(word);
          button_animation(word);
          
});
}


document.addEventListener("keypress",function(event){
          
          makeSound(event.key);
          button_animation(event.key);
});
function makeSound(word){
     switch (word) {
          case "w":
               var audio=new Audio("sounds/tom-1.mp3");
               audio.play();
               break;
          case "a":
               var audio=new Audio("sounds/tom-2.mp3");
               audio.play();
               break;
          case "s":
               var audio=new Audio("sounds/tom-3.mp3");
               audio.play();
               break;
          case "d":
               var audio=new Audio("sounds/tom-4.mp3");
               audio.play();
               break;
          case "j":
               var audio=new Audio("sounds/snare.mp3");
               audio.play();
               break;
          case "k":
               var audio=new Audio("sounds/crash.mp3");
               audio.play();
               break;
          case "l":
               var audio=new Audio("sounds/kick-bass.mp3");
               audio.play();
               break;
          default:
               console.log(this.innerHTML);
          }
          console.log(word.style.color="white");

}

function button_animation(currrent_key){
     alert(currrent_key);
     var button_active=document.querySelector("."+ currrent_key);
     button_active.classList.add("pressed");

     setTimeout(function(){
          alert("hello");
     },1000);
}

