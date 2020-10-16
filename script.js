const monsterZone = document.getElementById('zone');
const zoneListButton = document.querySelector('.tab-zone');
const monsterZoneList = document.getElementById('monster');
const monsterData = document.getElementById('data');

zoneListButton.addEventListener('click', activeButton);

function activeButton (e) {
const buttonClick = e.target;
    zoneListButton.classList.remove('btn-primary');
    zoneListButton.classList.add('active-primary');

};