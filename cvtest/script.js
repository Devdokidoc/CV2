document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const icon = toggleButton.querySelector("i");

    // Définir les thèmes
    const darkTheme = {
        background: '#2d2d2d',
        text: '#f1f1f1',
        violet: '#9b59b6',
        headerBg: 'linear-gradient(90deg, rgba(21,0,38,1) 2%, rgba(0,0,0,1) 11%, rgba(80,0,78,1) 50%, rgba(0,0,0,1) 80%, rgba(12,0,22,1) 94%)', // Couleur dégradée pour dark theme
        sectionBg: '#333',
        linkColor: '#d3a0ff',
        toggleBg: 'linear-gradient(135deg, #4b0082, #000000)' // Dégradé pour le toggle (dark theme)
    };

    const lightTheme = {
        background: '#f1f1f1',
        text: '#333',
        violet: '#003d80',
        headerBg: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(5,5,116,1) 45%, rgba(0,0,0,1) 99%)', // Couleur dégradée pour light theme
        sectionBg: '#e0e0e0',
        linkColor: 'rgb(202, 122, 11)',
        toggleBg: 'linear-gradient(135deg, #ffd700, #ffffff)' // Dégradé pour le toggle (light theme)
    };

    // Fonction pour appliquer le thème
    function applyTheme(theme) {
        document.body.style.backgroundColor = theme.background;
        document.body.style.color = theme.text;
        document.querySelector('header').style.background = theme.headerBg;
        document.querySelector('footer').style.background = theme.headerBg;
        document.querySelectorAll('section').forEach(el => el.style.backgroundColor = theme.sectionBg);
        document.querySelectorAll('.titre').forEach(el => el.style.color = theme.violet);
        document.querySelectorAll('a').forEach(el => el.style.color = theme.linkColor);

        // Changer le background du toggle
        toggleButton.style.background = theme.toggleBg;
    }

    // Fonction pour basculer le thème
    function toggleTheme() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode', !isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        applyTheme(isDarkMode ? darkTheme : lightTheme);

        // Change l'icône selon le thème
        if (isDarkMode) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    // Vérifier et appliquer le thème au chargement de la page
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        applyTheme(darkTheme);
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        document.body.classList.add('light-mode');
        applyTheme(lightTheme);
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    // Ajouter l'événement de basculement au bouton
    toggleButton.addEventListener('click', toggleTheme);
});
