async function loadPokemon() {
  const response = await fetch("/api/pokemon");
  const data = await response.json();

  const card = document.getElementById("pokemon-card");

  card.innerHTML = `
    <h2>${data.name}</h2>
    <p>Type: ${data.type}</p>
    <p>Level: ${data.level}</p>
  `;
}

loadPokemon();