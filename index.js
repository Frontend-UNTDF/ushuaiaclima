const apiProvincias = 'https://api.open-meteo.com/v1/forecast?latitude=-54.82&longitude=-68.36&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m&timezone=America%2FSao_Paulo';

var totalDias=[]

//var horaActual=moment().format('HH:mm:ss ');
var dia1={
    hora:[],
    temp:[],
    sensacionTerm:[],
    precipitaciones:[],
    winds:[]
}
var dia2={
    hora:[],
    temp:[],
    sensacionTerm:[],
    precipitaciones:[],
    winds:[]
}
var dia2={
    hora:[],
    temp:[],
    sensacionTerm:[],
    precipitaciones:[],
    winds:[]
}
var dia3={
    hora:[],
    temp:[],
    sensacionTerm:[],
    precipitaciones:[],
    winds:[]
}
var dia4={
    hora:[],
    temp:[],
    sensacionTerm:[],
    precipitaciones:[],
    winds:[]
}
var dia5={
    hora:[],
    temp:[],
    sensacionTerm:[],
    precipitaciones:[],
    winds:[]
}
var dia6={
    hora:[],
    temp:[],
    sensacionTerm:[],
    precipitaciones:[],
    winds:[]
}
var dia7={
    hora:[],
    temp:[],
    sensacionTerm:[],
    precipitaciones:[],
    winds:[]
}
//funcion para cargarDia
let cargarDia=(data,dia,inicio,fin) => {
    for (let index = inicio; index < fin; index++) {
        dia.hora[index]=data.hourly.time[index];
        dia.temp[index]=data.hourly.temperature_2m[index];
        dia.sensacionTerm[index]=data.hourly.apparent_temperature[index];
        dia.precipitaciones[index]=data.hourly.precipitation[index];
        dia.winds[index]=data.hourly.windspeed_10m[index];
    }
}

//cargar total de dias
let cargarMisDias=(...misDias)=>{
    totalDias.push(misDias);
}
 // control de hora del dia actual
 let horas=(diaActual)=>{ 
    let restoDeDia=[] 
    
    let hora1="00:00:00"
    let hora2="23:00:00"

    //date_fns
   
  // console.log(moment(hora1).isAfter(hora2));
    for (let index = 0; index < diaActual.length; index++) {
        var isAfter = require('date-fns/isAfter')
        let comparacion=isAfter(new Date(hora1),new Date(hora2));
        console.log("Hola"+comparacion);
            //restoDeDia.push(diaActual);
        
        //beginningTime.isBefore(endTime)
    }
     return restoDeDia;
 
 }

fetch(apiProvincias)
    .then(res => res.json()) 
    .then(data => {
        cargarDia(data,dia1,0,24);
        cargarDia(data,dia2,24,48);
        cargarDia(data,dia3,48,72);
        cargarDia(data,dia4,72,96);
        cargarDia(data,dia5,96,120);
        cargarDia(data,dia6,120,144);
        cargarDia(data,dia7,144,168);
        cargarMisDias(dia1,dia2,dia3,dia4,dia5,dia6,dia7);
 
        console.log(dia1);
        console.log(dia2);
        console.log(dia3);
        console.log(dia4);
        console.log(dia5);
        console.log(dia6);
        console.log(dia7);
        console.log(totalDias);
        
        // console.log(moment().format('h:mm:ss a'));
        // console.log(moment().format());
        // console.log(moment(dia1.hora[0]).format('h:mm:ss a'));        
        
       
        horas(dia1);
        console.log(horas(dia1));
       

    });
  