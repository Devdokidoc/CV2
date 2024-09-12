document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');

    // Définir les thèmes
    const darkTheme = {
        background: '#2d2d2d',
        text: '#f1f1f1',
        violet: '#9b59b6',
        headerBg: 'linear-gradient(90deg, rgba(21,0,38,1) 2%, rgba(0,0,0,1) 11%, rgba(80,0,78,1) 50%, rgba(0,0,0,1) 80%, rgba(12,0,22,1) 94%)', // Couleur dégradée pour dark theme
        sectionBg: '#333',
        linkColor: '#d3a0ff'
    };

    const lightTheme = {
        background: '#f1f1f1',
        text: '#333',
        violet: '#003d80',
        headerBg: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(5,5,116,1) 45%, rgba(0,0,0,1) 99%)', // Couleur dégradée pour light theme
        sectionBg: '#e0e0e0',
        linkColor: '#ffb833'
    };

    let isDarkTheme = localStorage.getItem('theme') === 'dark';

    function applyTheme(theme) {
        document.body.style.backgroundColor = theme.background;
        document.body.style.color = theme.text;
        document.querySelector('header').style.background = theme.headerBg; // Utiliser background pour le dégradé
        document.querySelector('footer').style.background = theme.headerBg; // Utiliser background pour le dégradé
        document.querySelectorAll('section').forEach(el => el.style.backgroundColor = theme.sectionBg);
        document.querySelectorAll('.titre').forEach(el => el.style.color = theme.violet);
        document.querySelectorAll('a').forEach(el => el.style.color = theme.linkColor);
    }

    function toggleTheme() {
        isDarkTheme = !isDarkTheme;
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
        applyTheme(isDarkTheme ? darkTheme : lightTheme);
    }

    // Appliquer le thème au chargement de la page
    applyTheme(isDarkTheme ? darkTheme : lightTheme);

    toggleButton.addEventListener('click', toggleTheme);
});