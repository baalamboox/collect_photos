CREATE DATABASE IF NOT EXISTS registro_cobro;
USE registro_cobro;
CREATE TABLE IF NOT EXISTS tabla_cobros(
    "id_cobro" INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    "cantidad_cobro" FLOAT NOT NULL,
    "fecha_cobro" DATETIME DEFAULT current_timestamp();
) ENGINE = InnoDB;