$(document).ready(function() {

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


}); //fine document ready
