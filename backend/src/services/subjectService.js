const userRepository = require("../repositories/subjectRepository");
const logger = require('../utils/logger');

const getSubjectService = async () => {
  try {
    logger.info("getSubjectService - Fetching subjects from the database"); 
    const users = await userRepository.getUser();
    logger.info("getSubjectService - Subjects fetched successfully!");
    return users;
  } catch (error) {
    logger.error("getSubjectService - Error fetching subjects: ", error); // Agregar log en caso de error
    throw error;
  }
};

module.exports =  getSubjectService;