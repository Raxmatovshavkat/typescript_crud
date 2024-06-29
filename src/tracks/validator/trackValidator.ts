import { body } from 'express-validator';

const trackValidationRules = () => {
    return [
        body('name')
            .trim()
            .notEmpty().withMessage('Name cannot be empty')
            .isString().withMessage('Name must be a string')
            .custom((value, { req }) => {
                if (!value.trim()) {
                    throw new Error('Name is required');
                }
                return true;
            }),
        body('artistId')
            .notEmpty().withMessage('Artist ID is required')
            .isInt().withMessage('Artist ID must be an integer'),
        body('albumId')
            .notEmpty().withMessage('Album ID is required')
            .isInt().withMessage('Album ID must be an integer'),
        body('duration')
            .notEmpty().withMessage('Duration is required')
            .isInt({ min: 0 }).withMessage('Duration must be a positive integer')
    ];
};

export default trackValidationRules;

