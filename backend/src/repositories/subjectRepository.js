const knex = require("knex");
const pgConnection = require("../config/knex-pg");
<<<<<<< HEAD
console.log(pgConnection);
const db = knex(pgConnection.development);

const getSubjects = async () => {
  try {
    const subjects = await db("subjects").select("*");
    const subjectsJson = subjects.map((row) => ({
=======
const db = knex(pgConnection.development);
const logger = require("../utils/logger");

const SUBJECT_TABLE = 'subjects';
const getSubjects = async () => {
  try {
    const subjects = await db(SUBJECT_TABLE).select("*");
    logger.info('getSubjects response ', subjects)
    const subjectJson = subjects.map((row) => ({
>>>>>>> develop
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
<<<<<<< HEAD
      professor: row.professor,
    }));
    return subjectsJson;
  } catch (e) {
    console.error(e);
=======
      professor: row.professor
    }));
    logger.info('subject JSON', subjectJson);
    return subjectJson;
  } catch (e) {
    logger.error('subject error', e.message);
>>>>>>> develop
    return e;
  }
};

<<<<<<< HEAD
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
=======
const getSubjectById = async (id) => {
    try {
      const subject = await db(SUBJECT_TABLE).select("*").where('id',id);
      const subjectJson = subject.map((row) => ({
        id: row.id,
        name: row.name,
        lastname: row.lastname,
        code: row.code,
        username: row.username,
      }));
      return subjectJson;
    } catch (e) {
      console.error(e);
      return e;
    }
};

const createSubject = async (subject) => {
    try {
      const subjectResponse = await db(SUBJECT_TABLE).insert(subject).select("*");
      const subjectJSON = subjectResponse.map((row) => ({
        id: row.id,
        name: row.name,
        lastname: row.lastname,
        code: row.code,
        username: row.username,
      }));
      return subjectJSON;
    } catch (e) {
      console.error(e);
      return e;
    }
  };
//TODO: Terminen
const updateSubject = async () => {
    try {
      const users = await db("users").select("*");
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

//TODO: Terminen
const deleteSubject = async () => {
    try {
        const users = await db("users").select("*");
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

module.exports.getSubjects = getSubjects ;
module.exports.getSubjectById = getSubjectById ;
module.exports.createSubject = createSubject ;
module.exports.updateSubject = updateSubject ;
module.exports.deleteSubject = deleteSubject ;
>>>>>>> develop
