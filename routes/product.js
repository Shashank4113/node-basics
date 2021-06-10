var express = require('express')
const router = express.Router();

const { requireSignIn, isAuth, isAdmin } = require('../controllers/auth')
const { userById } = require('../controllers/user')
const { create, read, remove, update, allProducts, listRelated, listCategories, listBySearch, photo, productById } = require('../controllers/product')

router.get('/products', allProducts)
router.get('/product/:productId', read)
router.post('/product/create/:userId', requireSignIn, isAuth, isAdmin, create)
router.delete('/product/:productId/:userId', requireSignIn, isAuth, isAdmin, remove)
router.put('/product/:productId/:userId', requireSignIn, isAuth, isAdmin, update)
router.get('/products/realted/:productId', listRelated)
router.get('/products/categories', listCategories)
router.post('/products/by/search', listBySearch);
router.get('/product/photo/:productId', photo)

router.param("userId", userById)
router.param("productId", productById)

module.exports = router;