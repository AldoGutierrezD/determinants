
function res(){
    //Obtenir les valeurs
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var d = document.getElementById('d').value;
    var e = document.getElementById('e').value;
    var f = document.getElementById('f').value;

    //Faire l'operation
    var determinant_systeme = (a * e) - (b * d);

    if(determinant_systeme != 0){
        var determinant_x = (c * e) - (b * f);

        var determinant_y = (a * f) - (c * d);

        var resultat_x = (determinant_x / determinant_systeme).toFixed(2);

        var resultat_y = (determinant_y / determinant_systeme).toFixed(2);

        var solution = "x = " + determinant_x + "/" + determinant_systeme + " = <strong>" + resultat_x + "</strong> <br>"
            + "y = " + determinant_y + "/" + determinant_systeme + " = <strong>" + resultat_y + "</strong> <br>"
            + a + "x + " + b +"y = " + c + "<br>"
            + d + "x + " + e +"y = " + f + "<br>"

        document.getElementById('resultat').innerHTML = solution;

    }else{
        document.getElementById('resultat').innerHTML = "Aucune ou infinité de solutions";
    }
    
}