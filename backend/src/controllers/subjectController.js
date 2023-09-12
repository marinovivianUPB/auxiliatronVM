const {getSubjectService, getSubjectByIDService} = require('../services/subjectService');
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

const getSubjectByIDController = async (req, res) => {
    logger.info('getSubjectByIDController - Req', req);
    const {id} = req.params.id;
    try {
        const users = await getSubjectByIDService(id);
        return res.status(200).json({
            success: true,
            message: 'Subject retrieved successfully',
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subject',
            error: error.message
        })
    }
    
};

const postSubjectController = async(req, res) =>{
    logger.info('postSubjectController - Req', req);
    const {body} = req;
    logger.info('postSubjectController - Body', body);
    try {
        const subject = await postSubjectService(body);
        return res.status(200).json({
            success: true,
            message: 'Subject retrieved successfully',
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subject',
            error: error.message
        })
    }
}

module.exports = {getSubjectController,
     getSubjectByIDController,postSubjectController};