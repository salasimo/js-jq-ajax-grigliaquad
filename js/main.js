$(document).ready(function() {

    var source = $("#riga-template").html();
    var template = Handlebars.compile(source);

    inserisciRiga();

    $(".casella").on("click", riempiCasella);


    // Funzioni ============================

    function riempiCasella(){
        var casellaCliccata = $(this);
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            method: "GET",
            success: function(data) {
                var numero = data.response;
                console.log(numero);
                if (numero > 5) {
                    casellaCliccata.removeClass("yellow");
                    casellaCliccata.addClass("green");
                    casellaCliccata.html(numero);
                } else {
                    casellaCliccata.removeClass("green");
                    casellaCliccata.addClass("yellow");
                    casellaCliccata.html(numero);
                }
            },
            error: function() {
                alert("Errore");
            }

        });
    };

    function inserisciRiga(){
        for (var i = 1; i <= 6; i++) {
            var riga = {
                numeroRiga: i
            };
            var templateCompilato = template(riga);
            $(".container").append(templateCompilato);
        };
    };


}); //fine document ready
