document.addEventListener('DOMContentLoaded', () => {
    const itemsWithSubmenus = document.querySelectorAll('.list__item--click');

    itemsWithSubmenus.forEach(item => {
        item.addEventListener('click', (event) => {
            event.stopPropagation();
            
            // Cerrar otros submenús y revertir las flechas
            itemsWithSubmenus.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('list__item--active');
                    const arrow = otherItem.querySelector('.list__arrow');
                    if (arrow) {
                        arrow.classList.remove('list__arrow--rotate');
                    }
                }
            });

            // Alternar el submenú del ítem clicado y la flecha
            const arrow = item.querySelector('.list__arrow');
            item.classList.toggle('list__item--active');
            if (arrow) {
                arrow.classList.toggle('list__arrow--rotate');
            }
        });
    });

    // Cerrar submenús al hacer clic fuera
    document.addEventListener('click', () => {
        itemsWithSubmenus.forEach(item => {
            item.classList.remove('list__item--active');
            const arrow = item.querySelector('.list__arrow');
            if (arrow) {
                arrow.classList.remove('list__arrow--rotate');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Configura la duración de la lluvia de pétalos
    const duration = 10000; // 10 segundos

    // Número de pétalos
    const numPetals = 500;

    // Contenedor de los pétalos
    const petalsContainer = document.getElementById('petals-container');

    // Función para crear un pétalo
    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petals';
        
        // Selecciona una imagen aleatoria para el pétalo
        const petalImages = [
            'images/petalo1.png', 
            'images/petalo2.png', 
            'images/petalo3.png',
            'images/petalo4.png',
            'images/petalo5.png',
            'images/petalo6.png',
        ];
        const randomImage = petalImages[Math.floor(Math.random() * petalImages.length)];
        petal.style.backgroundImage = `url(${randomImage})`;

        // Posiciona el pétalo en una posición aleatoria
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${Math.random() * (duration / 2) + (duration / 2)}ms`; // Ajusta el tiempo de animación

        petalsContainer.appendChild(petal);

        // Elimina el pétalo después de que termine la animación
        petal.addEventListener('animationend', () => {
            petalsContainer.removeChild(petal);
        });
    }

    // Crea los pétalos durante los primeros 10 segundos
    const startTime = Date.now();
    function generatePetals() {
        if (Date.now() - startTime < duration) {
            createPetal();
            setTimeout(generatePetals, 200); // Ajusta la frecuencia de creación de pétalos
        }
    }

    generatePetals();
});

