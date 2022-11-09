const ticket = 200;
const estudiante = 0.8;
const profesor = 0.5;
const jubilado = 0.15;
const nombre = document.querySelector("#nombre");
console.log(nombre)
const codigo = document.getElementById("codigo")
console.log(codigo);
const email = document.querySelector("#mail");
let cantidad = document.querySelector("#cantidadTickets");
console.log(cantidad.value);
const categoria = document.querySelector("#categoriaSelect");
let totalPago = document.querySelector("#totalPago"); // aca no habias colocado el #
const btnResumen = document.querySelector("#btnResumen");
const btnClear = document.querySelector("#btnBorrar"); //fijate que aca tampoco lo habias puesto




btnResumen.addEventListener("click", calcularMonto);

btnClear.addEventListener("click", limpiarRegistros);

function limpiarRegistros() {
  console.log("carga");
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  cantidad.value = "";
  categoria.value = "";
  totalPago.textContent = "" ;
}


function validar() {

   
  if (nombre.value === "") {
    alert ("Ingresa nombre y apellido");
    nombre.focus();
    return false;
  
   }
   if (codigo.value === "") {
     alert ("Ingresa código/s separados por coma");
     codigo.focus();
     return false;
    }
    
   if (email.value === "") {
     alert("Por favor, escribe tu correo electrónico");
     email.focus();
     return false;
   }
  
  
  
   if (!emailVálido(email.value)) {
     alert("Por favor, escribe un correo electrónico válido");
     email.focus();
     return false;
   }
  
  
  if (cantidad.value === "") {
   alert ("Ingresa cantidad");
   cantidad.focus();
   return false;
  }

  if ((Math.sign(parseInt(cantidad.value))) == -1) {
   alert('Ingresa números positivos enteros');
   cantidad.focus();
   return false;
  } 



  return true;
  }
  const emailVálido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }


   
function calcularMonto() {


  if (validar()===true) {
  
 //CALCULO:

totalPago.textContent =
    ((ticket  * parseInt(cantidad.value))  - calcularDescuento(ticket, parseInt(cantidad.value)));
}
}




function calcularDescuento() {
  switch (categoria.value) {
    case "0":
      return 0;
    case "1":
      return (ticket * estudiante) * parseInt(cantidad.value);
    case "2":
        return (ticket * profesor) * parseInt(cantidad.value); 
    case "3":
        return (ticket * jubilado) * parseInt(cantidad.value);     
        
    default:
      break;
  }
}






 















   




