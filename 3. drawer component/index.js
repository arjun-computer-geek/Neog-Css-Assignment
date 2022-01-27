const hamburgerBtn = document.querySelector('.hamburger')
const modal = document.querySelector('.modal')

hamburgerBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

window.onclick = (e) => {
    if(e.target == modal){
        modal.style.display = "none";
    }
}