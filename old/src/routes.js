const express = require('express');
const multer = require('multer');
const updloadServices = require('./services/upload');
const itemController = require('./controllers/ItensController');
const dash = require('./controllers/dashboard');
const routes = express.Router();

const upload = multer(updloadServices);

routes.get('/', dash.show);
routes.get('/admin', itemController.index);
routes.post('/product', upload.single('image'), itemController.store);

module.exports = routes;