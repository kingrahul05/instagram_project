// import React, { useState } from 'react';
// import { Modal, ModalContent, ModalOverlay, ModalBody, Button } from '@chakra-ui/react';
// import { FaPhotoVideo } from 'react-icons/fa';
// import "./CreatePostModal.css";
// import { GrEmoji } from 'react-icons/gr';
// import { GoLocation } from "react-icons/go";
// import { useDispatch } from 'react-redux';
// import { createPostAction } from '../Redux/Post/Action';
// import { uploadToCloudinary } from '../Config/UploadToCloudnary';

// const CreatePostModal = ({ onClose, isOpen }) => {
//   const [isDragOver, setIsDragOver] = useState(false);
//   const [file, setFile] = useState(null);
//   const [caption, setCaption] = useState("");
//   const dispatch = useDispatch();
//   const [imageUrl, setImageUrl] = useState("");
//   const [location, setLocation] = useState("");
//   const token = localStorage.getItem("token");

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const droppedFile = event.dataTransfer.files[0];
//     if (droppedFile && (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/"))) {
//       setFile(droppedFile);
//     }
//     setIsDragOver(false);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "copy";
//     setIsDragOver(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragOver(false);
//   };

//   const handleOnChange = async (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile && (selectedFile.type.startsWith('image/') || selectedFile.type.startsWith('video/'))) {
//       const imgUrl = await uploadToCloudinary(selectedFile);
//       setImageUrl(imgUrl);
//       setFile(selectedFile);
//     } else {
//       setFile(null);
//       alert('Please select an image or video');
//     }
//   };

//   const handleCaptionChange = (event) => {
//     setCaption(event.target.value);
//   };

//   const handleCreatePost = () => {
//     const formData = new FormData();
//     formData.append('caption', caption);
//     formData.append('location', location);
//     formData.append('image', file);

//     const data = {
//       jwt: token,
//       data: formData,
//       isFormData: true
//     };
//     dispatch(createPostAction(data));
//     onClose();
//   };

//   return (
//     <div>
//       <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
//         <ModalOverlay />
//         <ModalContent>
//           <div className="flex justify-between py-1 px-10 items-center">
//             <p>Create New Post</p>
//             <Button
//               variant={"ghost"}
//               size="sm"
//               colorScheme={"blue"}
//               onClick={handleCreatePost}
//             >
//               Share
//             </Button>
//           </div>
//           <hr />
//           <ModalBody>
//             <div className="h-[70vh] justify-between pb-5 flex">
//               <div className="w-[50%]">
//                 {!file && (
//                   <div
//                     onDrop={handleDrop}
//                     onDragOver={handleDragOver}
//                     onDragLeave={handleDragLeave}
//                     className={`drag-drop h-full ${isDragOver ? 'drag-over' : ''}`}
//                   >
//                     <div>
//                       <FaPhotoVideo className="text-3xl" />
//                       <p>Drag Photo or Video here</p>
//                     </div>
//                     <label htmlFor="file-upload" className="custom-file-upload">
//                       Select From Computer
//                     </label>
//                     <input
//                       className="fileInput"
//                       type="file"
//                       id="file-upload"
//                       accept="image/*, video/*"
//                       onChange={handleOnChange}
//                     />
//                   </div>
//                 )}
//                 {file && (
//                   <img className="max-h-full" src={URL.createObjectURL(file)} alt="Selected" />
//                 )}
//               </div>
//               <div className="w-[1px] border h-full"></div>
//               <div className="w-[50%]">
//                 <div className="flex items-center px-2">
//                   <img
//                     className="w-7 h-7 rounded-full"
//                     src="https://cdn.pixabay.com/photo/2024/02/01/22/25/dahlia-8546849_640.jpg"
//                     alt="User Avatar"
//                   />
//                   <p className="font-semibold ml-4">username</p>
//                 </div>
//                 <div className="px-2">
//                   <textarea
//                     placeholder="Write a caption"
//                     className="captionInput"
//                     name="caption"
//                     rows="8"
//                     onChange={handleCaptionChange}
//                   />
//                 </div>
//                 <div className="flex justify-between px-2">
//                   <GrEmoji />
//                   <p className="opacity-70">{caption.length} / 2,200</p>
//                 </div>
//                 <hr />
//                 <div className="p-2 flex justify-between items-center">
//                   <input onChange={(e) => setLocation(e.target.value)} className="locationInput" type="text" placeholder="Location" name="location" />
//                   <GoLocation />
//                 </div>
//                 <hr />
//               </div>
//             </div>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// }

