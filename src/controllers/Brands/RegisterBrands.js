const Brands = require("../../models/Brands")

async function RegisterBrand(req,res){
    const {nameBrand,imageBrand} = req.body;

    try {
        const createBrand = await Brands.create({
            nameBrand,
            imageBrand
        })

        return res.status(201).json({
            BrandId:createBrand.BrandId,
            nameBrand:createBrand.nameBrand,
            imageBrand:createBrand.imageBrand
        })
    } catch (error) {
        console.error('Erro ao cadastrar marca:', error);
        return res.status(500).json({ error: 'Erro ao cadastrar marca.' });
    }
}

module.exports = {
    RegisterBrand
}