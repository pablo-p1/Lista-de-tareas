function singUp() {

    let eventCorreo = document.getElementById('correoElectronico')
    let eventPassword = document.getElementById('password')

        localStorage.setItem('user',eventCorreo.value);
        localStorage.setItem('psw',eventPassword.value);
        
        window.location.href = 'home.html'
    }

//FUNCION LOGIN
  
function verificarSesion() {
  
        let userStorage = localStorage.getItem('user')
        let pswStorage = localStorage.getItem('psw')

        let eventCorreoLogin = document.getElementById('correoElectronico')
        let eventPasswordLogin = document.getElementById('password')
     
         if (eventCorreoLogin.value == userStorage && eventPasswordLogin.value == pswStorage )     {
             window.location.href = '/home.html'
         } else {
             //window.location.href = '/singIn.html'
             alert ("Usuario o contraseña incorrecta")
            
         }
     }
     



// LOGOUT
function logout() {
        window.location.href = '/index.html'
    }