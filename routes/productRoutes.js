// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');
const authMiddleware  = require('../middlewares/checkAdmin');

router.post('/createProduct',authMiddleware, productController.createProduct);
router.get('/get_products',productController.getAllProducts);
router.put('/update_product/:id',authMiddleware, productController.updateProductById);
router.delete('/delete_products/:id',authMiddleware, productController.deleteProductById);
module.exports = router;