
function setup() {
    noCanvas();
    let speechCom = new p5.SpeechRec('en-US', gotSpeech);
    
    speechCom.continuous = true;
    speechCom.interimResults = false;

    speechCom.start();

    function gotSpeech() {
        if (speechCom.resultValue) {
           console.log(speechCom.resultString);
           moveWithVoice(speechCom.resultString)
        }
        console.log(speechCom);
    }
}