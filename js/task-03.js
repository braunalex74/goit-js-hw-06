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

// const imageList = document.querySelector(".gallery");
// const makeImages = (options) => {
//   return options.map((option) => {
//     const imageListEl = document.createElement("img");
//     imageListEl.src = option.url;
//     imageListEl.alt = option.alt;
//     imageListEl.width = 700;
//     return imageListEl;
//   });
// };
// const elements = makeImages(images);
// imageList.append(...elements);

const makeImagesMarkup = (image) => {
  const { url, alt } = image;
  return `
  <li><img src = ${image.url} alt = '${image.alt}' width = 320></li>
  `;
};

const imageList = document.querySelector(".gallery");

const makeImagesGallery = images.map(makeImagesMarkup).join("");
imageList.insertAdjacentHTML("beforeend", makeImagesGallery);
console.log(makeImagesMarkupEl);
