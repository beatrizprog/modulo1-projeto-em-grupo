// Quando rolar para baixo, 50px da parte superior do documento, redimensione a margin da barra de navegação e o tamanho da logo
window.onscroll = function() {
    scrollFunction()
}
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("logo").style.width = "50px";
        document.getElementById("logo").style.height = "50px";
    } else {
        document.getElementById("logo").style.width = "100px";
        document.getElementById("logo").style.height = "100px";
    }
}
// Carrinho
function openNav() {
    document.getElementById("carrinho").style.display = "block";
}
function closeNav() {
    document.getElementById("carrinho").style.display = "none";
}
function minNav() {
    document.getElementById("minNav").style.display = "none";
    document.getElementById("carrinho").style.height = "65px";
    document.getElementById("maxNav").style.display = "inline";
}
function maxNav() {
    document.getElementById("maxNav").style.display = "none";
    document.getElementById("carrinho").style.height = "500px";
    document.getElementById("minNav").style.display = "inline";
}