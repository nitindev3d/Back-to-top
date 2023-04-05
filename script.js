
// To create dummy data 
(() => {
    const container = document.querySelector('.container')
    const item = document.querySelector('.item')
    const lorem = item.innerHTML 

    for (let i = 0; i < 20; i++) {
        let element = document.createElement('div')
        element.setAttribute("class","item")
        element.innerHTML = lorem
        container.appendChild(element)
    }
})()

const heading = document.querySelector('.heading')
// to check heading visibility
function headingVisibility() {
    
    let bounds = heading.getBoundingClientRect()
    if (bounds.bottom < 0) {
        return false
    }
    return true
}
const topButton = document.querySelector('.top')


function update() {
    if (headingVisibility()) {
        topButton.style.display = 'none'
    }
    else {
        topButton.style.display = 'inline'
    }
}
function backToTop() {
    heading.scrollIntoView({
        behavior: "smooth"
    })
}

window.addEventListener("scroll",update)
topButton.addEventListener("click",backToTop)
