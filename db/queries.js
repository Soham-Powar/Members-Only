const pool = require("./pool");
const bcrypt = require("bcryptjs");

async function addUser({ firstName, lastName, userName, password }) {
  const hashedPassword = await bcrypt.hash(password, 10);

  await pool.query(
    `INSERT INTO users (first_name, last_name, username, password)
     VALUES ($1, $2, $3, $4)`,
    [firstName, lastName, userName, hashedPassword]
  );
}

async function getUserByUserName(username) {
  const { rows } = await pool.query("select * from users where username = $1", [
    username,
  ]);
  return rows[0];
}

async function getUserById(id) {
  const { rows } = await pool.query("select * from users where userid = $1", [
    id,
  ]);
  return rows[0];
}

module.exports = { addUser, getUserByUserName, getUserById };
