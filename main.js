let search = document.querySelector('.search-box')
let search_icon = document.querySelector("#search-icon")
let header = document.querySelector('header')

window.addEventListener("scroll", () =>{
    header.classList.toggle("active", window.scrollY > 0)
})

search_icon.onclick= () =>{
    search.classList.toggle("active")
}
