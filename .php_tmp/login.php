<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div class="login-content">
        <h1 class="login-head">Einführung ins Web Engineering</h1>
        <div id="flex-helper">
        <div class="formBox">
        <ul class="nav nav-tabs justify-content-center">
            <li class="nav-item">
                <div id="login" class="nav-link active">Login</div>
            </li>
            <li class="nav-item">
                <div id="register" class="nav-link">Registrieren</div>
            </li>
        </ul>
        <div class="modalContent">
            </div>
        </div> 
        </div>
        <div class="logo-head">
          <img id="front-image" src="./ressources/graphics/logo.png">
          <h3 class="login-head">Webseite von Hendrik Oude Hengel</h3> 
        </div>
    </div>

    <?php
      
     ?> 
</body>
<script>
buildForm();

document.getElementById('login').addEventListener('click', ()=>{
  document.getElementById('register').classList.remove("active")
  document.getElementById('login').classList.add("active")
  buildForm()
});

document.getElementById('register').addEventListener('click', ()=>{
  document.getElementById('login').classList.remove("active")
  document.getElementById('register').classList.add("active")
  buildForm()
});

function buildForm(){
  const login = document.getElementById('login').classList.contains("active");
  const space = document.querySelector(".modalContent");
  space.firstChild.remove()
  const form = document.createElement('form');
  form.setAttribute("action", "index.php");
  form.setAttribute("method", "POST");
  const modalForm = `
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email Addresse</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emailAdress">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Passwort</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password">
  </div>
  ${!login? `
  <div class="mb-3">
  <label for="exampleInputPassword2" class="form-label">Passwort Wiederholung</label>
  <input type="password" class="form-control" id="exampleInputPassword2" name="password2">
  <p style="display: none">Passwort stimmt nicht überein</p>
  </div>`: ""}
  <div class="form-button">
  <button type="submit" class="btn loginBtn">${login? "Login": "Registrieren"}</button>
  </div>`
  form.innerHTML = modalForm;
  space.appendChild(form);
}
</script>
<script
    id="bootstrap"
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
</html>