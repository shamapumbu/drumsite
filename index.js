var buttonList = document.querySelectorAll(".drum");

for(var i = 0; i < buttonList.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
       
       this.style.color="white";
       
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();
    })
}