// export default CreatePostModal;


//  React, { useState } from 'react';
// import { Modal, ModalContent, ModalOverlay, ModalBody, Button } from '@chakra-ui/react';
// import { FaPhotoVideo } from 'react-icons/fa';
// import "./CreatePostModal.css";
// import { GrEmoji } from 'react-icons/gr';
// import { GoLocation } from "react-icons/go";
// import { useDispatch } from 'react-redux';
// import { createPostAction } from '../Redux/Post/Action';
// import { uploadToCloudinary } from '../Config/UploadToCloudnary';

// const CreatePostModal = ({ onClose, isOpen }) => {
//   const [isDragOver, setIsDragOver] = useState(false);
//   const [file, setFile] = useState(null);
//   const [caption, setCaption] = useState("");
//   const dispatch = useDispatch();
//   const [imageUrl, setImageUrl] = useState("");
//   const [location, setLocation] = useState("");
//   const token = localStorage.getItem("token");

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const droppedFile = event.dataTransfer.files[0];
//     if (droppedFile && (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/"))) {
//       setFile(droppedFile);
//     }
//     setIsDragOver(false);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "copy";
//     setIsDragOver(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragOver(false);
//   };

//   const handleOnChange = async (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile && (selectedFile.type.startsWith('image/') || selectedFile.type.startsWith('video/'))) {
//       const imgUrl = await uploadToCloudinary(selectedFile);
//       setImageUrl(imgUrl);
//       setFile(selectedFile);
//     } else {
//       setFile(null);
//       alert('Please select an image or video');
//     }
//   };

//   const handleCaptionChange = (event) => {
//     setCaption(event.target.value);
//   };

//   const handleCreatePost = async () => {
//     if (!imageUrl) {
//       alert('Please select an image or video');
//       return;
//     }

//     const data = {
//       jwt: token,
//       data: {
//         caption,
//         location,
//         image: imageUrl,
//       },
//     };

//     await dispatch(createPostAction(data));
//     onClose();
//   };

