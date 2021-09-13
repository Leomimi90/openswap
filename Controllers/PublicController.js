class PublicController {
    index(req, res) {
        res.json({ welcome: 'Welcome to the OpenSwap Community API' })
    }
    auth(req, res){
        res.json({})
    }
}

module.exports = new PublicController()