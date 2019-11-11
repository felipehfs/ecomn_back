const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const DashboardController = require('./controllers/DashboardController');
const ProductIdController = require('./controllers/ProductIdController');
const routes = express.Router();

const upload = multer(uploadConfig);

routes.post('/singup', UserController.store);

routes.post('/products', upload.single('thumbnail'), ProductController.store);
routes.get('/products/list', ProductController.index);

routes.get('/', DashboardController.show);
routes.post('/products/:product_id', ProductIdController.store);

module.exports = routes;