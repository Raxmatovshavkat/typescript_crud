import { body } from 'express-validator';
const artistValidationRules = () => {
    return [
        body('name')
            .notEmpty().withMessage('Name cannot be empty')
            .isString().withMessage('Name must be a string')
            .matches(/^[a-zA-Z\s]*$/).withMessage('Name must only contain letters and spaces'),
        body('grammy')
            .optional()
            .isBoolean().withMessage('Grammy must be a boolean value')
    ];
};
export default artistValidationRules;
//# sourceMappingURL=artistValidator.js.map