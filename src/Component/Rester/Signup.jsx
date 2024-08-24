// import React, { useEffect } from 'react';
// import { Box, Button, FormControl, Input, FormErrorMessage } from '@chakra-ui/react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { signinAction } from '../../Redux/Auth/Action';
// import auth from '../../Pages/Auth/Auth';
// import { useToast } from '@chakra-ui/react';

// // Validation schema for the form
// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   username: Yup.string().required('Username is required'),
//   name: Yup.string().required('Name is required'),
//   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// });

// const Signup = () => {
//   const initialValues = {
//     email: '',
//     username: '',
//     name: '',
//     password: '',
//   };

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const toast = useToast();

//   console.log("store Signup :",auth.Signup)

//   const handleSubmit = (values, actions) => {
//     console.log("value:", values);
//     dispatch(signinAction(values));
//     actions.setSubmitting(false);
//   };

//   useEffect(() => {
//     if (auth.Signup?.username) {
//       navigate("/login");
//       toast({
//         title: `Account created. ${auth.Signup.username}`,
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   }, [navigate, toast]); // Include navigate and toast as dependencies

//   return (
//     <div className="border">
//       <Box p={8} display="flex" flexDirection="column" alignItems="center">
//         <img className="w-[21vh] mt-5" src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png" alt="Instagram Logo" />

//         <Formik
//           initialValues={initialValues}
//           onSubmit={handleSubmit}
//           validationSchema={validationSchema}
//         >
//           {({ isSubmitting }) => (
//             <Form className="space-y-8">
//               <Field name="email">
//                 {({ field, form }) => (
//                   <FormControl isInvalid={form.errors.email && form.touched.email}>
//                     <Input className="w-full" {...field} id="email" placeholder="Mobile Number or Email" required />
//                     <FormErrorMessage>{form.errors.email}</FormErrorMessage>
//                   </FormControl>
//                 )}
//               </Field>

//               <Field name="username">
//                 {({ field, form }) => (
//                   <FormControl isInvalid={form.errors.username && form.touched.username}>
//                     <Input className="w-full" {...field} id="username" placeholder="Username" required />
//                     <FormErrorMessage>{form.errors.username}</FormErrorMessage>
//                   </FormControl>
//                 )}
//               </Field>

//               <Field name="name">
//                 {({ field, form }) => (
//                   <FormControl isInvalid={form.errors.name && form.touched.name}>
//                     <Input className="w-full" {...field} id="name" placeholder="Full Name" required />
//                     <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                   </FormControl>
//                 )}
//               </Field>

//               <Field name="password">
//                 {({ field, form }) => (
//                   <FormControl isInvalid={form.errors.password && form.touched.password}>
//                     <Input className="w-full" {...field} id="password" placeholder="Password" type="password" required />
//                     <FormErrorMessage>{form.errors.password}</FormErrorMessage>
//                   </FormControl>
//                 )}
//               </Field>

//               <p className="text-center text-sm">People who use our service may upload your contact information to Instagram. Learn More</p>
//                  <p className='text-center text-sm'>By signing up, you agree to our Terms, Privacy Policy, and Cookies Policy</p>

//               <Button className="w-full" mt={4} colorScheme="blue" type="submit" isLoading={isSubmitting}>
//                 Sign Up
//               </Button>
//             </Form>
//           )}
//         </Formik>
//       </Box>
//       <div className="border w-full border-slate-300 mt-5">
//         <p className="text-center py-2 text-sm">If You Have Account Already <span onClick={() => navigate('/login')} className="ml-2 text-blue-700 cursor-pointer">Sign In</span></p>
//       </div>
//     </div>
//   );
// };

// export default Signup;



// import React, { useEffect } from 'react';
// import { Box, Button, FormControl, Input, FormErrorMessage } from '@chakra-ui/react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { signinAction } from '../../Redux/Auth/Action';
// import auth from '../../Pages/Auth/Auth';
// import { useToast } from '@chakra-ui/react';




// // Validation schema for the form
// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   username: Yup.string().required('Username is required'),
//   name: Yup.string().required('Name is required'),
//   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// });

// const Signup = () => {
//   const initialValues = {
//     email: '',
//     username: '',
//     name: '',
//     password: '',
//   };

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const toast = useToast();

//   console.log("store Signup :",auth.Signup)

//   const handleSubmit = (values, actions) => {
//     console.log("value:", values);
//     dispatch(signinAction(values));
//     actions.setSubmitting(false);
//   };

//   useEffect(() => {
//     if (auth.Signup?.username) {
//       navigate("/login");
//       toast({
//         title: `Account created. ${auth.Signup.username}`,
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   }, [navigate, toast]); // Include navigate and toast as dependencies

