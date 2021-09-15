module.exports = {
    index: (req, res) => {
        res.json({ trades: [] })
    },
    save: (req, res) => {
        res.json({success: true, data: [], message: "Trade successfully saved"})   
    },
    confirmTrade: (res, req, next) => {

    }

    
};



