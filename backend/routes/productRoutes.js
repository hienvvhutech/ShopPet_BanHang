const express = require('express');
const router = express.Router();
const { getProducts, getProduct, getCategories, getLatestProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');


router.get('/', getProducts);
router.get('/latest', getLatestProducts);
router.get('/categories', getCategories);
router.get('/:id', getProduct);

// Admin routes
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
