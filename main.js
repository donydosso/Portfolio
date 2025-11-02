    // Menu mobile
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Smooth scroll pour les liens
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
        
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Animation des barres de compétences
    let skillsAnimated = false;
    function animateSkills() {
      if (!skillsAnimated) {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
        skillsAnimated = true;
      }
    }

    // Observer pour animer les éléments lorsqu'ils deviennent visibles
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          if (entry.target.id === 'competences') {
            animateSkills();
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    const messageModal = document.getElementById('message-modal');
    const messageModalTitle = document.getElementById('message-modal-title');
    const messageModalText = document.getElementById('message-modal-text');
    const closeMessageModal = document.getElementById('close-message-modal');

    function showMessageModal(title, message) {
      messageModalTitle.textContent = title;
      messageModalText.textContent = message;
      messageModal.classList.add('active');
      closeMessageModal.focus();
    }

    closeMessageModal.addEventListener('click', () => {
      messageModal.classList.remove('active');
    });

    messageModal.addEventListener('click', (e) => {
      if (e.target === messageModal) {
        messageModal.classList.remove('active');
      }
    });

    // Modale des projets
    const projectModal = document.getElementById('project-modal');
    const closeModal = document.getElementById('close-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Données des projets
    const projects = {
      1: {
        title: "Analyse de Relevés Bancaires",
        description: "Application web d'automatisation des relevés bancaires permettant l'extraction de transactions PDF et leur classification en tableaux Excel.",
        details: `
          <h3 class="text-2xl font-bold mb-4">Détails du projet</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="font-bold mb-2">Technologies utilisées</h4>
              <ul class="list-disc list-inside space-y-2 mb-6">
                <li>Python (PDFMiner, Pandas)</li>
                <li>Golang (Gin) pour l'API backend</li>
                <li>JavaScript et Chart.js pour le frontend</li>
              </ul>
              
              <h4 class="font-bold mb-2">Fonctionnalités clés</h4>
              <ul class="list-disc list-inside space-y-2">
                <li>Extraction intelligente des données depuis des PDF</li>
                <li>Classification automatique des transactions</li>
                <li>Export vers Excel formaté</li>
                <li>Visualisation des données financières</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-2">Résultats</h4>
              <ul class="list-disc list-inside space-y-2 mb-6">
                <li>Jusqu'à 80% de gain de temps mensuel</li>
                <li>Réduction des erreurs manuelles</li>
                <li>Standardisation des processus comptables</li>
              </ul>
              
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Statut</h4>
                <p class="mb-2">Projet personnel – Démo disponible sur demande</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">Non déployé</span>
                  <span class="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">Code sur demande</span>
                </div>
              </div>
            </div>
          </div>
        `,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1511&q=80"
      },
      2: {
        title: "Marketplace Immobilier Abidjan",
        description: "Plateforme d'annonces immobilières avec messagerie intégrée et filtrage dynamique pour le marché ivoirien.",
        details: `
          <h3 class="text-2xl font-bold mb-4">Détails du projet</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="font-bold mb-2">Technologies utilisées</h4>
              <ul class="list-disc list-inside space-y-2 mb-6">
                <li>Golang pour le backend</li>
                <li>SQLite pour la base de données</li>
                <li>Tailwind CSS pour le frontend</li>
              </ul>
              
              <h4 class="font-bold mb-2">Fonctionnalités clés</h4>
              <ul class="list-disc list-inside space-y-2">
                <li>Recherche avancée avec filtres géolocalisés</li>
                <li>Messagerie sécurisée entre parties</li>
                <li>Gestion multi-profils (admin, proprio, agent, locataire)</li>
                <li>Optimisé pour le marché local</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-2">Objectifs</h4>
              <ul class="list-disc list-inside space-y-2 mb-6">
                <li>Moderniser le marché immobilier ivoirien</li>
                <li>Faciliter les transactions entre particuliers</li>
                <li>Centraliser l'offre immobilière à Abidjan</li>
              </ul>
              
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Statut</h4>
                <p class="mb-2">Projet personnel – En développement</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">Testé localement</span>
                </div>
              </div>
            </div>
          </div>
        `,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80"
      },
      3: {
        title: "Analyse Mobile Money MTN CI",
        description: "Étude sur l'adoption du Mobile Money en Côte d'Ivoire avec segmentation des utilisateurs et modélisation.",
        details: `
          <h3 class="text-2xl font-bold mb-4">Détails du projet</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="font-bold mb-2">Technologies utilisées</h4>
              <ul class="list-disc list-inside space-y-2 mb-6">
                <li>Python (Pandas, NumPy)</li>
                <li>Power BI pour la visualisation</li>
                <li>Méthodes statistiques avancées</li>
              </ul>
              
              <h4 class="font-bold mb-2">Méthodologie</h4>
              <ul class="list-disc list-inside space-y-2">
                <li>Analyse de 9000+ transactions</li>
                <li>Segmentation CAH (Classification Ascendante Hiérarchique)</li>
                <li>Modélisation Logistique de l'adoption</li>
                <li>Visualisations Power BI interactives</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-2">Résultats</h4>
              <ul class="list-disc list-inside space-y-2 mb-6">
                <li>Identification de 3 profils utilisateurs distincts</li>
                <li>Facteurs clés d'adoption identifiés</li>
                <li>Recommandations stratégiques pour MTN CI</li>
              </ul>
              
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Statut</h4>
                <p class="mb-2">Projet académique – Mémoire de fin d'études</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">Rapport disponible</span>
                </div>
              </div>
            </div>
          </div>
        `,
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1470&q=80"
      },
      4: {
        title: "Numerisk — Gestion de Tickets",
        description: "Application web pour la gestion des demandes de dépannage technique avec rôles différenciés et reporting.",
        details: `
          <h3 class="text-2xl font-bold mb-4">Détails du projet</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="font-bold mb-2">Technologies utilisées</h4>
              <ul class="list-disc list-inside space-y-2 mb-6">
                <li>Golang (Gin framework)</li>
                <li>SQLite pour la base de données</li>
                <li>Tailwind CSS pour l'interface</li>
              </ul>
              
              <h4 class="font-bold mb-2">Fonctionnalités clés</h4>
              <ul class="list-disc list-inside space-y-2">
                <li>Création et suivi des tickets avec priorités</li>
                <li>Interfaces personnalisées (Admin, Technicien, Client)</li>
                <li>Dashboards analytiques avec KPI</li>
                <li>Solution légère et performante</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-2">Objectifs</h4>
              <ul class="list-disc list-inside space-y-2 mb-6">
                <li>Digitaliser la gestion des demandes techniques</li>
                <li>Réduire de 30% le temps de traitement des tickets</li>
                <li>Améliorer la traçabilité des interventions</li>
              </ul>
              
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Statut</h4>
                <p class="mb-2">Projet professionnel – Démo interne disponible</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">En développement</span>
                </div>
              </div>
            </div>
          </div>
        `,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80"
      },
      5: {
        title: "Niveau de Vie des Ménages",
        description: "Étude socio-économique sur les conditions de vie des ménages ivoiriens analysant 16 indicateurs clés.",
        details: `
          <h3 class="text-2xl font-bold mb-4">Détails du projet</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="font-bold mb-2">Méthodologie</h4>
              <ul class="list-disc list-inside space-y-2 mb-6">
                <li>Analyse de 250 ménages</li>
                <li>16 indicateurs socio-économiques</li>
                <li>Classification en 4 catégories de revenus</li>
                <li>Tests statistiques (chi2) significatifs</li>
              </ul>
              
              <h4 class="font-bold mb-2">Outils utilisés</h4>
              <ul class="list-disc list-inside space-y-2">
                <li>STATA pour l'analyse statistique</li>
                <li>Excel pour le traitement initial</li>
                <li>Power BI pour les visualisations interactives</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-2">Principaux résultats</h4>
              <ul class="list-disc list-inside space-y-2 mb-6">
                <li>66.8% classe moyenne (1562500 FCFA/mois)</li>
                <li>Lien fort éducation-revenu (p < 0.001)</li>
                <li>48.6% seulement ont accès à l'eau potable</li>
                <li>Commerce dominant chez les ménages aisés</li>
              </ul>
              
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Statut</h4>
                <p class="mb-2">Projet universitaire – Analyse socio-économique</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">Rapport complet</span>
                </div>
              </div>
            </div>
          </div>
        `,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1470&q=80"
      },
      6: {
        title: "Enquête Satisfaction Clients Yango",
        description: "Étude complète sur la satisfaction des utilisateurs des services de transport Yango en Côte d'Ivoire.",
        details: `
          <h3 class="text-2xl font-bold mb-4">Détails du projet</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="font-bold mb-2">Méthodologie</h4>
              <ul class="list-disc list-inside space-y-2 mb-6">
                <li>Échantillon de 70 clients</li>
                <li>Taux de réponse: 98,57%</li>
                <li>Analyse des profils utilisateurs</li>
                <li>Tests statistiques (chi2) pour valider les hypothèses</li>
              </ul>
              
              <h4 class="font-bold mb-2">Outils utilisés</h4>
              <ul class="list-disc list-inside space-y-2">
                <li>SPHINX pour l'enquête</li>
                <li>STATA pour l'analyse</li>
                <li>Excel pour les tableaux croisés</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-2">Résultats clés</h4>
              <ul class="list-disc list-inside space-y-2 mb-6">
                <li>89,9% des utilisateurs sont des étudiants</li>
                <li>81,2% n'ont jamais eu de mauvaise expérience</li>
                <li>46,4% recommanderaient le service</li>
                <li>Principaux motifs d'utilisation: rapidité et sécurité</li>
              </ul>
              
              <div class="bg-gray-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Statut</h4>
                <p class="mb-2">Projet universitaire – Juillet 2022</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">Rapport complet</span>
                </div>
              </div>
            </div>
          </div>
        `,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1471&q=80"
      },
      7: {
  title: "DEX - Data Exchange Platform",
  description: "Plateforme centralisée de saisie et d'analyse de données pour NSIA Vie avec reporting temps réel et gestion multi-pôles.",
  details: `
    <h3 class="text-2xl font-bold mb-4">Détails du projet</h3>
    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <h4 class="font-bold mb-2">Architecture & Technologies</h4>
        <ul class="list-disc list-inside space-y-2 mb-6">
          <li><strong>Backend:</strong> Go (Golang) avec architecture RESTful</li>
          <li><strong>Base de données:</strong> MySQL avec schéma relationnel</li>
          <li><strong>Frontend:</strong> Alpine.js + Tailwind CSS</li>
          <li><strong>Authentification:</strong> JWT avec cookies HttpOnly</li>
          <li><strong>Visualisation:</strong> Chart.js pour les dashboards</li>
        </ul>
        
        <h4 class="font-bold mb-2">Fonctionnalités principales</h4>
        <ul class="list-disc list-inside space-y-2">
          <li>Saisie centralisée pour 8 pôles opérationnels</li>
          <li>Dashboards temps réel avec filtres avancés</li>
          <li>Gestion des utilisateurs et contrôle d'accès RBAC</li>
          <li>Système de double saisie pour les stocks</li>
          <li>Validation métier côté serveur</li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-2">Challenges techniques relevés</h4>
        <ul class="list-disc list-inside space-y-2 mb-6">
          <li>Architecture sécurisée avec middleware d'authentification</li>
          <li>API générique pour CRUD dynamique avec whitelist</li>
          <li>Optimisation des performances des requêtes d'agrégation</li>
          <li>Gestion d'état côté client avec Alpine.js</li>
          <li>Déploiement avec Nginx reverse proxy</li>
        </ul>
        
        <h4 class="font-bold mb-2">Sécurité implémentée</h4>
        <ul class="list-disc list-inside space-y-2 mb-6">
          <li>Hachage bcrypt pour les mots de passe</li>
          <li>JWT stockés en cookies HttpOnly</li>
          <li>Validation côté serveur de toutes les données</li>
          <li>Protection CSRF avec SameSite Lax</li>
          <li>Contrôle d'accès basé sur les rôles</li>
        </ul>
        
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-bold mb-2">Statut</h4>
          <p class="mb-2">Projet professionnel – En production chez NSIA Vie</p>
          <div class="flex flex-wrap gap-2">
            <span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">En production</span>
            <span class="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">Code propriétaire</span>
            <span class="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">Architecture complète</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <h4 class="font-bold mb-3 text-lg">Impact métier</h4>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div>
          <div class="text-2xl font-bold text-primary">8</div>
          <div class="text-sm text-gray-600">Pôles centralisés</div>
        </div>
        <div>
          <div class="text-2xl font-bold text-primary">13</div>
          <div class="text-sm text-gray-600">Tables optimisées</div>
        </div>
        <div>
          <div class="text-2xl font-bold text-primary">Temps réel</div>
          <div class="text-sm text-gray-600">Reporting</div>
        </div>
        <div>
          <div class="text-2xl font-bold text-primary">100%</div>
          <div class="text-sm text-gray-600">Validation données</div>
        </div>
      </div>
    </div>
  `,
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80"
}
    };

    // Gestion des clics sur les boutons "Voir plus" des projets
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('project-details-btn') || e.target.closest('.project-details-btn')) {
        const btn = e.target.classList.contains('project-details-btn') ? e.target : e.target.closest('.project-details-btn');
        const projectId = btn.getAttribute('data-project');
        const project = projects[projectId];
        
        if (project) {
          modalContent.innerHTML = `
            <div class="relative">
              <div class="mb-6">
                <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-lg">
              </div>
              <h2 id="project-modal-title" class="text-3xl font-bold mb-4">${project.title}</h2>
              <p class="text-gray-600 mb-6">${project.description}</p>
              ${project.details}
            </div>
          `;
          
          projectModal.classList.add('active');
          projectModal.focus();
        }
      }
    });

    // Fermeture de la modale des projets
    closeModal.addEventListener('click', function() {
      projectModal.classList.remove('active');
    });

    projectModal.addEventListener('click', function(e) {
      if (e.target === projectModal) {
        projectModal.classList.remove('active');
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        projectModal.classList.remove('active');
      }
      if (e.key === 'Escape' && messageModal.classList.contains('active')) {
        messageModal.classList.remove('active');
      }
    });

    // Logique de filtrage des projets
    const filterButtons = document.querySelectorAll('.filter-btn');
    // Sélectionne les wrappers des cartes de projet
    const projectCardWrappers = document.querySelectorAll('.project-card-wrapper'); 
    const loadMoreBtn = document.getElementById('load-more-projects');
    const projectsContainer = document.getElementById('projects-container');
    let currentFilter = 'all'; // Filtre par défaut

    // Fonction pour afficher/masquer les projets en fonction du filtre
    function filterProjects(filter) {
        currentFilter = filter;
        let visibleCount = 0;

        projectCardWrappers.forEach(wrapper => {
            const categories = wrapper.getAttribute('data-category').split(' ');
            const card = wrapper.querySelector('.project-card'); // La carte réelle à l'intérieur du wrapper

            if (filter === 'all' || categories.includes(filter)) {
                // Afficher le wrapper et la carte, appliquer l'animation
                wrapper.style.display = 'block';
                card.classList.add('animate-fade-in');
                visibleCount++;
            } else {
                // Masquer le wrapper et retirer l'animation
                wrapper.style.display = 'none';
                card.classList.remove('animate-fade-in');
            }
        });

        // Ajuster les colonnes de la grille si peu de projets sont visibles pour une meilleure esthétique
        if (visibleCount === 1) {
            projectsContainer.style.gridTemplateColumns = 'repeat(1, minmax(0, 1fr))';
        } else if (visibleCount === 2) {
            projectsContainer.style.gridTemplateColumns = 'repeat(2, minmax(0, 1fr))';
        } else {
            // Revenir à la mise en page par défaut (3 colonnes pour les grands écrans)
            projectsContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))'; 
        }

        // Gérer la visibilité du bouton "Voir plus de projets"
        const initiallyHiddenProjects = Array.from(document.querySelectorAll('.project-card-wrapper.hidden-project'));
        const remainingHiddenForCurrentFilter = initiallyHiddenProjects.filter(hp => {
            const categories = hp.getAttribute('data-category').split(' ');
            return categories.includes(currentFilter) || currentFilter === 'all';
        });

        if (remainingHiddenForCurrentFilter.length > 0) {
            loadMoreBtn.style.display = 'inline-flex';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }

    // Écouteurs d'événements pour les boutons de filtre
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Supprimer la classe active de tous les boutons
            filterButtons.forEach(btn => {
                btn.classList.remove('active-filter', 'bg-primary', 'text-white');
                btn.classList.add('border-primary', 'text-primary', 'hover:bg-primary', 'hover:text-white');
            });

            // Ajouter la classe active au bouton cliqué
            this.classList.add('active-filter', 'bg-primary', 'text-white');
            this.classList.remove('border-primary', 'text-primary', 'hover:bg-primary', 'hover:text-white');

            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

    // Modification du gestionnaire d'événements pour le bouton "Voir plus de projets"
    loadMoreBtn.addEventListener('click', function() {
        const initiallyHiddenProjects = document.querySelectorAll('.project-card-wrapper.hidden-project');
        
        initiallyHiddenProjects.forEach(projectWrapper => {
            const categories = projectWrapper.getAttribute('data-category').split(' ');
            const card = projectWrapper.querySelector('.project-card');

            // Afficher uniquement si cela correspond au filtre actuel
            if (currentFilter === 'all' || categories.includes(currentFilter)) {
                projectWrapper.classList.remove('hidden-project');
                projectWrapper.style.display = 'block'; // S'assurer que le wrapper est visible
                card.classList.add('animate-fade-in');
            }
        });

        // Vérifier à nouveau si tous les projets du filtre actuel sont affichés
        const remainingHiddenForCurrentFilter = Array.from(document.querySelectorAll('.project-card-wrapper.hidden-project')).filter(hp => {
            const categories = hp.getAttribute('data-category').split(' ');
            return categories.includes(currentFilter) || currentFilter === 'all';
        });

        if (remainingHiddenForCurrentFilter.length === 0) {
            this.style.display = 'none';
        }
    });

    // Appel initial pour configurer la vue par défaut et masquer les projets supplémentaires
    // Assurez-vous que le bouton "Tous" est actif au chargement
    document.querySelector('.filter-btn[data-filter="all"]').click(); 