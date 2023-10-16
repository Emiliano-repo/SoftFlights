
// Switch (MENU)
let menu = prompt("Ingrese 1. Para realizar Checkin / 2.Ingresar Descuento / 3 Salir del sistema")

switch (menu) {
    case "1":
        console.log("-----------Bienvenidso al sistema check in -----")
        let nombre = prompt("Ingrese el nombre del Pasajero : ");
        if (nombre == "") { // Pregunti si es vacio . 
            alert("No ingresaste el nombre");
            nombre = prompt("Ingrese el nombre del Pasajero : ");
        }
        const nomProfugos = ['Emiliano', 'Florencia', 'Maria', 'Eugenio', 'Maxi']; // Creo mi primer allay 

        //Creo mi Molde persona : 


        // Creo mi funcion Para saber si esta apta para salir del pais . 
        const resultado = nomProfugos.some((item) => item == nombre)
        if (resultado === true) {
            console.log("ATENCION !! LA PERSONA ESTA PROFUGA DE LA LEY ")
            break;
        } else {
            console.log("LA PERSONA PUEDE VIAJAR")
        }
        let doc_dni = prompt("Su dni ");
        if (doc_dni == "") {
            alert("No ingresaste el nombre");
        }
        let nums = doc_dni;
        if (nums % 2 == 0) {
            alert("El Dni :" + "" + nums + "Es Par Por lo tanto ingrese Lunes a Jueves ");
        } else {
            alert("El Dni :" + "" + nums + "Es Inpar Por lo tanto ingrese Viernes a Domingos ");
            break;
        }

        // Creo la funcion de dias con la cual verifico que dias es hoy . 

        var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        var f = new Date();
        document.write(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
        



        break;

    case "2":
        // Funcion De Descuento declaracion . 
        let precio_pasaje = 1500;
        let p_desc = 70;

        function descuento() {
            return p_desc * precio_pasaje / 100;
        }
        let resultado_precio = descuento();

        // Codigo pomosiones . 
        let cod_promos = [1989, 35, 10, 12];
        let variable = prompt("Ingrese Codigo de Descuento Promocional : ");

        if (variable >= cod_promos) {
            alert("Estamos Generando el nuevo Codigo ");

            for (i = 2321; i <= 2324; i += 2) {
                console.log(i);
                alert("Eliga un codigo y Ingreselo : " + ":" + i);
            }

        } else {
            alert("CODIGO DE DESCUENTO ES CORRECTO!! Acceda a un 70% OFF !! ");

            alert("EL precio con descuento es :" + "$" + resultado_precio);


        }
        let cod_nuevos;
        if (cod_nuevos == cod_nuevos) {
            alert("CODIGO DE DESCUENTO ES CORRECTO!! Acceda a un 25% OFF !! ");
        }
        let cod_reserva = prompt("Ingrese codigo de reserva: ");

        let edad = prompt("Ingrese su Edad ");

        if (edad >= 18) {
            var asientos = [3, 15, 18, 25];
            var solicitado = prompt("Ingrese un numero para ver los asientos disponibles :");

            function asientosDisponibles(asientos, solicitado) {
                if (asientos.includes(solicitado)) {
                    return `Felicitaciones, el asiento número ${solicitado} está disponible`;
                }
                return `El asiento número ${solicitado} está ocupado, pero aún quedan ${asientos.length} asientos disponibles`;
            }

            console.log(asientosDisponibles([15, 28, 44, 45, 70], 15));
            console.log(asientosDisponibles([15, 28, 44, 45, 70], 50));


            alert("Su tajeta de Embarque : " + "Su nombre :" + nombre + "" + "Edad : " + edad + "Dni :" + doc_dni
                + "" );
                document.write('<div class="mifecha">');

        } else {
            alert("Usted es Menor de Edad.!! ");

        }

        break;

    default:
        document.write("<h4>Saliste del sistema !!. </h4>");


}





















