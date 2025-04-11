const container = document.getElementById('scroll-container');
const iconNames = [
  "Countryside", "OMG!", "Lakefront", "Caves", "Treehouse", "Rooms", "Farms", 
  "Pools", "Views", "Beach", "Cabins", "HistoricalHomes", 
  "Beachfront", "TinyHomes", "Design", "Beds&Breakfast", "Trending", 
  "Tropical", "Luxe", "Castles"
];
const imageData = {
countryside: [
{ 
  location: "Kherli Lala, India", 
  distance: "34 kilometres away", 
  date: "13–18 Apr", 
  price: "₹271,392", 
  duration: "5 nights", 
  link: "#",
  rating: (4 + Math.random()).toFixed(2) 
},
{ 
  location: "Jaipur, India", 
  distance: "236 kilometres away", 
  date: "15–20 Apr", 
  price: "₹117,273", 
  duration: "5 nights", 
  link: "#",
  rating: (4 + Math.random()).toFixed(2)
},
{ 
  location: "Jaipur, India", 
  distance: "244 kilometres away", 
  date: "11–16 Apr", 
  price: "₹134,455", 
  duration: "5 nights", 
  link: "#",
  rating: (4 + Math.random()).toFixed(2)
},
{ 
  location: "Jaipur, India", 
  distance: "211 kilometres away", 
  date: "28 Apr–3 May", 
  price: "₹125,000", 
  duration: "5 nights", 
  link: "#",
  rating: (4 + Math.random()).toFixed(2)
},
{ 
  location: "Jaipur, India", 
  distance: "238 kilometres away", 
  date: "22–27 Apr", 
  price: "₹14,630", 
  duration: "5 nights", 
  link: "#",
  rating: (4 + Math.random()).toFixed(2)
},
{ 
  location: "Udaipur, India", 
  distance: "558 kilometres away", 
  date: "9–14 Apr", 
  price: "₹71,856", 
  duration: "5 nights", 
  link: "#",
  rating: (4 + Math.random()).toFixed(2)
},
{ 
  location: "Udaipur, India", 
  distance: "558 kilometres away", 
  date: "9–14 Apr", 
  price: "₹103,558", 
  duration: "5 nights", 
  link: "#",
  rating: (4 + Math.random()).toFixed(2)
},
{ 
  location: "Noida, India", 
  distance: "22 kilometres away", 
  date: "8–13 Apr", 
  price: "₹146,071", 
  duration: "5 nights", 
  link: "#",
  rating: (4 + Math.random()).toFixed(2)
},
{ 
  location: "Noida, India", 
  distance: "23 kilometres away", 
  date: "8–13 Apr", 
  price: "₹114,118", 
  duration: "5 nights", 
  link: "#",
  rating: (4 + Math.random()).toFixed(2)
},
{ 
  location: "Noida, India", 
  distance: "23 kilometres away", 
  date: "20–25 Apr", 
  price: "₹91,294", 
  duration: "5 nights", 
  link: "#",
  rating: (4 + Math.random()).toFixed(2)
},
{ 
  location: "Noida, India", 
  distance: "23 kilometres away", 
  date: "20–25 Apr", 
  price: "₹53,600", 
  duration: "5 nights", 
  link: "#",
  rating: (4 + Math.random()).toFixed(2)
},
{ 
  location: "Gurugram, India", 
  distance: "18 kilometres away", 
  date: "20–25 Apr", 
  price: "₹100,000", 
  duration: "5 nights", 
  link: "#",
  rating: (4 + Math.random()).toFixed(2)
},
{ 
  location: "Gurugram, India", 
  distance: "49 kilometres away", 
  date: "21–26 Apr", 
  price: "₹115,259", 
  duration: "5 nights", 
  link: "#",
  rating: (4 + Math.random()).toFixed(2)
},
{ 
  location: "Gurugram, India", 
  distance: "33 kilometres away", 
  date: "12–17 Apr", 
  price: "₹25,328", 
  duration: "5 nights", 
  link: "#",
  rating: (4 + Math.random()).toFixed(2)
}
]
};
iconNames.forEach((name, index) => {
  const iconDiv = document.createElement('div');
  iconDiv.className = 'icon';
  
  iconDiv.innerHTML = `
  <button class="icon-btn" onclick="loadImages('${name.toLowerCase()}')"><img src="iAir/nav-icons/${index + 1}.jpg" alt="${name}"></button>
<br>${name}
  `;


  iconDiv.addEventListener('click', () => {
    document.querySelectorAll('.icon').forEach(icon => icon.classList.remove('active'));
    iconDiv.classList.add('active');
  });

  container.appendChild(iconDiv);
});
function loadImages(category) {
const igif = document.getElementById("grid-image");
igif.innerHTML = "";

const div = document.createElement("div");
div.className = "gif";
div.innerHTML = `<img src="iAir/Circles-menu-3.gif" alt="Loading GIF">`;

igif.appendChild(div);

setTimeout(() => {
    igif.innerHTML = "";
    loadImage(category); 
}, 1000); 
}   function loadImage(category) {
// alert("something went wrong")
const gridImage = document.getElementById("grid-image");

gridImage.innerHTML = "";

if (!imageData[category] || imageData[category].length === 0) {
  const div = document.createElement("div");
  div.className = "gif";
  div.innerHTML = `<img src="iAir/Circles-menu-3.gif" alt="Loading GIF">`;
  gridImage.appendChild(div);
  // console.log(`Category "${category}" data not found`);
  return;
}


let index = 0;

imageData[category].forEach(element => {
const div = document.createElement("div");
div.className = "grid-item";
div.innerHTML = `
  <div class="image-container">
    <a href="#">
      <img src="iAir/property/property-1/${index + 1}.jpg" alt="countryside apartment image" class="parent-image">
    </a>
    <a href="#">
      <img src="iAir/save-icon.svg" alt="Save icon" class="child-image">
    </a>
    <div class="image-details">
      <div>
        <p><span class="image-detail-dark">${element.location}</span></p>
        <p>${element.distance}</p>
        <p>${element.date}</p>
        <p><span class="image-detail-dark">${element.price}</span> <span>${element.duration}</p>
      </div>
      <div>
        <span><p>${element.rating}</p></span>
      </div>
    </div>
  </div>`;
  if(div.innerHTML == ""){
    console.log("empty");
  }
gridImage.appendChild(div);
index++;
});
}
document.addEventListener('DOMContentLoaded', () => {
  const defaultCategory = 'countryside'; 
  loadImage(defaultCategory);
});