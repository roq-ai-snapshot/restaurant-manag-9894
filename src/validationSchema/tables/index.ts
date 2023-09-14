import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  table_number: yup.number().integer().required(),
  capacity: yup.number().integer().nullable(),
  location: yup.string().nullable(),
  status: yup.string().nullable(),
  reservation_status: yup.boolean().nullable(),
  restaurant_id: yup.string().nullable().required(),
});
