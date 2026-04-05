const express = require('express');
const router = express.Router();
const { getProducts, getProduct, getCategories, getLatestProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
<<<<<<< HEAD

=======
const { protect, isAdmin } = require('../middlewares/authMiddleware');
>>>>>>> 2aedcfd (Tính năng xác thực: cập nhật models và cấu hình app)

router.get('/', getProducts);
router.get('/latest', getLatestProducts);
router.get('/categories', getCategories);
router.get('/:id', getProduct);

// Admin routes
<<<<<<< HEAD
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
=======
router.post('/', protect, isAdmin, createProduct);
router.put('/:id', protect, isAdmin, updateProduct);
router.delete('/:id', protect, isAdmin, deleteProduct);
>>>>>>> 2aedcfd (Tính năng xác thực: cập nhật models và cấu hình app)

module.exports = router;
