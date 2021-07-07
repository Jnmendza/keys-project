let UIModule = (function(){
    
    // classes used to select HTML elements
    let DOMElements = {
        //indicators - test control
        timeLeft: document.getElementById('timeLeft'), //HTML element displaying time left
        //test results
        wpm: document.getElementById('wpm'),
        wpmChange: document.getElementById('wpmChange'),
        cpm: document.getElementById('cpm'),
        cpmChange: document.getElementById('cpmChange'),
        accuracy: document.getElementById('accuracy'),
        accuracyChange: document.getElementById('accuracyChange'),
        //user input
        textInput: document.querySelector('#input'),
        nameInput: document.querySelector('.form-group'),
        //test words
        content: document.getElementById('content'),
        activeWord: '',
        //modal
        modal: $('#myModal')
    };

    const splitArray = (str) => {
        str = str + ' ';
        return str.split('');
    }

    const addSpanTag = (arrOfLetters) => {
        return arrOfLetters.map(function(letter){
            return '<span>' + letter + '</span>'
        })
    }

    const spanWrapper = (arrOfLetters) => {
        arrOfLetters.unshift("<span>")
        arrOfLetters.push("</span>");
        return arrOfLetters
    }

    const joinEachWord = (arrOfLetters) => {
        return arrOfLetters.join('');
    }
    
    return {
        
    //get DOM elements
        
        getDOMElements(){
            return {
                textInput: DOMElements.textInput,
            }
        },
        
    //Indicators - Test Control
    
        updateTimeLeft: function(x){
            DOMElements.timeLeft.innerHTML = x;
        },
        
    //results
        
        updateResults: function(){}, 
        
        fillModal: function(){}, 
        
        showModal: function(){},
        
    //user input
    
        inputFocus: function(){
            DOMElements.textInput.focus();
        }, 
        
        isNameEmpty: function(){},
        
        flagNameInput: function(){},   
    
        spacePressed: function(){}, 
        
        enterPressed: function(){}, 
        
        emptyInput: function(){},  
    
        getTypedWord: function(){
            return DOMElements.textInput.value;
        },
        
    //test words
        // turn every letter into a span and place those span elements in another span element
        fillContent: function(array, lineReturn){
            // console.log("Split the array",content)
            let content = array.map(splitArray);
            // console.log("Add a span",content)
            content = content.map(addSpanTag)
            // console.log("wrap in single span",content)
            content = content.map(spanWrapper);
            // console.log("join each word",content)
            content = content.map(joinEachWord);
            // console.log("join each array",content)
            content = content.join('');
            // replace the line return special code with the HTML entity (line return)
            // <span>|</span>
            // <span>&crarr;;</span>
            content = content.split(lineReturn).join('&crarr;');
            //fill content
            DOMElements.content.innerHTML = content;
        },
        
        formatWord: function(wordObject){
            let activeWord = DOMElements.activeWord;
            // highlight the current word
            activeWord.className = 'activeWord';
            // format individual character
        }, 
        
        setActiveWord: function(index){
            DOMElements.activeWord = DOMElements.content.children[index]
        }, 
        
        deactivateCurrentWord: function(){}, 
        
        scroll: function(){}
        
    }
})();

