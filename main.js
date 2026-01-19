// Mantener para menú responsive si se agrega
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

if(menuToggle){
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
    });
}
// Si necesitas interacción adicional con los botones, por ahora no se requiere JS
// Mantengo un archivo listo por si deseas agregar funcionalidad
console.log("Botones de contacto flotantes listos.");


