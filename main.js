// Au chargement de la page :
document.addEventListener('DOMContentLoaded', () => {
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#7C3AED',
          secondary: '#10B981',
          dark: '#1F2937'
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'fade-in': 'fadeIn 0.5s ease-out'
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' }
          },
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' }
          }
        }
      }
    }
  }
})

// Menu mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Animation des barres de compétences
const skillBars = document.querySelectorAll('.skill-bar');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.style.width;
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => observer.observe(bar));

// Smooth scroll pour les liens
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Configuration du CV
const CV_PATH = 'Adonia_DOSSO_CV.pdf';
const CV_NAME = 'Adonia_DOSSO_CV.pdf';

// Fonction de téléchargement
function downloadCV() {
  // Création d'un lien temporaire
  const link = document.createElement('a');
  link.href = CV_PATH;
  link.download = CV_NAME;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Suivi analytique (optionnel)
  //alert('CV téléchargé');
  // Vous pouvez ajouter Google Analytics ou autre ici
}

// Initialisation des boutons
function setupCVDownload() {
  const downloadlinks = [
    document.getElementById('cv_nav'),
    document.getElementById('cv_accueil'),
    document.getElementById('cv'),
  ];

  downloadlinks.forEach(link => {
    if (link) {
      link.addEventListener('click', downloadCV);
    }
  });
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', setupCVDownload);