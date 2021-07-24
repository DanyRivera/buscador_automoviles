//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor resultado
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 11;

//Crenaod el objeto
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {

    mostrarAutos(autos);

    //Genera los años
    llenarSelect();

})

//Events listeners para los select
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;

    filtrarAuto();
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;

    filtrarAuto();
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
})


color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
})


//Funciones

function mostrarAutos(autos) {

    limpiarHTML();

    autos.forEach(auto => {

        const { marca, modelo, year, precio, puertas, color, transmision } = auto;

        const autoHTML = document.createElement('p')

        autoHTML.textContent = `
        
        ${marca} - ${modelo} - ${year} - ${precio} - ${puertas} - ${color} - ${transmision}

        `

        resultado.appendChild(autoHTML)

    })
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.textContent = i;
        option.value = i;
        year.appendChild(option);
    }

}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMax).filter(filtrarPuertas).filter(filtrarTransimicion).filter(filtrarColor);

    if (resultado.length) {
        mostrarAutos(resultado);
    }else {
        sinResultados();
    }

}

function sinResultados() {

    limpiarHTML();

    const sinResultados = document.createElement('div');
    sinResultados.classList.add('alerta', 'error');
    sinResultados.textContent = 'No hay resultado';
    resultado.appendChild(sinResultados);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;

    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;

    if (year) {
        return auto.year === parseInt(year);
    }
    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;

    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMax(auto) {
    const { maximo } = datosBusqueda;

    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;

    if (puertas) {
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}

function filtrarTransimicion(auto) {
    const { transmision } = datosBusqueda;

    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;

    if (color) {
        return auto.color === color;
    }
    return auto;
}