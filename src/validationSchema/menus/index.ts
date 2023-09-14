import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().nullable(),
  calories: yup.number().integer().nullable(),
  ingredients: yup.string().nullable(),
  dish_type: yup.string().nullable(),
  restaurant_id: yup.string().nullable().required(),
});
