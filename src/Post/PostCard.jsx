// import React, { useEffect, useState } from 'react';
// import { BsBookmarkFill, BsBookmark, BsThreeDots, BsEmojiSmile } from 'react-icons/bs';
// import './PostCard.css';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// import { FaRegComment } from 'react-icons/fa';
// import { RiSendPlaneLine } from 'react-icons/ri';
// import CommentModal from '../Component/Comment/CommentModal';
// import { useDisclosure } from '@chakra-ui/react';
// import { useDispatch, useSelector } from 'react-redux';
// import { likePostAction, unlikePostAction, savePostAction, unSavePostAction } from '../Redux/Post/Action';
// import { Navigate, useNavigate } from 'react-router-dom';

// // Helper function to check if a post is liked by the user
// const isPostLikedByUser = (post, userId) => {
//     return post.likedByUsers?.includes(userId);
// };

// const PostCard = ({ post = {} }) => {
//     const [showDropDown, setShowDropDown] = useState(false);
//     const [isPostLiked, setIsPostLiked] = useState(false);
//     const [isSaved, setIsSaved] = useState(false);
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const dispatch = useDispatch();
//     const token = localStorage.getItem("token");
//     const user = useSelector(state => state.user); // Adjust according to your state shape

//     const data = { jwt: token, post, postId: post?.id };

//     const navigate=useNavigate();

//     // console.log("requser ---- ",user.reqUser)
//     // Handle saving the post
//     const handleSavePost = () => {
//         setIsSaved(true);
//         dispatch(savePostAction(data));
//     };

//     // Handle unsaving the post
//     const handleUnsavePost = () => {
//         setIsSaved(false);
//         dispatch(unSavePostAction(data));
//     };

//     // Handle liking the post
//     const handlePostLike = () => {
//         if (!isPostLiked) {
//             setIsPostLiked(true);
//             dispatch(likePostAction(data));
//         }
//     };

//     // Handle unliking the post
//     const handlePostUnlike = () => {
//         if (isPostLiked) {
//             setIsPostLiked(false);
//             dispatch(unlikePostAction(data));
//         }
//     };

//     // Toggle dropdown menu
//     const handleClick = () => {
//         setShowDropDown(!showDropDown);
//     };

//     // Open comment modal
//     const handleOpenCommentModal = () => {
//         navigate('/comment/${post.id}')
//         onOpen();
//     };

//     useEffect(() => {
//         if (post && user && user.reqUser) {
//             setIsPostLiked(isPostLikedByUser(post, user.reqUser.id));
//             setIsSaved(user.savedPosts?.includes(post.id));
//         }
//     }, [post, user.reqUser]);

//     return (
//         <div>
//             <div className="border rounded-md w-full">
//                 <div className="flex justify-between items-center w-full py-4 px-5">
//                     <div className="flex items-center">
//                         <img
//                             className="h-12 w-12 rounded-full"
//                             src="https://cdn.pixabay.com/photo/2021/09/22/11/34/horse-6646593_640.jpg"
//                             alt="User"
//                         />
//                         <div className="pl-2">
//                             <p className="font-semibold text-sm">username</p>
//                             <p className="font-thin text-sm">location</p>
//                         </div>
//                     </div>

//                     <div className="relative">
//                         <BsThreeDots
//                             className="dots cursor-pointer"
//                             onClick={handleClick}
//                         />
//                         {showDropDown && (
//                             <div className="absolute top-full right-0 mt-2 bg-black text-white py-1 px-4 rounded-md cursor-pointer">
//                                 <p>Delete</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 <div className="w-full">
//                     <img
//                         className="w-full"
//                         src="https://cdn.pixabay.com/photo/2023/06/08/15/11/rose-8049822_640.jpg"
//                         alt="Post"
//                     />
//                 </div>

