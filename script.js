const monsterData = document.getElementById('data');
const zoneList = document.querySelectorAll('.tab-zone');

 

zoneList.forEach(function(zoneButton) {
    zoneButton.addEventListener('click', activeButton);
    });

function activeButton(e) {
    checkIfActive();
    const buttonClick = e.target;
        buttonClick.classList.replace('btn-primary','active-primary');
    createMonsterButton();//wstawia buttony potworów w drugiej kolumnie
    };

// Sprawdzenie czy klasa active-button jest juz wcześniej nadana i ją wyłącza
function checkIfActive() {
    for (let i=0; i<zoneList.length; i++){
        if (zoneList[i].classList.contains('active-primary')){ 
            zoneList[i].classList.replace('active-primary','btn-primary');
            break;
        }};
    };

// Wyświetla liste potworów z danego zone'a

function createMonsterButton() {
    const monsterButton = document.createElement('button');
    monsterButton.className = 'btn-secondary tab-monster';
    monsterRow.appendChild(monsterButton);
    for(i=0; i<ancientMonsterList.length; i++){
        monsterButton.innerHTML=ancientMonsterList[i];
    };
};




//Zmienia klasy po kliknięciu na active, a po kolejnym z powrotem na btn-primary. WERSJA 2 (DZIAŁA!)

// function activeButton (e) {
//     const buttonClick = e.target;
//         if (buttonClick.classList.contains('btn-primary')){
//             buttonClick.classList.replace('btn-primary','active-primary');
//         }else {
//             buttonClick.classList.replace('active-primary','btn-primary');
//         };
//     };

//Zmienia klasy po kliknięciu na active, a po kolejnym z powrotem na btn-primary. DZIAŁA
// function activeButton (e) {
//     const buttonClick = e.target;
//             if (buttonClick.classList.contains('btn-primary')){
//             buttonClick.classList.remove('btn-primary');
//             buttonClick.classList.add('active-primary'); 
//         }else {
//             buttonClick.classList.remove('active-primary');
//             buttonClick.classList.add('btn-primary');
//         }
//     };

// Zmieania klasę na active po kliknięciu. DZIAŁA (zostaje klasa active)
    // function activeButton (e) {
    //     const buttonClick = e.target;
    //     buttonClick.classList.remove('btn-primary');
    //     buttonClick.classList.add('active-primary'); 
    // };

