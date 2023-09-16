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
    const subjects = await db("subjects").select("*").where('id', id);
    const subjectsJson = subjects.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    return subjectsJson[0];
  } catch (e) {
    console.error(e);
    return e;
  }
};

const createSubject = async(subject) =>{
  try{
    const subjectResponse = await db("subjects").insert(subject).returning('*');
    console.log(subjectResponse)
    const subjectJSON = subjectResponse.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
      created_at: row.created_at,
      updated_at: row.updated_at
    }));
    return subjectJSON[0];
  } catch (e){
    console.error(e);
    return e;
  }
}

const updateSubject = async (id,body) => {
  try {
    const subjects = await db("subjects").where('id', id).update(body).returning('*');
    const subjectsJson = subjects.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    return subjectsJson[0];
  } catch (e) {
    console.error(e);
    return e;
  }
};

const deleteSubject = async (id) => {
  try {
    const subjects = await db("subjects").where('id', id).delete();
    return subjects;
  } catch (e) {
    console.error(e);
    return e;
  }
};

module.exports.getSubjects= getSubjects ;
module.exports.getSubjectByID= getSubjectByID ;
module.exports.createSubject = createSubject;
module.exports.updateSubject = updateSubject;
module.exports.deleteSubject = deleteSubject;
