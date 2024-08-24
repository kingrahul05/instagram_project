// import React, { useEffect, useState } from 'react'
// import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
// import { BsThreeDots } from 'react-icons/bs';
// import CommentCard from './CommentCard';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// import { FaRegComment } from 'react-icons/fa';
// import { RiSendPlaneLine } from 'react-icons/ri';
// import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
// import { BsEmojiSmile } from 'react-icons/bs';
// import "./CommentModal.css";
// import { useDispatch, useSelector } from 'react-redux';
// import { createCommentAction, findPostCommentAction } from '../../Redux/Comment/Action';
// import { useParams } from 'react-router-dom';
// import { findPostByIdAction } from '../../Redux/Post/Action';











// const CommentModal = ({
//     onClose, 
//     isOpen, 
//     isSaved, 
//     isPostLiked,
//      handlePostLike,
//       handleSavePost 
//     }) => {

//         const [commentContent,setCommentContent]=useState();
//         const dispatch=useDispatch();
//         const token=localStorage.getItem("token")
//         const {postId}=useParams();
//         const{comment,post}=useSelector(store=>store);

//         console.log("post",post)



//         useEffect(()=>{
//             const data={jwt:token,postId};
//             if(postId){
//                 dispatch(findPostByIdAction(data));
//             }

//         },[comment.createdComment,postId]);




//   return (
//     <div>
//          <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
//         <ModalOverlay />
//         <ModalContent>
         
          
//           <ModalBody>
//             <div className="flex h-[75vh] ">
//                 <div className="w-[45%] flex flex-col justify-center">
//                     <img className="max-h-full w-full" src="https://cdn.pixabay.com/photo/2023/11/18/19/06/futuristic-home-8397004_640.jpg " alt="" />
//                 </div>
//                 <div className=" w-[55%] pl-10 relative"> 
//                     <div className="flex justify-between items-center py-5" >
//                     <div className="flex items-center">
//                         <div>
//                             <img className="w-9 h-9 rounded-full" src="https://cdn.pixabay.com/photo/2022/01/07/01/21/girl-6920625_640.jpg" alt="" />
//                         </div>
//                         <div className="ml-2">
//                             <p>username</p>
//                         </div>
//                      </div>
//                      <BsThreeDots/>
//                     </div>
//                     <hr/>

//                     <div className="comment">  {/* scrollbar  */}
//                         {post.singlePost?.comments?.map((item)=><CommentCard comment={item} />)}  
//                     </div>


//                    <div className="absolute bottom-0 w-[90%] ">
//                    <div className="flex justify-between items-center w-full  py-4">
//                 <div className="flex  items-center space-x-2">
//                     {isPostLiked? <AiFillHeart className="text-2xl hover:opacity-50 cursor-pointer text-red-600" 
//                     onClick={handlePostLike}/>:<AiOutlineHeart className="text-2xl hover:opacity-50 cursor-pointer"  
//                     onClick={handlePostLike} 
//                     />
//                     }

                     
//                     <FaRegComment className="text-xl hover:opacity-50 cursor-pointer"/> 
//                     <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer"/>
                    
                    
//                 </div>
//                 <div className="cursor-pointer"> 
//                 {/* Example usage of the icons */}
//                     {isSaved? <BsBookmarkFill onClick={handleSavePost} className="text-xl hover:opacity-50 cursor-pointer" />:<BsBookmark onClick={handleSavePost}  className="text-xl hover:opacity-50 cursor-pointer"/>}
                    
                    
//                 </div>
//             </div>

//             <div className="w-full py-2 ">
//                 <p>10 likes</p>
//                 <p className="opacity-50 text-sm">1 day ago</p>
//             </div>

            
//                 <div className="flex  items-center  w-full ">
//                     <BsEmojiSmile/>
//                     <input className="commentInputs " type="text" 
//                     placeholder="Add a Comment..." 
//                     onChange={(e)=>setCommentContent(e.target.value)}
//                     onKeyPress={(e)=>{
// if(e.key==="Enter"){
//     const data={
//         postId,
//         jwt:token,
//         data:{
//             content:commentContent
//         }
        
//     }
//     dispatch(createCommentAction(data))
// }
//                     }}
//                     />
//                 </div>
            
//                    </div>

//             </div>
//             </div>
//           </ModalBody>
          
//         </ModalContent>
//       </Modal>
//     </div>
//   )
// }

// export default CommentModal




