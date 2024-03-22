const Products = require('../../models/Products');
const Imagens = require('../../models/Imagens');

async function EditProducts(req, res) {
  const id = req.params;
  const { name, price, BrandName, description, quantityInStock, imagens, type, rating } = req.body;
  console.log(id.id);

  try {
    const produto = await Products.findByPk(id.id);

    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    // Crie um objeto para armazenar os campos a serem atualizados
    const updatedFields = {};
    if (name) {
      updatedFields.name = name;
    }
    if (price) {
      updatedFields.price = price;
    }
    if (BrandName) {
      updatedFields.BrandName = BrandName;
    }
    if (description) {
      updatedFields.description = description;
    }
    if (quantityInStock) {
      updatedFields.quantityInStock = quantityInStock;
    }
    if (type) {
      updatedFields.type = type;
    }
    if (rating) {
      updatedFields.rating = rating;
    }

    // Atualize os campos no produto
    await produto.update(updatedFields);

    // Verifique se há imagens na requisição e atualize a tabela de imagens
    if (imagens) {
      console.log(imagens);
      
      // Consulte a tabela de imagens associada ao produto
      let imagem = await Imagens.findOne({ where: { productId: produto.id } });

      if (imagem) {
        // Se já existir uma imagem, atualize-a
        await imagem.update({ imageUrl: imagens });
      } else {
        // Se não houver uma imagem associada, crie uma nova
        await Imagens.create({
          productId: produto.id,
          imageUrl: imagens,
        });
      }
    }

    res.json({ message: 'Produto atualizado com sucesso', produto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o produto' });
  }
}

module.exports = {
  EditProducts,
};
