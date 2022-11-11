const ticket = 200;
const estudiante = 0.8;
const profesor = 0.5;
const jubilado = 0.15;
const nombre = document.querySelector("#nombre");
const codigo = document.getElementById("codigo")
const email = document.querySelector("#mail");
let cantidad = document.querySelector("#cantidadTickets");
const categoria = document.querySelector("#categoriaSelect");
let totalPago = document.querySelector("#totalPago"); 
const btnResumen = document.querySelector("#btnResumen");
const btnClear = document.querySelector("#btnBorrar"); 



btnResumen.addEventListener("click", calcularMonto);

btnClear.addEventListener("click", limpiarRegistros);

function limpiarRegistros() {
  nombre.value = "";
  codigo.value = "";
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

  let string = codigo.value;
  console.log(string);
  let arrayString = [];
  arrayString = string.split(",");
  console.log(arrayString);
  console.log(arrayString.length)


  if (parseInt(cantidad.value) !== arrayString.length) {
    alert ("Ingresa cantidad acorde a los códigos ingresados");
    cantidad.focus();
    return false;
   }

    
console.log(categoria.value);

   if (categoria.value === '') {
   alert ("Ingresa una categoría");
   categoria.focus();
   return false;
 }

return true;
  }


  const emailVálido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  




   
function calcularMonto() {

  if (validar()===true) {

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






 















   











 















   