//                 <div className="flex justify-between items-center w-full px-5 py-4">
//                     <div className="flex items-center space-x-2">
//                         {isPostLiked ? (
//                             <AiFillHeart
//                                 className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
//                                 onClick={handlePostUnlike}
//                             />
//                         ) : (
//                             <AiOutlineHeart
//                                 className="text-2xl hover:opacity-50 cursor-pointer"
//                                 onClick={handlePostLike}
//                             />
//                         )}
//                         <FaRegComment
//                             onClick={handleOpenCommentModal}
//                             className="text-xl hover:opacity-50 cursor-pointer"
//                         />
//                         <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
//                     </div>
//                     <div className="cursor-pointer">
//                         {isSaved ? (
//                             <BsBookmarkFill
//                                 onClick={handleUnsavePost}
//                                 className="text-xl hover:opacity-50 cursor-pointer"
//                             />
//                         ) : (
//                             <BsBookmark
//                                 onClick={handleSavePost}
//                                 className="text-xl hover:opacity-50 cursor-pointer"
//                             />
//                         )}
//                     </div>
//                 </div>

//                 <div className="w-full py-2 px-5">
//                     {post?.likedByUsers?.length > 0 && (
//                         <p>{post?.likedByUsers?.length} likes</p>
//                     )}
//                     {post?.comments?.length > 0 && (
//                         <p className="opacity-50 py-2 cursor-pointer">view all {post?.comments?.length} comments</p>
//                     )}
//                 </div>

//                 <div className="border border-t w-full">
//                     <div className="flex w-full items-center px-5">
//                         <BsEmojiSmile />
//                         <input
//                             className="commentInput"
//                             type="text"
//                             placeholder="Add a Comment..."
//                         />
//                     </div>
//                 </div>
//             </div>

//             <CommentModal
//                 handlePostLike={handlePostLike}
//                 onClose={onClose}
//                 isOpen={isOpen}
//                 handleSavePost={handleSavePost}
//                 isPostLiked={isPostLiked}
//                 isSaved={isSaved}
//             />
//         </div>
//     );
// };

// export default PostCard;





// import React, { useEffect, useState } from 'react';
// import { BsBookmarkFill, BsBookmark, BsThreeDots, BsEmojiSmile } from 'react-icons/bs';
// import './PostCard.css';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// import { FaRegComment } from 'react-icons/fa';
// import { RiSendPlaneLine } from 'react-icons/ri';
// import CommentModal from '../Component/Comment/CommentModal';
// import { useDisclosure } from '@chakra-ui/react';
// import { useDispatch, useSelector } from 'react-redux';
// import { likePostAction, unlikePostAction, savePostAction, unSavePostAction } from '../Redux/Post/Action';
// import { useNavigate } from 'react-router-dom';
// import { createCommentAction } from '../Redux/Comment/Action';

// // Helper function to check if a post is liked by the user
// const isPostLikedByUser = (post, userId) => {
//     return post.likedByUsers?.includes(userId);
// };

// const PostCard = ({ post = {} }) => {
//     const [showDropDown, setShowDropDown] = useState(false);
//     const [isPostLiked, setIsPostLiked] = useState(false);
//     const [isSaved, setIsSaved] = useState(false);
//     const [commentContent, setCommentContent] = useState('');
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const token = localStorage.getItem("token");
//     const user = useSelector(state => state.user); // Adjust according to your state shape

//     const data = { jwt: token, post, postId: post?.id };

//     // Handle saving the post
//     const handleSavePost = () => {
//         setIsSaved(true);
//         dispatch(savePostAction(data));
//     };

//     // Handle unsaving the post
//     const handleUnsavePost = () => {
//         setIsSaved(false);
//         dispatch(unSavePostAction(data));
//     };

//     // Handle liking the post
//     const handlePostLike = () => {
//         if (!isPostLiked) {
//             setIsPostLiked(true);
//             dispatch(likePostAction(data));
//         }
//     };

//     // Handle unliking the post
//     const handlePostUnlike = () => {
//         if (isPostLiked) {
//             setIsPostLiked(false);
//             dispatch(unlikePostAction(data));
//         }
//     };

//     // Toggle dropdown menu
//     const handleClick = () => {
//         setShowDropDown(!showDropDown);
//     };

//     // Open comment modal
//     const handleOpenCommentModal = () => {
//         navigate(`/comment/${post.id}`);
//         onOpen();
//     };

//     // Handle comment submission
//     const handleCommentSubmit = (e) => {
//         if (e.key === "Enter" && commentContent.trim()) {
//             // Dispatch action to create a comment
//             const commentData = {
//                 postId: post.id,
//                 jwt: token,
//                 data: { content: commentContent.trim() }
//             };
//             dispatch(createCommentAction(commentData));
//             setCommentContent(''); // Clear the input field
//         }
//     };

