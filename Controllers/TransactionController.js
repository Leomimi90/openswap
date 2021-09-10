class TransactionController{
    
    buy(req, res, next){
        (!req.params.id)?res.json({message:'Tramsaction Failed'}):res.json({message:'Successful Transaction'})
        next()
    }
    sell(req, res, next){
        (!req.params.id)?res.json({message:'Tramsaction Failed'}):res.json({message:'Successful Transaction'})
        next()
    }
}
module.exports = new TransactionController()