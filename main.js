var outcome;

alert("one day you wake up and the world as you know has ended. The dead come to life and prey on the living. There is no hope, no cure, only survival. Welcome to the zombie apocalypse. ");

var beginningScenarios = ["You wake up in the hospital. It is eerily quiet. You tiptoe to the door and peek out." "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods." ];

function randomNumber (range) {
    if(range === "number") {
        return Math.round(Math.random() * range);
    }
}


alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)] );

//this is an object constructer
var character = {
    health: 5,
    strength: 0,
    stealth: 0,
    name: prompt("What is your name?"),
    characterClass: prompt("There times test the strengths of our character. What were you before the war? (Choose from soldier, doctor, politician)").toLowerCase();

};

if (!character.name) {
    character.name = prompt("What did you say your name was?");

    if(!character.name) {
        alert("Well then I'll just call you Captain Poo face");
        character.name = "Captain Poo Face";
    }
}

if(character.characterClass === "soldier") {
    character.strength = 5;
}

if(character.characterClass === "politician") {
    character.stealth = 5;
}

if(character.characterClass === "doctor") {
    character.health = 7;
}






