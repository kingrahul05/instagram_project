// import React, { useEffect } from 'react';
// import { Box, FormControl, FormErrorMessage, Input, Button } from '@chakra-ui/react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { signinAction } from '../../Redux/Auth/Action';
// import { getUserprofileAction } from '../../Redux/User/Action';

// // Validation schema for the form
// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
// });

// export const Signin = () => {
//   const initialValues = { email: '', password: '' };
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { reqUser } = useSelector((store) => store.user); // Destructure correctly
//   const jwt = localStorage.getItem("token");
  

//   // Handle form submission
//   const handleSubmit = (values, actions) => {

//     dispatch(signinAction(values)); // Consider handling errors from this action
   
//     actions.setSubmitting(false);
//   };

//   useEffect(() => {
//     if (jwt) {
//       dispatch(getUserprofileAction(jwt));
//     }
//   }, [jwt, dispatch]);

//   // Navigate to user's profile page if user is logged in
//   useEffect(() => {
//     if (reqUser?.username) {
//       navigate(`/${reqUser.username}`);
//     }
//   }, [reqUser, navigate]);

//   const handleNavigate = () => navigate("/signup");

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
//                         {...field}                         id="email"
                      //    placeholder="Mobile Number or Email"
                      //  required
                      // />
//                       <FormErrorMessage>{form.errors.email}</FormErrorMessage>
//                     </FormControl>
//                   )}
//                 </Field>

//                 <Field name="password">
//                   {({ field, form }) => (
//                     <FormControl isInvalid={form.errors.password && form.touched.password}>
//                       <Input
//                         className="w-full"
//                         {...field}
//                         id="password"
//                         placeholder="Password"
//                         type="password"
//                         required
//                       />
//                       <FormErrorMessage>{form.errors.password}</FormErrorMessage>
//                     </FormControl>
//                   )}
//                 </Field>

//                 <p className="text-center text-sm">
//                   People who use our service may upload your contact information to Instagram. Learn More
//                 </p>

//                 <p className="text-center text-sm">
//                   By signing up, you agree to our Terms, Privacy Policy, and Cookies Policy
//                 </p>

//                 <Button
//                   className="w-full"
//                   mt={4}
//                   colorScheme="blue"
//                   type="submit"
//                   isLoading={formikProps.isSubmitting}
//                 >
//                   Sign In
//                 </Button>
//               </Form>
//             )}
//           </Formik>
//         </Box>
//       </div>
//       <div className="border w-full border-slate-300 mt-5">
//         <p className="text-center py-2 text-sm">
//           If You Don't Have An Account 
//           <span onClick={handleNavigate} className="ml-2 text-blue-700 cursor-pointer">Sign Up</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signin;




// import React, { useEffect } from 'react';
// import { Box, FormControl, FormErrorMessage, Input, Button } from '@chakra-ui/react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { signinAction } from '../../Redux/Auth/Action';
// import { getUserprofileAction } from '../../Redux/User/Action';

// // Validation schema for the form
// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
// });

// export const Signin = () => {
//   const initialValues = { email: '', password: '' };
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { reqUser } = useSelector((store) => store.user); // Destructure correctly
//   const jwt = localStorage.getItem("token");

//   // Handle form submission
//   const handleSubmit = (values, actions) => {
//     dispatch(signinAction(values)); // Consider handling errors from this action
//     actions.setSubmitting(false);
//   };

//   useEffect(() => {
//     if (jwt) {
//       dispatch(getUserprofileAction(jwt));
//     }
//   }, [jwt, dispatch]);

//   // Navigate to user's profile page if user is logged in
//   useEffect(() => {
//     if (reqUser?.username) {
//       navigate(`/${reqUser.username}`);
//     }
//   }, [reqUser, navigate]);

//   const handleNavigate = () => navigate("/signup");

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

//                 <Field name="password">
//                   {({ field, form }) => (
//                     <FormControl isInvalid={form.errors.password && form.touched.password}>
//                       <Input
//                         className="w-full"
//                         {...field}
//                         id="password"
//                         placeholder="Password"
//                         type="password"
//                         required
//                       />
//                       <FormErrorMessage>{form.errors.password}</FormErrorMessage>
//                     </FormControl>
//                   )}
//                 </Field>

