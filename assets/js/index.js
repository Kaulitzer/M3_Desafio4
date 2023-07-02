// Objetos de propiedades
const propiedadesJSON = [
    {
        nombre: "Casa de campo",
        descripcion: "Un lugar ideal para descansar de la ciudad",
        src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        cuartos: 2,
        metros: 170
    },
    {
        nombre: "Casa de playa",
        descripcion: "Despierta tus días oyendo el océano",
        src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        cuartos: 2,
        metros: 130
    },
    {
        nombre: "Casa en el centro",
        descripcion: "Ten cerca de ti todo lo que necesitas",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        cuartos: 1,
        metros: 80
    },
    {
        nombre: "Casa rodante",
        descripcion: "Conviértete en un nómada del mundo sin salir de tu casa",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        cuartos: 1,
        metros: 6
    },
    {
        nombre: "Departamento",
        descripcion: "Desde las alturas todo se ve mejor",
        src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        cuartos: 3,
        metros: 200
    },
    {
        nombre: "Mansión",
        descripcion: "Vive una vida lujosa en la mansión de tus sueños",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        cuartos: 5,
        metros: 500
    }
];

// Función para renderizar propiedades
function renderizarPropiedades(propiedades) {
const propiedadesContainer = document.querySelector('.propiedades');
propiedadesContainer.innerHTML = '';

propiedades.forEach(propiedad => {
    const propiedadHTML = `
        <div class="propiedad">
            <div class="img" style="background-image: url('${propiedad.src}')"></div>
            <section>
                <h5>${propiedad.nombre}</h5>
                <div class="d-flex justify-content-between">
                    <p>Cuartos: ${propiedad.cuartos}</p>
                    <p>Metros: ${propiedad.metros}</p>
                </div>
                <p class="my-3">${propiedad.descripcion}</p>
                <button class="btn btn-info">Ver más</button>
            </section>
        </div>
    `;
    propiedadesContainer.innerHTML += propiedadHTML;
});
}

// Función para filtrar propiedades
function filtrarPropiedades(cuartos, metrosDesde, metrosHasta) {
    return propiedadesJSON.filter(propiedad => {
        return (
            (!cuartos || propiedad.cuartos === cuartos) &&
            (!metrosDesde || propiedad.metros >= metrosDesde) &&
            (!metrosHasta || propiedad.metros <= metrosHasta)
        );
    });
}

// Función para actualizar el contador de propiedades
function actualizarTotalPropiedades(total) {
const totalPropiedadesElement = document.getElementById('total-propiedades');
totalPropiedadesElement.textContent = total;
}

// Evento click en el botón de búsqueda
const buscarBtn = document.getElementById('buscar-btn');
buscarBtn.addEventListener('click', () => {
const cuartosInput = document.getElementById('cuartos-input');
const metrosDesdeInput = document.getElementById('metros-desde-input');
const metrosHastaInput = document.getElementById('metros-hasta-input');

const cuartos = parseInt(cuartosInput.value);
const metrosDesde = parseInt(metrosDesdeInput.value);
const metrosHasta = parseInt(metrosHastaInput.value);

if (!cuartos && !metrosDesde && !metrosHasta) {
    alert('Debes ingresar al menos un criterio de búsqueda');
    return;
}

    const propiedadesFiltradas = filtrarPropiedades(cuartos, metrosDesde, metrosHasta);
    renderizarPropiedades(propiedadesFiltradas);
    actualizarTotalPropiedades(propiedadesFiltradas.length);
});

// Renderizar todas las propiedades al cargar la página
renderizarPropiedades(propiedadesJSON);
actualizarTotalPropiedades(propiedadesJSON.length);
