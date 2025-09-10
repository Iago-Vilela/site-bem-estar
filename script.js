function openHair(evt, hairTypeName) {
    // Declara todas as variáveis
    var i, haircontent, tablinks;

    // Pega todos os elementos com a classe="hair-content" e os esconde
    haircontent = document.getElementsByClassName("hair-content");
    for (i = 0; i < haircontent.length; i++) {
        haircontent[i].style.display = "none";
    }

    // Pega todos os elementos com a classe="tablink" e remove a classe "active"
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra a aba atual e adiciona uma classe "active" ao botão que abriu a aba
    document.getElementById(hairTypeName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Abre a primeira aba por padrão
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tablink")[0].click();
});