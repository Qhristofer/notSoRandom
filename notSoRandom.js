function random(a = 1){
    console.log(Math.floor(Math.random() * a));
}
random();
random(10);
random(400);
random(1000);

function randomLetter(string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"){
    length = Math.floor(Math.random() * string.length)
    console.log(string[length])
}
randomLetter();
randomLetter("Yo")
randomLetter("Hello")
randomLetter("Yolo")

function myGuy(string = "Nothing"){
    console.log(string + ", my guy.")
}
myGuy();
myGuy("Trump is")
myGuy("England's out")

function string_N_times(string = "U pUt nOthINg GoOfy", number = 2) {
    for (i=0; i < number; i++) {
        console.log(string)
    }
}
string_N_times();
string_N_times("Hello", 5);
string_N_times("Bromeo Do It To Em", 4);

function hypotenuse(side1 = 1, side2 = 1){
    if (arguments.length > 2){
        throw "Too Much"
    }
    console.log(Math.sqrt(side1 ** 2 + side2 ** 2))
}
hypotenuse ();
hypotenuse (3,4,6);
hypotenuse (7,5);