//                 <p className="text-center text-sm">
//                   People who use our service may upload your contact information to Instagram. Learn More
//                 </p>

//                 <p className="text-center text-sm">
//                   By signing up, you agree to our Terms, Privacy Policy, and Cookies Policy
//                 </p>

//                 <Button
//                   className="w-full"
//                   mt={4}
//                   colorScheme="blue"
//                   type="submit"
//                   isLoading={formikProps.isSubmitting}
//                 >
//                   Sign In
//                 </Button>
//                 <p className="text-center text-sm mt-2">
//                   {/* <span onClick={() => navigate('/forget-password')} className="text-blue-700 cursor-pointer">Forget Password?</span> */}
//                 </p>
//               </Form>
//             )}
//           </Formik>
//         </Box>
//       </div>
//       <div className="border w-full border-slate-300 mt-5">
//         <p className="text-center py-2 text-sm">
//           If You Don't Have An Account 
//           <span onClick={handleNavigate} className="ml-2 text-blue-700 cursor-pointer">Sign Up</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signin;


    import React, { useEffect } from 'react';
    import { Box, FormControl, FormErrorMessage, Input, Button } from '@chakra-ui/react';
    import { Formik, Form, Field } from 'formik';
    import * as Yup from 'yup';
    import { useNavigate } from 'react-router-dom';
    import { useDispatch, useSelector } from 'react-redux';
    import { signinAction } from '../../Redux/Auth/Action';
    import { getUserprofileAction } from '../../Redux/User/Action';

    // Validation schema for the form
    const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    });

    export const Signin = () => {
    const initialValues = { email: '', password: '' };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { reqUser } = useSelector((store) => store.user); // Destructure correctly
    const jwt = localStorage.getItem("token");

    // Handle form submission
    const handleSubmit = (values, actions) => {
        dispatch(signinAction(values)); // Consider handling errors from this action
        actions.setSubmitting(false);
    };

    useEffect(() => {
        if (jwt) {
        dispatch(getUserprofileAction(jwt));
        }
    }, [jwt, dispatch]);

    // Navigate to user's profile page if user is logged in
    useEffect(() => {
        if (reqUser?.username) {
        navigate(`/${reqUser.username}`);
        }
    }, [reqUser, navigate]);

    const handleNavigate = () => navigate("/signup");

    return (
        <div>
        <div className="border">
            <Box p={8} display="flex" flexDirection="column" alignItems="center">
            <img
                className="w-[21vh] mt-5"
                src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png"
                alt="Instagram Logo"
            />

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {(formikProps) => (
                <Form className="space-y-8">
                    <Field name="email">
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <Input
                            className="w-full"
                            {...field}
                            id="email"
                            placeholder="Mobile Number or Email"
                            required
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>

                    <Field name="password">
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.password && form.touched.password}>
                        <Input
                            className="w-full"
                            {...field}
                            id="password"
                            placeholder="Password"
                            type="password"
                            required
                        />
                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>

                    <p className="text-center text-sm">
                    People who use our service may upload your contact information to Instagram. Learn More
                    </p>

                    <p className="text-center text-sm">
                    By signing up, you agree to our Terms, Privacy Policy, and Cookies Policy
                    </p>

                    <Button
                    className="w-full"
                    mt={4}
                    colorScheme="blue"
                    type="submit"
                    isLoading={formikProps.isSubmitting}
                    >
                    Sign In
                    </Button>
                    <p className="text-center text-sm mt-2">
                    {/* <span onClick={() => navigate('/forget-password')} className="text-blue-700 cursor-pointer">Forget Password?</span> */}
                    </p>
                </Form>
                )}
            </Formik>
            </Box>
        </div>
        <div className="border w-full border-slate-300 mt-5">
            <p className="text-center py-2 text-sm">
            If You Don't Have An Account 
            <span onClick={handleNavigate} className="ml-2 text-blue-700 cursor-pointer">Sign Up</span>
            </p>
        </div>
        </div>
    );
    };

    export default Signin;   /// sucessfull page

