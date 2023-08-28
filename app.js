// var buynow = document.getElementById("buynow")

// var text = document.getElementById("thankstext")
// buynow.onlick=()=>{
//     buynow.style.display = "none"
//     text.style.display = "block"
//     }

var button = document.getElementById("buy")

button.onclick=()=>{
    button.style.display = "none";
    document.getElementById("message").textContent = "Thank You For Shopping With Us."
}