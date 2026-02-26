// Seleccionamos todos los inputs que tengan un icono antes
const inputsBusqueda = document.querySelectorAll('input[placeholder="Buscar..."]');

inputsBusqueda.forEach(input => {
    // El elemento previo al input es tu SVG
    const icono = input.previousElementSibling;
    const formularioBusqueda = input.parentElement;

    // Cuando el usuario hace clic o entra al input
    input.addEventListener('focus', () => {
        if (icono && icono.tagName === 'svg') {
            icono.style.display = 'inline-block';
        }
        if(formularioBusqueda && formularioBusqueda.className === 'formulario-busqueda'){
            formularioBusqueda.style.outline = "1px solid #0066ff";
            formularioBusqueda.style.width = "30vw";
        }
    });

    // Cuando el usuario sale del input
    input.addEventListener('blur', () => {
        if (icono && icono.tagName === 'svg') {
            icono.style.display = 'none';
        }
        if(formularioBusqueda && formularioBusqueda.className === 'formulario-busqueda'){
            formularioBusqueda.style.outline = "1px solid #585858";
            formularioBusqueda.style.width = "28vw";
        }
    });
});