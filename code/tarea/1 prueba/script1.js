const galeria1 = ['imagenes/gato1.jpg','imagenes/gato2.jpg','imagenes/gato3.jpg'];
const galeria2 = ['imagenes/perro1.jpg','imagenes/perro2.jpg','imagenes/perro3.jpg'];
let c = 0;
const flecha1 = document.querySelector(".icon-arrow-left");
const flecha2 = document.querySelector(".icon-arrow-right");
img = document.querySelector('img'),

flecha2.onclick = function click1(){
    if (c<galeria1.length-1) {
        img.src = galeria1[c+1];
        c++;              
    }
}   
flecha1.onclick = function click2(){
    if (c>0) {
        img.src = galeria1[c-1];
        c--;               
    }
}

boton2.onclick = function parte2(){
    img.src = galeria2[0];
    flecha2.onclick = function click3(){
        if (c<galeria2.length-1) {
            img.src = galeria2[c+1];
            c++;              
        }
    }   
    flecha1.onclick = function click4(){
        if (c>0) {
            img.src = galeria2[c-1];
            c--;               
        }
    }

}



