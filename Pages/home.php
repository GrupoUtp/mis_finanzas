<!--INICIO CODIGO PHP-->
<?php
//Inicio session y conexión con base de datos.
  session_start();
  require '../Config/conection.php';
//Seleccion de datos mediante el id del usuario logueado.
  if (isset($_SESSION['user_id'])) {
    $records = $conn->prepare('SELECT id, email, password, name, last_name  FROM user WHERE id = :id');
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
    <link rel="stylesheet" href="../Css/layouts/header.css" type="text/css">
    <link rel="stylesheet" href="../Css/homePage.css" type="text/css">
    <script src="https://kit.fontawesome.com/edb0f779f5.js" crossorigin="anonymous"></script>
  </head>
<body>
  
<!--Barra de navegación-->
 <nav class="navBar">
    <a href="#" class="nav-logo">MY FINANCE$</a>
      <ul>
        <li><a href="../index.php">Home</a></li>
        <li><a href="#">About</a></li>
        <li class="li-items"><a id="log" href="profile.php"><?= $user['name'],' ',$user['last_name'],' '?>&nbsp;<i class="fas fa-cog"></i></a></li>
        <li><a href="logout.php" id="btnlogout">Cerrar sesion</a></li>
      </ul>
  </nav>
<!--Contenido pagina-->
  <div class="contentProfile">
  </div>
  </body>
</html>
