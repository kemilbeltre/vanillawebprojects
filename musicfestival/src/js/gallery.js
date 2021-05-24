document.addEventListener('DOMContentLoaded', function() {
    createGallery();
});

function createGallery() {
    const gallery = document.querySelector('.gallery-img');

    for( let i = 1; i <= 12; i++ ) {
        const image = document.createElement('IMG');
        image.src = `build/img/thumb/${i}.webp`;
        image.dataset.imageId = i;

        image.onclick = showImage;

        const list = document.createElement('LI');
        list.appendChild(image);

        gallery.appendChild(list);  
    }
}

function showImage(event) {
    const id = parseInt(event.target.dataset.imageId);

    // Generate image
    const image = document.createElement('IMG');
    image.src = `build/img/bigger/${id}.webp`;
    
    const overlay = document.createElement('DIV');
    overlay.appendChild(image);
    overlay.classList.add('overlay');

    // Close when in whatever part of the click
    overlay.onclick = function() {
        overlay.remove();
    }

    // Close button
    const closeImg = document.createElement('P');
    closeImg.textContent = 'X';
    closeImg.classList.add('btn-close');

    // setOnclick to close
    closeImg.onclick = function() {
        overlay.remove();
    }

    overlay.appendChild(closeImg);

    // Show HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('body-fixed');
}