// import React, { useEffect, useState } from 'react';
// import { Box, FormControl, FormErrorMessage, Input, Button, IconButton } from '@chakra-ui/react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { signinAction } from '../../Redux/Auth/Action';
// import { getUserprofileAction } from '../../Redux/User/Action';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons for visibility toggle
// import { useToast } from '@chakra-ui/react';



// // Validation schema for the form
// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
// });

// export const Signin = () => {
//   const [showPassword, setShowPassword] = useState(false); // State for password visibility
//   const initialValues = { email: '', password: '' };
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { reqUser } = useSelector((store) => store.user); // Destructure correctly
//   const jwt = localStorage.getItem("token");

//   // Handle form submission
//   // const handleSubmit = (values, actions) => {
//   //   dispatch(signinAction(values)); // Consider handling errors from this action
//   //   actions.setSubmitting(false);
//   // };

//  const handleSubmit = (values, actions) => {
//   const toast = useToast(); // Initialize toast

//   fetch('http://localhost:5000/api/signin', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(values),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.token) {
//         localStorage.setItem('token', data.token);
//         toast({
//           title: 'Signed in successfully.',
//           description: 'Welcome back!',
//           status: 'success',
//           duration: 5000,
//           isClosable: true,
//         });
//         navigate('/');
//       }
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });

//   actions.setSubmitting(false);
// };




//   useEffect(() => {
//     if (jwt) {
//       dispatch(getUserprofileAction(jwt));
//     }
//   }, [jwt, dispatch]);

//   // Navigate to user's profile page if user is logged in
//   useEffect(() => {
//     if (reqUser?.username) {
//       navigate(`/${reqUser.username}`);
//     }
//   }, [reqUser, navigate]);

//   const handleNavigate = () => navigate("/signup");

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

//                 <Field name="password">
//                   {({ field, form }) => (
//                     <FormControl isInvalid={form.errors.password && form.touched.password}>
//                       <Box position="relative">
//                         <Input
//                           className="w-full"
//                           {...field}
//                           id="password"
//                           placeholder="Password"
//                           type={showPassword ? 'text' : 'password'}
//                           required
//                         />
//                         <IconButton
//                           aria-label={showPassword ? 'Hide password' : 'Show password'}
//                           // icon={showPassword ? <FaEyeSlash /> : <FaEye />}
//                           position="absolute"
//                           right="0.5rem"
//                           top="50%"
//                           transform="translateY(-50%)"
//                           onClick={() => setShowPassword(!showPassword)}
//                         />
//                       </Box>
//                       <FormErrorMessage>{form.errors.password}</FormErrorMessage>
//                     </FormControl>
//                   )}
//                 </Field>

//                 <p className="text-center text-sm">
//                   People who use our service may upload your contact information to Instagram. Learn More
//                 </p>

//                 <p className="text-center text-sm">
//                   By signing up, you agree to our Terms, Privacy Policy, and Cookies Policy
//                 </p>

