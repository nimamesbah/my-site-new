const skillLists = document.querySelectorAll("#skill-ul>li")
const loading =document.getElementById("loading")
const email = document.getElementById("email-div")
const num = document.getElementById("num-div")
loading.classList.remove("opacity-100")
loading.classList.add("opacity-0")

setTimeout(()=> loading.classList.add("hidden"),200)

let delay = 300
for(let i = 0 ; skillLists.length>i;i++){
    delay+=150
    setTimeout(()=>{
        skillLists[i].classList.remove("translate-x-[-90px]")
    },delay)
}
 
setTimeout(() => {
    num.classList.remove("translate-y-[-60px]")
},400 );
setTimeout(() => {
    email.classList.remove("translate-y-[-60px]")
},500 );