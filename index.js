var buttonList = document.querySelectorAll(".drum");

for(var i = 0; i < buttonList.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert("I got clicked!");
    })
}
