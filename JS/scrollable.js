const container = document.getElementById('scroll-container');
const iconNames = [
  "Countryside", "OMG!", "Lakefront", "Caves", "Treehouse", "Rooms", "Farms", 
  "Pools", "Views", "Beach", "Cabins", "HistoricalHomes", 
  "Beachfront", "TinyHomes", "Design", "Beds&Breakfast", "Trending", 
  "Tropical", "Luxe", "Castles"
];

iconNames.forEach((name, index) => {
  const iconDiv = document.createElement('div');
  iconDiv.className = 'icon';
  iconDiv.innerHTML = `
    <img src="iAir/nav-icons/${index + 1}.jpg" alt="${name}">
    <br>${name}
  `;


  iconDiv.addEventListener('click', () => {
    document.querySelectorAll('.icon').forEach(icon => icon.classList.remove('active'));
    iconDiv.classList.add('active');
  });

  container.appendChild(iconDiv);
});
