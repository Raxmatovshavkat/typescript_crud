import { body } from 'express-validator';
const albumValidationRules = () => {
    return [
        body('name')
            .notEmpty().withMessage('Name cannot be empty')
            .isString().withMessage('Name must be a string'),
        body('year')
            .notEmpty().withMessage('Year is required')
            .isInt({ min: 1900, max: new Date().getFullYear() }).withMessage(`Year must be an integer between 1900 and ${new Date().getFullYear()}`),
        body('artistId')
            .notEmpty().withMessage('Artist ID is required')
            .isInt().withMessage('Artist ID must be an integer')
    ];
};
export default albumValidationRules;
//# sourceMappingURL=albumValidator.js.map