//   return (
//     <div>
//       <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
//         <ModalOverlay />
//         <ModalContent>
//           <div className="flex justify-between py-1 px-10 items-center">
//             <p>Create New Post</p>
//             <Button
//               variant={"ghost"}
//               size="sm"
//               colorScheme={"blue"}
//               onClick={handleCreatePost}
//             >
//               Share
//             </Button>
//           </div>
//           <hr />
//           <ModalBody>
//             <div className="h-[70vh] justify-between pb-5 flex">
//               <div className="w-[50%]">
//                 {!file && (
//                   <div
//                     onDrop={handleDrop}
//                     onDragOver={handleDragOver}
//                     onDragLeave={handleDragLeave}
//                     className={`drag-drop h-full ${isDragOver ? 'drag-over' : ''}`}
//                   >
//                     <div>
//                       <FaPhotoVideo className="text-3xl" />
//                       <p>Drag Photo or Video here</p>
//                     </div>
//                     <label htmlFor="file-upload" className="custom-file-upload">
//                       Select From Computer
//                     </label>
//                     <input
//                       className="fileInput"
//                       type="file"
//                       id="file-upload"
//                       accept="image/*,import video/*"
//                       onChange={handleOnChange}
//                     />
//                   </div>
//                 )}
//                 {file && (
//                   <img className="max-h-full" src={URL.createObjectURL(file)} alt="Selected" />
//                 )}
//               </div>
//               <div className="w-[1px] border h-full"></div>
//               <div className="w-[50%]">
//                 <div className="flex items-center px-2">
//                   <img
//                     className="w-7 h-7 rounded-full"
//                     src="https://cdn.pixabay.com/photo/2024/02/01/22/25/dahlia-8546849_640.jpg"
//                     alt="User Avatar"
//                   />
//                   <p className="font-semibold ml-4">username</p>
//                 </div>
//                 <div className="px-2">
//                   <textarea
//                     placeholder="Write a caption"
//                     className="captionInput"
//                     name="caption"
//                     rows="8"
//                     onChange={handleCaptionChange}
//                   />
//                 </div>
//                 <div className="flex justify-between px-2">
//                   <GrEmoji />
//                   <p className="opacity-70">{caption.length} / 2,200</p>
//                 </div>
//                 <hr />
//                 <div className="p-2 flex justify-between items-center">
//                   <input onChange={(e) => setLocation(e.target.value)} className="locationInput" type="text" placeholder="Location" name="location" />
//                   <GoLocation />
//                 </div>
//                 <hr />
//               </div>
//             </div>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// }

// export default CreatePostModal;




// import React, { useState } from 'react';
// import { Modal, ModalContent, ModalOverlay, ModalBody, Button } from '@chakra-ui/react';
// import { FaPhotoVideo } from 'react-icons/fa';
// import "./CreatePostModal.css";
// import { GrEmoji } from 'react-icons/gr';
// import { GoLocation } from "react-icons/go";
// import { useDispatch } from 'react-redux';
// import { createPostAction } from '../Redux/Post/Action';
// import { uploadToCloudinary } from '../Config/UploadToCloudnary';

// const CreatePostModal = ({ onClose, isOpen }) => {
//   const [isDragOver, setIsDragOver] = useState(false);
//   const [file, setFile] = useState(null);
//   const [caption, setCaption] = useState("");
//   const dispatch = useDispatch();
//   const [imageUrl, setImageUrl] = useState("");
//   const [location, setLocation] = useState("");
//   const token = localStorage.getItem("token");

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const droppedFile = event.dataTransfer.files[0];
//     if (droppedFile && (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/"))) {
//       setFile(droppedFile);
//     }
//     setIsDragOver(false);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "copy";
//     setIsDragOver(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragOver(false);
//   };

//   const handleOnChange = async (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile && (selectedFile.type.startsWith('image/') || selectedFile.type.startsWith('video/'))) {
//       const imgUrl = await uploadToCloudinary(selectedFile);
//       setImageUrl(imgUrl);
//       setFile(selectedFile);
//     } else {
//       setFile(null);
//       alert('Please select an image or video');
//     }
//   };

//   const handleCaptionChange = (event) => {
//     setCaption(event.target.value);
//   };

//   const handleCreatePost = async () => {
//     if (!imageUrl) {
//       alert('Please select an image or video');
//       return;
//     }

//     const data = {
//       jwt: token,
//       data: {
//         caption,
//         location,
//         image: imageUrl,
//       },
//     };

//     console.log('Creating post with data:', data);
//     await dispatch(createPostAction(data));
//     onClose();
//   };

