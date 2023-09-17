const express = require('express');
const router = express.Router();
const getUserController = require('../controllers/userController');
const {getSubjectController, getSubjectByIDController, postSubjectController,
putSubjectController, deleteSubjectController} = require('../controllers/subjectController');
const { checkAuth } = require('../middleware/auth');
// TODO: como crear un archivo index.js
const {
    getSubjectController,
    getSubjectByIdController,
    postSubjectController,
    putSubjectController,
    deleteSubjectController
} = require('../controllers/subjectController');
/**
 * @swagger
 * openapi: 3.0.0
 * info:
 *   title: API de Gestión de Materias
 *   version: 1.0.0
 * paths:
 *   /users:
 *     get:
 *       summary: Retrieve Users
 *       responses:
 *         '200':
 *           description: Users retrieved succesfully!
 *   /subjects:
 *     get:
 *       summary: Retrieve subjects
 *       responses:
 *         '200':
 *           description: Subjects retrieved succesfully!
 *     post:
 *       summary: Create a new Subject
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 credits:
 *                   type: integer
 *                 professor:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Subject created succesfully!
 *   /subjects/{id}:
 *     get:
 *       summary: Obtener una materia por su ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of subject to be retrieved
 *           schema:
 *             type: integer
 *       responses:
 *         '200':
 *           description: Subject retrieved succesfully!
 *     put:
 *       summary: Update Subject By ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of Subject to be Updated
 *           schema:
 *             type: integer
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 credits:
 *                   type: integer
 *                 professor:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Subject updated succesfully! 
 *     delete:
 *       summary: Delete Subject By ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of subject to be deleted
 *           schema:
 *             type: integer
 *       responses:
 *         '200':
 *           description: Subject deleted succesfully! 
 */
<<<<<<< HEAD
router.get('/user',  getUserController);
router.get('/subjects',  getSubjectController);
router.get(`/subjects/:id`,  getSubjectByIDController);
router.post('/subjects', postSubjectController);
router.put('/subjects/:id', putSubjectController);
router.delete('/subjects/:id', deleteSubjectController);
=======
router.get('/user', checkAuth,  getUserController);


const SUBJECT_ROUTE = '/subjects';

// GET /subjects
router.get(SUBJECT_ROUTE,  getSubjectController);

// GET /subjects/{id}:
router.get(`${SUBJECT_ROUTE}/:id`,  getSubjectByIdController);

// POST /subjects 
router.post(SUBJECT_ROUTE,  postSubjectController);

// PUT /subjects/{id}:
router.put(`${SUBJECT_ROUTE}/:id`,  putSubjectController);

// DELETE /subjects/{id}:
router.delete(SUBJECT_ROUTE,  deleteSubjectController);

>>>>>>> develop
module.exports = router;