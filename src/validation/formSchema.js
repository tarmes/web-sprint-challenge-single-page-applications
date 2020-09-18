import * as yup from 'yup'

export default yup.object().shape({
  telNum: yup.string()
    .required('Phone number is required')
    .min(10, 'Must be a valid Phone Number')
    .max(10, 'Must be a valid Phone Number'),
  email: yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(5, 'Password must be a minimum of 5 characters'),
  size: yup.string()
    .required('You must select a size'),
  extraCheese: yup.boolean(),
  pepperoni: yup.boolean(),
  mushrooms: yup.boolean(),
  onions: yup.boolean(),
  specialRequests: yup.string(),
})