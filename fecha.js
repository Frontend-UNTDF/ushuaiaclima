

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
//variables de uso
let diasSemanas=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
var totalDias=[]
let restoDeDia=[] 
var horaActual=moment().format('HH');

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
//carga de paquete de 7dias
let cargarMisDias=(...misDias)=>{
    totalDias.push(misDias);
}

//obtener nombre del dia de la semana para las card
const getNameDay=(diasSemanas,dia) =>{
    return diasSemanas[moment(dia.hora[0]).day()];
}

async function getWheather(){
    try {
        let resp=await fetch('https://api.open-meteo.com/v1/forecast?latitude=-54.82&longitude=-68.36&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m&timezone=America%2FSao_Paulo');
        data=await resp.json();
        console.log(data);
        cargarDia(data,dia1,horaActual,24);
        cargarDia(data,dia2,24,48);
        cargarDia(data,dia3,48,72);
        cargarDia(data,dia4,72,96);
        cargarDia(data,dia5,96,120);
        cargarDia(data,dia6,120,144);
        cargarDia(data,dia7,144,168);
        cargarMisDias(dia1,dia2,dia3,dia4,dia5,dia6,dia7);
        console.log(getNameDay(diasSemanas,dia1));
        hiddeInitCard();
        currentDay();

         //obtener Objeto de errores para mostrar 
        if(!resp.ok) throw{status:resp.status,statusText:resp.statusText}
    } catch (error) {
       let msg=error.statusText|| "Ocurrio un error"
       //let textError=document.querySelector('.error');
      
   
       mostrarError(msg,error.statusText);
    }
   
}
//msg de alerta.
const mostrarError=(msg,status)=>{
    let textError=document.querySelector('.error');
    textError.style.display="block";
    textError.innerHTML=msg+". Estado de respuesta "+status
}
const hiddeInitCard=()=>{
    let card=document.querySelector('.my-card');
    card.style.display="none";
    let mainCard=document.querySelector('.mainCard');
    mainCard.style.display="block";
}
const currentDay=()=>{
    const nameDay=document.getElementById('nameDay');
    
}
// const cardCurrentDay=document.getElementById('cardCurrentDay')
// const fragment=document.createDocumentFragment();
obejto.map
//cardCurrentDay.querySelector('.currentDay')