import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// Fetch all products
// route GET /api/products
// access Public 
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

// Fetch single product
// route GET /api/products
// access Public 
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found!')
    }
})

// @desc delete product
// route DELETE /api/products/:id
// access Private/Admin 
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    
    if(product) {
        await product.remove()
        res.json({
            message: 'Product removed'
        })
    } else {
        res.status(404)
        throw new Error('Product not found!')
    }
})

// @desc create product
// route POST /api/products
// access Private/Admin 
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'test name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        countInStock: 0,
        numReviews: 0,
        category: 'sample category',
        description: 'Sample description'
    })

    const createdProduct = await product.save()

    res.status(201).json(createdProduct)
})

// @desc update product
// route PUT /api/products/:id
// access Private/Admin 
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image, brand, category, countInStock } = req.body

    const product = await Product.findById(req.params.id)

    if(product) {
        product.name = name
        product.price = price
        product.description = description
        product.category = category
        product.countInStock = countInStock
        product.image = image
        product.brand = brand

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }


})


export { getProducts, getProductById, deleteProduct, createProduct, updateProduct }