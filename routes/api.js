var express = require('express');
var router = express.Router();
var PublicController = require('../Controllers/PublicController');
var UserController = require('../Controllers/UserController');
var TradeController = require('../Controllers/TradeController');
var TransactionController = require('../Controllers/TransactionController')

router.get('/', PublicController.index);

/* User Routes */
router.get('/users', UserController.index);
router.get('/users/register', UserController.register);
router.get('/user/logout', UserController.logout)
/* Transactions Routes*/
router.get('/transaction/buy/:id', TransactionController.buy)
router.get('/transaction/sell/:id', TransactionController.sell)
/* Trade Routes */
router.get('/trades', TradeController.index);
router.post('/trade', TradeController.save);

module.exports = router;
