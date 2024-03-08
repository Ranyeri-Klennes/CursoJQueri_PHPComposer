// Buscar um ou vários elementos pelo JQuery
$(document).ready(() => {

    // $() => Selecionando elementos pelo JQuery
    // .texte() => Trás o texto do HTML do elemento referenciado
    console.log($(".lista-teste .ativo").text() + " - encontrado e alterado o CSS utilizando o JQuery.");
    $(".lista-teste .ativo").css({
        "background-color": "#3EB249",
        "color": "white",
    })

    // Mudando o estilo dos elementos da .lista-teste pelo CSS
    $(".lista-teste li").css({
        "padding": "10px",
        "border-radius": "5px",
        "margin-bottom": "5px",
        "list-style": "none",
    })

    console.log($(".lista-teste li").first().text() + " - elemento da lista utilizando o .first()")
    console.log($(".lista-teste li").eq(1).text() + " - elemento da lista utilizando o .eq()")
    console.log($(".lista-teste li").last().text() + " - elemento da lista utilizando o .last()")

    console.log("# Loop dos elementos utilizando o .each():");
    $(".lista-teste li").each((index, elemento) => {
        console.log("Elemento " + $(elemento).text() + " de index " + index);
    })

    // Setando elementos do HTML pelo JQuery utilizando JS
    // OBS: Sempre tem que colox o 'index' no .each:
    $(".lista-teste li").each((index, elemento) => {
        $(elemento).text($(elemento).text() + " (texto setado pelo js).")
    })

    // Utilizando o .prepend() para colocar algo no início
    $(".lista-teste").prepend("<b>.prepend()</b> que joga para o inicial do elemento selecionado.");
    // Utilizando o .append() para colocar algo no final
    $(".lista-teste").append("<b>.append()</b> que joga para o final do elemento selecionado.");

    // Utilizando o .before() para colocar algo antes do elemento selecionado
    $(".ativo").before("<b>.before()</b> que joga antes do elemento selecionado.");
    // Utilizando o .after() para colocar algo depois do elemento selecionado
    $(".ativo").after("<b>.after()</b> que joga depois do elemento selecionado.");

    // Adicionando classe e utilizando o .each() para encontrar uma classe especifica e removê-la
    $(".lista-teste li:eq(1)").addClass("normalizado");
    $(".lista-teste li").each((index) => {
        if ($(index).find(".normalizado").hasClass("normalizado")) {
            $(index).find(".normalizado").removeClass("normalizado");
        }
    })

    // Para adicionar ou alterar atributos
    $(".lista-teste li:eq(1)").attr("data-id", "321");
    // Para remover atributos
    $(".lista-teste li:eq(1)").removeAttr("data-id");

    $(".lista-teste").wrap("<div class='pai'></div>");

    $(".botao-teste").click((e) => {
        window.location = "computador.php";
    })

})