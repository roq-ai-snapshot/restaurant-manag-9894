import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_number: yup.number().integer().required(),
  total_price: yup.number().integer().nullable(),
  order_date: yup.date().nullable(),
  delivery_address: yup.string().nullable(),
  status: yup.string().nullable(),
  delivery_time: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
