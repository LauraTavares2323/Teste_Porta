porta = document.getElementById("fechada")
porta1 = document.getElementById("aberta")
div = document.getElementById("porta")

porta.addEventListener("click", (e) => {
    porta.style.visibility = "hidden"
    porta1.style.visibility = "visible"
})


porta1.addEventListener("click", (e)=>{
    porta.style.visibility = "visible"
    porta1.style.visibility = "hidden"
})