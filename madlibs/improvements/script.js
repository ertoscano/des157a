(function(){
    'use strict';
    console.log('reading js');

    const filledForm = document.querySelector('form');  
    const getMad = document.querySelector('#alert');
    const blurP = document.querySelectorAll('p');
    for(var i = 0; i < blurP.length -2; i++){
        blurP[i].classList.add("blurred-text");
    }
    
    filledForm.addEventListener('submit', function(event){
        event.preventDefault();

        const interjection = document.querySelector('#interjection');
        const number = document.querySelector('#number');
        const fNoun = document.querySelector('#fNoun');
        const fAdjective = document.querySelector('#fAdjective');
        const fVerb = document.querySelector('#fVerb');
        const sAdjective = document.querySelector('#sAdjective');
        const sNoun = document.querySelector('#sNoun');
        const sVerb = document.querySelector('#sVerb');
        const tAdjective = document.querySelector('#tAdjective');
        const tVerb = document.querySelector('#tVerb');
        const tNoun = document.querySelector('#tNoun');

        let myText;
        if(interjection.value == ''){
            myText = "please provide an interjection";
            document.querySelector('#interjection').focus();
        }
        else if(number.value == ''){
            myText = "please provide a number";
            document.querySelector('#interjection').focus();
        }
        else if(fNoun.value == ''){
            myText = "please provide a noun";
            document.querySelector('#fNoun').focus();
        }
        else if(fAdjective.value == ''){
            myText = "please provide an adjective";
            document.querySelector('#fAdjective').focus();
        }
        else if(fVerb.value == ''){
            myText = "please provide a verb";
            document.querySelector('#fVerb').focus();
        }
        else if(sAdjective.value == ''){
            myText = "please provide a adjective";
            document.querySelector('#sAdjective').focus();
        }
        else if(sNoun.value == ''){
            myText = "please provide an noun";
            document.querySelector('#sNoun').focus();
        }
        else if(sVerb.value == ''){
            myText = "please provide a verb";
            document.querySelector('#sVerb').focus();
        }
        else if(tAdjective.value == ''){
            myText = "please provide an adjective";
            document.querySelector('#tAdjective').focus();
        }
        else if(tVerb.value == ''){
            myText = "please provide a verb";
            document.querySelector('#tVerb').focus();
        }
        else if(tNoun.value == ''){
            myText = "please provide a noun";
            document.querySelector('#tNoun').focus();
        } 
        else {
            myText = '';
            removeBlur(); 
        }
        getMad.innerHTML = myText;
        
    })

    filledForm.addEventListener('reset', function(event){
        addBlur();        
    })
    getMad.innerHTML = myText;

    function removeBlur(){
        for(var i = 0; i < blurP.length; i++){
            blurP[i].classList.remove("blurred-text");
            blurP[i].classList.add("unblurred-text");
        }
    }

    function addBlur(){
        for(var i = 0; i < blurP.length-2; i++){
            blurP[i].classList.add("blurred-text");
            blurP[i].classList.remove("unblurred-text");
        }
    }
})()