// script.js
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
