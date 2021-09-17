<!--INICO CODIGO PHP-->
<?php
//Cerrar session
  session_start();

  session_unset();

  session_destroy();

  header('Location: /mis_finanzas');
?>
<!--FIN COGIDO PHP-->