// // src/Components/Auth/ForgetPassword.js
// import React from 'react';
// import { Box, FormControl, FormErrorMessage, Input, Button } from '@chakra-ui/react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { forgetPasswordAction } from '../../Redux/Auth/Action'; // Implement this action in your Redux

// // Validation schema for the form
// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email address').required('Email is required'),
// });

// const ForgetPassword = () => {
//   const initialValues = { email: '' };
//   const dispatch = useDispatch();

//   const handleSubmit = (values, actions) => {
//     dispatch(forgetPasswordAction(values));
//     actions.setSubmitting(false);
//   };

//   return (
//     <div className="border">
//       <Box p={8} display="flex" flexDirection="column" alignItems="center">
//         <img className="w-[21vh] mt-5" src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png" alt="Instagram Logo" />

//         <Formik
//           initialValues={initialValues}
//           onSubmit={handleSubmit}
//           validationSchema={validationSchema}
//         >
//           {(formikProps) => (
//             <Form className="space-y-8">
//               <Field name="email">
//                 {({ field, form }) => (
//                   <FormControl isInvalid={form.errors.email && form.touched.email}>
//                     <Input className="w-full" {...field} id="email" placeholder="Email" required />
//                     <FormErrorMessage>{form.errors.email}</FormErrorMessage>
//                   </FormControl>
//                 )}
//               </Field>

//               <Button
//                 className="w-full"
//                 mt={4}
//                 colorScheme="blue"
//                 type="submit"
//                 isLoading={formikProps.isSubmitting}
//               >
//                 Reset Password
//               </Button>
//             </Form>
//           )}
//         </Formik>
//       </Box>
//     </div>
//   );
// };

// export default ForgetPassword;


// import React, { useState } from 'react';
// import { Box, FormControl, FormErrorMessage, Input, Button, IconButton } from '@chakra-ui/react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { forgetPasswordAction } from '../../Redux/Auth/Action';
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

// // Validation schema for the form
// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email address').required('Email is required'),
// });

// const ForgetPassword = () => {
//   const initialValues = { email: '' };
//   const dispatch = useDispatch();
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = (values, actions) => {
//     dispatch(forgetPasswordAction(values));
//     actions.setSubmitting(false);
//   };

//   return (
//     <div className="border">
//       <Box p={8} display="flex" flexDirection="column" alignItems="center">
//         <img className="w-[21vh] mt-5" src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png" alt="Instagram Logo" />

//         <Formik
//           initialValues={initialValues}
//           onSubmit={handleSubmit}
//           validationSchema={validationSchema}
//         >
//           {(formikProps) => (
//             <Form className="space-y-8">
//               <Field name="email">
//                 {({ field, form }) => (
//                   <FormControl isInvalid={form.errors.email && form.touched.email}>
//                     <Input
//                       className="w-full"
//                       {...field}
//                       id="email"
//                       placeholder="Email"
//                       required
//                     />
//                     <FormErrorMessage>{form.errors.email}</FormErrorMessage>
//                   </FormControl>
//                 )}
//               </Field>

//               <Button
//                 className="w-full"
//                 mt={4}
//                 colorScheme="blue"
//                 type="submit"
//                 isLoading={formikProps.isSubmitting}
//               >
//                 Reset Password
//               </Button>
//             </Form>
//           )}
//         </Formik>
//       </Box>
//     </div>
//   );
// };





// export default ForgetPassword;




// import React, { useState } from 'react';
// import { Box, FormControl, FormErrorMessage, Input, Button } from '@chakra-ui/react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';





// // Validation schema for the form
// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email address').required('Email is required'),
// });

// const ForgetPassword = () => {
//   const initialValues = { email: '' };
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Handle form submission
//   const handleSubmit = (values, actions) => {
//     dispatch(forgetPasswordAction(values)).then(() => {
//       actions.setSubmitting(false);
//       // handle success (e.g., show a success message)
//     }).catch((error) => {
//       actions.setSubmitting(false);
//       // handle error
//     });
//   };

//   return (
//     <div>
//       <div className="border">
//         <Box p={8} display="flex" flexDirection="column" alignItems="center">
//           <img
//             className="w-[21vh] mt-5"
//             src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png"
//             alt="Instagram Logo"
//           />

//           <Formik
//             initialValues={initialValues}
//             onSubmit={handleSubmit}
//             validationSchema={validationSchema}
//           >
//             {(formikProps) => (
//               <Form className="space-y-8">
//                 <Field name="email">
//                   {({ field, form }) => (
//                     <FormControl isInvalid={form.errors.email && form.touched.email}>
//                       <Input
//                         className="w-full"
//                         {...field}
//                         id="email"
//                         placeholder="Mobile Number or Email"
//                         required
//                       />
//                       <FormErrorMessage>{form.errors.email}</FormErrorMessage>
//                     </FormControl>
//                   )}
//                 </Field>

//                 <Button
//                   className="w-full"
//                   mt={4}
//                   colorScheme="blue"
//                   type="submit"
//                   isLoading={formikProps.isSubmitting}
//                 >
//                   Reset Password
//                 </Button>
//               </Form>
//             )}
//           </Formik>
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;


// import React from 'react';
// import { Box, FormControl, FormErrorMessage, Input, Button } from '@chakra-ui/react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import { forgetPasswordAction } from '..';

// // Validation schema for the form
// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email address').required('Email is required'),
// });

// const ForgetPassword = () => {
//   const initialValues = { email: '' };
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Handle form submission
//   const handleSubmit = (values, actions) => {
//     dispatch(forgetPasswordAction(values))
//       .then(() => {
//         actions.setSubmitting(false);
//         // handle success (e.g., show a success message)
//         navigate('/success'); // Navigate to a success page or another page
//       })
//       .catch((error) => {
//         actions.setSubmitting(false);
//         // handle error (e.g., show an error message)
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div>
//       <div className="border">
//         <Box p={8} display="flex" flexDirection="column" alignItems="center">
//           <img
//             className="w-[21vh] mt-5"
//             src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png"
//             alt="Instagram Logo"
//           />
//           <Formik
//             initialValues={initialValues}
//             onSubmit={handleSubmit}
//             validationSchema={validationSchema}
//           >
//             {({ isSubmitting }) => (
//               <Form className="space-y-8">
//                 <Field name="email">
//                   {({ field, form }) => (
//                     <FormControl isInvalid={form.errors.email && form.touched.email}>
//                       <Input
//                         className="w-full"
//                         {...field}
//                         id="email"
//                         placeholder="Mobile Number or Email"
//                         required
//                       />
//                       <FormErrorMessage>{form.errors.email}</FormErrorMessage>
//                     </FormControl>
//                   )}
//                 </Field>
//                 <Button
//                   className="w-full"
//                   mt={4}
//                   colorScheme="blue"
//                   type="submit"
//                   isLoading={isSubmitting}
//                 >
//                   Reset Password
//                 </Button>
//               </Form>
//             )}
//           </Formik>
//         </Box>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;
