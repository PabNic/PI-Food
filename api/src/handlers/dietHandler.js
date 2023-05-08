// llamamos a la fn() que obtiene los datos de la BDD
// llamamos a la fn() que obtiene los datos de la API
// unimos los datos, unificando formato
// esperamos la asyncronia d la busqueda
// nos responde con los datos

const getDiets = async (req,res) => {
    try {
        
        res.send('tu dieta por la cola')
    } catch (error) {
       
        res.status(400).json({error: error.message, description:"error en getDiets"})
    }
}





module.exports = {
    getDiets
}