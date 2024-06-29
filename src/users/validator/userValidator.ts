import { body } from 'express-validator';

const userValidationRules = () => {
    return [
        body('login')
            .notEmpty().withMessage('Login cannot be empty')
            .isString().withMessage('Login must be a string'),
        body('password')
            .notEmpty().withMessage('Password cannot be empty')
            .isString().withMessage('Password must be a string')
    ];
};

export default userValidationRules;
