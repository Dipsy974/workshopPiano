notes = document.querySelectorAll(".note");
codeDOM = document.getElementById("codecache"); 

song = ["GD","G","GD","F"]; 
step = 0;
sequence_initialized = false; 


notes.forEach(note => {
    note.addEventListener('click', () => playNote(note));
});


function playNote(note){
    const noteSound = document.getElementById(note.dataset.note);
    noteSound.currentTime = 0; 
    noteSound.play(); 
    note.classList.add("active"); 
    noteSound.addEventListener("ended", () => {
        note.classList.remove("active"); 
    });

    if(sequence_initialized){
        if(note.dataset.note == song[step]){
            step++;
        }else{
            step = 0;
            sequence_initialized = false; 
        }
    }

    if(step == 0 && note.dataset.note == "GD"){
        console.log("ui"); 
        sequence_initialized = true;
        step ++; 
    }
    
    if(step > 3){
        codeDOM.classList.add("fade"); 
    }
    
}

function unfade(element) {
    var opacity = 0.01;  // initial opacity
    element.classList.add("active"); 
    var timer = setInterval(function () {
        if (opacity >= 1){
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
        opacity += opacity * 0.1;
    }, 50);
}