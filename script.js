// Função para a seção Cabelo
function openHair(evt, hairTypeName) {
    var i, haircontent, tablinks;
    haircontent = document.getElementsByClassName("hair-content");
    for (i = 0; i < haircontent.length; i++) {
        haircontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(hairTypeName).style.display = "block";
    evt.currentTarget.className += " active";
}

// NOVA Função para a seção Maquiagem
function openMakeup(evt, makeupTypeName) {
    var i, makeupcontent, tablinks;
    makeupcontent = document.getElementsByClassName("makeup-content");
    for (i = 0; i < makeupcontent.length; i++) {
        makeupcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink-makeup");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(makeupTypeName).style.display = "block";
    evt.currentTarget.className += " active";
}


// Garante que a primeira aba de cada seção seja aberta por padrão
document.addEventListener("DOMContentLoaded", function() {
    // Para a página de Cabelo
    if (document.querySelector(".tablink")) {
        document.getElementsByClassName("tablink")[0].click();
    }
    // Para a página de Maquiagem
    if (document.querySelector(".tablink-makeup")) {
        document.getElementsByClassName("tablink-makeup")[0].click();
    }
});