export const uploadToCloudinary = async (image) => {
    if (image) {
      const data = new FormData(); // Corrected FromData to FormData
      data.append("file", image);
      data.append("upload_preset", "instagram");
      data.append("mb9gsfae","dinrl1pld")
  
      const res = await fetch("CLOUDINARY_URL=https://console.cloudinary.com/console/lui/upload_presets/8f41bc85800887b108fb60be7ee56e99/edit?customer_external_id=85f2e75cbbf3b92141ff7b815a3072&frameless=1", { // Corrected URL
        method: "POST",
        body: data,
      });
  
      const fileData = await res.json();
  
      console.log("fileData", fileData);
      return fileData.secure_url; // Use secure_url instead of url
    }
  };
  



// cloudinary.js

// import { Cloudinary } from 'cloudinary-core';

// const cloudinary = new Cloudinary({
//     cloud_name: 'your-cloud-name', // replace with your Cloudinary cloud name
//     secure: true
// });

// // Function to upload an image to Cloudinary
// export const uploadImage = (file, callback) => {
//     const url = `https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/image/upload`;
//     const formData = new FormData()  ;
//     formData.append('file', file);
//     formData.append('upload_preset', 'your-upload-preset'); // replace with your upload preset

//     fetch(url, {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => callback(data))
//     .catch(error => console.error('Error uploading image:', error));
// };

// // Function to get a Cloudinary URL for an image with transformation
// export const getImageUrl = (publicId, transformationOptions) => {
//     return cloudinary.url(publicId, transformationOptions);
// };

