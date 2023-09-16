const {getSubjectService, getSubjectByIDService, postSubjectService
,updateSubjectService,deleteSubjectService} = require('../services/subjectService');
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
    const id = req.params.id;
    try {
        const subject = await getSubjectByIDService(id);
        return res.status(200).json({
            success: true,
            message: 'Subject retrieved successfully',
            data: subject
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
    const body = req.body;
    logger.info('postSubjectController - Body', body);
    try {
        const subject = await postSubjectService(body);
        return res.status(200).json({
            success: true,
            message: 'Subject created successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating subject',
            error: error.message
        })
    }
}

const putSubjectController = async (req, res) => {
    logger.info('putSubjectController - Req', req);
    const id = req.params.id;
    const body = req.body;
    logger.info('putSubjectController - Body', body);
    try {
        const subject = await updateSubjectService(id, body);
        return res.status(200).json({
            success: true,
            message: 'Subject updated successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error updating subject',
            error: error.message
        })
    }
    
};

const deleteSubjectController = async (req, res) => {
    logger.info('deleteSubjectController - Req', req);
    const id = req.params.id;
    try {
        const subject = await deleteSubjectService(id);
        return res.status(200).json({
            success: true,
            message: 'Subject deleted successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error deleting subject',
            error: error.message
        })
    }
    
};

module.exports = {getSubjectController,
     getSubjectByIDController,postSubjectController
    ,putSubjectController, deleteSubjectController};