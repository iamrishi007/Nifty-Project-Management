let form = document.querySelector("#form")

let email = document.querySelector("#email")
let password = document.querySelector("#password")

form.addEventListener('submit', function () {
          event.preventDefault()
          let obj = { "email": email.value, "password": password.value }
          console.log(obj)

          localStorage.setItem("userdata", JSON.stringify(obj))
          alert("SignUp Successful")
          
          window.open("logInPage.html")
})