// import React, { useEffect, useState } from 'react';
// import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
// import { BsThreeDots, BsBookmarkFill, BsBookmark, BsEmojiSmile } from 'react-icons/bs';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// import { FaRegComment } from 'react-icons/fa';
// import { RiSendPlaneLine } from 'react-icons/ri';
// import CommentCard from './CommentCard';
// import "./CommentModal.css";
// import { useDispatch, useSelector } from 'react-redux';
// import { createCommentAction, findPostCommentAction } from '../../Redux/Comment/Action';
// import { useParams } from 'react-router-dom';
// import { findPostByIdAction } from '../../Redux/Post/Action';

// const CommentModal = ({
//     onClose,
//     isOpen,
//     isSaved,
//     isPostLiked,
//     handlePostLike,
//     handleSavePost
// }) => {
//     const [commentContent, setCommentContent] = useState('');
//     const dispatch = useDispatch();
//     const token = localStorage.getItem("token");
//     const { postId } = useParams();
//     const {comment,post,user } = useSelector(store => store);

//     useEffect(() => {
//         const data = { jwt: token, postId };
//         if (postId) {
//             dispatch(findPostByIdAction(data));
//         }
//     }, [postId, token, dispatch]);

//     const handleCommentSubmit = (e) => {
//         if (e.key === "Enter" && commentContent.trim()) {
//             const data = {
//                 postId,
//                 jwt: token,
//                 data: { content: commentContent.trim() }
//             };
//             dispatch(createCommentAction(data));
//             setCommentContent(''); // Clear input field after submission
//         }
//     };

//     return (
//         <div>
//             <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalBody>
//                         <div className="flex h-[75vh]">
//                             <div className="w-[45%] flex flex-col justify-center">
//                                 <img
//                                     className="max-h-full w-full"
//                                     src={post.image || "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460"}
//                                     alt=""
//                                 />
//                             </div>
//                             <div className="w-[55%] pl-10 relative">
//                                 <div className="flex justify-between items-center py-5">
//                                     <div className="flex items-center">
//                                         <div>
//                                             <img
//                                                 className="w-9 h-9 rounded-full"
//                                                 src={user.requser.image || "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460"}
//                                                 alt=""
//                                             />
//                                         </div>
//                                         <div className="ml-2">
//                                             <p>{user.reqUser.username}</p>
//                                         </div>
//                                     </div>
//                                     <BsThreeDots />
//                                 </div>
//                                 <hr />
//                                 <div className="comment scrollbar">
//                                     {post.singlePost?.comments?.map((item) => (
//                                         <CommentCard key={item.id} comment={item} />
//                                     ))}
//                                 </div>
//                                 <div className="absolute bottom-0 w-[90%]">
//                                     <div className="flex justify-between items-center w-full py-4">
//                                         <div className="flex items-center space-x-2">
//                                             {isPostLiked ? (
//                                                 <AiFillHeart
//                                                     className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
//                                                     onClick={handlePostLike}
//                                                 />
//                                             ) : (
//                                                 <AiOutlineHeart
//                                                     className="text-2xl hover:opacity-50 cursor-pointer"
//                                                     onClick={handlePostLike}
//                                                 />
//                                             )}
//                                             <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
//                                             <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
//                                         </div>
//                                         <div className="cursor-pointer">
//                                             {isSaved ? (
//                                                 <BsBookmarkFill
//                                                     onClick={handleSavePost}
//                                                     className="text-xl hover:opacity-50 cursor-pointer"
//                                                 />
//                                             ) : (
//                                                 <BsBookmark
//                                                     onClick={handleSavePost}
//                                                     className="text-xl hover:opacity-50 cursor-pointer"
//                                                 />
//                                             )}
//                                         </div>
//                                     </div>
//                                     <div className="w-full py-2">
//                                         <p>10 likes</p>
//                                         <p className="opacity-50 text-sm">1 day ago</p>
//                                     </div>
//                                     <div className="flex items-center w-full">
//                                         <BsEmojiSmile />
//                                         <input
//                                             className="commentInputs"
//                                             type="text"
//                                             placeholder="Add a Comment..."
//                                             value={commentContent}
//                                             onChange={(e) => setCommentContent(e.target.value)}
//                                             onKeyPress={handleCommentSubmit}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </ModalBody>
//                 </ModalContent>
//             </Modal>
//         </div>
//     );
// };

// export default CommentModal;
 




