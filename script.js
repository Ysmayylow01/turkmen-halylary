document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const navLinks = document.querySelectorAll('nav a');

    // Select all images
const images = document.querySelectorAll('img');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Her bir baglanyşygyň `active` klassyny aýyr
            navLinks.forEach(link => link.classList.remove('active'));
            // Hasaplanan baglanyşyga `active` klassyny goş
            this.classList.add('active');
        });
    });
    let myList = [
        {
            "image": "images/ahal-teke.jpg",
            "description": "Ahal-teke halysy"
        },
        {
            "image": "images/altyn-summul.jpg",
            "description": "Altyn sümmül halysy"
        },
        {
            "image": "images/atrium.jpg",
            "description": "Artrium"
        },
        {
            "image": "images/artrium2.jpg",
            "description": "Artrium"
        },
        {
            "image": "images/artrium3.jpg",
            "description": "Artrium"
        },
        {
            "image": "images/bas-ay-besir.jpg",
            "description": "Bäş aý beşir"
        },
        {
            "image": "images/bas-ay-besir2.jpg",
            "description": "Bäş aý beşir"
        },
        {
            "image": "images/bas-dogan.jpg",
            "description": "Bäş dogan"
        },
        {
            "image": "images/bas-welayat.jpg",
            "description": "Bäş welaýat"
        },
        {
            "image": "images/besir.jpg",
            "description": "Beşir"
        },
        {
            "image": "images/bir-suprada.jpg",
            "description": "Bir suprada"
        },
        {
            "image": "images/chakmak-gol.jpg",
            "description": "Çakmak göl"
        },
        {
            "image": "images/dagda.jpg",
            "description": "Dagda"
        },
        {
            "image": "images/gabsa.jpg",
            "description": "Gabsa"
        },
        {
            "image": "images/gabsa-gol.jpg",
            "description": "Gabsa göl"
        },
        {
            "image": "images/Galkynys.jpg",
            "description": "Galkynyş"
        },
        {
            "image": "images/Garagum.jpg",
            "description": "Garagum"
        },
        {
            "image": "images/Garassyzlygyn_XX_yyllygy.jpg",
            "description": "Garaşsyzlygyň XX ýyllygy"
        },
        {
            "image": "images/Gusly_gol_350x200.jpg",
            "description": "Guşly göl"
        },
        {
            "image": "images/Gusly_gol_560x550.jpg",
            "description": "Guşly göl"
        },
        {
            "image": "images/Gyrat.jpg",
            "description": "Gyrat"
        },
        {
            "image": "images/Hasyl.jpg",
            "description": "Hasyl"
        },
        {
            "image": "images/Hatarda.jpg",
            "description": "Hatarda"
        }
    ];
    

    myList.forEach(item => {
        const carpetItem = document.createElement('div');
        carpetItem.classList.add('carpet-item');

        // Surat elementi
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.description;

        // Beýany üçin parahraf elementi
        const description = document.createElement('p');
        description.textContent = item.description;

        // Elementleri goşmak
        carpetItem.appendChild(img);
        carpetItem.appendChild(description);
        galleryContainer.appendChild(carpetItem);

        // Basanda surat ulaldyp görkezmek
        carpetItem.addEventListener('click', function() {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            const largeImg = document.createElement('img');
            largeImg.src = item.image;
            largeImg.alt = item.description;
    
            overlay.appendChild(largeImg);
            document.body.appendChild(overlay);
    
            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
        });
        
    });

            let slideIndex = 0;
            showSlides();

            function showSlides() {
                let i;
                const slides = document.getElementsByClassName("mySlides");
                const dots = document.getElementsByClassName("dot");
                
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";  
                }
                slideIndex++;
                if (slideIndex > slides.length) {slideIndex = 1}    
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex - 1].style.display = "block";  
                dots[slideIndex - 1].className += " active";
                setTimeout(showSlides, 5000); // Change image every 5 seconds
            }

            function currentSlide(n) {
                slideIndex = n - 1; // Adjust for 0-based index
                showSlides();
            }

        })
        .catch(error => console.error('Maglumat ýüklenende säwlik boldy:', error));

