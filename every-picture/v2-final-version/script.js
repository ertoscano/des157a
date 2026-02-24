(function(){
    'use strict'
    console.log('reading js')

    //Click the image to reveal next image

    document.querySelector('#red-truck').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#green-truck').className = 'show';
        console.log('show');
    });
    document.querySelector('#green-truck').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#blue-truck').className = 'show';
        console.log('show');
    });
    document.querySelector('#blue-truck').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#text1').className = 'show';
        overlay1Ready = 1;
        if(overlay1Ready = 1){
            console.log('overlay one is ready')
        }
    });

    document.querySelector('#red-fish').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#green-fish').className = 'show';
        console.log('show');
    });
    document.querySelector('#green-fish').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#blue-fish').className = 'show';
        console.log('show blue');
    });

    document.querySelector('#blue-fish').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#text2').className = 'show';
        overlay2Ready = 1;
        if(overlay2Ready = 1){
            console.log('overlay two is ready')
        }
    });

    document.querySelector('#red-carry').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#green-carry').className = 'show';
        console.log('show');
    });
    document.querySelector('#green-carry').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#blue-carry').className = 'show';
        console.log('show blue');
        
    });

    document.querySelector('#blue-carry').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#text3').className = 'show';
        overlay1Ready = 1;
        if(overlay3Ready = 1){
            console.log('overlay three is ready')
        }
        
    });

    //I tried making it so when all the text are showing then the final conclusion text shows.

    // let overlay1Ready = 0;
    // let overlay2Ready = 0;
    // let overlay3Ready = 0;
    
    // if (overlay1Ready === 1 && overlay2Ready === 1 && overlay3Ready === 1){
    //     document.querySelector('#complete').className = 'show';
    //     console.log('complete')
    // }
    


})();