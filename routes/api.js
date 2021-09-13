var express = require('express');
var router = express.Router();
var PublicController = require('../Controllers/PublicController');
var UserController = require('../Controllers/UserController');
var TradeController = require('../Controllers/TradeController');

const CryptoCurrencyController = require('../Controllers/CryptoCurrencyController');
const TransactionController = require('../Controllers/TransactionController');


router.get('/', PublicController.index);
router.get('/help', PublicController.help);

/* User Routes */
router.get('/users', UserController.index);
router.get('/users/register', UserController.register);
// router.get('/user/logout', UserController.logout)

/* Transactions Routes*/
router.get('/transaction/buy/:id', TransactionController.buy)
router.get('/transaction/sell/:id', TransactionController.sell)
router.get('/user/login', UserController.login);
router.get('/user/account', UserController.account);
// router.get('/user/logout', UserController.logout)

/* Trade Routes */
router.get('/trades', TradeController.index);
router.post('/trade', TradeController.save);
router.post('/confirmTrade', TradeController.confirmTrade);

/*CryptoCurrency Routes */
router.get('/crypto', CryptoCurrencyController.index);

/*Transaction Routes */
router.get('/transactions', TransactionController.index);
router.get('transaction/:id', TransactionController.details);
router.post('/deposit', TransactionController.deposit);
router.post('/withdraw', TransactionController.withdraw)

module.exports = router;
