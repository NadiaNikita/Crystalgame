

// 1. create  4 clickable crystals (variables )
var given_number;
var purple;
var blue;
var aqua;
var black;
var wins;
var losses;


/// creating for loop for the 4 crystals instead of using html writing out
// var given = Math.floor(Math.random()*12)
console.log (given);


// for(var i= 0; i<4; i++){
//     var given = Math.floor(Math.random()*12)
//     console.log (given);
//     var crystal = $("<div>");
//     crystal.attr({
//         class: 'crystal',
//         "data-random": given
//     });
//     $(".crystals").append(crystal);

//     console.log("Heloo crystals!")
// }

function initializeCrystals() {
    var crystals = $(".crystal");
    for ( var i=0; i<$; i++){
        var given = Math.floor(Math.random()*12);
        crystals[i].attr("value", given);
    }
}

initializeCrystals();

// 2. generate random number tied to each btn/crystal pic (1-12)

// 3. add to win or loss

// 4. generate new number after each win or loss (19-120) 

// 5. connect it to 4 crystals

// add up the number of crystals clicked to the (given-number)

// have a set ending score

// after ending game chage values of crystals 

// add + win or + loss when the number equals to the tottal score or if the nuber is = or < the generated given number 

// start over the game 



 // javascript 
//  