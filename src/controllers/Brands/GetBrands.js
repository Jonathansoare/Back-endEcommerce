const Brands = require("../../models/Brands")

async function getBrand(req,res){
    try {
        const brands = await Brands.findAll({
            attributes:['BrandId','nameBrand','imageBrand']
        })

        return res.status(200).json({
            brands
        })
    } catch (error) {
        return res.status(500).json({ message: 'Ocorreu um erro ao buscar marcas.' });
    }
}

module.exports = {getBrand}