//   return (
//     <div>
//       <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
//         <ModalOverlay />
//         <ModalContent>
//           <div className="flex justify-between py-1 px-10 items-center">
//             <p>Create New Post</p>
//             <Button
//               variant={"ghost"}
//               size="sm"
//               colorScheme={"blue"}
//               onClick={handleCreatePost}
//             >
//               Share
//             </Button>
//           </div>
//           <hr />
//           <ModalBody>
//             <div className="h-[70vh] justify-between pb-5 flex">
//               <div className="w-[50%]">
//                 {!file && (
//                   <div
//                     onDrop={handleDrop}
//                     onDragOver={handleDragOver}
//                     onDragLeave={handleDragLeave}
//                     className={`drag-drop h-full ${isDragOver ? 'drag-over' : ''}`}
//                   >
//                     <div>
//                       <FaPhotoVideo className="text-3xl" />
//                       <p>Drag Photo or Video here</p>
//                     </div>
//                     <label htmlFor="file-upload" className="custom-file-upload">
//                       Select From Computer
//                     </label>
//                     <input
//                       className="fileInput"
//                       type="file"
//                       id="file-upload"
//                       accept="image/*,video/*"
//                       onChange={handleOnChange}
//                     />
//                   </div>
//                 )}
//                 {file && (
//                   <img className="max-h-full" src={URL.createObjectURL(file)} alt="Selected" />
//                 )}
//               </div>
//               <div className="w-[1px] border h-full"></div>
//               <div className="w-[50%]">
//                 <div className="flex items-center px-2">
//                   <img
//                     className="w-7 h-7 rounded-full"
//                     src="https://cdn.pixabay.com/photo/2024/02/01/22/25/dahlia-8546849_640.jpg"
//                     alt="User Avatar"
//                   />
//                   <p className="font-semibold ml-4">username</p>
//                 </div>
//                 <div className="px-2">
//                   <textarea
//                     placeholder="Write a caption"
//                     className="captionInput"
//                     name="caption"
//                     rows="8"
//                     onChange={handleCaptionChange}
//                   />
//                 </div>
//                 <div className="flex justify-between px-2">
//                   <GrEmoji />
//                   <p className="opacity-70">{caption.length} / 2,200</p>
//                 </div>
//                 <hr />
//                 <div className="p-2 flex justify-between items-center">
//                   <input onChange={(e) => setLocation(e.target.value)} className="locationInput" type="text" placeholder="Location" name="location" />
//                   <GoLocation />
//                 </div>
//                 <hr />
//               </div>
//             </div>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// }

// export default CreatePostModal;



// import React, { useState } from 'react';
// import { Modal, ModalContent, ModalOverlay, ModalBody, Button } from '@chakra-ui/react';
// import { FaPhotoVideo } from 'react-icons/fa';
// import { GrEmoji } from 'react-icons/gr';
// import { GoLocation } from 'react-icons/go';
// import { useDispatch } from 'react-redux';
// import { createPostAction } from '../Redux/Post/Action';
// import { uploadToCloudinary } from '../Config/UploadToCloudnary';
// import "./CreatePostModal.css";

// const CreatePostModal = ({ onClose, isOpen }) => {
//   const [isDragOver, setIsDragOver] = useState(false);
//   const [file, setFile] = useState(null);
//   const [caption, setCaption] = useState("");
//   const dispatch = useDispatch();
//   const [imageUrl, setImageUrl] = useState("");
//   const [location, setLocation] = useState("");
//   const token = localStorage.getItem("token");

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const droppedFile = event.dataTransfer.files[0];
//     if (droppedFile && (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/"))) {
//       setFile(droppedFile);
//     }
//     setIsDragOver(false);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "copy";
//     setIsDragOver(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragOver(false);
//   };

//   const handleOnChange = async (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile && (selectedFile.type.startsWith('image/') || selectedFile.type.startsWith('video/'))) {
//       const imgUrl = await uploadToCloudinary(selectedFile);
//       setImageUrl(imgUrl);
//       setFile(selectedFile);
//     } else {
//       setFile(null);
//       alert('Please select an image or video');
//     }
//   };

//   const handleCaptionChange = (event) => {
//     setCaption(event.target.value);
//   };

//   const handleCreatePost = async () => {
//     if (!imageUrl) {
//       alert('Please select an image or video');
//       return;
//     }

