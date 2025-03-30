document.querySelectorAll('nav a').forEach(enlace => {  //querySelector busca los enlaces <a> dentro de nav, forEach para cada enlace del menú ejecutara una funcion
    enlace.addEventListener('click', function(e){  //Agrega un evento de clic a cada enlace del menu
        e.preventDefault();  //evita salto brusco al hacer clic en un enlace del menu
        const seccion =
document.querySelector(this.getAttribute('href'));  //get attribute obtiene el valor del href del enlace (ej: #sobre-mi), querySelector busca la seccion correspondiente
                seccion.scrollIntoView({behavior: 
'smooth'});  //Hace que la seccion se desplace suavemente en la pantalla
    });
});


const btnSubir =
document.getElementById('btnSubir');  //Busca el boton con id = 'btnSubir' y lo guarda en la variable btnSubir

window.addEventListener('scroll', function () {  //Detecta cuando el usuario hace scroll en la pagina
    if (this.window.scrollY > 200){ 
        btnSubir.style.display = 'block';  //Si el usuario ha bajado más de 200 pixeles, muestra el boton
    } else {
        btnSubir.style.display = 'none';  //Si el usuario esta en la parte de arriba, oculta el boton
    }
});
btnSubir.addEventListener('click', function(){  //Cuando se haga clic, el boton ejecutara el codigo dentro
    window.scrollTo({top: 0, behavior: 'smooth'});
});  //Hace que la pagina se desplace suavemente hacia arriba


 const botonModoOscuro = 
 document.getElementById("modo-oscuro");

 botonModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
 });




const menuToggle = 
document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

document.querySelectorAll("nav ul li a").forEach(enlace => {
    enlace.addEventListener("click", function(e) {
        e.preventDefault();
        const destino =
document.querySelector(this.getAttribute("href"));
        destino.scrollIntoView({behavior:
"smooth", block: "start"});        
    });
});