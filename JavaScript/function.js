
window.addEventListener("load", function()
{
    document.getElementById("btnCursos").addEventListener("click", function(){
        alert('Cursos realizados: \n-Soporte Vital Básico en Pediatría.\n-Curso avanzado de Interpretación del Electrocardiograma.\n-Curso de Primeros Auxilios.\n\nAún cursando:\n-Soporte Vital Avanzado en Pediatría.');
    })
})

window.addEventListener("load", function()
{
    document.getElementById("btnPremios").addEventListener("click", function(){
        alert('Pregrado: \n- Distinción Summa Cum Laude.\n- Cuadro de Honor Estudiantil durante los años académicos 2012 hasta 2017.\n\nPostgrado:\n- Premio a la excelencia académica Dr. Enrique Molina.');
    })
})

window.addEventListener("load", function()
{
    document.getElementById("btnLengua").addEventListener("click", function(){
        alert('Nivel de español: Nativo.\nNivel de inglés: Fluido.\nNivel de francés: Intermedio.');
    })
})

let bandera=0 ;
let fondo = document.querySelector('.lado_derecho');
let h4_1 = document.getElementById('h4_1');
let h4_2 = document.getElementById('h4_2');

function blanco () {
    fondo.style.backgroundColor = '#000';
    fondo.style.color = '#CCC';
    h4_1.style.color = '#fff';
    h4_2.style.color = '#fff';
}

function negro () {
    fondo.style.backgroundColor = '#fff';
    fondo.style.color = '#000';
    h4_1.style.color = '#444';
    h4_2.style.color = '#444';
}

document.getElementById('btnFondo').addEventListener('click', function(){
    if (bandera == 0) {
        blanco();
        bandera = 1;
    }else{
        if(bandera = 1) {
        negro();
        bandera = 0;
        }
    }
})


