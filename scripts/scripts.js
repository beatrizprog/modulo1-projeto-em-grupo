// Barra de navegação
// Quando rolar para baixo, 50px da parte superior do documento, redimensione o tamanho da logo
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
// Adicionar itens ao carrinho
i = 0;
function openNav(imgItem, nomeProduto, valor) {
    i++;
    var campo = "imgNomeValor" + i;
    document.getElementById("carrinho").style.display = "block";
    valor = valor.toFixed(2);
    imgItem = '<img src="imagens/' + imgItem + '" class="miniImg">'
    document.getElementById("itensCarrinho").innerHTML +=
    '<div id="imgNomeValor"><div id="'+campo+'"><div>' + imgItem + '</div><div><p>' + nomeProduto + '<br>Valor: R$' + valor + '</p></div><div><button onclick="excluir('+i+','+valor+')">X</button></div></div></div>';
    total = total + parseFloat(valor);
    document.getElementById("total").innerHTML = 'Total R$' + total.toFixed(2);
}
var total = 0;
// Excluir itens do carrinho
function excluir(campo, valor){
    document.getElementById("imgNomeValor" + campo).style.display = "none";
    total = total - parseFloat(valor);
    document.getElementById("total").innerHTML = 'Total R$' + total.toFixed(2);
}
// Toda iteração da área do carrinho como fechar, minimizar e maximinizar
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
// Formulário
// Confirmação que o formulário foi enviado
/* function validateForm() {
    var x = document.forms["form"]["name"].value;
    if (x !== "" || x !== null) {
        alert("Sua mensagem será enviada.");
    }
}
*/
function validateForm() {
    var conf = confirm("Deseja enviar a mensagem?");
    if (conf == true) {
        alert("Mensagem enviada");
        window.location.href = "contato.html"
        return false;
    } else {
        return false;
    }
}