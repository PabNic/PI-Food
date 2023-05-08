const { Router } = require('express')
const { getRecipes, getRecipe } = require('../handlers/recipeHandler')
const recipeRouter = Router()

recipeRouter.get("/:id", getRecipe)
recipeRouter.get("/", getRecipes)
recipeRouter.get("/", getRecipes)
recipeRouter.get("/", getRecipes)
recipeRouter.get("/", getRecipes)



module.exports = recipeRouter;