//     useEffect(() => {
//         if (post && user?.reqUser) {
//             setIsPostLiked(isPostLikedByUser(post, user.reqUser.id));
//             setIsSaved(user.savedPosts?.includes(post.id));
//         }
//     }, [post, user]);

//     return (
//         <div>
//             <div className="border rounded-md w-full">
//                 <div className="flex justify-between items-center w-full py-4 px-5">
//                     <div className="flex items-center">
//                         <img
//                             className="h-12 w-12 rounded-full"
//                             src="https://cdn.pixabay.com/photo/2021/09/22/11/34/horse-6646593_640.jpg"
//                             alt="User"
//                         />
//                         <div className="pl-2">
//                             <p className="font-semibold text-sm">{user?.reqUser?.username || 'username'}</p>
//                             <p className="font-thin text-sm">location</p>
//                         </div>
//                     </div>

//                     <div className="relative">
//                         <BsThreeDots
//                             className="dots cursor-pointer"
//                             onClick={handleClick}
//                         />
//                         {showDropDown && (
//                             <div className="absolute top-full right-0 mt-2 bg-black text-white py-1 px-4 rounded-md cursor-pointer">
//                                 <p>Delete</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 <div className="w-full">
//                     <img
//                         className="w-full"
//                         src="https://cdn.pixabay.com/photo/2023/06/08/15/11/rose-8049822_640.jpg"
//                         alt="Post"
//                     />
//                 </div>

//                 <div className="flex justify-between items-center w-full px-5 py-4">
//                     <div className="flex items-center space-x-2">
//                         {isPostLiked ? (
//                             <AiFillHeart
//                                 className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
//                                 onClick={handlePostUnlike}
//                             />
//                         ) : (
//                             <AiOutlineHeart
//                                 className="text-2xl hover:opacity-50 cursor-pointer"
//                                 onClick={handlePostLike}
//                             />
//                         )}
//                         <FaRegComment
//                             onClick={handleOpenCommentModal}
//                             className="text-xl hover:opacity-50 cursor-pointer"
//                         />
//                         <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
//                     </div>
//                     <div className="cursor-pointer">
//                         {isSaved ? (
//                             <BsBookmarkFill
//                                 onClick={handleUnsavePost}
//                                 className="text-xl hover:opacity-50 cursor-pointer"
//                             />
//                         ) : (
//                             <BsBookmark
//                                 onClick={handleSavePost}
//                                 className="text-xl hover:opacity-50 cursor-pointer"
//                             />
//                         )}
//                     </div>
//                 </div>

//                 <div className="w-full py-2 px-5">
//                     {post?.likedByUsers?.length > 0 && (
//                         <p>{post?.likedByUsers?.length} likes</p>
//                     )}
//                     {post?.comments?.length > 0 && (
//                         <p className="opacity-50 py-2 cursor-pointer">view all {post?.comments?.length} comments</p>
//                     )}
//                 </div>

//                 <div className="border border-t w-full">
//                     <div className="flex w-full items-center px-5">
//                         <BsEmojiSmile />
//                         <input
//                             className="commentInput"
//                             type="text"
//                             placeholder="Add a Comment..."
//                             value={commentContent}
//                             onChange={(e) => setCommentContent(e.target.value)}
//                             onKeyPress={handleCommentSubmit}
//                         />
//                     </div>
//                 </div>
//             </div>

//             <CommentModal
//                 handlePostLike={handlePostLike}
//                 onClose={onClose}
//                 isOpen={isOpen}
//                 handleSavePost={handleSavePost}
//                 isPostLiked={isPostLiked}
//                 isSaved={isSaved}
//             />
//         </div>
//     );
// };

// export default PostCard;



// import React, { useEffect, useState } from 'react';
// import { BsBookmarkFill, BsBookmark, BsThreeDots, BsEmojiSmile } from 'react-icons/bs';
// import './PostCard.css';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// import { FaRegComment } from 'react-icons/fa';
// import { RiSendPlaneLine } from 'react-icons/ri';
// import CommentModal from '../Component/Comment/CommentModal';
// import { useDisclosure } from '@chakra-ui/react';
// import { useDispatch, useSelector } from 'react-redux';
// import { likePostAction, unlikePostAction, savePostAction, unSavePostAction } from '../Redux/Post/Action';
// import { useNavigate } from 'react-router-dom';
// import { createCommentAction } from '../Redux/Comment/Action';

