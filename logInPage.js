let form = document.querySelector("#form")

let email = document.querySelector("#email")
let password = document.querySelector("#password")

form.addEventListener('submit', function () {
          event.preventDefault()
          let data = { "email": email.value, "password": password.value }
          console.log(data)
          let saveData = JSON.parse(localStorage.getItem("userdata"))

          if (saveData.email == data.email && saveData.password == data.password) {

                    alert("Log In Successfull")
                    window.open("onboard.html")

          }

          else {
                    alert("Invalid Username or Password")
          }

})