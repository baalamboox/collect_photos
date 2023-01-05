<?php
    require_once '../app/conexion.php';
    $conexion = conexion();
    $sql = "SELECT id_cobro, cantidad_cobro, fecha_cobro FROM tabla_cobros";
    $query = $conexion->query($sql);
    while($data = mysqli_fetch_assoc($query)) {
?>
        <tr>
            <td><?php echo $data['id_cobro'];?></td>
            <td><?php echo $data['cantidad_cobro'];?></td>
            <td><?php echo $data['fecha_cobro'];?></td>
        </tr>
<?php
    }
?>