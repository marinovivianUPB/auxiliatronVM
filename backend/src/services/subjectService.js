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
    logger.info("getSubjectService - Fetching subjects from the database"); 
    const subjects = await subjectRepository.getSubjectByID(id);
    logger.info("getSubjectService - Subjects fetched successfully!");
    return subjects;
  } catch (error) {
    logger.error("getSubjectService - Error fetching subjects: ", error); // Agregar log en caso de error
    throw error;
  }
};

module.exports =  {getSubjectService, getSubjectByIDService};