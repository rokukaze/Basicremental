/**
 * Created by Naseem on 4/22/2017.
 */
var incrementedNumber = 0;
function increment(number){
    incrementedNumber = incrementedNumber + number;
    document.getElementById("incrementedNumber").innerHTML = incrementedNumber;
}

function decrement(number){
    incrementedNumber = incrementedNumber - number;
    document.getElementById("incrementedNumber").innerHTML = incrementedNumber;
}