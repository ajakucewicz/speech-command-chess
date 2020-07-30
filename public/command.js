let speechCom; 

function setup() {

    speechCom = new p5.SpeechRec('en-US', gotSpeech);

    speechCom.continuous = false;
    speechCom.interimResults = false;

}

function gotSpeech() {

    let command;

    if (speechCom.resultValue) {
        command = speechCom.resultString;
        console.log(command);
        moveWithVoice(command);
    }
    console.log(command);

    changeColor('#00bc8c')
}

function changeColor(color) {
    let btn = document.getElementById('speech');
    btn.style.backgroundColor = color;
    btn.style.borderColor = color;
}
