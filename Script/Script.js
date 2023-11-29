function crearTabla () {
    var filas = parseInt(document.getElementById("filas").value);
    var columnas = parseInt(document.getElementById("columnas").value);
    var numeros = []; 
    for (var i = filas*columnas; i > 0; i--) {
        numeros.push(i)
        
    }
    var tablaHTML = "<table border='1'>";
    var indice = 0;
    
    for (let j = 1; j <= filas; j++) {
        tablaHTML += "<tr>";
        
        for (let q = 1; q <= columnas; q++) {
            tablaHTML += "<td>" + numeros[indice]; + "</td>";
            indice++;
            
        }
        tablaHTML += "</tr>"
    }
    
    tablaHTML += "</table>";
    
    document.getElementById("tablaContainer").innerHTML = tablaHTML
    
    }

    function contarVocales() {
        var texto = document.getElementById("texto").value.toLowerCase();
        var vocales = texto.match(/[aeiouáéíóú]/g);
        var cantidadVocales = vocales ? vocales.length : 0;

        document.getElementById("resultado").innerText = "Cantidad de vocales: " + cantidadVocales;
    }