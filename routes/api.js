var express = require('express');
var router = express.Router();
var PublicController = require('../Controllers/PublicController');
var UserController = require('../Controllers/UserController');
var TradeController = require('../Controllers/TradeController');
var TransactionController = require('../Controllers/TransactionController');

router.get('/', PublicController.index);

/* User Routes */
router.get('/users', UserController.index);
router.get('/users/register', UserController.register);

/* Transaction Routes*/
router.get('/transaction/sale/:id', TransactionController.sale)
router.get('/transaction/purchase/:id', TransactionController.purchase)

/* Trade Routes */
router.get('/trades', TradeController.index);
router.post('/trade', TradeController.save);

module.exports = router;