// const isPostLikedByUser = (post, userId) => {
//     return post.likedByUsers?.includes(userId);
// };

// const PostCard = ({ post = {} }) => {
//     const [showDropDown, setShowDropDown] = useState(false);
//     const [isPostLiked, setIsPostLiked] = useState(false);
//     const [isSaved, setIsSaved] = useState(false);
//     const [commentContent, setCommentContent] = useState('');
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const token = localStorage.getItem("token");
//     const user = useSelector(state => state.user); // Adjust according to your state shape

//     const data = { jwt: token, post, postId: post?.id };

//     const handleSavePost = () => {
//         setIsSaved(true);
//         dispatch(savePostAction(data));
//     };

//     const handleUnsavePost = () => {
//         setIsSaved(false);
//         dispatch(unSavePostAction(data));
//     };

//     const handlePostLike = () => {
//         if (!isPostLiked) {
//             setIsPostLiked(true);
//             dispatch(likePostAction(data));
//         }
//     };

//     const handlePostUnlike = () => {
//         if (isPostLiked) {
//             setIsPostLiked(false);
//             dispatch(unlikePostAction(data));
//         }
//     };

//     const handleClick = () => {
//         setShowDropDown(!showDropDown);
//     };

//     const handleOpenCommentModal = () => {
//         navigate(`/comment/${post.id}`);
//         onOpen();
//     };

//     const handleCommentSubmit = (e) => {
//         if (e.key === "Enter" && commentContent.trim()) {
//             const commentData = {
//                 postId: post.id,
//                 jwt: token,
//                 data: { content: commentContent.trim() }
//             };
//             dispatch(createCommentAction(commentData));
//             setCommentContent(''); // Clear the input field
//         }
//     };

//     useEffect(() => {
//         if (post && user?.reqUser) {
//             setIsPostLiked(isPostLikedByUser(post, user.reqUser.id));
//             setIsSaved(user.savedPosts?.includes(post.id));
//         }
//     }, [post, user]);

//     return (
//         <div>
//             <div className="border rounded-md w-full">
//                 <div className="flex justify-between items-center w-full py-4 px-5">
//                     <div className="flex items-center">
//                         <img
//                             className="h-12 w-12 rounded-full"
//                             src={post?.user?.profilePicture || "https://cdn.pixabay.com/photo/2021/09/22/11/34/horse-6646593_640.jpg"}
//                             alt="User"
//                         />
//                         <div className="pl-2">
//                             <p className="font-semibold text-sm">{post?.user?.username || 'username'}</p>
//                             <p className="font-thin text-sm">{post?.location || 'location'}</p>
//                         </div>
//                     </div>

//                     <div className="relative">
//                         <BsThreeDots
//                             className="dots cursor-pointer"
//                             onClick={handleClick}
//                         />
//                         {showDropDown && (
//                             <div className="absolute top-full right-0 mt-2 bg-black text-white py-1 px-4 rounded-md cursor-pointer">
//                                 <p>Delete</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 <div className="w-full">
//                     <img
//                         className="w-full"
//                         src={post?.image || "https://cdn.pixabay.com/photo/2023/06/08/15/11/rose-8049822_640.jpg"}
//                         alt="Post"
//                     />
//                 </div>

//                 <div className="flex justify-between items-center w-full px-5 py-4">
//                     <div className="flex items-center space-x-2">
//                         {isPostLiked ? (
//                             <AiFillHeart
//                                 className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
//                                 onClick={handlePostUnlike}
//                             />
//                         ) : (
//                             <AiOutlineHeart
//                                 className="text-2xl hover:opacity-50 cursor-pointer"
//                                 onClick={handlePostLike}
//                             />
//                         )}
//                         <FaRegComment
//                             onClick={handleOpenCommentModal}
//                             className="text-xl hover:opacity-50 cursor-pointer"
//                         />
//                         <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
//                     </div>
//                     <div className="cursor-pointer">
//                         {isSaved ? (
//                             <BsBookmarkFill
//                                 onClick={handleUnsavePost}
//                                 className="text-xl hover:opacity-50 cursor-pointer"
//                             />
//                         ) : (
//                             <BsBookmark
//                                 onClick={handleSavePost}
//                                 className="text-xl hover:opacity-50 cursor-pointer"
//                             />
//                         )}
//                     </div>
//                 </div>

