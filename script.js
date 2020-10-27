const monsterZone = document.getElementById('zone');
const monsterZoneList = document.getElementById('monster');
const monsterData = document.getElementById('data');
const zoneListButton = document.querySelectorAll('.tab-zone');
const zoneMonsterButton = document.querySelectorAll('.tab-monster');

function clickButton() {
    zoneListButton.addEventListener('click', activeButton);
};

zoneListButton.forEach(function addClass(item){
    item.classList.add('active-primary');
});

// zoneListButton.forEach(function addClass(item){
//     item.addClass('active-primary');
// }); 
