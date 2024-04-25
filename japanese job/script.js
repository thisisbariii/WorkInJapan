function loadLanguage(lang) {
    fetch(`${lang}.json`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('welcome').textContent = data.welcome;
        document.getElementById('job-listings-title').textContent = data.job_listings_title;
        // Update other text fields similarly
    })
    .catch(error => console.error('Error loading the language file:', error));
}

function fetchJobs() {
    fetch('https://api.example.com/jobs?location=Japan')
    .then(response => response.json())
    .then(data => {
        const listings = document.getElementById('job-listings-results');
        listings.innerHTML = '';
        data.forEach(job => {
            listings.innerHTML += `<div class="job">
                                        <h3>${job.title}</h3>
                                        <p>Location: ${job.location}</p>
                                    </div>`;
        });
    });
}

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: 35.6895, lng: 139.6917 } // Tokyo coordinates
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.btn.btn-primary');
    if (searchButton) {
        searchButton.addEventListener('click', function(event) {
           
        });
    } 
    
});


function populateJobListings(searchTerm) {
    fetch('https://api.example.com/jobs?location=Japan')
    .then(response => response.json())
    .then(data => {
        const listings = document.getElementById('job-listings-results');
        listings.innerHTML = '';
        data.forEach(job => {
            if (job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.location.toLowerCase().includes(searchTerm.toLowerCase())) {
                listings.innerHTML += `<div class="job">
                                            <h3>${job.title}</h3>
                                            <p>Location: ${job.location}</p>
                                        </div>`;
            }
        });

        if (listings.innerHTML === '') {
            listings.innerHTML = '<p>No job listings found.</p>';
        }
    })
    .catch(error => console.error('Failed to fetch jobs:', error));
}

document.getElementById('langSwitchBtn').addEventListener('change', function(e) {
    loadLanguage(e.target.value);
});

document.addEventListener('DOMContentLoaded', function() {
    loadLanguage('en');  // Load English by default
    fetchJobs();  // Fetch jobs on page load
});

// Bookmark functionality
function setupBookmark() {
    let bookmarks = document.getElementsByClassName('bookmark');
    Array.from(bookmarks).forEach(bookmark => {
        bookmark.addEventListener('click', function () {
            let icon = this.querySelector('.fa');
            if (icon.classList.contains("fa-heart-o")) {
                icon.classList.remove("fa-heart-o");
                icon.classList.add("fa-heart");
                this.innerText = "Job saved";
            } else {
                icon.classList.remove("fa-heart");
                icon.classList.add("fa-heart-o");
                this.innerText = "Save Job";
            }
        });
    });
}

// Function to translate the content
function loadLanguage(lang) {
    fetch(`${en}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('welcome').textContent = data.welcome;
            document.getElementById('job-listings-title').textContent = data.job_listings_title;
            // Update other text fields similarly
        })
        .catch(error => console.error('Error loading the language file:', error));
}

function fetchJobs() {
    fetch('https://api.example.com/jobs?location=Japan')
        .then(response => response.json())
        .then(data => {
            const listings = document.getElementById('job-listings-results');
            listings.innerHTML = '';
            data.forEach(job => {
                listings.innerHTML += `<div class="job">
                                        <h3>${job.title}</h3>
                                        <p>Location: ${job.location}</p>
                                    </div>`;
            });
        });
}



function fetchJobs() {
    fetch('https://api.example.com/jobs?location=Japan')
        .then(response => response.json())
        .then(data => {
            const listings = document.getElementById('job-listings-results');
            listings.innerHTML = '';
            data.forEach(job => {
                listings.innerHTML += `<div class="job">
                                        <h3>${job.title}</h3>
                                        <p>Location: ${job.location}</p>
                                    </div>`;
            });
        })
        .catch(error => console.error('Failed to fetch jobs:', error));
}

function setupBookmark() {
    let bookmarks = document.getElementsByClassName('bookmark');
    Array.from(bookmarks).forEach(bookmark => {
        bookmark.addEventListener('click', function () {
            let icon = this.querySelector('.fa');
            if (icon.classList.contains("fa-heart-o")) {
                icon.classList.remove("fa-heart-o");
                icon.classList.add("fa-heart");
                this.innerText = "Job saved";
            } else {
                icon.classList.remove("fa-heart");
                icon.classList.add("fa-heart-o");
                this.innerText = "Save Job";
            }
        });
    });
}

function translateContent(language) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    const translations = {
        'en': {
            'Home': 'Home',
            'About us': 'About us',
            'All Jobs': 'All Jobs',
            'Interships': 'Internships',
            'Govt. Jobs': 'Govt. Jobs',
            'Contact us': 'Contact us'
        },
        'es': {
            'Home': 'Inicio',
            'About us': 'Sobre nosotros',
            'All Jobs': 'Todos los trabajos',
            'Interships': 'Prácticas',
            'Govt. Jobs': 'Trabajos gubernamentales',
            'Contact us': 'Contáctanos'
        },
        'ja': {
            'Home': 'ホーム',
            'About us': '私たちについて',
            'All Jobs': 'すべての仕事',
            'Interships': 'インターンシップ',
            'Govt. Jobs': '政府の仕事',
            'Contact us': 'お問い合わせ',
          'About japan culture'   :'日本文化について '
        }
        // Add more languages as needed
    };

    if (translations[language]) {
        elementsToTranslate.forEach(element => {
            const originalText = element.dataset.translate;
            const translatedText = translations[language][originalText];
            if (translatedText) {
                element.textContent = translatedText;
            } else {
                element.textContent = originalText;
            }
        });
    } else {
        elementsToTranslate.forEach(element => {
            const originalText = element.dataset.translate;
            element.textContent = translations['en'][originalText] || originalText;
        });
    }
}

document.getElementById('langSwitchBtn').addEventListener('click', function () {
    const selectedLanguage = prompt('Please enter your preferred language code (e.g., en for English, es for Spanish, ja for Japanese):');
    if (selectedLanguage) {
        translateContent(selectedLanguage);
    }
});

// Initially translate the content based on the default language (English)
translateContent('en');

// Call fetchJobs function to fetch jobs on page load
fetchJobs();

// Call setupBookmark function to initialize bookmark functionality
setupBookmark();
