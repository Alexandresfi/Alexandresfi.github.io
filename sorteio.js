var numero = document.getElementById("number");
document.getElementById("botao").addEventListener("click", ()=>{
    let n = numero.value
    var NS = Math.floor(Math.random()*n + 1)
    let h1 = document.getElementById("mostrar");
    let texto = document.createTextNode(NS);
    h1.innerHTML = ""
    h1.appendChild(texto);
    const dis = document.getElementById("aqui");
    dis.style.display = "block";
})
