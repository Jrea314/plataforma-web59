var galeria1 = ['imagenes/gato1.jpg','imagenes/gato2.jpg','imagenes/gato3.jpg'],
    c = 0;

function mover(){
    document.addEventListener ( 'click', e => {
        let atras = document.querySelector('.icon-arrow-left'),
            adelante = document.querySelector('.icon-arrow-right'),
            img = document.querySelector('img'),
            tgt = e.target;
        if (tgt == atras) {
            if (c>0) {
                img.src = galeria1[c-1];
                c--;               
            }else{
                img.src = galeria1[c.length-1];
                c=galeria1.length-1;
            }
        }else if (tgt == adelante) {
            if (c<galeria1.length-1) {
                img.src = galeria1[c+1];
                c++;               
            }else{
                img.src = galeria1[0];
                c=0;
            }
        }
    });
}
document.addEventListener("DOMContentLoaded",() =>{
    let entrar1 = document.querySelector('.content');
    mover(entrar1);
});