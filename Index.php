<!-- INICIO CODIGO DE PHP-->
<?php
//Realizar conexión a base de datos.
 require 'conection.php';
//Variable iniciada de mensaje emergente.
 $message = ''; 

//Validación de datos con el formulario de registro tomara el email, contraseña, nombre, apellido.
 if (!empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['name']) && !empty($_POST['last_name'])){
//Query para ingresar los datos del formuario de registro en la tabla usuario (user).
    $sql = "INSERT INTO user (email, password, name, last_name)
    VALUES (:email, :password, :name, :last_name)";

    $stmt = $conn->prepare($sql); //NO RECUERDO :|

//Captura de datos del formulario email, contraseña, nombre, apellido.
    $stmt->bindParam(':email',$_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $stmt->bindParam(':password',$password);
    $stmt->bindParam(':name',$_POST['name']);
    $stmt->bindParam(':last_name',$_POST['last_name']);

//Ejecución del query.
     if ($stmt->execute()){
         $message = 'USUARIO CREADO'; //Mensaje de logeo exitoso.
     }else{
         $message = 'ERROR AL CREAR USUARIO'; //Mensaje de error.
     }
 }
?>
<!-- FIN CODIGO PHP-->

<!-- PAGINA LADING-->

<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="Css/Home.css"  type="text/css"> 
   <link rel="stylesheet" href="Css/Popup.css" type="text/css">
   <link rel="stylesheet" href="Css/styleInputs.css" type="text/css">
   <title>MY FINANCE$</title>
 </head>
<body>

<!--Barra de navegación.-->
    <nav class="navBar">
        <a href="#" class="nav-logo">MY FINANCE$</a>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="login.php">Login</a></li>
        </ul>
    </nav>
<!--Contenido de la pagina lading-->
    <main>
        <div class="content">
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sequi nisi placeat accusamus harum necessitatibus libero aliquam voluptatem impedit, incidunt, eum alias distinctio reprehenderit sed. Perspiciatis ex dicta distinctio assumenda?</p>
            <a href="#modal" class="btns">Get Started</a>
            <a href="" class="btns">Learn More</a>
        </div>
        <div class="imglobby">
            <img src="Images/lobby.png" alt="">
        </div>
    </main>
<!-- Ventana emergente. -->
    <div class="container-all" id="modal">
        <div class="popup">
            <div class="imgpop"></div>
                <div class="container-text">
                <div class="buttons">
                    <h6>Restrigar usuario</h6>
                    <!--INCIO CODIGO PHP, Mensaje de registro fallido/exitoso-->
                    <?php if(!empty($message)):?>
                    <p><?= $message ?></p>
                    <?php endif; ?>
                    <!--FIN CODIGO PHP-->
                </div>
                <!-- FORMULARIO DE REGISTRO-->
                <form action="" method="post">
                <input type="email" name="email" placeholder="Gmail" required>
                <input type="password" name="password" placeholder="Contraseña" required>
                <input type="password" name="confirm_password" placeholder="Confirma contraseña" required>
                <input type="text" name="name" placeholder="Nombre" required>
                <input type="text" name="last_name" placeholder="Apellido" required>
                <input type="submit" value="Send">
                </form>
            </div>
            <!--Boton de cerrar ventana emergente-->
            <a href="#" class="btn-close-popup">x</a>
        </div>
    </div>
    

</body>
</html>