const getSubjectService = require('../services/subjectService');
const logger = require('../utils/logger');

const getSubjectController = async (req, res) => {
    logger.info('getSubjectController - Req', req);
    try {
        const users = await getSubjectService();
        return res.status(200).json({
            success: true,
            message: 'Subjects retrieved successfully',
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subjects',
            error: error.message
        })
    }
    
};

module.exports = getSubjectController;