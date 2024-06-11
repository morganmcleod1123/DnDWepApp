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
    let selectedCharacter = document.querySelector('input[name="charSelect"]:checked');
    let selectedStat = document.querySelector('input[name="statSelect"]:checked');
    updatePlayerData(selectedCharacter.value, selectedStat.value, 1);
    tableUpdate();
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
    // update table element
    tableUpdate();
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