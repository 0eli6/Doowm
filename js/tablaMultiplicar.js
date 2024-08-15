function generateTable() {
    const number = document.getElementById('numberInput').value;
    var resultHTML = '';
    for (var i = 1; i <= 10; i++) {
        resultHTML += '<p>' + number + ' x ' + i + ' = ' + (number * i) + '</p>';
    }
    document.getElementById('result').innerHTML = resultHTML;
    
    document.getElementById('result').classList.add('nuevo-estilo');
}

function cambiarArchivo (opcion){
    var objeto=document.getElementById("enlaceEstilos");
    objeto.href=opcion;
}