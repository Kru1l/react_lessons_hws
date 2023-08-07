import Joi from "joi";

const carFormValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters from 1 to 10',
        'string.required': 'This field is required',
    }),
    price: Joi.number().required().min(0).max(1000000).messages({
        'number.required': 'This field is required',
        'number.min': 'Not less than 0',
        'number.max': 'Not more than 1000000'
    }),
    year: Joi.number().required().min(1990).max(new Date().getFullYear()).messages({
        'number.min': 'Only cars younger than 1990',
        'number.required': 'This field is required',
        'number.max': 'Impossible'
    })
})

export {carFormValidator};