//   return (
//     <div className="border">
//       <Box p={8} display="flex" flexDirection="column" alignItems="center">
//         <img className="w-[21vh] mt-5 " src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png" alt="Instagram Logo" />
//         {/* "w-[21vh] mt-5 animated-logo"  */}

//         <Formik
//           initialValues={initialValues}
//           onSubmit={handleSubmit}
//           validationSchema={validationSchema}
//         >
//           {({ isSubmitting }) => (
//             <Form className="space-y-8">
//               <Field name="email">
//                 {({ field, form }) => (
//                   <FormControl isInvalid={form.errors.email && form.touched.email}>
//                     <Input className="w-full" {...field} id="email" placeholder="Mobile Number or Email" required />
//                     <FormErrorMessage>{form.errors.email}</FormErrorMessage>
//                   </FormControl>
//                 )}
//               </Field>

//               <Field name="username">
//                 {({ field, form }) => (
//                   <FormControl isInvalid={form.errors.username && form.touched.username}>
//                     <Input className="w-full" {...field} id="username" placeholder="Username" required />
//                     <FormErrorMessage>{form.errors.username}</FormErrorMessage>
//                   </FormControl>
//                 )}
//               </Field>

//               <Field name="name">
//                 {({ field, form }) => (
//                   <FormControl isInvalid={form.errors.name && form.touched.name}>
//                     <Input className="w-full" {...field} id="name" placeholder="Full Name" required />
//                     <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                   </FormControl>
//                 )}
//               </Field>

//               <Field name="password">
//                 {({ field, form }) => (
//                   <FormControl isInvalid={form.errors.password && form.touched.password}>
//                     <Input className="w-full" {...field} id="password" placeholder="Password" type="password" required />
//                     <FormErrorMessage>{form.errors.password}</FormErrorMessage>
//                   </FormControl>
//                 )}
//               </Field>

//               <p className="text-center text-sm">People who use our service may upload your contact information to Instagram. Learn More</p>
//               <p className='text-center text-sm'>By signing up, you agree to our Terms, Privacy Policy, and Cookies Policy</p>

//               <Button className="w-full" mt={4} colorScheme="blue" type="submit" isLoading={isSubmitting}>
//                 Sign Up
//               </Button>
//             </Form>
//           )}
//         </Formik>
//       </Box>
//       <div className="border w-full border-slate-300 mt-5">
//         <p className="text-center py-2 text-sm">If You Have Account Already <span onClick={() => navigate('/login')} className="ml-2 text-blue-700 cursor-pointer">Sign In</span></p>
//       </div>
//     </div>
//   );
// };

