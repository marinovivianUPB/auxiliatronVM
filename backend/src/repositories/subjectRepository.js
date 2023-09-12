const knex = require("knex");
const pgConnection = require("../config/knex-pg");
console.log(pgConnection);
const db = knex(pgConnection.development);

const getSubjects = async () => {
  try {
    const subjects = await db("subjects").select("*");
    const subjectsJson = subjects.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    return subjectsJson;
  } catch (e) {
    console.error(e);
    return e;
  }
};

const getSubjectByID = async (id) => {
  try {
    const subjects = await db("subjects").select("*").where("id", id).first();
    const subjectsJson = subjects.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    return subjectsJson;
  } catch (e) {
    console.error(e);
    return e;
  }
};

const createSubject = async(subject) =>{
  try{
    const subjectResponse = await db("subjects").insert(subject);
    const subjectJSON = subjectResponse.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    return subjectJSON;
  } catch (e){
    console.error(e);
    return e;
  }
}

module.exports.getSubjects= getSubjects ;
module.exports.getSubjectByID= getSubjectByID ;
