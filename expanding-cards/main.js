const cards = document.querySelectorAll('.card');

cards.forEach(panel => {
    console.log(panel);
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    cards.forEach(panel => {
        panel.classList.remove('active')
    })
}