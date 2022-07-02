const diasDeSemana = ['lun','mar','mie','jue','vie','sab','dom'];
const mesesDelAno = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

// No se porque, el bucle me crea un span mas, que esta vacio, abri el html
// y fijate, tuve que agregale un padding a las fechas por ese motivo.
// si yo bajo en for i < 7 me saca el ultimo dia, en vez de quitarme el div.

//Lo que no pude lograr fue meter el resultado del bucle semanas, dentro de cada div creado
//por el bucle anterior ===> digamos, semanas dentro de meses, o dias dentro de semanas.

// Esta un poco agarrado de los pelos, pero en principio es un calendario con arrays
// mas alla de que no tiene nada de forma, cumple con la consigna de crear el bucle jajaja


// Planeo incluir el calendario en el proyecto final, nose si con bucles o no


let contador = "";
let semanasC = "";
let diasC = "";
for (let mes=0; mes <= 12; mes++){
    const caja = document.getElementsByClassName('calendario')
    const hijo = document.createElement('div');
    hijo.className = 'container-mes'
    hijo.innerHTML = '<p class="meses">' + contador + '</p>'

    caja[0].appendChild(hijo);
    console.log (contador)
    contador = mesesDelAno[mes];


    
}
   
    
    
for (let semana = 0;semana < 8; semana++){
    const boxes = document.getElementsByClassName('container-mes');
    const child = document.createElement('div');
    child.className = 'semana-container'
    child.innerHTML = '<span class="dias">' +  semanasC + '</span>';
    
    
    boxes[0].appendChild(child);
   
    console.log (semanasC)
    semanasC = diasDeSemana[semana];


}

for (dia = 1; dia < 32; dia++){
    const boxes = document.getElementsByClassName('semana-container');
    const child = document.createElement('span');
    child.innerHTML = '<span class="numeros">' +  dia + '</span>';
    
    
    boxes[0].appendChild(child);
   
    console.log (dia);
}

