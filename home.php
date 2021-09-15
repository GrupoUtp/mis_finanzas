<!--INICIO CODIGO PHP-->
<?php
//Inicio session y conexión con base de datos.
  session_start();
  require 'conection.php';
//Seleccion de datos mediante el id del usuario logueado.
  if (isset($_SESSION['user_id'])) {
    $records = $conn->prepare('SELECT id, email, password FROM user WHERE id = :id');
    $records->bindParam(':id', $_SESSION['user_id']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $user = null;

    if (count($results) > 0) {
      $user = $results;
    }
  }
?>
<!--FIN CODIGO PHP-->

<!-- PAGINA HOME-->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Welcome to you WebApp</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="Css/Home.css" type="text/css">
    <link rel="stylesheet" href="Css/styleInputs.css" type="text/css">
  </head>
<body>
  
<!--Barra de navegación-->
 <nav class="navBar">
    <a href="#" class="nav-logo">MY FINANCE$</a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a id="log" href="logout.php">Cerrar sesión</a></li>
      </ul>
  </nav>
<!--Contenido pagina-->
    <br><br><br><br><br><br><br><br> <!--LINEA DE BUG-->
  <div class="contentProfile">
    <!--INICIO CODIGO PHP, Obtención de datos de usuarios, en este caso el email-->
    <?php if(!empty($user)): ?>
      <br> Welcome. <?= $user['email']; ?>
      <br>You are Successfully Logged In
      <a href="logout.php">Logout</a>
    <?php endif; ?>
    <!-- FIN CODIGO PHP-->
  </div>
  </body>
</html>
