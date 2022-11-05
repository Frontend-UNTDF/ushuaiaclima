const apiProvincias = 'https://api.open-meteo.com/v1/forecast?latitude=-54.82&longitude=-68.36&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m&timezone=America%2FSao_Paulo';

var totalDias=[]
let restoDeDia=[] 
var horaActual=moment().format('HH');
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
    let i=0;
    for (let index = inicio; index < fin; index++) {
        
        dia.hora[i]=data.hourly.time[index];
        dia.temp[i]=data.hourly.temperature_2m[index];
        dia.sensacionTerm[i]=data.hourly.apparent_temperature[index];
        dia.precipitaciones[i]=data.hourly.precipitation[index];
        dia.winds[i]=data.hourly.windspeed_10m[index];
        i+=1;
    }
}

//cargar total de dias
let cargarMisDias=(...misDias)=>{
    totalDias.push(misDias);
}
 // control de hora del dia actual
 let horas=(diaActual)=>{ 
    for (let index = 0; index < diaActual.length; index++) {
        
       
        if(moment(diaActual.hora[index]).format('HH')>horaActual){
            diaActual.hora.slice([index , diaActual.length]);
           // restoDeDia.push(diaActual.hora);
           console.log(restoDeDia);
        }
    }
  //  var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
//var masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']
}

// precipitaciones
let precipitaciones=(dia)=>{
    let sumaPrecipitaciones=0;
    for (let index = 0; index < 24; index++) {
        sumaPrecipitaciones+=dia.precipitaciones[index];
    }
    return sumaPrecipitaciones/24;
}
let viento=(dia)=>{
    let sumaViento=0    
    for (let index = 0; index < 24; index++) {
        sumaViento+=dia.winds[index]
    }
    return Math.floor(sumaViento/24);
}

fetch(apiProvincias)
    .then(res => res.json()) 
    .then(data => {
        cargarDia(data,dia1,horaActual,24);
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
        // console.log(totalDias);
        
         //console.log(moment().format());
     
        //console.log(horaActual= moment().format('HH'));  
       // horaArray=moment(dia1.hora[0]).format('HH')
       // console.log(horaActual > horaArray);        
        
       // precipitaciones
       
       
       // horas(dia1);
       console.log(dia3);
       console.log("Probabilidades de lluvia "+precipitaciones(dia3));
       console.log("Vientos promedios " + viento(dia3)+"km/h");
       // console.log(restoDeDia);
       //console.log(dia2.winds[2]);

    });
