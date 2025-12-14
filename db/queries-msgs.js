const pool = require("./pool");

async function addMessage({ userid, title, body }) {
  await pool.query(
    `INSERT INTO messages (userid, title, body, created_at)
	 VALUES ($1, $2, $3, NOW())`,
    [userid, title, body]
  );
}

async function getAllMessages() {
  const { rows } = await pool.query(
    `SELECT messages.messageid, messages.title, messages.body, messages.created_at,
			users.userid, users.first_name, users.last_name
		 FROM messages
		 JOIN users ON messages.userid = users.userid
		 ORDER BY messages.created_at DESC`
  );
  return rows;
}

module.exports = {
  addMessage,
  getAllMessages,
};
