let UIModule = (function(){
    
    // classes used to select HTML elements
    let DOMElements = {
        //indicators - test control
        timeLeft: '', //HTML element displaying time left
        //test results
        wpm: '',
        wpmChange: '',
        cpm: '',
        cpmChange: '',
        accuracy: '',
        accuracyChange: '',
        //user input
        textInput: '',
        nameInput: '',
        //test words
        content: document.getElementById('content'),
        activeWord: '',
        //modal
        modal: ''
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
        
        getDOMElements(){},
        
    //Indicators - Test Control
    
        updateTimeLeft: function(){},
        
    //results
        
        updateResults: function(){}, 
        
        fillModal: function(){}, 
        
        showModal: function(){},
        
    //user input
    
        inputFocus: function(){}, 
        
        isNameEmpty: function(){},
        
        flagNameInput: function(){},   
    
        spacePressed: function(){}, 
        
        enterPressed: function(){}, 
        
        emptyInput: function(){},  
    
        getTypedWord: function(){},
        
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
        
        formatWord: function(wordObject, wordHTML){}, 
        
        setActiveWord: function(index){}, 
        
        deactivateCurrentWord: function(){}, 
        
        scroll: function(){}
        
    }
})();

