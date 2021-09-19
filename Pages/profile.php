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
    $message = "";
//CAMBIO CONTRASEÑA

?>
<!--FIN CODIGO PHP-->

<!-- PAGINA HOME-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Css/layouts/header.css" type="text/css">
    <link rel="stylesheet" href="../Css/layouts/styleInputs.css" type="text/css">
    <link rel="stylesheet" href="../Css/profilePage.css" type="text/css">
    <title>Document</title>
</head>
<body>
<nav class="navBar">
    <a href="#" class="nav-logo">MY FINANCE$</a>
      <ul>
        <li><a href="logout.php" id="btnlogout">Cerrar sesion</a></li>
      </ul>
  </nav>

  <div class="content">
  <h1>Cambio de contraseña</h1>
  <?php $message ?>
    <form action="" method="post">
      <input type="email" name="email" placeholder="<?= $user['email']?>"disabled>
      <label>Cambiar contraseña</label>
      <input type="password" name="password" placeholder="Contraseña antigua" required>
      <input type="password" name="passnew" placeholder="Contraseña nueva" required>
      <input type="password" name="cpass" placeholder="contraseña" required>
      <input type="text" name="name" placeholder="<?= $user['name']?>"disabled>
      <input type="text" name="last_name" placeholder="<?= $user['last_name']?>"disabled>
      <input type="submit" value="Cambiar contraseña" name="edit">
   </form>

  </div>

</body>
</html>