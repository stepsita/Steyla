const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle =body.querySelector(".toggle"),
    search8tn =body.querySelector(".search-box"),
    modeswitch = body.querySelector(".toggle-switch"),
    modetext= body.querySelector(".mode-text");


toggle.addEventListener("click", ()=> {
    sidebar.classList.toggle("close")
})

search8tn.addEventListener("click", () =>{
    sidebar.classList.remove("close")
})

