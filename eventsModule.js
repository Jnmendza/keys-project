var eventsModule = (function(dModule, uModule, cModule, wModule){
    var addEventListeners = function(){

        //character typing event listener

        //click on download button event listener
        
    };

                    
    return {
        //init function, initializes the test before start
        init: function(duration, textNumber){
            // fill the list of test words: data module
            let words = wModule.getWords(textNumber);
            dModule.fillListOfTestWords(textNumber, words)

            // fill the list of test words: UI module
            let lineReturn = dModule.getLineReturn();
            let testWords = dModule.getListofTestWords();
            uModule.fillContent(testWords,lineReturn);
            // set the total test time: data Module
            dModule.setTestTime(duration);
            // update the time left: data Module
            dModule.initializeTimeLeft()
            // update the time left: UI module
            let timeLeft = dModule.getTimeLeft();
            uModule.updateTimeLeft(timeLeft);
            // move to a new word: data Module
            dModule.moveToNewWord();
            // set active word: UI Module
            let index = dModule.getCurrentWordIndex()
            uModule.setActiveWord(index)
            // format the active word: UI module
            let currentWord = dModule.getCurrentWord();
            uModule.formatWord(currentWord);
            // focus on text input: UI module
            uModule.inputFocus();
            // add event listeners
            addEventListeners();
        }
    };
})(dataModule, UIModule, certificateModule, wordsModule);