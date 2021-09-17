<?php
//Conexión con base de datos
$server = 'localhost';
$username = 'root';
$password = '';
$database = 'mis_finanzas';

try {
  $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
} catch (PDOException $e) {
  die('Connection Failed: ' . $e->getMessage());
}

?>
