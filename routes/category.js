var express = require('express')
const router = express.Router();

const { requireSignIn, isAuth, isAdmin } = require('../controllers/auth')
const { userById } = require('../controllers/user')
const { create, read, update, remove, allCategories, categoryById } = require('../controllers/category')

router.get('/categories', allCategories)
router.get('/category/:categoryId', read)
router.post('/category/create/:userId', requireSignIn, isAuth, isAdmin, create)
router.put('/category/:categoryId/:userId', requireSignIn, isAuth, isAdmin, update)
router.delete('/category/:categoryId/:userId', requireSignIn, isAuth, isAdmin, remove)

router.param("userId", userById)
router.param("categoryId", categoryById)

module.exports = router;