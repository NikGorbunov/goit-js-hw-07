const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector("ul#gallery");
const galleryById = document.getElementById("gallery");

galleryById.style.display = "flex";
galleryById.style.alignItems = "center";
galleryById.style.justifyContent = "space-between";
galleryById.style.listStyle = "none";

const createItem = images.reduce((string, image) => {
  return (image.innerHTML =
    string +
    `<li><img src="${image.url}" alt="${image.alt}" width='400px'></li>`);
}, "");

galleryById.insertAdjacentHTML("afterbegin", createItem);
