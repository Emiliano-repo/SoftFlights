/*
let vuelos = prompt ("Ingresar destino de origen ")
console.log(vuelos)
// Declaro mi funcion 
function sumar(){
     return 2+2 ;
     console.log("resultado")
}
//aca llama a la fauncion 
let resultado = sumar()
 console.log("resultado")
 sumar();

---------------------------
function esRojo(){
     return true

}
let bool = esRojo()
console.log(bool )
console.log(typeof bool)
*/
/*---------------SACAR EL CUEDRADO DE UN NUMERO -----------------

function cuadrado (numero){
     return numero * numero 
}
let resultado = 10 + cuadrado (10);

console.log(resultado);
---------------SACAR EL CUEDRADO DE UN NUMERO -----------------

*/

/*


const suma = (a,v) =>{return a + b }
const resta = (a , b ) => a-b;

console.log (suma(15,20))
console.log (resta(20,2))

*/
/* Maqueta de vuelos 
function  bs_vuelos(destino, aerop_salida ,aerop_llegada,fecha_salida,fecha_vuelta,calse,Cant_pasajeros,estado){
     this.destino = destino;
     this.aerop_salida = aerop_salida;
     this.aerop_llegada = aerop_llegada;
     this.fecha_salida = fecha_salida;
     this.fecha_vuelta = fecha_vuelta;
     this.Cant_pasajeros = Cant_pasajeros;
     this.estado = estado;
     
}
// Constullo el objeto vuelos 
let vuelo_1 = new bs_vuelos("Miami","Ezeiaza","Miami Internacional","11/11/2022","30/12/2022","Econimica","1","ONLINE");
let vuelo_2 = new bs_vuelos("Londres","Londres","Ezeiaza","1/11/2022","3/12/2022","Econimica","1","ONLINE");
let vuelo_3 = new bs_vuelos("Cancun","Ezeiza","Mexico,Cancun","1/7/2022","7/12/2022","Econimica","2","ONLINE");


// Llamo al vuelo con datos 
console.log(vuelo_1.destino);
console.log(vuelo_1.aerop_salida);
console.log(vuelo_1.aerop_llegada);
console.log(vuelo_1.fecha_salida);
console.log(vuelo_1.fecha_vuelta);
console.log(vuelo_1.Cant_pasajeros);
console.log(vuelo_1.estado);


console.log(vuelo_2.destino);
console.log(vuelo_2.aerop_salida);
console.log(vuelo_2.aerop_llegada);
console.log(vuelo_2.fecha_salida);
console.log(vuelo_2.fecha_vuelta);
console.log(vuelo_2.Cant_pasajeros);
console.log(vuelo_2.estado);


//in si una propiedad exsite en un objeto : devuelve un treu 

console.log("destino" in vuelo_1); 

// for off . Recorre las propuiedades de un objeto y los muestra ------------
for(let propiedad in vuelo_2){
     console.log(vuelo_2 [propiedad]);
}
*/


// funcion consutctora . 
class bs_vuelos{
     constructor(destino,aerop_salida ,aerop_llegada,fecha_salida,fecha_vuelta,calse,Cant_pasajeros,estado){
     this.destino = destino;
     this.aerop_salida = aerop_salida ;
     this.aerop_llegada = aerop_llegada;
     this.fecha_salida = fecha_salida;
     this.fecha_vuelta = fecha_vuelta;
     this.Cant_pasajeros = Cant_pasajeros;
     this.estado = estado;

     }
// METODOS PARA MOSTRAR :
     ver(){
          console.log("Ingrese Destino ",this.destino)
          console.log("Ingrese Destino ",this.aerop_llegada)
          console.log("Ingrese Destino ",this.fecha_salida)
          console.log("Ingrese Destino ",this.fecha_vuelta)
     }

     //Privado getter y setter metodo me trae los datos y lo ejecuto abajo   : 
     get_datos(){
          console.log("Datos del Vuelo ");
          console.log("Fecha de llegada", this.destino);
          console.log("Aeropuerto de llegfada",this.aerop_llegada);
          console.log("Fecha de llegada", this.fecha_vuelta);


     }
     // setters  : 
     set_destino1(destinos){
          this.destino= destinos;
     }




}
// datos de mi Case 
let vuelo_1 = new bs_vuelos("Miami Internacional","11/11/2022","30/12/2022","Econimica","1","ONLINE");
let vuelo_2 = new bs_vuelos("Ezeiaza","1/11/2022","3/12/2022","Econimica","1","ONLINE");
let vuelo_3 = new bs_vuelos("Ezeiza","Mexico,Cancun","1/7/2022","7/12/2022","Econimica","2","ONLINE");


// 
destino = parseInt (prompt("Ingrese el destino "));



//aca guartdo loda ts  SETTER 
vuelo_1.set_destino1(destino);


// asi muestro la clase . : 
vuelo_1.get_datos();


console.log("EL vuelo es :",vuelo_1);
vuelo_1.ver();
vuelo_2.ver();
vuelo_2.ver();
vuelo_2.ver();
