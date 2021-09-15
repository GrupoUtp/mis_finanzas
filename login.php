<!-- INICIO CODIGO DE PHP-->
<?php
//Inicio de session
  session_start();
//Validación de session
  if (isset($_SESSION['user_id'])) {
    header('Location: /mis_finanzas');
  }
  require 'conection.php';
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
      header("Location: /mis_finanzas/home.php");
    } else {
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
    <title>Login</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="Css/home.css" type="text/css">
    <link rel="stylesheet" href="Css/styleInputs.css" type="text/css">
  </head>
<body>

<!--Barra de navegación.-->
  <nav class="navBar">
   <a href="#" class="nav-logo">MY FINANCE$</a>
      <ul>
        <li><a href="index.php">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
  </nav>
<!--Contenido pagina-->
  <div class="contentLogin">
    <!--INICIO CODIGO PHP, Mensaje de login exitoso/fallido-->
     <?php if(!empty($message)): ?>
      <p> <?= $message ?></p>
     <?php endif; ?>
     <!--FIN CODIGO PHP-->
    <h1>Login</h1>
    <span>or <a href="index.php#modal">SignUp</a></span>

<!-- FORMULARIO DE LOGIN-->
    <form action="login.php" method="post">
        <input type="email" id="email" name="email" placeholder="Gmail">
        <input type="password" name="password" placeholder="Contraseña">
        <input type="submit" value="Send">
    </form>
  </div>


</body>
</html>
