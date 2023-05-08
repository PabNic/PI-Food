// llamamos a la fn() que obtiene los datos de la BDD
// llamamos a la fn() que obtiene los datos de la API
// unimos los datos, unificando formato
// esperamos la asyncronia d la busqueda
// nos responde con los datos

const getRecipes = async (req, res) => {
    const { name } = req.query
    try {
        if(name) res.send(`traigo las recetas que incluyen ${name}`)
      res.send("traigo las recetas")
    } catch (error) {
        
        res.status(400).json({error: error.message, descripcion: 'error en getRecipes'})
    }
}

const getRecipe = async (req, res) => {
    const { id } = req.params
    try {
        res.send(`traigo la receta con el id ${id}`)
    } catch (error) {
        res.status(400).json({error: error.message, descripcion: 'error en getRecipes'})
    } 
}

const changeRecipe = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({error: error.message, descripcion: 'error en getRecipes'})
    }
}




module.exports =  { 
    getRecipes,
    getRecipe
}