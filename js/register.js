
const login= document.getElementById('login');
const keys = document.querySelectorAll('#login input');

const credenciales = {
    usuario: 'rigoberno',
    passwordlogin: "rigoberto"
}

validarCredenciales = (e) => {

    if (credenciales.usuario === usuario.value && credenciales.passwordlogin === passwordlogin.value) {
        console.log("El usuario ingresó con exito")
    } 
    else {
        document.getElementById('mensaje__error').classList.remove('formulario__input-error');
        document.getElementById('mensaje__error').classList.add('mensaje__error');
    }
   

}



keys.forEach( (key) => {
    key.addEventListener('keyup', validarCredenciales);
    key.addEventListener('blur', validarCredenciales);
});