//     const data = {
//       jwt: token,
//       data: {
//         caption,
//         location,
//         image: imageUrl,
//       },
//     };

//     console.log('Creating post with data:', data);
//     await dispatch(createPostAction(data));
//     onClose();
//   };

//   return (
//     <div>
//       <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
//         <ModalOverlay />
//         <ModalContent>
//           <div className="flex justify-between py-1 px-10 items-center">
//             <p>Create New Post</p>
//             <Button
//               variant={"ghost"}
//               size="sm"
//               colorScheme={"blue"}
//               onClick={handleCreatePost}
//             >
//               Share
//             </Button>
//           </div>
//           <hr />
//           <ModalBody>
//             <div className="h-[70vh] justify-between pb-5 flex">
//               <div className="w-[50%]">
//                 {!file && (
//                   <div
//                     onDrop={handleDrop}
//                     onDragOver={handleDragOver}
//                     onDragLeave={handleDragLeave}
//                     className={`drag-drop h-full ${isDragOver ? 'drag-over' : ''}`}
//                   >
//                     <div>
//                       <FaPhotoVideo className="text-3xl" />
//                       <p>Drag Photo or Video here</p>
//                     </div>
//                     <label htmlFor="file-upload" className="custom-file-upload">
//                       Select From Computer
//                     </label>
//                     <input
//                       className="fileInput"
//                       type="file"
//                       id="file-upload"
//                       accept="image/*,video/*"
//                       onChange={handleOnChange}
//                     />
//                   </div>
//                 )}
//                 {file && (
//                   <img className="max-h-full" src={URL.createObjectURL(file)} alt="Selected" />
//                 )}
//               </div>
//               <div className="w-[1px] border h-full"></div>
//               <div className="w-[50%]">
//                 <div className="flex items-center px-2">
//                   <img
//                     className="w-7 h-7 rounded-full"
//                     src="https://cdn.pixabay.com/photo/2024/02/01/22/25/dahlia-8546849_640.jpg"
//                     alt="User Avatar"
//                   />
//                   <p className="font-semibold ml-4">username</p>
//                 </div>
//                 <div className="px-2">
//                   <textarea
//                     placeholder="Write a caption"
//                     className="captionInput"
//                     name="caption"
//                     rows="8"
//                     onChange={handleCaptionChange}
//                     value={caption}
//                   />
//                 </div>
//                 <div className="flex justify-between px-2">
//                   <GrEmoji />
//                   <p className="opacity-70">{caption.length} / 2,200</p>
//                 </div>
//                 <hr />
//                 <div className="p-2 flex justify-between items-center">
//                   <input onChange={(e) => setLocation(e.target.value)} className="locationInput" type="text" placeholder="Location" name="location" value={location} />
//                   <GoLocation />
//                 </div>
//                 <hr />
//               </div>
//             </div>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// }

// export default CreatePostModal;



// import React, { useState } from 'react';
// import { Modal, ModalContent, ModalOverlay, ModalBody, Button } from '@chakra-ui/react';
// import { FaPhotoVideo } from 'react-icons/fa';
// import { GrEmoji } from 'react-icons/gr';
// import { GoLocation } from 'react-icons/go';
// import { useDispatch } from 'react-redux';
// import { createPostAction } from '../Redux/Post/Action';
// import "./CreatePostModal.css";

// // Placeholder upload function
// const uploadMedia = async (file) => {
//   // Replace with actual upload logic
//   // This is a placeholder URL; replace it with the URL of the uploaded file
//   const placeholderUrl = URL.createObjectURL(file);
//   return placeholderUrl;
// };

// const CreatePostModal = ({ onClose, isOpen }) => {
//   const [isDragOver, setIsDragOver] = useState(false);
//   const [file, setFile] = useState(null);
//   const [caption, setCaption] = useState("");
//   const dispatch = useDispatch();
//   const [imageUrl, setImageUrl] = useState("");
//   const [location, setLocation] = useState("");
//   const token = localStorage.getItem("token");

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const droppedFile = event.dataTransfer.files[0];
//     if (droppedFile && (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/"))) {
//       setFile(droppedFile);
//     }
//     setIsDragOver(false);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "copy";
//     setIsDragOver(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragOver(false);
//   };