//                 <Button
//                   className="w-full"
//                   mt={4}
//                   colorScheme="blue"
//                   type="submit"
//                   isLoading={formikProps.isSubmitting}
//                 >
//                   Sign In
//                 </Button>
//                 <p className="text-center text-sm mt-2">
//                   {/* <span onClick={() => navigate('/forget-password')} className="text-blue-700 cursor-pointer">Forget Password?</span> */}
//                 </p>
//               </Form>
//             )}
//           </Formik>
//         </Box>
//       </div>
//       <div className="border w-full border-slate-300 mt-5">
//         <p className="text-center py-2 text-sm">
//           If You Don't Have An Account 
//           <span onClick={handleNavigate} className="ml-2 text-blue-700 cursor-pointer">Sign Up</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signin;



    // export const Signin = () => {
    // const [showPassword, setShowPassword] = useState(false); // State for password visibility
    // const initialValues = { email: '', password: '' };
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const { reqUser } = useSelector((store) => store.user); // Destructure correctly
    // const jwt = localStorage.getItem("token");
    // const toast = useToast(); // Initialize toast here

    // // Handle form submission
    // const handleSubmit = (values, actions) => {
    //     fetch('http://localhost:5000/api/signin', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(values),
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         if (data.token) {
    //         localStorage.setItem('token', data.token);
    //         toast({
    //             title: 'Signed in successfully.',
    //             description: 'Welcome back!',
    //             status: 'success',
    //             duration: 5000,
    //             isClosable: true,
    //         });
    //         navigate('/');
    //         }
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });

    //     actions.setSubmitting(false);
    // };

    // useEffect(() => {
    //     if (jwt) {
    //     dispatch(getUserprofileAction(jwt));
    //     }
    // }, [jwt, dispatch]);

    // // Navigate to user's profile page if user is logged in
    // useEffect(() => {
    //     if (reqUser?.username) {
    //     navigate(`/${reqUser.username}`);
    //     }
    // }, [reqUser, navigate]);

    // const handleNavigate = () => navigate("/signup");

    // return (
    //     <div>
    //     <div className="border">
    //         <Box p={8} display="flex" flexDirection="column" alignItems="center">
    //         <img
    //             className="w-[21vh] mt-5"
    //             src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png"
    //             alt="Instagram Logo"
    //         />

    //         <Formik
    //             initialValues={initialValues}
    //             onSubmit={handleSubmit}
    //             validationSchema={validationSchema}
    //         >
    //             {(formikProps) => (
    //             <Form className="space-y-8">
    //                 <Field name="email">
    //                 {({ field, form }) => (
    //                     <FormControl isInvalid={form.errors.email && form.touched.email}>
    //                     <Input
    //                         className="w-full"
    //                         {...field}
    //                         id="email"
    //                         placeholder="Mobile Number or Email"
    //                         required
    //                     />
    //                     <FormErrorMessage>{form.errors.email}</FormErrorMessage>
    //                     </FormControl>
    //                 )}
    //                 </Field>

    //                 <Field name="password">
    //                 {({ field, form }) => (
    //                     <FormControl isInvalid={form.errors.password && form.touched.password}>
    //                     <Box position="relative">
    //                         <Input
    //                         className="w-full"
    //                         {...field}
    //                         id="password"
    //                         placeholder="Password"
    //                         type={showPassword ? 'text' : 'password'}
    //                         required
    //                         />
    //                         <IconButton
    //                         aria-label={showPassword ? 'Hide password' : 'Show password'}
    //                         // icon={showPassword ? <FaEyeSlash /> : <FaEye />}
    //                         position="absolute"
    //                         right="0.5rem"
    //                         top="50%"
    //                         transform="translateY(-50%)"
    //                         onClick={() => setShowPassword(!showPassword)}
    //                         />
    //                     </Box>
    //                     <FormErrorMessage>{form.errors.password}</FormErrorMessage>
    //                     </FormControl>
    //                 )}
    //                 </Field>

    //                 <p className="text-center text-sm">
    //                 People who use our service may upload your contact information to Instagram. Learn More
    //                 </p>

    //                 <p className="text-center text-sm">
    //                 By signing up, you agree to our Terms, Privacy Policy, and Cookies Policy
    //                 </p>

    //                 <Button
    //                 className="w-full"
    //                 mt={4}
    //                 colorScheme="blue"
    //                 type="submit"
    //                 isLoading={formikProps.isSubmitting}
    //                 >
    //                 Sign In
    //                 </Button>
    //                 <p className="text-center text-sm mt-2">
    //                 {/* <span onClick={() => navigate('/forget-password')} className="text-blue-700 cursor-pointer">Forget Password?</span> */}
    //                 </p>
    //             </Form>
    //             )}
    //         </Formik>
    //         </Box>
    //     </div>
    //     <div className="border w-full border-slate-300 mt-5">
    //         <p className="text-center py-2 text-sm">
    //         If You Don't Have An Account 
    //         <span onClick={handleNavigate} className="ml-2 text-blue-700 cursor-pointer">Sign Up</span>
    //         </p>
    //     </div>
    //     </div>
    // );
    // };

    // export default Signin;

