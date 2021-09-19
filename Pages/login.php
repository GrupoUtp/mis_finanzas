<!-- INICIO CODIGO DE PHP-->
<?php
//Inicio de session
  session_start();
//Validación de session
  if (isset($_SESSION['user_id'])) {
    header('Location: /mis_finanzas/Pages/home.php');
  }
  require '../Config/conection.php';

//Query para inicio de sesión, compara el correo y contraseña con los datos ingresados en la tabla usuarios (user).
  if (!empty($_POST['email']) && !empty($_POST['password'])) {
    $records = $conn->prepare('SELECT id, email, password FROM user WHERE email = :email');
    $records->bindParam(':email', $_POST['email']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $message = '';
//Ejecución del query, logeo exitoso/fallido.
    if (count($results) > 0 && password_verify($_POST['password'], $results['password'])) {
      $_SESSION['user_id'] = $results['id'];
       header("Location: /mis_finanzas/Pages/home.php");
    }else {
      $message = 'Error, datos ingresados incorrectamente';
    }
  }
?>
<!-- FIN CODIGO PHP-->

<!-- PAGINA LOGIN-->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Login Form Design One | Fazt</title>
    <link rel="stylesheet" href="../Css/loginPage.css">
    <link rel="stylesheet" href="../Css/layouts/header.css" type="text/css">
  </head>
  <body>

<!--Barra de navegación.-->
  <nav class="navBar">
   <a href="#" class="nav-logo">MY FINANCE$</a>
      <ul>
        <li><a href="../index.php">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
  </nav>
    <div class="login-box">
      <img src="../Images/prueba.png" class="avatar" alt="Avatar Image"> <!--Imagen Logo-->
      <h1>Login Here</h1>
        <!--INICIO CODIGO PHP, Mensaje de login exitoso/fallido-->
       <?php if(!empty($message)): ?>
       <p> <?= $message ?></p>
        <?php endif; ?>
        <br>
        <form action="login.php" method="post">
        <!-- Usuario -->
        <label for="username">Email</label>
        <input type="email" name="email" placeholder="Enter email"><!--Escribe en input la acción-->
        <!-- Constraseña -->
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Enter Password">
        <!-- Boton Log In -->
        <input type="submit" value="Log In"><!--Activa el formulario al hacerle click-->
        <!-- Link a interfaz: cambiar contraseña -->
        <a href="#">Lost your Password?</a><br>
        <!-- Link a interfaz: crear usuario -->
        <a href="#">Don't have An account?</a>
      </form>
    </div>
  </body>
</html>