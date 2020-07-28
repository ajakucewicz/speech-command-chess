let classifier;

function preload() {
    const OPTIONS = {
        probablilityThreshold = 0.70
    };
    // classifier w/ teachable machine custom model:
    // const classifier = ml5.soundClassifier('path/to/model.json', modelReady);
    classifier = ml5.soundClassifier('SpeechCommands18w', OPTIONS, modelReady);
}

function modelReady() {
    // classify sound
    classifier.classify(gotCommand);
}

function gotCommand(error, command) {
    if (error) {
        console.log(error);
        return;
    }
    // console.log the command
    console.log(command);
}