// JavaScript for Image Gallery Functionality

document.addEventListener('DOMContentLoaded', () => {
    const featuredImage = document.querySelector('figure img');
    const figCaption = document.querySelector('figure figcaption');
    const thumbnails = document.querySelectorAll('ul li img');

    // Image data for the gallery (each object has the image source and caption)
    const images = [
        { src: 'images/flowers-pink-large.jpg', caption: 'Pink Flowers' },
        { src: 'images/flowers-purple-large.jpg', caption: 'Purple Flowers' },
        { src: 'images/flowers-red-large.jpg', caption: 'Red Flowers' },
        { src: 'images/flowers-white-large.jpg', caption: 'White Flowers' },
        { src: 'images/flowers-yellow-large.jpg', caption: 'Yellow Flowers' }
    ];

    // Function to update the featured image and caption
    function updateFeaturedImage(index) {
        featuredImage.src = images[index].src;
        figCaption.textContent = images[index].caption;
        thumbnails.forEach((thumb, i) => {
            thumb.style.filter = i === index ? 'none' : 'grayscale(100%)';
        });
    }

    // Add event listeners to thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            updateFeaturedImage(index);
        });
    });

    // Initialize first image as featured and apply grayscale to others
    updateFeaturedImage(0);
});
