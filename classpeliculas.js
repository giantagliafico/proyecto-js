function encuesta(){

    usuarioAgregado= new generoSeleccionado(usuarioAgrega);
    agregados();
}
function generoSeleccionado(genero){
    this.genero=genero
}
let usuarioAgrega = document.getElementById('catalogos');
let generosAgregados=[];
    function agregados(){
      generosAgregados.push(usuarioAgregado) 
   
    
    }
    function showtostify(mensaje){
        Toastify({
            text: mensaje,
            className: "error",
            style: {
              background: "linear-gradient(to right,#FF3B3B,#FF2525)",
            }
          }).showToast(); 
    }
    let boton = document.getElementById("botonenc")
    boton.addEventListener("click", e=>{
        e.preventDefault
        
        if (generosAgregados <= 2){
            showtostify("Por favor seleccionar 2 o mas generos")      
        }
        else{
            swal({
                title: "¡Enviado correctamente!",
                text: "Muchas gracias por ayudarnos a conocerte.",
                icon: "success",
                button: "Hasta la proxima",
              });
        }
    }
    )