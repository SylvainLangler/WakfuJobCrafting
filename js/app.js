$(document).ready(function () {

    $.getJSON("wakfucrafting.json", function (data) {

        for(var indexMetier in data.craft.metiers){ // Pour chaque métier

            var metier = data.craft.metiers[indexMetier];
            $(".description").append("<p>M\u00E9tier: "+metier.nom+"</p>"); // On affiche le nom du métier

            for(var indexItem in metier.items){ // Pour chaque item à craft dans le métier

                var item = metier.items[indexItem];
                $(".description").append("<p>Objet: "+item.nom+"</p>"); // On affiche le nom de l'item
                $(".description").append("<p class=\"text-center\">Craft:</p>");

                for(var indexRecetteItem in item.items_recette){ // Pour chaque item de la recette de l'item à craft

                    var recetteItem = item.items_recette[indexRecetteItem];
                    $(".description").append("<p>"+recetteItem.nom+" : "+recetteItem.quantite+"</p>"); // On affiche son nom et la quantité

                }
            }
        }
        
    });

});
