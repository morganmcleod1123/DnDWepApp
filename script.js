let recordButton = document.getElementById("statRecord");
let plusButton = document.getElementById("statPlusOne");
let testingPara = document.getElementById("testingPara");
let bellosRow = document.getElementById("bellosRow");
let playerData = [
    {
        name: "Bellos",
        damageDone: 0,
        damageTaken: 0,
        healingDone: 0,
        healingReceived: 0,
        timesDowned: 0,
        exhaustionTaken: 0,
        spellsUsed: 0,
        enemiesKilled: 0,
    },
    {
        name: "Jin",
        damageDone: 0,
        damageTaken: 0,
        healingDone: 0,
        healingReceived: 0,
        timesDowned: 0,
        exhaustionTaken: 0,
        spellsUsed: 0,
        enemiesKilled: 0,
    },
    {
        name: "Callum",
        damageDone: 0,
        damageTaken: 0,
        healingDone: 0,
        healingReceived: 0,
        timesDowned: 0,
        exhaustionTaken: 0,
        spellsUsed: 0,
        enemiesKilled: 0,
    }
];

recordButton.onclick = recordStat;
plusButton.onclick = plusOneFunction;

function plusOneFunction() {
    for (let element of playerData){
        console.log(element);
    }
}

function printTheObject(objectPrinted){
    console.log(objectPrinted);
}

function recordStat(){
    // check which radio buttons are selected
    // update the JSON objects

}
