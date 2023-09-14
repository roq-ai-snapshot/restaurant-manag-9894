import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  opening_hours: yup.string().nullable(),
  closing_hours: yup.string().nullable(),
  name: yup.string().required(),
  capacity: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
