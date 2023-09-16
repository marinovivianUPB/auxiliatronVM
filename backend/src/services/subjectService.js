const subjectRepository = require("../repositories/subjectRepository");
const logger = require('../utils/logger');

const getSubjectService = async () => {
  try {
    logger.info("getSubjectService - Fetching subjects from the database"); 
    const subjects = await subjectRepository.getSubjects();
    logger.info("getSubjectService - Subjects fetched successfully!");
    return subjects;
  } catch (error) {
    logger.error("getSubjectService - Error fetching subjects: ", error); // Agregar log en caso de error
    throw error;
  }
};

const getSubjectByIDService = async (id) => {
  try {
    logger.info("getSubjectByIDService - Fetching subjects from the database"); 
    const subjects = await subjectRepository.getSubjectByID(id);
    logger.info("getSubjectByIDService - Subjects fetched successfully!");
    return subjects;
  } catch (error) {
    logger.error("getSubjectByIDService - Error fetching subjects: ", error); // Agregar log en caso de error
    throw error;
  }
};

const postSubjectService = async (subject) =>{
  try {
    logger.info("postSubjectService - Creating subject in the database"); 
    const subjects = await subjectRepository.createSubject(subject);
    logger.info("postSubjectService - Subject created successfully!");
    return subjects;
  } catch (error) {
    logger.error("postSubjectService - Error creating subject: ", error); // Agregar log en caso de error
    throw error;
  }
}

const updateSubjectService = async (id, body) => {
  try {
    logger.info("updateSubjectService - Updating subject from the database"); 
    const subject = await subjectRepository.updateSubject(id,body);
    logger.info("updateSubjectService - Subject updated successfully!");
    return subject;
  } catch (error) {
    logger.error("getSubjectService - Error updating subject: ", error); // Agregar log en caso de error
    throw error;
  }
};

const deleteSubjectService = async (id) => {
  try {
    logger.info("deleteSubjectService - Deleting subject from the database"); 
    const subject = await subjectRepository.deleteSubject(id);
    logger.info("deleteSubjectService - Subject deleted successfully!");
    return subject;
  } catch (error) {
    logger.error("getSubjectService - Error deleting subject: ", error); // Agregar log en caso de error
    throw error;
  }
};

module.exports =  {getSubjectService, getSubjectByIDService, postSubjectService
,updateSubjectService, deleteSubjectService};