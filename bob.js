const textOne = document.getElementById("1")
let ifHello = false
document.getElementById("button").addEventListener("click", function() {
    if (ifHello === false) {
        ifHello = true
        textOne.textContent = "hello again"
    }else{
        ifHello = false
        textOne.textContent = "hello"
    }
    
})