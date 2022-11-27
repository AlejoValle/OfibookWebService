const { body, param } = require('express-validator');
const validators = {};

validators.createPostValidator = [
    body('title')
    .notEmpty().withMessage('El título es requerido'),
    body('description')
    .notEmpty().withMessage('La descripción es requerida')
    .isLength({ max: 250 }).withMessage('La descripción debe tener al mas 240 caracteres'),      
    body('image')
    .notEmpty().withMessage('La imagen es requerida')
    .isURL().withMessage('La imagen debe ser una URL válida')
];

validators.findPostByIdValidator = [
    param('identifier')
    .notEmpty().withMessage('El identificador es requerido')
    .isMongoId().withMessage('El identificador debe ser un ID válido')

];  

module.exports = validators; 