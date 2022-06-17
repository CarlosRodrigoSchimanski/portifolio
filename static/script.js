const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () =>{
    menuMobile.classList.contains('bi-distribute-vertical')
    ? menuMobile.classList.replace('bi-distribute-vertical', 'bi-x-circle')
    : menuMobile.classList.replace('bi-x-circle', 'bi-distribute-vertical');
    body.classList.toggle('menu-nav-active');
});

const navItem = document.querySelectorAll('.nav-item')
navItem.forEach(item => {
    item.addEventListener("click", () =>{
        if (body.classList.contains('menu-nav-active')) {
            body.classList.remove('menu-nav-active')
            menuMobile.classList.replace('bi-x-circle', 'bi-distribute-vertical');
        }
    })
})

const itemAnime = document.querySelectorAll("[data-anime]");
const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.90;
    itemAnime.forEach(element => {
        if (windowTop > element.offsetTop){
            element.classList.add('animate');
        }
    })
}

animeScroll();

window.addEventListener('scroll', ()=>{
    animeScroll();
})