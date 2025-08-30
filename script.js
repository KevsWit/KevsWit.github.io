// Toggle móvil (sin cambios)
const sideNav = document.getElementById('sideNav');
document.querySelector('.menu-toggle')
    .addEventListener('click', () => sideNav.classList.toggle('open'));

// Cambio de idioma
const btnEs = document.getElementById('btnEs');
const btnEn = document.getElementById('btnEn');

function setLanguage(lang) {
    // Cambia textos
    document.querySelectorAll('[data-es][data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // Cambia href de elementos con data-*-href (para el CV)
    document.querySelectorAll('[data-es-href][data-en-href]').forEach(el => {
        el.setAttribute('href', el.getAttribute(`data-${lang}-href`));
    });

    // Estado visual de banderas
    btnEs.classList.toggle('active', lang === 'es');
    btnEn.classList.toggle('active', lang === 'en');
}

btnEs.addEventListener('click', () => setLanguage('es'));
btnEn.addEventListener('click', () => setLanguage('en'));
setLanguage('es');