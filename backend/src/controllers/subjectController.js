<<<<<<< HEAD
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
=======
const logger = require('../utils/logger');
const getSubjectsByIdService = require('../services/subjectService');
const getSubjectController = async (req, res) => {
    logger.info('getSubjectController - Req', req);
    try {
        // const users = await getUserService();
        return res.status(200).json({
            success: true,
            message: 'Subjects retrieved successfully',
            data: []
>>>>>>> develop
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subjects',
            error: error.message
        })
    }
    
};

<<<<<<< HEAD
const getSubjectByIDController = async (req, res) => {
    logger.info('getSubjectByIDController - Req', req);
    const id = req.params.id;
    try {
        const subject = await getSubjectByIDService(id);
=======
const getSubjectByIdController = async (req, res) => {
    logger.info('getSubjectByIdController - Req', req);
    
    try {
        const subject = await getSubjectsByIdService();
>>>>>>> develop
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

<<<<<<< HEAD
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
=======
const postSubjectController = async (req, res) => {
    logger.info('postSubjectController - Req', req);
    const { body } = req;
    logger.info('postSubjectController - Body', body);
    try {
        // const subject = await postSubjectService(body);
        return res.status(200).json({
            success: true,
            message: 'Subjects created successfully',
            data: []
>>>>>>> develop
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating subject',
            error: error.message
        })
    }
<<<<<<< HEAD
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
=======
    
};

const putSubjectController = async (req, res) => {
    logger.info('putSubjectController - Req', req);
    try {
        // const users = await getUserService();
        return res.status(200).json({
            success: true,
            message: 'Subjects updated successfully',
            data: []
>>>>>>> develop
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
<<<<<<< HEAD
            message: 'Error updating subject',
=======
            message: 'Error retrieving subject',
>>>>>>> develop
            error: error.message
        })
    }
    
};

const deleteSubjectController = async (req, res) => {
    logger.info('deleteSubjectController - Req', req);
<<<<<<< HEAD
    const id = req.params.id;
    try {
        const subject = await deleteSubjectService(id);
        return res.status(200).json({
            success: true,
            message: 'Subject deleted successfully',
=======
    const { params } = req;
    logger.info('deleteSubjectController - Params', params);
    const { id } = params;
    logger.info('deleteSubjectController - id', id);
    try {
        const subject = await getSubjectsByIdService(id);
        return res.status(200).json({
            success: true,
            message: 'Subjects deleted successfully',
>>>>>>> develop
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
<<<<<<< HEAD
            message: 'Error deleting subject',
=======
            message: 'Error deleting subjects',
>>>>>>> develop
            error: error.message
        })
    }
    
};

<<<<<<< HEAD
module.exports = {getSubjectController,
     getSubjectByIDController,postSubjectController
    ,putSubjectController, deleteSubjectController};
=======
module.exports = { 
    getSubjectController,
    getSubjectByIdController,
    postSubjectController,
    putSubjectController,
    deleteSubjectController
};
>>>>>>> develop
