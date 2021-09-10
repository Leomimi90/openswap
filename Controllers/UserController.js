class UserController {
    index(req, res, next) {
        res.json({ users: [] });
    }

    register(req, res, next) {
        res.json({
            success: true,
            data: [],
            message: "User successfully registered"
        })
    }

    logout(req, res){
        res.json({message:'User logout successfully'})
    }
}

module.exports = new UserController()