import Joi from "joi";

const CarFormValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,10}$/).required().messages({
        'string.pattern.base': 'Only letters from 1 to 10',
        'string.empty': 'This field is required',
        'string.required': 'This field is required'
    }),
    price: Joi.number().required().min(0).max(1000000).messages({
        'number.base': 'Only numbers',
        'number.required': 'This field is required',
        'number.min': 'Min 1',
        'number.max': 'Max 1000000'
    }),
    year: Joi.number().required().min(1990).max(new Date().getFullYear()).messages({
        'number.base': 'Only years',
        'number.required': 'This field is required',
        'number.min': 'Min 1990',
        'number.max': 'Impossible'
    })
})

export {CarFormValidator};