//                 <div className="w-full py-2 px-5">
//                     {post?.likedByUsers?.length > 0 && (
//                         <p>{post.likedByUsers.length} likes</p>
//                     )}
//                     {post?.comments?.length > 0 && (
//                         <p className="opacity-50 py-2 cursor-pointer" onClick={handleOpenCommentModal}>
//                             view all {post.comments.length} comments
//                         </p>
//                     )}
//                 </div>

//                 <div className="border border-t w-full">
//                     <div className="flex w-full items-center px-5">
//                         <BsEmojiSmile />
//                         <input
//                             className="commentInput"
//                             type="text"
//                             placeholder="Add a Comment..."
//                             value={commentContent}
//                             onChange={(e) => setCommentContent(e.target.value)}
//                             onKeyPress={handleCommentSubmit}
//                         />
//                     </div>
//                 </div>
//             </div>

//             <CommentModal
//                 onClose={onClose}
//                 isOpen={isOpen}
//                 handleSavePost={handleSavePost}
//                 isPostLiked={isPostLiked}
//                 isSaved={isSaved}
//             />
//         </div>
//     );
// };

// export default PostCard;



// import React, { useEffect, useState } from 'react';
// import { BsBookmarkFill, BsBookmark, BsThreeDots, BsEmojiSmile } from 'react-icons/bs';
// import './PostCard.css';
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
// import { FaRegComment } from 'react-icons/fa';
// import { RiSendPlaneLine } from 'react-icons/ri';
// import CommentModal from '../Component/Comment/CommentModal';
// import { useDisclosure } from '@chakra-ui/react';
// import { useDispatch, useSelector } from 'react-redux';
// import { likePostAction, unlikePostAction, savePostAction, unSavePostAction } from '../Redux/Post/Action';
// import { useNavigate } from 'react-router-dom';
// import { createCommentAction } from '../Redux/Comment/Action';

// const isPostLikedByUser = (post, userId) => {
//     return post.likedByUsers?.includes(userId);
// };

// const PostCard = ({ post = {} }) => {
//     const [showDropDown, setShowDropDown] = useState(false);
//     const [isPostLiked, setIsPostLiked] = useState(false);
//     const [isSaved, setIsSaved] = useState(false);
//     const [commentContent, setCommentContent] = useState('');
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const token = localStorage.getItem("token");
//     const user = useSelector(state => state.user); // Adjust according to your state shape

//     const data = { jwt: token, post, postId: post?.id };

//     const handleSavePost = () => {
//         setIsSaved(true);
//         dispatch(savePostAction(data));
//     };

//     const handleUnsavePost = () => {
//         setIsSaved(false);
//         dispatch(unSavePostAction(data));
//     };

//     const handlePostLike = () => {
//         if (!isPostLiked) {
//             setIsPostLiked(true);
//             dispatch(likePostAction(data));
//         }
//     };

//     const handlePostUnlike = () => {
//         if (isPostLiked) {
//             setIsPostLiked(false);
//             dispatch(unlikePostAction(data));
//         }
//     };

//     const handleClick = () => {
//         setShowDropDown(!showDropDown);
//     };

//     const handleOpenCommentModal = () => {
//         navigate(`/comment/${post.id}`);
//         onOpen();
//     };

//     const handleCommentSubmit = (e) => {
//         if (e.key === "Enter" && commentContent.trim()) {
//             const commentData = {
//                 postId: post.id,
//                 jwt: token,
//                 data: { content: commentContent.trim() }
//             };
//             dispatch(createCommentAction(commentData));
//             setCommentContent(''); // Clear the input field
//         }
//     };

//     useEffect(() => {
//         if (post && user?.reqUser) {
//             setIsPostLiked(isPostLikedByUser(post, user.reqUser.id));
//             setIsSaved(user.savedPosts?.includes(post.id));
//         }
//     }, [post, user]);

