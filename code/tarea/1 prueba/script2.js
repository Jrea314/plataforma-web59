var num = 1;
contador1 = 0;
contador2 = 0;
c1 = 0;
c2 = 0;
c3 = 0;
function aparece1(){
    var foto = document.getElementById('imagen');
    foto.src = "Galeria_01/0"+num+".jpg";
    otra_vez();
}
function aparece2(){
    var foto = document.getElementById('imagen');
    foto.src = "Galeria_02/0"+num+".jpg";
    otra_vez();
}
function aparece3(){
    var foto = document.getElementById('imagen');
    foto.src = "Galeria_03/0"+num+".jpg";
    otra_vez();
}
function otra_vez(){
    document.querySelector('.icon-arrow-left').style.display = "none";
    document.querySelector('.icon-arrow-right').style.display = "block";
    contador1 = 0;
    contador2 = 0;
    c1 = 0;
    c2 = 0;
    c3 = 0;
}
function verificarL(){
    let atras = document.querySelector('.icon-arrow-left');
        document.querySelector('.icon-arrow-right').style.display = "block";
        let foto1 = document.getElementById('imagen');
        let palabra1 = "Galeria_01"
        let palabra2 = "Galeria_02"
        let palabra3 = "Galeria_03"

        if ((foto1.src).includes(palabra1)) {
            regresar1();
            c1--;
        }
        if ((foto1.src).includes(palabra2)) {
            regresar2();
            c2--;
        } 
        if ((foto1.src).includes(palabra3)) {
            regresar3();
            c3--;
        }       
    }
function verificarR(){
    let adelante = document.querySelector('.icon-arrow-right');
    document.querySelector('.icon-arrow-left').style.display = "block";
    let foto1 = document.getElementById('imagen');
    let palabra1 = "Galeria_01"
    let palabra2 = "Galeria_02"
    let palabra3 = "Galeria_03"

    if ((foto1.src).includes(palabra1)) {
        mover1();
        c1++;
    }
    if ((foto1.src).includes(palabra2)) {
        mover2();
        c2++;
    } 
    if ((foto1.src).includes(palabra3)) {
        mover3();
        c3++;
    }       
    

}


function mover1(){
        let galeria1 = ['Galeria_01/01.jpg','Galeria_01/02.jpg','Galeria_01/03.jpg','Galeria_01/04.jpg',
                          'Galeria_01/05.jpg','Galeria_01/06.jpg'];
        let  img = document.querySelector('img');
            if (c1<galeria1.length-1) {
                img.src = galeria1[c1+1];              
            }
            if (c1 == 4) {
                document.querySelector('.icon-arrow-right').style.display = "none";
                document.querySelector('.icon-arrow-left').style.display = "block";
            
            }
            
            
}

function mover2(){
    let galeria2 = ['Galeria_02/01.jpg','Galeria_02/02.jpg','Galeria_02/03.jpg','Galeria_02/04.jpg',
                      'Galeria_02/05.jpg','Galeria_02/06.jpg','Galeria_02/07.jpg','Galeria_02/08.jpg',
                      'Galeria_02/09.jpg'];
    let  img = document.querySelector('img');
        if (c2<galeria2.length-1) {
            img.src = galeria2[c2+1];              
        }
        if (c2 == 7) {
            document.querySelector('.icon-arrow-right').style.display = "none";
            document.querySelector('.icon-arrow-left').style.display = "block";
            
        }
}

function mover3(){
    let galeria3 = ['Galeria_03/01.jpg','Galeria_03/02.jpg','Galeria_03/03.jpg','Galeria_03/04.jpg',
                      'Galeria_03/05.jpg','Galeria_03/06.jpg','Galeria_03/07.jpg','Galeria_03/08.jpg'];
    let  img = document.querySelector('img');
        if (c3<galeria3.length-1) {
            img.src = galeria3[c3+1];              
        }
        if (c3 == 6) {
            document.querySelector('.icon-arrow-right').style.display = "none";
            document.querySelector('.icon-arrow-left').style.display = "block";          
        }
}

function regresar1(){
    let galeria1 = ['Galeria_01/01.jpg','Galeria_01/02.jpg','Galeria_01/03.jpg','Galeria_01/04.jpg',
                    'Galeria_01/05.jpg','Galeria_01/06.jpg'];
        let  img = document.querySelector('img');
        if (c1>0) {
            img.src = galeria1[c1-1];              
        }
        if (c1 == 1) {
            document.querySelector('.icon-arrow-right').style.display = "block";
            document.querySelector('.icon-arrow-left').style.display = "none";            
        }
}

function regresar2(){
    let galeria2 = ['Galeria_02/01.jpg','Galeria_02/02.jpg','Galeria_02/03.jpg','Galeria_02/04.jpg',
                    'Galeria_02/05.jpg','Galeria_02/06.jpg','Galeria_02/07.jpg','Galeria_02/08.jpg',
                    'Galeria_02/09.jpg'];
        let  img = document.querySelector('img');
        if (c2>0) {
            img.src = galeria2[c2-1];              
        }
        if (c2 == 1) {
            document.querySelector('.icon-arrow-right').style.display = "block";
            document.querySelector('.icon-arrow-left').style.display = "none";            
        }

}

function regresar3(){
    let galeria3 = ['Galeria_03/01.jpg','Galeria_03/02.jpg','Galeria_03/03.jpg','Galeria_03/04.jpg',
                    'Galeria_03/05.jpg','Galeria_03/06.jpg','Galeria_03/07.jpg','Galeria_03/08.jpg'];
        let  img = document.querySelector('img');
        if (c3>0) {
            img.src = galeria3[c3-1];              
        }
        if (c3 == 1) {
            document.querySelector('.icon-arrow-right').style.display = "block";
            document.querySelector('.icon-arrow-left').style.display = "none";            
        }
}