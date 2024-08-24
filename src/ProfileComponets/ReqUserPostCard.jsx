// import React from 'react'
// import { FaComment } from 'react-icons/fa';
// import {AiFillHeart} from "react-icons/ai"
// import "./ReqUserPostCard.css"

// const ReqUserPostCard = () => {
//   return (
//     <div className="p-2">
//         <div className=" post w-60 h-60"> 
//             <img className="cursor-pointer" src="https://cdn.pixabay.com/photo/2024/03/02/13/05/orange-parrots-8608540_640.jpg" alt="" />
//             <div className="overlay">
//                 <div className="overlay-text flex justify-between">
//                     <div className="">
//                         <AiFillHeart></AiFillHeart> <span>10</span>
//                     </div>
//                     <div><FaComment/><span>30</span></div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ReqUserPostCard



// import React from 'react';
// import { FaComment } from 'react-icons/fa';
// import { AiFillHeart } from 'react-icons/ai';
// import "./ReqUserPostCard.css";

// const ReqUserPostCard = () => {
//   return (
//     <div className="post-card p-2">
//       <div className="post w-60 h-60 relative"> 
//         <img 
//           className="post-image cursor-pointer w-full h-full object-cover" 
//           src="https://cdn.pixabay.com/photo/2024/03/02/13/05/orange-parrots-8608540_640.jpg" 
//           alt="Post" 
//         />
//         <div className="overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
//           <div className="overlay-text flex justify-between w-full px-4">
//             <div className="flex items-center">
//               <AiFillHeart className="text-white" />
//               <span className="text-white ml-1">10</span>
//             </div>
//             <div className="flex items-center">
//               <FaComment className="text-white" />
//               <span className="text-white ml-1">30</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReqUserPostCard;




import React from 'react';
import { FaComment } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import "./ReqUserPostCard.css";

const ReqUserPostCard = ({ imageSrc, likes, comments }) => {
  return (
    <div className="post-card p-2">
      <div className="post w-60 h-60 relative"> 
        {/* <img 
          className="post-image cursor-pointer w-full h-full object-cover" 
          src="data:image/jpeg;base64,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"
          alt="Post" 
        /> */}
        <div className="overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="overlay-text flex justify-between w-full px-4">
            <div className="flex items-center">
              <AiFillHeart className="text-white" />
              <span className="text-white ml-1">{likes}</span>
            </div>
            <div className="flex items-center">
              <FaComment className="text-white" />
              <span className="text-white ml-1">{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReqUserPostCard;
