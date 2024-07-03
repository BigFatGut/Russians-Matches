// script.js

// Function to populate Saturdays
function populateSaturdays() {
    const saturdaysDropdown = document.getElementById('saturdays');
    const today = new Date();
    const endOfAugust = new Date(today.getFullYear(), 7, 31);

    let currentDate = new Date(today);

    while (currentDate <= endOfAugust) {
        if (currentDate.getDay() === 6) {
            const option = document.createElement('option');
            option.value = currentDate.toDateString();
            option.textContent = currentDate.toDateString();
            saturdaysDropdown.appendChild(option);
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

// Populate Saturdays on page load
document.addEventListener('DOMContentLoaded', populateSaturdays);

document.getElementById('availability-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const teamName = document.getElementById('team-name').value;
    const saturdays = document.getElementById('saturdays').value;
    
    const teamList = document.getElementById('team-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${teamName}: ${saturdays}`;
    teamList.appendChild(listItem);

    document.getElementById('team-name').value = '';
    document.getElementById('saturdays').value = '';

    updateScheduledMatch();
});

function updateScheduledMatch() {
    const teamList = document.getElementById('team-list').getElementsByTagName('li');
    if (teamList.length >= 2) {
        const matchDetails = `${teamList[0].textContent.split(':')[0]} vs ${teamList[1].textContent.split(':')[0]}`;
        document.getElementById('match-details').textContent = matchDetails;
    } else {
        document.getElementById('match-details').textContent = 'No match scheduled.';
    }
}
