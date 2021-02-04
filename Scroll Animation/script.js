const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        if (box.getBoundingClientRect().top < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })

}