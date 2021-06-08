const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('ul#gallery');
const galleryById = document.getElementById('gallery');

galleryById.style.display = 'flex';
galleryById.style.alignItems = 'center';
galleryById.style.justifyContent = 'space-between';

const createItem = images.map(image => {
  const liElem = document.createElement('li');
  liElem.style.listStyle = 'none';
  liElem.style.marginRight = '20px';
  liElem.insertAdjacentHTML(
    'afterbegin',
    `<img src="${image.url}" alt="${image.alt}" width='400px'>`
  );
  return liElem;
});
galleryById.append(...createItem);
console.log(gallerById);
