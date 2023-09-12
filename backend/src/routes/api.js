const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/userController');
const {getSubjectController, getSubjectByIDController, postSubjectController} = require('../controllers/subjectController');
const { checkAuth } = require('../middleware/auth');

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Obtener una lista de usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 */
router.get('/user',  getUserController);
router.get('/subjects',  getSubjectController);
router.get(`/subjects/:id`,  getSubjectByIDController);
router.post('/subjects', postSubjectController);
module.exports = router;