let playerXTurn =  true;   // this line determines that player x always starts .
   


$(".grid-item" ).on ("click", function(){     // this line is saying that once there is "click" on a grid item something shall happen
    
    const gridClick = $(this)
     

    if (gridClick.text() !== '' ){    // is here to only allow players to play on empty grid items, no illegal moves

        {alert("this is an invalid move.")}
    
    }  else {
        gridClick.text("X");  // however(else) if the space is free add an "X".

        if (playerXTurn)  { 
            gridClick.text("X"); 
            playerXTurn = false  // this line is telling us that once we change grid-item(this) text to X playerXturn shall be false
            whoWins("X");
        } else  {
            gridClick.text("O"); //now we add an O to the next clicled grid item once that happens playerXturn becomes true again
            playerXTurn= true     // after this we go back to adding an x and we repeat till all grid spaces are taken!!
            whoWins("O");
        }
        
        
    
    }

   
}); 


const whoWins = function(player){
    if ($(".A").text() === $(".B").text() && $(".B").text() === $(".C").text() && $('.A').text()  !== '') { 
        alert (player + " wins");
    };

    if ($(".A").text() === $(".E").text() && $(".E").text() === $(".I").text()&& $('.A').text()  !== '') { 
        alert (player + " wins");
    };

    if ($(".A").text() === $(".D").text() && $(".D").text() === $(".G").text()&& $('.A').text()  !== '') { 
        alert (player + " wins");
    };

    if ($(".C").text() === $(".E").text()  && $(".E").text()=== $(".G").text()&& $('.C').text()  !== '') { 
        alert (player +  " wins");
    };

    if ($(".B").text() === $(".E").text() && $(".E").text() === $(".H").text()&& $('.B').text()  !== '') { 
        alert (player + " wins");
    };

    if ($(".C").text() === $(".F").text() && $(".F").text() === $(".I").text()&& $('.F').text()  !== '') { 
        alert (player + " wins")
    };
    
    if ($(".D").text() === $(".E").text() && $(".E").text() === $(".F").text()&& $('.D').text()  !== '') { 
        alert (player +  " wins");
    }
};

 
 
 

 
 



//now we must wrtie Jquery code to acess if 3 consecutive items have the same string and then retrun an alert saying player x or o wins!!
















// var text = prompt('whats in your mind');
// var textCount= text.length



// console.log('you used ' + textCount + ' characters, and you have ' +  (140- textCount) + ' characters  left');



// if text.length is longer than 140 slice out the characters of its array.

// var text = prompt ('whats in your mind')
// var textCount= text.length
//     if ( textCount > 140) {
//        text = text.slice(0, 140 ) 
        
//     };    // why is jS just fulling ignoring this statement?????? fuck me dewad 

//     console.log( text );



//     // angela yu's solution

//     var tweet = prompt('compose your tweet')

//     var tweetUnder140 = tweet.slice(0,140);

//     alert(tweetUnder140);