//     return (
//         <div>
//             <div className="border rounded-md w-full">
//                 <div className="flex justify-between items-center w-full py-4 px-5">
//                     <div className="flex items-center">
//                         <img
//                             className="h-12 w-12 rounded-full"
//                             src={post?.user?.profilePicture || "https://cdn.pixabay.com/photo/2021/09/22/11/34/horse-6646593_640.jpg"}
//                             alt="User"
//                         />
//                         <div className="pl-2">
//                             <p className="font-semibold text-sm">{post?.user?.username || 'username'}</p>
//                             <p className="font-thin text-sm">{post?.location || 'location'}</p>
//                         </div>
//                     </div>

//                     <div className="relative">
//                         <BsThreeDots
//                             className="dots cursor-pointer"
//                             onClick={handleClick}
//                         />
//                         {showDropDown && (
//                             <div className="absolute top-full right-0 mt-2 bg-black text-white py-1 px-4 rounded-md cursor-pointer">
//                                 <p>Delete</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 <div className="w-full">
//                     <img
//                         className="w-full"
//                         src={post?.image || "https://cdn.pixabay.com/photo/2023/06/08/15/11/rose-8049822_640.jpg"}
//                         alt="Post"
//                     />
//                 </div>

//                 <div className="flex justify-between items-center w-full px-5 py-4">
//                     <div className="flex items-center space-x-2">
//                         {isPostLiked ? (
//                             <AiFillHeart
//                                 className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
//                                 onClick={handlePostUnlike}
//                             />
//                         ) : (
//                             <AiOutlineHeart
//                                 className="text-2xl hover:opacity-50 cursor-pointer"
//                                 onClick={handlePostLike}
//                             />
//                         )}
//                         <FaRegComment
//                             onClick={handleOpenCommentModal}
//                             className="text-xl hover:opacity-50 cursor-pointer"
//                         />
//                         <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
//                     </div>
//                     <div className="cursor-pointer">
//                         {isSaved ? (
//                             <BsBookmarkFill
//                                 onClick={handleUnsavePost}
//                                 className="text-xl hover:opacity-50 cursor-pointer"
//                             />
//                         ) : (
//                             <BsBookmark
//                                 onClick={handleSavePost}
//                                 className="text-xl hover:opacity-50 cursor-pointer"
//                             />
//                         )}
//                     </div>
//                 </div>

//                 <div className="w-full py-2 px-5">
//                     {post?.likedByUsers?.length > 0 && (
//                         <p>{post.likedByUsers.length} likes</p>
//                     )}
//                     {post?.comments?.length > 0 && (
//                         <p className="opacity-50 py-2 cursor-pointer" onClick={handleOpenCommentModal}>
//                             view all {post.comments.length} comments
//                         </p>
//                     )}
//                 </div>

//                 <div className="border border-t w-full">
//                     <div className="flex w-full items-center px-5">
//                         <BsEmojiSmile />
//                         <input
//                             className="commentInput"
//                             type="text"
//                             placeholder="Add a Comment..."
//                             value={commentContent}
//                             onChange={(e) => setCommentContent(e.target.value)}
//                             onKeyPress={handleCommentSubmit}
//                         />
//                     </div>
//                 </div>
//             </div>

//             <CommentModal
//                 onClose={onClose}
//                 isOpen={isOpen}
//                 handleSavePost={handleSavePost}
//                 isPostLiked={isPostLiked}
//                 isSaved={isSaved}
//             />
//         </div>
//     );
// };

// export default PostCard;


