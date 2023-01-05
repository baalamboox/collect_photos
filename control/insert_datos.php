<?php
  require_once '../app/conexion.php';
  $conexion = conexion();
  $sql = "INSERT INTO tabla_cobros(cantidad_cobro) VALUES (?)";
  $query = $conexion->prepare($sql);
  $query->bind_param('s', $_POST['precio']);
  $query_executed = $query->execute();
  $query->close();
  echo $query_executed;
  
?>