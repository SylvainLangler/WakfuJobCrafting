$(document).ready(function () {

    

    $.getJSON("wakfucrafting.json", function (data) {

        for(var indexMetier in data.craft.metiers){ // Pour chaque métier

            var metier = data.craft.metiers[indexMetier];
            var stringItem = "<div class=\"row craft-"+metier.nom+" justify-content-center\"><div class=\"col-lg-11 mb-5 mt-5\"><h3 class=\"nom_metier\">"+metier.nom+"</h3><h4 class=\"cat-items\">Ateliers</h4></div>"
            $(".liste_metiers").append("<div class=\"metier "+metier.nom+"\"><h5>"+metier.nom+"</h5></div>");

            for(var indexAtelier in metier.ateliers){ // Pour chaque atelier à craft dans le métier

                var atelier = metier.ateliers[indexAtelier];
                stringItem += "<div class=\"col-lg-4 item\"><div class=\"item-name\"><h5>"+atelier.nom+"</h5></div><table class=\"table m-auto w-100\"><thead><tr><th scope=\"col\">Nom</th><th scope=\"col\">Quantité</th></tr></thead><tbody>";

                for(var indexRecetteItem in atelier.items_recette){ // Pour chaque item de la recette de l'item à craft

                    var recetteItem = atelier.items_recette[indexRecetteItem];
                    stringItem += "<tr><td>"+recetteItem.nom+"</td><td>"+recetteItem.quantite+"</td>";

                }

                stringItem += "</tbody></table></div>";
                
            }

            stringItem +="</div>";
            $(".metier-crafting").append(stringItem);
        }

        // Fonctions d'affichage

        function AfficherMetier(metier){
            $(".metier").removeClass("metier-selected");
            $(metier).addClass("metier-selected");
            if($(metier).attr("class").split(' ')[1] == "all-metiers"){
                console.log("oui");
                $(".metier-crafting .row").show();
            }
            else{
                $(".metier-crafting .row").hide();
                $(".craft-"+metier.attr("Class").split(' ')[1]).show();
            }
        }
    
        $(".metier").click(function(){
            AfficherMetier($(this));            
        });

    });

    

});
