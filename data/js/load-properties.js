const container = document.getElementById("property-list");

properties.forEach(property => {

container.innerHTML += `

<div class="property-card">

<img src="${property.image}" width="300">

<h3>${property.title}</h3>

<p>${property.location}</p>

<p>${property.price}</p>

<p>${property.bedroom} Bedroom | ${property.bathroom} Bathroom</p>

</div>

`;

});
