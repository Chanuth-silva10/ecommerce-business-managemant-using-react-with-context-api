const Products = require('../models/productModel')

const productCtrl = {
    getProducts : async(req, res) => {
        try{
           const products = await Products.find()

           res.json(products)
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    createProduct : async(req, res) => {
      try{
            const {product_id, title, price, description, content, images, category} = req.body

            if(!images) return res.status(400).json({msg: "No image upload"})

            const product = await Products.findOne({product_id})
            if(product)
                return res.status(400).json({msg: "The product already exists."})

            const newProduct = new Products({
                product_id, title : title.toLowerCase(), price, description, content, images, category
            })   
            
            await newProduct.save()
            res.json({msg: "Create a product"})

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
      },
    deleteProduct : async(req, res) => {

    },
    updateProduct : async(req, res) => {

    }
}

module.exports = productCtrl