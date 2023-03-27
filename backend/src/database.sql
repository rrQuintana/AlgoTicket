--CREATE DATABASE IF NOT EXISTS algoticket;

-- Path: AlgoTicket\backend\src\database.sql

-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS usuarios (
  "id" SERIAL PRIMARY KEY,
  "nombre" varchar(255) NOT NULL,
  "apellido" varchar(255) NOT NULL,
  "correo" varchar(255) NOT NULL,
  "contrasena" varchar(255) NOT NULL,
  "rol" varchar(255) NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL
);

INSERT INTO usuarios (nombre, apellido, correo, contrasena, rol, created_at, updated_at) VALUES 
('admin', 'admin', 'admin@gmail.com', 'admin','admin','2021-05-01 00:00:00','2021-05-01 00:00:00');