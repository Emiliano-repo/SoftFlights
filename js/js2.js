
// Armando una Agenda . 

let agenda = [
     { nombre: "Lizi", tel: 232323, domicilio: "Palacios " }
     { nombre: "emi", tel: 232323, domicilio: "Palacios " }
     { nombre: "fiama", tel: 2321111323, domicilio: "Palacios " }
     { nombre: "nico", tel: 232323, domicilio: "Palacios " }
     { nombre: "Esteban", tel: 2321323, domicilio: "Palacios " }
     { nombre: "Ezzequiel", tel: 2312323, domicilio: "Palacios " }
     { nombre: "Mirna", tel: 2323231, domicilio: "Palacios " }
]

// Agregar personas : 
agenda.push({ nombre: "Eliana", tel: 4564, domicilio: "lodo 234" })

// agrego al princpio 
agenda.unshift({ nombre: "Anastiacia", tel: 456456, domicilio: "avenida 40" })

// Borro Contacto shift: 
agenda.unshift({ nombre: "Anastiacia", tel: 456456, domicilio: "avenida 40" })

// Quito desde el final con pop : 
agenda.pop({ nombre: "Eliana", tel: 4564, domicilio: "lodo 234" })

// Quita desde hasata 
agenda.splice(1, 1)

// Quita desde posicion 1 , 0 
agenda.splice(1, 0, { nombre: "emi", tel: 232323, domicilio: "Palacios " })

// editar :sacar uno y poner otro interecabio datos 
agenda.splice(1.0 { nombre: "emi", tel: 232323, domicilio: "Palacios " })


console.log(agenda)

// some : 

//Le pregunto si exsite un dato en ese array 
//Busco con funcio flecha 
let buscar = agenda.some((el => el.nombre === "Lizi" && el.tel === 232323))
console.log(buscar)


//Busco otra funcion para en geenral . 
function buscarOtro(nombre, tel) {
     return agenda.same(el => el.nombre === nombre && el.tel === tel)
}

let estePersonaje = buscarOtro("Lizi", 232323)

console.log(estePersonaje)


//Copiar agneda 
//Metodo 1
let agendaCopia = agenda.slice()

//Copiar a genda 
//Metodo 2
let agendaCopia2 = [...agenda]

// Copiar una sola parte 
let agendaCipia3 = agenda.slice(1, 2)

//Encuntro una agenda vieja .Unir agendas de ayyas

let agenda2 = [{ nombre: "Pocasontas", tel: 12232, domicilio: "Arenales 855" }
               { nombre: "Verso", tel: 12232, domicilio: "Arenal w 855" }
]

//Opcion 1 

let agendaNueva = agenda.concat(agenda2)

//Opcion 2 
let agendaNueva2 = [...agenda, ...agenda2]

//find foreach recorreo el array para algo 

// ver todo slos nombres
//objeto + funcion fglecha + retona objeto nombres  
agenda.forEach((obj => console.log(obj.nombre)))

//que correa el array y que me muestre el nombre : el teelfono . String con javascritp 
agenda.forEach((obj) => document.write(`${obj.nombre} : ${obj.tel}`))

// Esta agendada Lizi ?
// Paso parametros agenda , nombre, nuevo 
function buscarYagregar(agenda, nombre, nuevo) {
     if (agenda.find(el => el.nombre == nombre)) {
          console.log(`${nombre} ya esta cargado en la agenda `){
               
          }else{
               agenda.push(nuevo)
          }
     }

     buscarYagregar(agenda, "Lizi",{nombre:"Lizi"})
}

