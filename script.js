// Fill dynamic content
document.getElementById("page-title").innerText = content.businessName;
document.getElementById("logo").src = content.logo;
document.getElementById("business-name").innerText = content.businessName;
document.getElementById("tagline").innerText = content.tagline;
document.getElementById("whatsapp-btn").href = `https://wa.me/${content.contact.whatsapp}`;

document.getElementById("about-text").innerText = content.about;

// Services
const servicesList = document.getElementById("services-list");
content.services.forEach(service => {
  const li = document.createElement("li");
  li.innerText = service;
  servicesList.appendChild(li);
});

// Gallery
const galleryDiv = document.getElementById("gallery-images");
content.gallery.forEach(img => {
  const image = document.createElement("img");
  image.src = img;
  galleryDiv.appendChild(image);
});

// Contact
document.getElementById("address").innerText = content.contact.address;
document.getElementById("phone").innerText = content.contact.phone;
document.getElementById("email").innerText = content.contact.email;
document.getElementById("map-link").href = content.contact.googleMapLink;

// Social
document.getElementById("facebook").href = content.social.facebook;
document.getElementById("instagram").href = content.social.instagram;
