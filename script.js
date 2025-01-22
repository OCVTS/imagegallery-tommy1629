const galleryImages = document.querySelectorAll('#gallery-container img');
const images = Array.from(galleryImages);
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0; 

images.forEach(image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src = image.src; 
        lightbox.classList.add('visible');
    });
});

lightbox.addEventListener('click', () => {
    if (event.target === lightbox) {
    lightbox.classList.remove('visible');
    }
});


document.getElementById('next').addEventListener('click' () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});


document.getElementById('next').addEventListener('click' () => {
    currentIndex = (currentIndex - 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex +1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    } else if(event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    } else if (event.key === 'Escape') {
        lightbox.classList.remove('visible');
        }
})