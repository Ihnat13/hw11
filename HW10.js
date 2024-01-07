const images = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg']; 

let currentIndex = 0;
const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showImage(index) {
    galleryImage.src = images[index];

    if (index === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

    if (index === images.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
    }
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showImage(currentIndex);
    }
}

showImage(currentIndex);

