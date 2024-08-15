document.getElementById('temas').addEventListener('change',temaSeleccionado);

function temaSeleccionado(){
    document.getElementById('palabra').value=null;
    document.getElementById('numero').value=null;
    document.getElementById('resultado').innerHTML="¡¡Resultado!!";
    capas=document.getElementsByTagName("article");
   
    for(var i=0; i<capas.length;i++){
        capas[i].style.display="none"; 
    }
    var articulo=document.getElementById('temas').value;
    document.getElementById(articulo).style.display="block";
}


function mostrarDatos(){
    var palabra=document.getElementById('palabra').value;
    var numero=document.getElementById('numero').value;
    numFloat=parseFloat(numero);
    datos='Cadena'+palabra+ '<br> Dato Flotante:'+numFloat;
    document.getElementById('resultado').innerHTML=datos; 
}


//creación de funciones anónimas
// se agregan a una variable las funciones anonimi, la funncion aninima depende du una funcion

var uno=function(){
    document.getElementById("resultado").style.backgroundColor=E64663;
}

var dos=function(){
    document.getElementById("resultado").style.backgroundColor=A8CED6;
}

var tres=function(){
    document.getElementById("resultado").classList.add("mas");
}

var cuatro=function(){
    document.getElementById("resultado").style.backgroundColor="transparent";
    document.getElementById("resultado").classList.remove("mas");
}

var fotografias=function(nombreFoto){
    document.getElementById("foto").src="img/"+nombreFoto+".png";
}

