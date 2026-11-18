const galleries = document.querySelectorAll('.gallery-box');

galleries.forEach(function(gallery) {
    gallery.addEventListener('wheel', function(event) {
        event.preventDefault();
        gallery.scrollBy({
            left: event.deltaY * 2.5,
            behavior: 'smooth'
        });
    }, { passive: false });
});