// import React, { useEffect, useState } from 'react';
// import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
// import { BsThreeDots, BsBookmarkFill, BsBookmark, BsEmojiSmile } from 'react-icons/bs';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// import { FaRegComment } from 'react-icons/fa';
// import { RiSendPlaneLine } from 'react-icons/ri';
// import CommentCard from './CommentCard';
// import "./CommentModal.css";
// import { useDispatch, useSelector } from 'react-redux';
// import { createCommentAction, findPostCommentAction } from '../../Redux/Comment/Action';
// import { useParams } from 'react-router-dom';
// import { findPostByIdAction } from '../../Redux/Post/Action';
// import { timeDifference } from '../../Config/Logics';

// const CommentModal = ({
//     onClose,
//     isOpen,
//     isSaved,
//     isPostLiked,
//     handlePostLike,
//     handleSavePost
// }) => {
//     const [commentContent, setCommentContent] = useState('');
//     const dispatch = useDispatch();
//     const token = localStorage.getItem("token");
//     const { postId } = useParams();
//     const { comment, post, user } = useSelector(store => store);

//     useEffect(() => {
//         const data = { jwt: token, postId };
//         if (postId && token) {
//             dispatch(findPostByIdAction(data));
//         }
//     }, [comment.createdComment,postId]);

//     const handleCommentSubmit = (e) => {
//         if (e.key === "Enter" && commentContent.trim()) {
//             const data = {
//                 postId,
//                 jwt: token,
//                 data: { content: commentContent.trim() }
//             };
//             dispatch(createCommentAction(data));
//             setCommentContent(''); // Clear input field after submission
//         }
//     };

//     return (
//         <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
//             <ModalOverlay />
//             <ModalContent>
//                 <ModalBody>
//                     <div className="flex h-[75vh]">
//                         <div className="w-[45%] flex flex-col justify-center">
//                             <img
//                                 className="max-h-full w-full"
//                                 src={post.singlePost?.image}
//                                 alt="Post"
//                             />
//                         </div>
//                         <div className="w-[55%] pl-10 relative">
//                             <div className="flex justify-between items-center py-5">
//                                 <div className="flex items-center">
//                                     <div>
//                                         <img
//                                             className="w-9 h-9 rounded-full"
//                                             src={user?.requser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
//                                             alt="User"
//                                         />
//                                     </div>
//                                     <div className="ml-2">
//                                         <p>{user?.requser?.username || "Unknown User"}</p>
//                                     </div>
//                                 </div>
//                                 <BsThreeDots />
//                             </div>
//                             <hr />
//                             <div className="comment scrollbar">
//                                 {post?.singlePost?.comments?.map((item) => (
//                                     <CommentCard key={item.id} comment={item} />
//                                 ))}
//                             </div>
//                             <div className="absolute bottom-0 w-[90%]">
//                                 <div className="flex justify-between items-center w-full py-4">
//                                     <div className="flex items-center space-x-2">
//                                         {isPostLiked ? (
//                                             <AiFillHeart
//                                                 className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
//                                                 onClick={handlePostLike}
//                                             />
//                                         ) : (
//                                             <AiOutlineHeart
//                                                 className="text-2xl hover:opacity-50 cursor-pointer"
//                                                 onClick={handlePostLike}
//                                             />
//                                         )}
//                                         <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
//                                         <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
//                                     </div>
//                                     <div className="cursor-pointer">
//                                         {isSaved ? (
//                                             <BsBookmarkFill
//                                                 onClick={handleSavePost}
//                                                 className="text-xl hover:opacity-50 cursor-pointer"
//                                             />
//                                         ) : (
//                                             <BsBookmark
//                                                 onClick={handleSavePost}
//                                                 className="text-xl hover:opacity-50 cursor-pointer"
//                                             />
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div className="w-full py-2">
//                                     {post.singlePost?.likeByUsers?.length > 0 && (
//                                         <p>{post.singlePost?.likeByUsers.length} likes</p>
//                                     )}
//                                     <p className="opacity-50 text-sm">
//                                         {post.singlePost?.createdAt ? timeDifference(post.singlePost?.createdAt) : 'Unknown time'}
//                                     </p>
//                                 </div>
//                                 <div className="flex items-center w-full">
//                                     <BsEmojiSmile />
//                                     <input
//                                         className="commentInputs"
//                                         type="text"
//                                         placeholder="Add a Comment..."
//                                         value={commentContent}
//                                         onChange={(e) => setCommentContent(e.target.value)}
//                                         onKeyPress={handleCommentSubmit}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </ModalBody>
//             </ModalContent>
//         </Modal>
//     );
// };

