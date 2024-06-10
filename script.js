let recordButton = document.getElementById("statRecord");
let plusButton = document.getElementById("statPlusOne");
let testingPara = document.getElementById("testingPara");
let bellosRow = document.getElementById("bellosRow");
let playerData = [
    {
        name: "Bellos",
        damageDone: 1,
        damageTaken: 2,
        healingDone: 3,
        healingReceived: 4,
        timesDowned: 5,
        exhaustionTaken: 6,
        spellsUsed: 7,
        enemiesKilled: 8,
    },
    {
        name: "Jin",
        damageDone: 8,
        damageTaken: 7,
        healingDone: 6,
        healingReceived: 5,
        timesDowned: 4,
        exhaustionTaken: 3,
        spellsUsed: 2,
        enemiesKilled: 1,
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
    //document.getElementById("bellosDamage").innerText
    //console.log(playerData[0].damageDone);
    tableUpdater();
}

function printTheObject(objectPrinted){
    console.log(objectPrinted);
}

function recordStat(){
    // check which radio buttons are selected and save to vars
    let characterSelected = document.querySelector('input[name="charSelect"]:checked');
    let statSelected = document.querySelector('input[name="statSelect"]:checked');
    let statValue = document.getElementById("statValue");
    // update the specific JSON object in playerData
    updatePlayerData(characterSelected.value, statSelected.value, statValue.value);
    // call a tableCreation function that creates a table based on playerData
}

function updatePlayerData(charSelected, statSelected, statValue){
    console.log(`Values are: ${charSelected}, ${statSelected}, ${statValue}`)
    for(let element of playerData){
        if (element.name === charSelected){
            element[statSelected] += Number(statValue);
        }
    }
}

// Update the innerText of the Table to reflect playerData stat values
function tableUpdate(){
    const tableBody = document.getElementById("tableBody");
    const allRows = tableBody.children;
    for (let i = 0; i < allRows.length; i++){
        let row = allRows[i];
        let cells = row.children;
        // ACTUALLY smurfed with the "cells[j].classname".
        for (let j = 1; j < cells.length; j++){
            cells[j].innerText = playerData[i][cells[j].className];
        }
    }
}