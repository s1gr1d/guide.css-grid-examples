const hideAllSections = () => {
    const allSections = document.querySelectorAll('section')
    allSections.forEach(section => section.style.display = 'none')
}

const showRelevantSections = () => {
    const content = document.querySelector('.content');
    content.style.display = 'block'
}

const showSection = (className) => {
    hideAllSections();
    showRelevantSections();

    const section = document.querySelector(className);
    section.style.display = ''
}

window.addEventListener('DOMContentLoaded', (_e) => {
    showSection('.full-bleed')
});