const pg = require("pg");
const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123",
    database: "algoticket"
});

const usuariosController = {};

usuariosController.getUsers = async (req, res) => {
  const response = await pool.query("SELECT * FROM usuarios");
  res.status(200).json(response.rows);
};

usuariosController.getUserById = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query("SELECT * FROM usuarios WHERE id = $1", [
    id,
  ]);
  res.json(response.rows);
};

usuariosController.createUser = async (req, res) => {
  const { nombre, apellido, correo, contrasena, rol } = req.body;
  const response = await pool.query(
    "INSERT INTO usuarios (nombre, apellido, correo, contrasena, rol) VALUES ($1, $2, $3, $4, $5)",
    [nombre, apellido, correo, contrasena, rol]
  );
  console.log(response);
  res.json({
    message: "User Added successfully",
    body: {
      user: { nombre, apellido, correo, contrasena, rol },
    },
  });
};

usuariosController.updateUser = async (req, res) => {
  const id = req.params.id;
  const { nombre, apellido, correo, contrasena, rol } = req.body;

  const response = await pool.query(
    "UPDATE usuarios SET nombre = $1, apellido = $2, correo = $3, contrasena = $4, rol = $5 = WHERE id = $6",
    [nombre, apellido, correo, contrasena, id]
  );
  console.log(response);
  res.json("User Updated Successfully");
};

usuariosController.deleteUser = async (req, res) => {
  const id = req.params.id;
  await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);
  res.json(`User ${id} deleted Successfully`);
};

module.exports = usuariosController;
