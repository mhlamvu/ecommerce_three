const track = document.getElementById('image-track')

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX
}
window.onmouseup = e => {
    track.dataset.mouseDownAt = "0"
    track.dataset.prevPercentage = track.dataset.percentage
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return


    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2,
        percentage = (mouseDelta / maxDelta) * -100,
        nextPercentage = Math.min(0, Math.max((parseFloat(track.dataset.prevPercentage) + percentage), -100))

    track.dataset.percentage = nextPercentage
    track.animate({
        transform : `translate(${nextPercentage}%, -50%)`,
    }, { duration: 1200, fill: 'forwards'})


    for(const image of track.getElementsByClassName('image')) {
        image.animate({
            objectPosition : `${nextPercentage + 100}% 50%`,
        }, { duration: 1200, fill: 'forwards'})
    }
}

const
    menuIcon = document.getElementById('menu-icon'),
    slideouteMenu = document.getElementById('slideout-menu')
//     searchIcon = document.getElementById('search-icon'),
//     searchBox = document.getElementById('searchbox')

// searchIcon.addEventListener('click', () => {
//     if(searchBox.style.top == '72px') {
//         searchBox.style.top = '24px'
//         searchBox.style.pointerEvents - 'none'
//     }else {
//         searchBox.style.top = '72px'
//         searchBox.style.pointerEvents = 'auto'
//     }
// })
menuIcon.addEventListener('click', () => {
    if(slideouteMenu.style.opacity == '1') {
        slideouteMenu.style.opacity = '0'
        slideouteMenu.style.pointerEvents - 'none'
    }else {
        slideouteMenu.style.opacity = '1'
        slideouteMenu.style.pointerEvents = 'auto'
    }
})
