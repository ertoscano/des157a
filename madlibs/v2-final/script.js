(function(){
    'use strict';
    console.log('reading js');

    const filledForm = document.querySelector('form');  
    const getMad = document.querySelector('endPage');

    const blurP = document.querySelectorAll('p');
    for(var i = 0; i < blurP.length -1; i++){
        blurP[i].classList.add("blurred-text");
    }
    
    filledForm.addEventListener('submit', function(event){
        event.preventDefault();

        const interjection = document.querySelector('#interjection');
        const number = document.querySelector('#number');
        const fNoun = document.querySelector('#fNoune');
        const fAdjective = document.querySelector('#fAdjective');
        const fVerb = document.querySelector('#fVerb');
        const sAdjective = document.querySelector('#sAdjective');
        const sNoun = document.querySelector('#sNoun');
        const sVerb = document.querySelector('#sVerb');
        const tAdjective = document.querySelector('#tAdjective');
        const tVerb = document.querySelector('#tVerb');
        const tNoun = document.querySelector('#tNoun');

        let myText;
        if(interjection == ''){
            myText = "please provide an interjection";
            const find = document.querySelector('#interjection').focus();
            find.classList.add("required");
        }
        else if(number == ''){
            myText = "please provide a number";
            document.querySelector('#interjection').focus();
        }
        else if(fNoun == ''){
            myText = "please provide a noun";
            document.querySelector('#fNoun').focus();
        }
        else if(fAdjective == ''){
            myText = "please provide an adjective";
            document.querySelector('#fAdjective').focus();
        }
        else if(fVerb == ''){
            myText = "please provide a verb";
            document.querySelector('#fVerb').focus();
        }
        else if(sAdjective == ''){
            myText = "please provide a adjective";
            document.querySelector('#sAdjective').focus();
        }
        else if(sNoun == ''){
            myText = "please provide an noun";
            document.querySelector('#sNoun').focus();
        }
        else if(sVerb == ''){
            myText = "please provide a verb";
            document.querySelector('#sVerb').focus();
        }
        else if(tAdjective == ''){
            myText = "please provide an adjective";
            document.querySelector('#tAdjective').focus();
        }
        else if(tVerb == ''){
            myText = "please provide a verb";
            document.querySelector('#tVerb').focus();
        }
        else if(tNoun == ''){
            myText = "please provide a noun";
            document.querySelector('#tNoun').focus();
        } else {
            // myText = `you typed the words ${fAdjective}, ${sNoun}, ${fVerb}, and ${interjection}`
            // document.querySelector('#interjection').value = '';
            // document.querySelector('#number').value = '';
            // document.querySelector('#fNoun').value = '';
            // document.querySelector('#fAdjective').value = '';
            // document.querySelector('#fVerb').value = '';
            // document.querySelector('#sAdjective').value = '';
            // document.querySelector('#sNoun').value = '';
            // document.querySelector('#sVerb').value = '';
            // document.querySelector('#tAdjective').value = '';
            // document.querySelector('#tVerb').value = '';
            // document.querySelector('#tNoun').value = '';
            removeBlur(); 
        }
        getMad.innerHTML = myText;
        
    })
    getMad.innerHTML = myText;
    function removeBlur(){
        for(var i = 0; i < blurP.length; i++){
            blurP[i].classList.remove("blurred-text");
            blurP[i].classList.add("unblurred-text");
        }
    }
})()