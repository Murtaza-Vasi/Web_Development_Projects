const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {

    panel.addEventListener('click', e => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        if (panel.classList.contains('active')) {
            panel.classList.remove('active')
        }
    })
}