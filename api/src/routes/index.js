const { Router } = require('express');
const recipes = require('./recipeRouter');
const diets = require('./dietsRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipeRouter', recipes);
router.use('/dietsRouter', diets);

module.exports = router;
