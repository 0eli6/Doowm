function calculate() {
    const CUMple = document.getElementById('CUMple').value;
    const result = document.getElementById('resultado');

    if (!CUMple) {
        result.textContent = 'Por favor, introduce tu año de nacimiento.';
        return;
    }

    const calendario = CUMple % 12;

    let mensajillo;
    switch (calendario) {
        case 0:
            mensajillo = 'Mono';
            document.getElementById("img").src="img/mono.webp";
            break;
        case 1:
            mensajillo = 'Gallo';
            document.getElementById("img").src="img/gallo.jpg";
            break;
        case 2:
            mensajillo = 'Perro';
            document.getElementById("img").src="img/perro.png";
            break;
        case 3:
            mensajillo = 'Cerdo';
            document.getElementById("img").src="img/cerdo.png";
            break;
        case 4:
            mensajillo = 'Rata';
            document.getElementById("img").src="img/rata.png";
            break;
        case 5:
            mensajillo = 'Buey';
            document.getElementById("img").src="img/buey.png";
            break;
        case 6:
            mensajillo = 'Tigre';
            document.getElementById("img").src="img/tigre.png";
            break;
        case 7:
            mensajillo = 'Conejo';
            document.getElementById("img").src="img/conejo.png";
            break;
        case 8:
            mensajillo = 'dragon';
            document.getElementById("img").src="img/dragon.png";
            break;
        case 9:
            mensajillo = 'Serpiente';
            document.getElementById("img").src="img/serpiente.png";
            break;
        case 10:
            mensajillo = 'caballo';
            document.getElementById("img").src="img/caballo.png";
            break;
        case 11:
            mensajillo = 'cabra';
            document.getElementById("img").src="img/cabra.png";
            break;
    }
    result.textContent = mensajillo;
}
