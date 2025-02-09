let search = document.querySelector('.search-box')
let search_icon = document.querySelector("#search-icon")
let header = document.querySelector('header')
let menu_icon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

window.addEventListener("scroll", () =>{
    header.classList.toggle("active", window.scrollY > 0)
})
window.onscroll = () =>{
   navbar.classList.remove("active")
    search.classList.remove("active")
}

search_icon.onclick= () =>{
    search.classList.toggle("active")
    navbar.classList.remove("active")
}
menu_icon.onclick = ()=>{
    navbar.classList.toggle("active")
    search.classList.remove("active")
}
