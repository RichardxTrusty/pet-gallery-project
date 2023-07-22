const images = [
  {
    url: "./assets/images/Photo-gallery-1.jpg",
  },
  {
    url: "./assets/images/Photo-gallery-2.jpg",
  },
  {
    url: "./assets/images/Photo-gallery-3.jpg",
  },
  {
    url: "./assets/images/Photo-gallery-4.jpg",
  },
  {
    url: "./assets/images/Photo-gallery-5.jpg",
  },
  {
    url: "./assets/images/Photo-gallery-6.jpg",
  },
  {
    url: "./assets/images/Photo-gallery-6.jpg",
  },
  {
    url: "./assets/images/Photo-gallery-6.jpg",
  },
  {
    url: "./assets/images/Photo-gallery-6.jpg",
  },

  {
    url: "./assets/images/Photo-gallery-6.jpg",
  },
  {
    url: "./assets/images/Photo-gallery-6.jpg",
  },
];

// const URL = "https://api.thedogapi.com/v1/images/search?limit=10 GET";
// function addGallery() {
//   axios.get(URL + "XuF0yCht6/?api_key=" + apiKey).then((response) => {
//     console.log(response);
//     displayGallery(response.data);
//   });
// }

// const URL = "https://api.thecatapi.com/v1/images/search?limit=10%20GET";
// function addGallery() {
//   axios.get(URL + "62f/?api_key=" + apiKey).then((response) => {
//     console.log(response);
//     displayGallery(response.data);
//   });
// }

const showGallery = () => {
  images.forEach((image) => {
    // create
    createImageContainer(image.url);
  });
};

const createImageContainer = (imgUrl) => {
  /**
	 * 
	 * <div class="photo-gallery__item">
						<img
							src="./assets/images/Photo-gallery-1.jpg"
							alt="concert goers with smoke and lasers"
							class="photo-gallery__image"
						/>
					</div>
	 * 
	 */
  let parentEl = document.querySelector(".photo-gallery");

  let photoGalleryItem = document.createElement("div");
  photoGalleryItem.classList.add("photo-gallery__item");

  let img = document.createElement("img");
  img.classList.add("photo-gallery__image");
  img.src = imgUrl;
  photoGalleryItem.appendChild(img);
  parentEl.appendChild(photoGalleryItem);
};

// const getPetImages = () => {
// Make API Call using Axios
//   axios
//     .get("https://api.thedogapi.com/v1/images/search?limit=10 GET")
//     .then((response) => {
//       // store date images 
//       images = response.data;
//       // Then call showGallery
//       showGallery();
//     })
//     .catch((e) => console.error(e));
// };
axios
  .all([
    axios.get("https://api.thedogapi.com/v1/images/search?limit=10 GET"),
    axios.get("https://api.thecatapi.com/v1/images/search?limit=10 GET"),
  ])
  .then((response) => {
    images = response[0].data;
    images = images.concat(response[1].data);
    // Then call showGallery();
    showGallery();
  })
  .catch((e) => console.error(e));

// Onload show gallery
// Get all the images from teh api
// Then call showGallery()
getPetImages();

// Challenge
// Start working on a new branch. Create a new branch feature/add-axios-api-integration. Please note we should not work on main branch
// Use the following API
// https://api.thedogapi.com/v1/images/search?limit=10 GET
// https://api.thecatapi.com/v1/images/search?limit=10 GET
// Use Axios to fetch the images of pet
// Show on the front end using functions
// Stretch : Use API key to fetch more than 10 images
// live_kT9IUM097S8mkNWl8OxZ4onGT2LTWhVh78WXjCTZE5mRBR5Fu1LCjw9i1zDlDThR
//        Header
// { 'x-api-key' : 'live_kT9IUM097S8mkNWl8OxZ4onGT2LTWhVh78WXjCTZE5mRBR5Fu1LCjw9i1zDlDThR' }
// Or as a Query Parameter
// https://api.thecatapi.com/v1/images/search?limit=100&api_key=live_kT9IUM097S8mkNWl8OxZ4onGT2LTWhVh78WXjCTZE5mRBR5Fu1LCjw9i1zDlDThR

// https://api.thedogapi.com/v1/images/search?limit=100&api_key=live_kT9IUM097S8mkNWl8OxZ4onGT2LTWhVh78WXjCTZE5mRBR5Fu1LCjw9i1zDlDThR