import React, { useEffect, useState } from 'react';
import { BsBookmarkFill, BsBookmark, BsThreeDots, BsEmojiSmile } from 'react-icons/bs';
import './PostCard.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import CommentModal from '../Component/Comment/CommentModal';
import { useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { likePostAction, unlikePostAction, savePostAction, unSavePostAction } from '../Redux/Post/Action';
import { useNavigate } from 'react-router-dom';
import { createCommentAction } from '../Redux/Comment/Action';

const isPostLikedByUser = (post, userId) => {
    return post.likedByUsers?.includes(userId);
};

const PostCard = ({ post = {} }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [commentContent, setCommentContent] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const user = useSelector(state => state.user); // Adjust according to your state shape

    const data = { jwt: token, post, postId: post?.id };

    const handleSavePost = () => {
        setIsSaved(true);
        dispatch(savePostAction(data));
    };

    const handleUnsavePost = () => {
        setIsSaved(false);
        dispatch(unSavePostAction(data));
    };

    const handlePostLike = () => {
        if (!isPostLiked) {
            setIsPostLiked(true);
            dispatch(likePostAction(data));
        }
    };

    const handlePostUnlike = () => {
        if (isPostLiked) {
            setIsPostLiked(false);
            dispatch(unlikePostAction(data));
        }
    };

    const handleClick = () => {
        setShowDropDown(!showDropDown);
    };

    const handleOpenCommentModal = () => {
        navigate(`/comment/${post.id}`);
        onOpen();
    };

    const handleCommentSubmit = (e) => {
        if (e.key === "Enter" && commentContent.trim()) {
            const commentData = {
                postId: post.id,
                jwt: token,
                data: { content: commentContent.trim() }
            };
            dispatch(createCommentAction(commentData));
            setCommentContent(''); // Clear the input field
        }
    };

    useEffect(() => {
        if (post && user?.reqUser) {
            setIsPostLiked(isPostLikedByUser(post, user.reqUser.id));
            setIsSaved(user.savedPosts?.includes(post.id));
        }
    }, [post, user]);

    return (
        <div>
            <div className="border rounded-md w-full">
                <div className="flex justify-between items-center w-full py-4 px-5">
                    <div className="flex items-center">
                        <img
                            className="h-12 w-12 rounded-full"
                            src={post?.user?.profilePicture || "https://cdn.pixabay.com/photo/2021/09/22/11/34/horse-6646593_640.jpg"}
                            alt="User"
                        />
                        <div className="pl-2">
                            <p className="font-semibold text-sm">{post?.user?.username || 'username'}</p>
                            <p className="font-thin text-sm">{post?.location || 'location'}</p>
                        </div>
                    </div>

                    <div className="relative">
                        <BsThreeDots
                            className="dots cursor-pointer"
                            onClick={handleClick}
                        />
                        {showDropDown && (
                            <div className="absolute top-full right-0 mt-2 bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                                <p>Delete</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-full">
                    {post?.media?.type === 'video' ? (
                        <video className="w-full" controls>
                            <source src={post.media.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img
                            className="w-full"
                            src={post?.media?.url || "https://cdn.pixabay.com/photo/2023/06/08/15/11/rose-8049822_640.jpg"}
                            alt="Post"
                        />
                    )}
                </div>

                <div className="flex justify-between items-center w-full px-5 py-4">
                    <div className="flex items-center space-x-2">
                        {isPostLiked ? (
                            <AiFillHeart
                                className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                                onClick={handlePostUnlike}
                            />
                        ) : (
                            <AiOutlineHeart
                                className="text-2xl hover:opacity-50 cursor-pointer"
                                onClick={handlePostLike}
                            />
                        )}
                        <FaRegComment
                            onClick={handleOpenCommentModal}
                            className="text-xl hover:opacity-50 cursor-pointer"
                        />
                        <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
                    </div>
                    <div className="cursor-pointer">
                        {isSaved ? (
                            <BsBookmarkFill
                                onClick={handleUnsavePost}
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

                <div className="w-full py-2 px-5">
                    {post?.likedByUsers?.length > 0 && (
                        <p>{post.likedByUsers.length} likes</p>
                    )}
                    {post?.comments?.length > 0 && (
                        <p className="opacity-50 py-2 cursor-pointer" onClick={handleOpenCommentModal}>
                            view all {post.comments.length} comments
                        </p>
                    )}
                </div>

                <div className="border border-t w-full">
                    <div className="flex w-full items-center px-5">
                        <BsEmojiSmile />
                        <input
                            className="commentInput"
                            type="text"
                            placeholder="Add a Comment..."
                            value={commentContent}
                            onChange={(e) => setCommentContent(e.target.value)}
                            onKeyPress={handleCommentSubmit}
                        />
                    </div>
                </div>
            </div>

            <CommentModal
                onClose={onClose}
                isOpen={isOpen}
                handleSavePost={handleSavePost}
                isPostLiked={isPostLiked}
                isSaved={isSaved}
            />
        </div>
    );
};

export default PostCard;
