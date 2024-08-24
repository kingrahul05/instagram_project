// import React, { useState } from 'react'
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';





// const CommentCard = ({comment}) => {
//     const [isCommentLike,setIsCommentLike]=useState();
//     const handelLikeComment=()=>{
//         setIsCommentLike(!isCommentLike)
//     }
//   return (
//     <div>
//         <div className="flex items-center justify-between py-5">
//             <div className="flex items-center">
//                 <div>
//                     <img className="w-9 h-9 rounded-full" src="https://cdn.pixabay.com/photo/2023/07/30/13/02/ai-generated-8158896_640.jpg" alt="" />
//                 </div>
//                 <div className="ml-3">
//                     <p>
//                         <span className="font-semibold">username</span>

//                         <span className="ml-2">{comment.content}</span>
                       

                        
//                     </p>

                   

//                     <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
//                         <span>1 min ago</span>
//                         <span>23 likes</span>
//                     </div>
                    
//                 </div>
//             </div>

//             {isCommentLike?<AiFillHeart onClick={handelLikeComment} className="text-xs hover:opacity-50 cursor-pointer text-red-600" />:<AiOutlineHeart onClick={handelLikeComment}  className="text-xs hover:opacity-50 cursor-pointer"/> }
//         </div>
//     </div>
//   )
// }

// export default CommentCard


// import React, { useState, useEffect } from 'react';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// import { isCommentLikedByUser, timeDifference } from '../../Config/Logics';
// import { useDispatch, useSelector } from 'react-redux';
// import { likeCommentAction, unlikeCommentAction } from '../../Redux/Comment/Action';
// import { useEditable } from '@chakra-ui/react';

// const CommentCard = ({ comment }) => {
//     // Initialize state based on comment's liked status
//     const [isCommentLiked, setIsCommentLiked] = useState(comment?.likedByUsers?.includes(localStorage.getItem("userId")) || false);
//     const dispatch = useDispatch();
//     const token = localStorage.getItem("token");
//     const {user}=useSelector(store=>store);

//     // Create data object for dispatch
//     const data = {
//         commentId: comment.id,
//         jwt: token
//     };

//     // Handle like comment action
//     const handleLikeComment = () => {
//         if (!isCommentLiked) {
//             setIsCommentLiked(true);
//            dispatch(likeCommentAction(data));
//            console.log("handle like")
//         }
//     };

//     // Handle unlike comment action
//     const handleUnlikeComment = () => {
//         if (isCommentLiked) {
//             setIsCommentLiked(false);
//            dispatch(unlikeCommentAction(data));
//            console.log("handle inlike")
//         }
//     };

//     useEffect(()=>{

//         setIsCommentLiked(isCommentLikedByUser(comment,user.requser.id))

//     },[])

//     return (
//         <div className="border-b border-gray-200">
//             <div className="flex items-center justify-between py-5 px-4">
//                 <div className="flex items-center">
//                     {/* User profile image */}
//                     <div>
//                         <img
//                             className="w-9 h-9 rounded-full"
//                             src={comment.userDto?.userImage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
//                             alt="User"
//                         />
//                     </div>
//                     <div className="ml-3">
//                         {/* Comment content */}
//                         <p>
//                             <span className="font-semibold">{comment?.userDto?.username}</span>
//                             <span className="ml-2">{comment.content}</span>
//                         </p>
//                         {/* Comment timestamp and like count */}
//                         <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
//                             <span>{timeDifference(comment?.createdAt)}</span>
//                             {comment?.likedByUsers?.length > 0 && <span>{comment.likedByUsers.length} likes</span>}
//                         </div>
//                     </div>
//                 </div>
//                 {/* Like button */}
//                 <div onClick={isCommentLiked ? handleUnlikeComment : handleLikeComment}>
//                     {isCommentLiked ? (
//                         <AiFillHeart className="text-xs hover:opacity-50 cursor-pointer text-red-600" />
//                     ) : (
//                         <AiOutlineHeart className="text-xs hover:opacity-50 cursor-pointer" />
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CommentCard;


import React, { useState, useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { isCommentLikedByUser, timeDifference } from '../../Config/Logics';
import { useDispatch, useSelector } from 'react-redux';
import { likeCommentAction, unlikeCommentAction } from '../../Redux/Comment/Action';

const CommentCard = ({ comment }) => {
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const user = useSelector(store => store.user.requser);
    
    const [isCommentLiked, setIsCommentLiked] = useState(comment?.likedByUsers?.includes(user.id) || false);
    
    const data = {
        commentId: comment.id,
        jwt: token
    };

    const handleLikeComment = () => {
        if (!isCommentLiked) {
            setIsCommentLiked(true);
            dispatch(likeCommentAction(data));
            console.log("handle like");
        }
    };

    const handleUnlikeComment = () => {
        if (isCommentLiked) {
            setIsCommentLiked(false);
            dispatch(unlikeCommentAction(data));
            console.log("handle unlike");
        }
    };

    useEffect(() => {
        setIsCommentLiked(isCommentLikedByUser(comment, user.id));
    }, [comment, user.id]);

    const userImage = comment.userDto?.userImage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";

    return (
        <div className="border-b border-gray-200">
            <div className="flex items-center justify-between py-5 px-4">
                <div className="flex items-center">
                    <div>
                        <img
                            className="w-9 h-9 rounded-full"
                            src={userImage}
                            alt="User"
                            onError={(e) => { e.target.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"; }}
                        />
                    </div>
                    <div className="ml-3">
                        <p>
                            <span className="font-semibold">{comment?.userDto?.username}</span>
                            <span className="ml-2">{comment.content}</span>
                        </p>
                        <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
                            <span>{timeDifference(comment?.createdAt)}</span>
                            {comment?.likedByUsers?.length > 0 && <span>{comment.likedByUsers.length} likes</span>}
                        </div>
                    </div>
                </div>
                <div onClick={isCommentLiked ? handleUnlikeComment : handleLikeComment}>
                    {isCommentLiked ? (
                        <AiFillHeart className="text-xs hover:opacity-50 cursor-pointer text-red-600" />
                    ) : (
                        <AiOutlineHeart className="text-xs hover:opacity-50 cursor-pointer" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommentCard;
