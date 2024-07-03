// Function to populate Saturdays
function populateSaturdays() {
    console.log("Populating Saturdays...");
    const saturdaysDropdown = document.getElementById('saturdays');
    const today = new Date();
    let currentDate = new Date(today);
    const endOfAugust = new Date(today.getFullYear(), 7, 31); // August is month 7 (0-indexed)

    // Adjust currentDate to the next Saturday if today is not Saturday
    if (currentDate.getDay() !== 6) {
        currentDate.setDate(currentDate.getDate() + (6 - currentDate.getDay()));
    }

    // Loop through each Saturday until the end of August
    while (currentDate <= endOfAugust) {
        console.log(`Adding Saturday: ${currentDate.toDateString()}`);
        const option = document.createElement('option');
        option.value = currentDate.toISOString().split('T')[0]; // Use ISO string format for value
        option.textContent = currentDate.toDateString(); // Display a readable date
        saturdaysDropdown.appendChild(option);

        // Move to the next Saturday
        currentDate.setDate(currentDate.getDate() + 7);
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
    listItem.textContent = `${teamName}: ${new Date(saturdays).toDateString()}`;
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
