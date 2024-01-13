const pianoKeys = document.querySelectorAll(".piano-keys .key");
let audio = new Audio("src/tunes/StatusRecovery.wav");

const playTune = (key) => {
    audio.play();
}

pianoKeys.forEach((key)=>{
    key.addEventListener("click",()=> playTune(key.CDATA_SECTION_NODE.key));
})