// export default CommentModal;



// import React, { useEffect, useState } from 'react';
// import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
// import { BsThreeDots, BsBookmarkFill, BsBookmark, BsEmojiSmile } from 'react-icons/bs';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// import { FaRegComment } from 'react-icons/fa';
// import { RiSendPlaneLine } from 'react-icons/ri';
// import CommentCard from './CommentCard';
// import "./CommentModal.css";
// import { useDispatch, useSelector } from 'react-redux';
// import { createCommentAction, findPostCommentAction } from '../../Redux/Comment/Action';
// import { useParams } from 'react-router-dom';
// import { findPostByIdAction } from '../../Redux/Post/Action';
// import { timeDifference } from '../../Config/Logics';

// const CommentModal = ({
//     onClose,
//     isOpen,
//     isSaved,
//     isPostLiked,
//     handlePostLike,
//     handleSavePost
// }) => {
//     const [commentContent, setCommentContent] = useState('');
//     const dispatch = useDispatch();
//     const token = localStorage.getItem("token");
//     const { postId } = useParams();
//     const { comment, post, user } = useSelector(store => store);

//     useEffect(() => {
//         const data = { jwt: token, postId };
//         if (postId && token) {
//             dispatch(findPostByIdAction(data));
//         }
//     }, [comment.createdComment, postId, token]);

//     const handleCommentSubmit = (e) => {
//         if (e.key === "Enter" && commentContent.trim()) {
//             const data = {
//                 postId,
//                 jwt: token,
//                 data: { content: commentContent.trim() }
//             };
//             console.log("Dispatching createCommentAction with data:", data); // Debug log
//             dispatch(createCommentAction(data));
//             setCommentContent(''); // Clear input field after submission
//         }
//     };

//     return (
//         <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
//             <ModalOverlay />
//             <ModalContent>
//                 <ModalBody>
//                     <div className="flex h-[75vh]">
//                         <div className="w-[45%] flex flex-col justify-center">
//                             <img
//                                 className="max-h-full w-full"
//                                 src={post.singlePost?.image}
//                                 alt="Post"
//                             />
//                         </div>
//                         <div className="w-[55%] pl-10 relative">
//                             <div className="flex justify-between items-center py-5">
//                                 <div className="flex items-center">
//                                     <div>
//                                         <img
//                                             className="w-9 h-9 rounded-full"
//                                             src={user?.requser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
//                                             alt="User"
//                                         />
//                                     </div>
//                                     <div className="ml-2">
//                                         <p>{user?.requser?.username || "Unknown User"}</p>
//                                     </div>
//                                 </div>
//                                 <BsThreeDots />
//                             </div>
//                             <hr />
//                             <div className="comment scrollbar">
//                                 {post?.singlePost?.comments?.map((item) => (
//                                     <CommentCard key={item.id} comment={item} />
//                                 ))}
//                             </div>
//                             <div className="absolute bottom-0 w-[90%]">
//                                 <div className="flex justify-between items-center w-full py-4">
//                                     <div className="flex items-center space-x-2">
//                                         {isPostLiked ? (
//                                             <AiFillHeart
//                                                 className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
//                                                 onClick={handlePostLike}
//                                             />
//                                         ) : (
//                                             <AiOutlineHeart
//                                                 className="text-2xl hover:opacity-50 cursor-pointer"
//                                                 onClick={handlePostLike}
//                                             />
//                                         )}
//                                         <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
//                                         <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
//                                     </div>
//                                     <div className="cursor-pointer">
//                                         {isSaved ? (
//                                             <BsBookmarkFill
//                                                 onClick={handleSavePost}
//                                                 className="text-xl hover:opacity-50 cursor-pointer"
//                                             />
//                                         ) : (
//                                             <BsBookmark
//                                                 onClick={handleSavePost}
//                                                 className="text-xl hover:opacity-50 cursor-pointer"
//                                             />
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div className="w-full py-2">
//                                     {post.singlePost?.likeByUsers?.length > 0 && (
//                                         <p>{post.singlePost?.likeByUsers.length} likes</p>
//                                     )}
//                                     <p className="opacity-50 text-sm">
//                                         {post.singlePost?.createdAt ? timeDifference(post.singlePost?.createdAt) : 'Unknown time'}
//                                     </p>
//                                 </div>
//                                 <div className="flex items-center w-full">
//                                     <BsEmojiSmile />
//                                     <input
//                                         className="commentInputs"
//                                         type="text"
//                                         placeholder="Add a Comment..."
//                                         value={commentContent}
//                                         onChange={(e) => setCommentContent(e.target.value)}
//                                         onKeyPress={handleCommentSubmit}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </ModalBody>
//             </ModalContent>
//         </Modal>
//     );
// };

