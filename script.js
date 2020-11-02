const monsterZone = document.getElementById('zone');
const monsterZoneList = document.getElementById('monster');
const monsterData = document.getElementById('data');
const zoneListButton = document.querySelectorAll('.tab-zone');
const zoneMonsterButton = document.querySelectorAll('.tab-monster');


zoneListButton.forEach(function(zoneListButton) {
    zoneListButton.addEventListener('click', activeButton);
    });

function activeButton (e) {
    const buttonClick = e.target;
        
        if (buttonClick.classList.contains('btn-primary')){
            
            buttonClick.classList.replace('btn-primary','active-primary');
        }else {
            buttonClick.classList.replace('active-primary','btn-primary');
        }; 
        
    };
    
// Sprawdzenie czy klaca active-button jest juz wcześniej nadana i ją wyłącza, za to nadaje ją klikniętemu buttonowi IN PROGRESS
function checkIfActive() {
    for (let i=0; i<zoneListButton.length; i++){
        if (zoneListButton.classList.contains('active-primary')){
            zoneListButton.classList.remove('active-primary');
            zoneListButton.classList.add('btn-primary'); 
            brake;
        }};
    };


// Zmieania klasę na active po kliknięciu. DZIAŁA (zostaje klasa active)
    // function activeButton (e) {
    //     const buttonClick = e.target;
    //     buttonClick.classList.remove('btn-primary');
    //     buttonClick.classList.add('active-primary'); 
    // };

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

//Zmienia klasy po kliknięciu na active, a po kolejnym z powrotem na btn-primary. WERSJA 2 (DZIAŁA!)

// function activeButton (e) {
//     const buttonClick = e.target;
    
//         if (buttonClick.classList.contains('btn-primary')){
//             buttonClick.classList.replace('btn-primary','active-primary');
//         }else {
//             buttonClick.classList.replace('active-primary','btn-primary');
//         };
//     };



