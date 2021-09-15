const Trade = require("../Models/Trade")
module.exports = {
    index: (req, res) => {
        res.json({ trades: [] })
    },
    save: (req, res) => {
        let tradReq = {
            user_id: req.user.id,
            amount: req.body.amount,
            currency: req.body.currency,
            type: req.body.type
        }
        Trade.create(tradReq).then(trade => {
            res.json({ success: true, data: { trade }, message: "Trade successfully saved" })

        }).catch(err => {
            res.json(err)
        })

    },
    confirmTrade: (res, req, next) => {
        res.json({
            success: true, data: [], message: "Purchase confirmed"
        })
    }
};
