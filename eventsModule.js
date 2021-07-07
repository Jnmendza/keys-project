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
            // set the total test time
            // update the time left: data Module
            // update the time left: UI module
            // move to a new word: data Module
            // set active word: UI Module
            // format the active word: UI module
            // focus on text input: UI module
            // add event listeners
            addEventListeners();
        }
    };
})(dataModule, UIModule, certificateModule, wordsModule);