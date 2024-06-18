document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne toutes les images de services et de produits
    const serviceAndProductImages = document.querySelectorAll('.service-item img, .product-item img');

    // Fonction pour agrandir l'image
    const enlargeImage = (event) => {
        event.target.style.transform = 'scale(1.2)'; // Agrandir l'image de 20%
    };

    // Fonction pour réduire l'image
    const shrinkImage = (event) => {
        event.target.style.transform = 'scale(1)'; // Réduire l'image à sa taille originale
    };

    // Ajoute les écouteurs d'événements pour les images de services et de produits
    serviceAndProductImages.forEach(image => {
        image.addEventListener('mouseover', enlargeImage);
        image.addEventListener('mouseout', shrinkImage);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour mettre à jour la position de l'image de fond en fonction du défilement
    const parallaxEffect = () => {
        const scrollPosition = window.pageYOffset;
        document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };

    // Ajoute l'écouteur d'événement pour le défilement
    window.addEventListener('scroll', parallaxEffect);
});