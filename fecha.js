
let url='https://api.open-meteo.com/v1/forecast?latitude=-54.82&longitude=-68.36&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m&timezone=America%2FSao_Paulo';
let diaX="";
async function getWheather(){
    try {
        let resp=await fetch('https://api.open-meteo.com/v1/forecast?latitude=-54.82&longitude=-68.36&hourly=temperature_2m,apparent_temperature,precipitation,windspeed_10m&timezone=America%2FSao_Paulo');
        respJson=await resp.json();
        console.log(respJson);

        diaX=respJson.hourly.time[0];
        let diasSemanas=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
        console.log(diasSemanas[moment(diaX).day()]);


        if(!resp.ok) throw{status:resp.status,statusText:resp.statusText}
          
        
    } catch (error) {
       let msg=error.statusText|| "Ocurrio un error"
       let textError=document.querySelector('.error');
      
   
       mostrarError(msg,error.statusText);
    }
   
}
const mostrarError=(msg,status)=>{
    let textError=document.querySelector('.error');
    textError.style.display="block";
    textError.innerHTML=msg+". Estado de respuesta "+status
}
