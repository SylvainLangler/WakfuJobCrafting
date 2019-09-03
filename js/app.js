$(document).ready(function () {

    $.getJSON("wakfucrafting.json", function (data) {

        for(var indexMetier in data.craft.metiers){ // Pour chaque métier

            var metier = data.craft.metiers[indexMetier];
            $("."+metier.nom).append("<div class=\"col-lg-12 text-center mb-5 mt-5\"><h3>"+metier.nom+"</h3></div>"); // On affiche le nom du métier

            for(var indexItem in metier.items){ // Pour chaque item à craft dans le métier

                var item = metier.items[indexItem];
                var stringItem = "<div class=\"col-lg-3 item\"><div class=\"item-name\"><h5>"+item.nom+"</h5></div><table class=\"table m-auto w-100\"><thead><tr><th scope=\"col\">Nom</th><th scope=\"col\">Quantité</th></tr></thead><tbody>";

                for(var indexRecetteItem in item.items_recette){ // Pour chaque item de la recette de l'item à craft

                    var recetteItem = item.items_recette[indexRecetteItem];
                    stringItem += "<tr><td>"+recetteItem.nom+"</td><td>"+recetteItem.quantite+"</td>";

                }

                stringItem += "</tbody></table></div>";
                $("."+metier.nom).append(stringItem);
            }
            
        }

    });

});