// export default CommentModal;


import React, { useEffect, useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { BsThreeDots, BsBookmarkFill, BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import CommentCard from './CommentCard';
import "./CommentModal.css";
import { useDispatch, useSelector } from 'react-redux';
import { createCommentAction, findPostCommentAction } from '../../Redux/Comment/Action';
import { useParams } from 'react-router-dom';
import { findPostByIdAction } from '../../Redux/Post/Action';
import { timeDifference } from '../../Config/Logics';

const CommentModal = ({
    onClose,
    isOpen,
    isSaved,
    isPostLiked,
    handlePostLike,
    handleSavePost
}) => {
    const [commentContent, setCommentContent] = useState('');
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const { postId } = useParams();
    const { comment, post, user } = useSelector(store => store);

    useEffect(() => {
        const data = { jwt: token, postId };
        if (postId && token) {
            dispatch(findPostByIdAction(data));
        }
    }, [comment.createdComment, postId, token]);

    const handleCommentSubmit = (e) => {
        if (e.key === "Enter" && commentContent.trim()) {
            const data = {
                postId,
                jwt: token,
                data: { content: commentContent.trim() }
            };
            console.log("Dispatching createCommentAction with data:", data); // Debug log
            dispatch(createCommentAction(data));
            setCommentContent(''); // Clear input field after submission
        }
    };

    const postImage = post.singlePost?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";  // no 1 image

    return (
        <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div className="flex h-[75vh]">
                        <div className="w-[45%] flex flex-col justify-center">
                            <img
                                className="max-h-full w-full"
                                src={postImage}
                                alt="Post"
                                onError={(e) => { e.target.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"; }}
                            />
                        </div>
                        <div className="w-[55%] pl-10 relative">
                            <div className="flex justify-between items-center py-5">
                                <div className="flex items-center">
                                    <div>
                                        <img
                                            className="w-9 h-9 rounded-full"
                                            src={user?.requser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
                                            alt="User"
                                            onError={(e) => { e.target.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"; }}
                                        />
                                    </div>
                                    <div className="ml-2">
                                        <p>{user?.requser?.username || "username"}</p>
                                    </div>
                                </div>
                                <BsThreeDots />
                            </div>
                            <hr />
                            <div className="comment scrollbar">
                                {post?.singlePost?.comments?.map((item) => (
                                    <CommentCard key={item.id} comment={item} />
                                ))}
                            </div>
                            <div className="absolute bottom-0 w-[90%]">
                                <div className="flex justify-between items-center w-full py-4">
                                    <div className="flex items-center space-x-2">
                                        {isPostLiked ? (
                                            <AiFillHeart
                                                className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                                                onClick={handlePostLike}
                                            />
                                        ) : (
                                            <AiOutlineHeart
                                                className="text-2xl hover:opacity-50 cursor-pointer"
                                                onClick={handlePostLike}
                                            />
                                        )}
                                        <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
                                        <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
                                    </div>
                                    <div className="cursor-pointer">
                                        {isSaved ? (
                                            <BsBookmarkFill
                                                onClick={handleSavePost}
                                                className="text-xl hover:opacity-50 cursor-pointer"
                                            />
                                        ) : (
                                            <BsBookmark
                                                onClick={handleSavePost}
                                                className="text-xl hover:opacity-50 cursor-pointer"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="w-full py-2">
                                    {post.singlePost?.likeByUsers?.length > 0 && (
                                        <p>{post.singlePost?.likeByUsers.length} likes</p>
                                    )}
                                    <p className="opacity-50 text-sm">
                                        {post.singlePost?.createdAt ? timeDifference(post.singlePost?.createdAt) : 'Unknown time'}
                                    </p>
                                </div>
                                <div className="flex items-center w-full">
                                    <BsEmojiSmile />
                                    <input
                                        className="commentInputs"
                                        type="text"
                                        placeholder="Add a Comment..."
                                        value={commentContent}
                                        onChange={(e) => setCommentContent(e.target.value)}
                                        onKeyPress={handleCommentSubmit}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default CommentModal;
