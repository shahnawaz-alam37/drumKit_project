
for (var i = 0; i  < 7; i++) {
    
    document.querySelectorAll("button")[i].addEventListener("click",function (){
       
        var val = this.innerHTML;
        make_sound(val);
        buttonAnimation(val);
    });
}

document.addEventListener("keydown", function(event){
    var note = event.key;
    make_sound(note);
    buttonAnimation(note);
})
// var soundName = "/sounds/tom-"+i+".mp3";
//         var audio = new Audio(soundName);
//         audio.play();

function make_sound(keyNote){
    switch (keyNote) {
        case "w":
            var tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio("/sounds/tom-2.mp3");
            tom1.play();
            break;
        case "s":
            var tom1 = new Audio("/sounds/crash.mp3");
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio("/sounds/kick-bass.mp3");
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio("/sounds/tom-3.mp3");
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio("/sounds/snare.mp3");
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio("/sounds/tom-4.mp3");
            tom1.play();
            break;
        default:
            break;
    } 
}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}
