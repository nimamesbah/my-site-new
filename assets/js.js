const skillLists = document.querySelectorAll("#skill-ul>li")
const loading =document.getElementById("loading")
loading.classList.remove("opacity-100")
loading.classList.add("opacity-0")
setTimeout(()=> loading.classList.add("hidden"),200)

let delay = 300
for(let i = 0 ; skillLists.length>i;i++){
    delay+=100
    setTimeout(()=>{
        skillLists[i].classList.remove("translate-x-[-90px]")
    },delay)
}