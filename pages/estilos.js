const $btnSignIn=document.querySelector('.sign-in-btn'),
      $btnSignUp=document.querySelector('.sign-up-btn'),
      $signUp=document.querySelector('.sign-up'),
      $signIn=document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
})

const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const contraseña = document.getElementById("contrasena")
const form = document.getElementById("form")
const parrafo =document.getElementById("parrafo")
function showtostify(mensaje){
    Toastify({
        text: mensaje,
        className: "error",
        style: {
          background: "linear-gradient(to right,#FF3B3B,#FF2525)",
        }
      }).showToast(); 
}
form.addEventListener("submit", e=>{
    e.preventDefault()
    let advertencia = ""
      
    let entrar =false
    let validacionEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
       showtostify("el nombre debe tener mas de 6 caracteres")
    
       
       entrar =true
    }
    if(!validacionEmail.test(email.value)){
        showtostify("el mail no es valido")
        entrar =true
    }
    if(contraseña.value.length < 5){
        showtostify("la contraseña debe tner mas de 6 caracteres")
        entrar =true
    }
    if(entrar){
        parrafo.innerHTML = advertencia
    }
    else{
        swal({
            title: "Formulario Validado",
            text: "Muchas gracias por tenernos en cuenta",
            icon: "success",
            button: "Hasta la proxima",
          });
    }

})
function entrar (){
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const contraseña = document.getElementById("contrasena").value
    localStorage.usuario= nombre
    localStorage.email=email
    localStorage.pasword= contraseña
}   
function mostrarUsuarioRegistrado(){
document.getElementById("email-recargar").value=localStorage.email
}