//   const handleOnChange = async (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile && (selectedFile.type.startsWith('image/') || selectedFile.type.startsWith('video/'))) {
//       setFile(selectedFile);
//       const imgUrl = await uploadMedia(selectedFile); // Use the uploadMedia function
//       setImageUrl(imgUrl);
//     } else {
//       setFile(null);
//       alert('Please select an image or video');
//     }
//   };

//   const handleCaptionChange = (event) => {
//     setCaption(event.target.value);
//   };

//   const handleCreatePost = async () => {
//     if (!imageUrl) {
//       alert('Please select an image or video');
//       return;
//     }

//     const data = {
//       jwt: token,
//       data: {
//         caption,
//         location,
//         media: imageUrl, // Use the imageUrl for media
//       },
//     };

//     console.log('Creating post with data:', data);
//     await dispatch(createPostAction(data));
//     onClose();
//   };

//   return (
//     <div>
//       <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
//         <ModalOverlay />
//         <ModalContent>
//           <div className="flex justify-between py-1 px-10 items-center">
//             <p>Create New Post</p>
//             <Button
//               variant={"ghost"}
//               size="sm"
//               colorScheme={"blue"}
//               onClick={handleCreatePost}
//             >
//               Share
//             </Button>
//           </div>
//           <hr />
//           <ModalBody>
//             <div className="h-[70vh] justify-between pb-5 flex">
//               <div className="w-[50%]">
//                 {!file && (
//                   <div
//                     onDrop={handleDrop}
//                     onDragOver={handleDragOver}
//                     onDragLeave={handleDragLeave}
//                     className={`drag-drop h-full ${isDragOver ? 'drag-over' : ''}`}
//                   >
//                     <div>
//                       <FaPhotoVideo className="text-3xl" />
//                       <p>Drag Photo or Video here</p>
//                     </div>
//                     <label htmlFor="file-upload" className="custom-file-upload">
//                       Select From Computer
//                     </label>
//                     <input
//                       className="fileInput"
//                       type="file"
//                       id="file-upload"
//                       accept="image/*,video/*"
//                       onChange={handleOnChange}
//                     />
//                   </div>
//                 )}
//                 {file && (
//                   <img className="max-h-full" src={URL.createObjectURL(file)} alt="Selected" />
//                 )}
//               </div>
//               <div className="w-[1px] border h-full"></div>
//               <div className="w-[50%]">
//                 <div className="flex items-center px-2">
//                   <img
//                     className="w-7 h-7 rounded-full"
//                     src="https://cdn.pixabay.com/photo/2024/02/01/22/25/dahlia-8546849_640.jpg"
//                     alt="User Avatar"
//                   />
//                   <p className="font-semibold ml-4">username</p>
//                 </div>
//                 <div className="px-2">
//                   <textarea
//                     placeholder="Write a caption"
//                     className="captionInput"
//                     name="caption"
//                     rows="8"
//                     onChange={handleCaptionChange}
//                     value={caption}
//                   />
//                 </div>
//                 <div className="flex justify-between px-2">
//                   <GrEmoji />
//                   <p className="opacity-70">{caption.length} / 2,200</p>
//                 </div>
//                 <hr />
//                 <div className="p-2 flex justify-between items-center">
//                   <input
//                     onChange={(e) => setLocation(e.target.value)}
//                     className="locationInput"
//                     type="text"
//                     placeholder="Location"
//                     name="location"
//                     value={location}
//                   />
//                   <GoLocation />
//                 </div>
//                 <hr />
//               </div>
//             </div>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// };

// export default CreatePostModal;

