const { body, checkSchema, validationResult } = require('express-validator');

const loginValidationRules = () => {
    return checkSchema({
        'user.email': {
            isEmail: {
                bail: true,
                errorMessage: 'you must enter a valid email'
            },
        },
        'user.password': {
            isLength: {
                errorMessage: 'Password should be at least 7 chars long',
                options: { min: 7 },
            },
        },
    })
}


const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    next()
}

module.exports = {
    loginValidationRules,
    validate,
}
