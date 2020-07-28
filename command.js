

//let myVoice = new p5.speech();

function setup() {
    noCanvas();
    let speechCom = new p5.SpeechRec('en-US', gotSpeech);
    
    let continuous = true;
    let interim = false;

    speechCom.start(continuous, interim);

    function gotSpeech() {
        if (speechCom.resultValue) {
           // createP(speechCom.resultString);
           console.log(speechCom.resultString);
           moveWithVoice(speechCom.resultString)
        }
        console.log(speechCom);
    }
}