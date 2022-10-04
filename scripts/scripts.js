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
function openNav(imgItem, nomeProduto, valor) {
    document.getElementById("carrinho").style.display = "block";
    valor = valor.toFixed(2);
    imgItem = '<img src="imagens/' + imgItem + '" class="miniImg">'
    document.getElementById("itensCarrinho").innerHTML +=
    '<div id="imgNomeValor"><div>' + imgItem + '</div><div><p>' + nomeProduto + '<br>Valor: R$' + valor + '</p></div></div>';
    total = total + parseInt(valor);
    document.getElementById("total").innerHTML = 'Total R$' + total.toFixed(2);

}
var total = 0;

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