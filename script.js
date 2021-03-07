const mayor = 18

function login(){
    let inputEdad = document.getElementById("user2").value

if (mayor>inputEdad){
    alert ("no puede ingresar")
    swal ({
        title: "Alerta",
        text: "No puede Ingresar a la disco, es menor de edad",
        icon: "error", 
    });
 } else {
 alert ("puede ingresar")
 swal("Que Entre", "El cliente es mayor de edad", "success");
 }
}