import React, { useState } from 'react';
import { Modal, ModalContent, ModalOverlay, ModalBody, Button } from '@chakra-ui/react';
import { FaPhotoVideo } from 'react-icons/fa';
import { GrEmoji } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { createPostAction } from '../Redux/Post/Action';
import "./CreatePostModal.css";

const uploadMedia = async (file) => {
  // Implement actual media upload logic
  const placeholderUrl = URL.createObjectURL(file);
  return placeholderUrl;
};

const CreatePostModal = ({ onClose, isOpen }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const [location, setLocation] = useState("");
  const [isUploading, setIsUploading] = useState(false); // New state to track uploading status
  const [uploadError, setUploadError] = useState(null); // New state to track upload errors
  const token = localStorage.getItem("token");

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/"))) {
      setFile(droppedFile);
    }
    setIsDragOver(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleOnChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.type.startsWith('image/') || selectedFile.type.startsWith('video/'))) {
      try {
        setIsUploading(true);
        const imgUrl = await uploadMedia(selectedFile);
        setImageUrl(imgUrl);
        setFile(selectedFile);
        setIsUploading(false);
      } catch (error) {
        setUploadError('Failed to upload media. Please try again.');
        setIsUploading(false);
      }
    } else {
      setFile(null);
      alert('Please select an image or video');
    }
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleCreatePost = async () => {
    if (!imageUrl) {
      alert('Please select an image or video');
      return;
    }

    const data = {
      jwt: token,
      data: {
        caption,
        location,
        media: imageUrl, // Use the imageUrl for media
      },
    };

    console.log('Creating post with data:', data);
    await dispatch(createPostAction(data));
    onClose();
  };

  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className="flex justify-between py-1 px-10 items-center">
            <p>Create New Post</p>
            <Button
              variant={"ghost"}
              size="sm"
              colorScheme={"blue"}
              onClick={handleCreatePost}
              isLoading={isUploading} // Disable button and show loading indicator while uploading
            >
              Share
            </Button>
          </div>
          <hr />
          <ModalBody>
            <div className="h-[70vh] justify-between pb-5 flex">
              <div className="w-[50%]">
                {!file && (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`drag-drop h-full ${isDragOver ? 'drag-over' : ''}`}
                  >
                    <div>
                      <FaPhotoVideo className="text-3xl" />
                      <p>Drag Photo or Video here</p>
                    </div>
                    <label htmlFor="file-upload" className="custom-file-upload">
                      Select From Computer
                    </label>
                    <input
                      className="fileInput"
                      type="file"
                      id="file-upload"
                      accept="image/*,video/*"
                      onChange={handleOnChange}
                    />
                  </div>
                )}
                {file && (
                  <img className="max-h-full" src={URL.createObjectURL(file)} alt="Selected" />
                )}
              </div>
              <div className="w-[1px] border h-full"></div>
              <div className="w-[50%]">
                <div className="flex items-center px-2">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://cdn.pixabay.com/photo/2024/02/01/22/25/dahlia-8546849_640.jpg"
                    alt="User Avatar"
                  />
                  <p className="font-semibold ml-4">username</p>
                </div>
                <div className="px-2">
                  <textarea
                    placeholder="Write a caption"
                    className="captionInput"
                    name="caption"
                    rows="8"
                    onChange={handleCaptionChange}
                    value={caption}
                  />
                </div>
                <div className="flex justify-between px-2">
                  <GrEmoji />
                  <p className="opacity-70">{caption.length} / 2,200</p>
                </div>
                <hr />
                <div className="p-2 flex justify-between items-center">
                  <input
                    onChange={(e) => setLocation(e.target.value)}
                    className="locationInput"
                    type="text"
                    placeholder="Location"
                    name="location"
                    value={location}
                  />
                  <GoLocation />
                </div>
                <hr />
              </div>
            </div>
            {uploadError && <p className="text-red-500">{uploadError}</p>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
