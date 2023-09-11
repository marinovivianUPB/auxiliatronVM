const knex = require("knex");
const pgConnection = require("../config/knex-pg");
console.log(pgConnection);
const db = knex(pgConnection.development);

const getSubjects = async () => {
  try {
    const users = await db("subjects").select("*");
    const usersJson = users.map((row) => ({
      id: row.id,
      name: row.name,
      lastname: row.lastname,
      code: row.code,
      username: row.username,
    }));
    return usersJson;
  } catch (e) {
    console.error(e);
    return e;
  }
};

module.exports.getSubjects= getSubjects ;
