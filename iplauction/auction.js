// Data for players
const players = [
  { name: "virat Kholi", role: "Batsman", country: "India", image: "virat.avif" },
  { name: "Dhoni", role: "wicket-keeper", country: "India", image: "th.jpeg" },
  // Add more players here
];

// Function to create player elements and append them to the players list
function renderPlayers() {
  const playersList = document.getElementById('players-list');
  players.forEach(player => {
      const playerDiv = document.createElement('div');
      playerDiv.classList.add('player');
      playerDiv.innerHTML = `
          <img src="${player.image}" alt="${player.name}">
          <p>${player.name}</p>
          <p>Role: ${player.role}</p>
          <p>Country: ${player.country}</p>
      `;
      playersList.appendChild(playerDiv);
  });
}

window.onload = renderPlayers;
