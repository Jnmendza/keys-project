var dataModule = (function(){
    var lineReturn = '|';
    // shuffle function
    const shuffle = (array) => {
        let currentIndex = array.length , randomIndex;
        // console.log("current index", currentIndex)
        // while the array is NOT empty
        while(currentIndex !== 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            // console.log("random index", randomIndex)
            currentIndex--;
    
        // swap it with the current element
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ]
        }
        return array;   
    }

    // capitalizedRandom function
    // array['word1','word2','word3']
    // array['Word1','word2','Word3']
    String.prototype.capitalize = function(){
        return this.charAt(0).toUpperCase() + this.slice(1);
      }

    const capitalizeRandom = (array) => {
        return array.map(function(currentWord){
            const x = Math.floor(4 * Math.random()) // chance x = 3 25%
            return (x==3) ? currentWord.capitalize() : currentWord;
        })
    }

//    console.log(capitalizeRandom(['word1','word2','word3','word4']))

    // addRandomPunctuation function
    // array['word1','word2','word3']
    // array['word1.','word2!','word3,']
    String.prototype.randomPunc = function(){
        const punctuation = [lineReturn,'!','.',',','?',';','','',''];
        const randomNum = Math.floor(Math.random() * punctuation.length);
        return this + punctuation[randomNum];
    }

    const addRandomPunctuation = (array) => {
        return array.map(function(currentWord){
            return currentWord.randomPunc();
        })
    }
    var appData = {
        indicators: {
            testStarted: false, 
            testEnded: false, 
            totalTestTime: 0, 
            timeLeft: 0
        },
        results: {
            wpm: 0, 
            wpmChange: 0, 
            cpm: 0, 
            cpmChange: 0, 
            accuracy: 0, 
            accuracyChange: 0 ,
            numOfCorrectWords: 0, 
            numOfCorrectCharacters: 0, 
            numOfTestCharacters: 0
        },
        words: {
            currentWordIndex: -1, 
            testWords: [], 
            currentWord: {}
        },
    };

    {/*
        Word Constructor
        {
            value: {correct: '', user: '', isCorrect: false},
            characters: {correct: [], user: [], totalCorrect: 0, totalTest: 0}
        }
    */}
    let word = function(index){
        // word values: correct vs user's
        this.value = {
            correct: appData.words.testWords[index] + ' ',
            user: '',
            isCorrect: false
        }
        //characters: correct vs user's
        this.characters = {
            correct: this.value.correct.split(''),
            user: [],
            totalCorrect: 0,
            totalTest: this.value.correct.length,
        }
    };
    
    //update method: updates the word using the word typed by the user
    word.prototype.update = function(value){
        // this.characters.user.push(value)
    };
        
    return {
    //indicators - test Control
        
        setTestTime: function(x){
            appData.indicators.totalTestTime = x;
        },//sets the total test time to x
        
        initializeTimeLeft(){
            appData.indicators.timeLeft = appData.indicators.totalTestTime;
        },//initializes time left to the total test time

        startTest: function(){},//starts the test

        endTest: function(){},//ends the test

        getTimeLeft: function(){
            return appData.indicators.timeLeft;
        },//return the remaining test time
        
        reduceTime: function(){},// reduces the time by one sec

        timeLeft(){
            return appData.indicators.timeLeft > 0;
        },//checks if there is time left to continue the test
        
        testEnded(){
            return appData.indicators.testEnded;
        },//checks if the test has already ended

        testStarted(){
            return appData.indicators.testStarted;
        },//checks if the test has started
        
    //results
        
        calculateWpm: function(){},//calculates wpm and wpmChange and updates them in appData

        calculateCpm: function(){},//calculates cpm and cpmChange and updates them in appData
        
        calculateAccuracy: function(){},//calculates accuracy and accuracyChange and updates them in appData

    //test words
        
        fillListOfTestWords(textNumber, words){
            let result = words.split(" ");
            if(textNumber==0){
                // shuffle words
                result = shuffle(result);
                // capitalize random strings
                result = capitalizeRandom(result);
                // add random punctuation
                result = randomPunc(result);

            }

            appData.words.testWords = result;
        },// fills words.testWords

        getListofTestWords: function(){
            return appData.words.testWords;
        },// get list of test words: words.testWords

        moveToNewWord: function(){
            if(appData.words.currentWordIndex > -1){
                // update the number of correct words
                // update the number of correct characters
                // update number of test characters
            }
            appData.words.currentWordIndex++;
            let newWord = new word(appData.words.currentWordIndex)
            appData.words.currentWord = newWord;
        },// increments the currentWordIndex - updates the current word (appData.words.currentWord) by creating a new instance of the word class - updates numOfCorrectWords, numOfCorrectCharacters and numOfTestCharacters

        updateCurrentWord: function(value){
            appData.words.currentWord.update(value);
        },// updates current word using user input

        getCurrentWordIndex(){
            return appData.words.currentWordIndex;
        },

        // get current word
        getCurrentWord(){
            let currentWord = appData.words.currentWord;
            return {
                value: {
                    correct: currentWord.value.correct,
                    user: currentWord.value.user,
                }
            }
        },

        getLineReturn(){
            return lineReturn;
        },
        
        returnData(){
            console.log(appData);
        }
    }
    
})();