// export default Signup;



  import React, { useState } from 'react';
  import { Box, Button, FormControl, Input, FormErrorMessage, IconButton, useToast } from '@chakra-ui/react';
  import { Formik, Form, Field } from 'formik';
  import * as Yup from 'yup';
  import { useNavigate } from 'react-router-dom';
  import { useDispatch } from 'react-redux';
  import { signinAction } from '../../Redux/Auth/Action';
  import { FaEye, FaEyeSlash } from 'react-icons/fa';

  // Validation schema for the form
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    username: Yup.string().required('Username is required'),
    name: Yup.string().required('Name is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const Signup = () => {
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const initialValues = {
      email: '',
      username: '',
      name: '',
      password: '',
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast();

    // const handleSubmit = (values, actions) => {
    //   console.log("value:", values);
    //   dispatch(signinAction(values)); // Consider handling errors from this action
    //   actions.setSubmitting(false);
    // };

    const handleSubmit = (values, actions) => {
      fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === 'User created successfully') {
            toast({
              title: 'Account created.',
              description: 'You can now sign in.',
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
            navigate('/signin');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    
      actions.setSubmitting(false);
    };
    


    

    return (
      <div className="border">
        <Box p={8} display="flex" flexDirection="column" alignItems="center">
          <img className="w-[21vh] mt-5" src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png" alt="Instagram Logo" />

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-8">
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <Input className="w-full" {...field} id="email" placeholder="Mobile Number or Email" required />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="username">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.username && form.touched.username}>
                      <Input className="w-full" {...field} id="username" placeholder="Username" required />
                      <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="name">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <Input className="w-full" {...field} id="name" placeholder="Full Name" required />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                      <Box position="relative">
                        <Input
                          className="w-full"
                          {...field}
                          id="password"
                          placeholder="Password"
                          type={showPassword ? 'text' : 'password'}
                          required
                        />
                        <IconButton
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                          // icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                          position="absolute"
                          right="0.5rem"
                          top="50%"
                          transform="translateY(-50%)"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      </Box>
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <p className="text-center text-sm">People who use our service may upload your contact information to Instagram. Learn More</p>
                <p className='text-center text-sm'>By signing up, you agree to our Terms, Privacy Policy, and Cookies Policy</p>

                <Button className="w-full" mt={4} colorScheme="blue" type="submit" isLoading={isSubmitting}>
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
        <div className="border w-full border-slate-300 mt-5">
          <p className="text-center py-2 text-sm">If You Have An Account Already <span onClick={() => navigate('/login')} className="ml-2 text-blue-700 cursor-pointer">Sign In</span></p>
        </div>
      </div>
    );
  };

  export default Signup;    //sucessfull page 



//   import React, { useState } from 'react';
// import { Box, Button, FormControl, Input, FormErrorMessage, IconButton, useToast } from '@chakra-ui/react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// // Validation schema for the form
// const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email address').required('Email is required'),
//     username: Yup.string().required('Username is required'),
//     name: Yup.string().required('Name is required'),
//     password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// });

// const Signup = () => {
//     const [showPassword, setShowPassword] = useState(false); // State for password visibility
//     const initialValues = {
//         email: '',
//         username: '',
//         name: '',
//         password: '',
//     };

//     const navigate = useNavigate();
//     const toast = useToast();

//     const handleSubmit = (values, actions) => {
//         fetch('http://localhost:5000/api/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(values),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 if (data.message === 'User created successfully') {
//                     toast({
//                         title: 'Account created.',
//                         description: 'You can now sign in.',
//                         status: 'success',
//                         duration: 5000,
//                         isClosable: true,
//                     });
//                     navigate('/signin');
//                 } else {
//                     toast({
//                         title: 'Error',
//                         description: data.error || 'Something went wrong.',
//                         status: 'error',
//                         duration: 5000,
//                         isClosable: true,
//                     });
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 toast({
//                     title: 'Error',
//                     description: 'There was an issue with the request.',
//                     status: 'error',
//                     duration: 5000,
//                     isClosable: true,
//                 });
//             });

//         actions.setSubmitting(false);
//     };

//     return (
//         <div className="border">
//             <Box p={8} display="flex" flexDirection="column" alignItems="center">
//                 <img className="w-[21vh] mt-5" src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png" alt="Instagram Logo" />

//                 <Formik
//                     initialValues={initialValues}
//                     onSubmit={handleSubmit}
//                     validationSchema={validationSchema}
//                 >
//                     {({ isSubmitting }) => (
//                         <Form className="space-y-8">
//                             <Field name="email">
//                                 {({ field, form }) => (
//                                     <FormControl isInvalid={form.errors.email && form.touched.email}>
//                                         <Input className="w-full" {...field} id="email" placeholder="Mobile Number or Email" required />
//                                         <FormErrorMessage>{form.errors.email}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>

//                             <Field name="username">
//                                 {({ field, form }) => (
//                                     <FormControl isInvalid={form.errors.username && form.touched.username}>
//                                         <Input className="w-full" {...field} id="username" placeholder="Username" required />
//                                         <FormErrorMessage>{form.errors.username}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>

//                             <Field name="name">
//                                 {({ field, form }) => (
//                                     <FormControl isInvalid={form.errors.name && form.touched.name}>
//                                         <Input className="w-full" {...field} id="name" placeholder="Full Name" required />
//                                         <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>

//                             <Field name="password">
//                                 {({ field, form }) => (
//                                     <FormControl isInvalid={form.errors.password && form.touched.password}>
//                                         <Box position="relative">
//                                             <Input
//                                                 className="w-full"
//                                                 {...field}
//                                                 id="password"
//                                                 placeholder="Password"
//                                                 type={showPassword ? 'text' : 'password'}
//                                                 required
//                                             />
//                                             <IconButton
//                                                 aria-label={showPassword ? 'Hide password' : 'Show password'}
//                                                 icon={showPassword ? <FaEyeSlash /> : <FaEye />}
//                                                 position="absolute"
//                                                 right="0.5rem"
//                                                 top="50%"
//                                                 transform="translateY(-50%)"
//                                                 onClick={() => setShowPassword(!showPassword)}
//                                             />
//                                         </Box>
//                                         <FormErrorMessage>{form.errors.password}</FormErrorMessage>
//                                     </FormControl>
//                                 )}
//                             </Field>

//                             <p className="text-center text-sm">People who use our service may upload your contact information to Instagram. Learn More</p>
//                             <p className='text-center text-sm'>By signing up, you agree to our Terms, Privacy Policy, and Cookies Policy</p>

//                             <Button className="w-full" mt={4} colorScheme="blue" type="submit" isLoading={isSubmitting}>
//                                 Sign Up
//                             </Button>
//                         </Form>
//                     )}
//                 </Formik>
//             </Box>
//             <div className="border w-full border-slate-300 mt-5">
//                 <p className="text-center py-2 text-sm">If You Have An Account Already <span onClick={() => navigate('/login')} className="ml-2 text-blue-700 cursor-pointer">Sign In</span></p>
//             </div>
//         </div>
//     );
// };

// export default Signup;


