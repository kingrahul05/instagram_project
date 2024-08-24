//  export const isPostByLikedUser=(post,userId)=>{
//     for(let item of post.likedByUsers){
//         if(item.id===userId)return true;
//     }
//     return false;
// }
 

// export const isCommentLikedByUser=(comment,userId)=>{
//     for(let item of comment.likedByUsers){
//         if(item.id===userId) return true;
//     }
//     return false;
// }

// export const isSavedPost=(user,postId)=>{
//     for(let item of user.savedPost){
//         if(item.id===postId) return true;
//     }
//     return false;
// }

// export const isfollowing=(reqUser,user2)=>{
//     if(reqUser && user2){
//         for(let item of user2.follower){
// if(reqUser.id===item.id) return true;
//         }
//     }
//     return false;
// }

// // export const isCommentLikedByUser=(comment,userId)=>{
// //     // likedByUsers
// //     for(let item of comment.likedByUsers){
// //         console.log("liked comment item :",item);
// //         if(item.id === userId) return true;
// //     }
// // return false;
// // };



// export const isReqUser = (userId1, userId2)=>{
//     if(userId1 && userId2) return userId1 === userId2;
// };


// // export const isFollowing = (reqUser,user2)=>{
// //     if(reqUser && user2){
// //         for(let item of user2.follower){
// //             if(reqUser.id === item.id) return true;
// //         }
// //     }
// //     return false;
// // }

// export const timeDifference=(timestamp)=>{


//     // 1 min ago
//     // 1 hour age
//     // 1 week ago


//     const date=new date(timestamp)

//     const diff=Date.now().date.getTime();

//     const seconds=Math.floor(diff/1000);
//     const minutes=Math.floor(seconds/60);
//     const hourse=Math.floor(minutes/60);
//     const days=Math.floor(hourse/24);
//     const weeks=Math.floor(days/7);


//     if(weeks>0){
//         return weeks + " week"+(weeks===1?"":"")+" ago";
//     }
//     else if(days>0){
//         return days + " day"+(days===1?"":"")+" ago";
//     }
//     else if(hourse>0){
//         return hourse + " hour"+(hourse===1?"":"")+" ago";
//     }
//     else if(minutes>0){
//         return minutes + " minute"+(minutes===1?"":"")+" ago";
//     }
//     else if(seconds>0){
//         return seconds + " second"+(seconds===1?"":"")+" ago";
//     }
// }





export const isPostLikedByUser = (post, userId) => {
    return post.likedByUsers.some(user => user.id === userId);
};

export const isCommentLikedByUser = (comment, userId) => {
    return comment.likedByUsers.some(user => user.id === userId);
};

export const isSavedPost = (user, postId) => {
    return user.savedPost.some(post => post.id === postId);
};

export const isFollowing = (reqUser, user2) => {
    return user2.followers.some(follower => follower.id === reqUser.id);
};

export const isReqUser = (userId1, userId2) => {
    return userId1 === userId2;
};

export const timeDifference = (timestamp) => {
    const date = new Date(timestamp);
    const now = Date.now();
    const diff = now - date.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (weeks > 0) return weeks + " week" + (weeks === 1 ? "" : "s") + " ago";
    if (days > 0) return days + " day" + (days === 1 ? "" : "s") + " ago";
    if (hours > 0) return hours + " hour" + (hours === 1 ? "" : "s") + " ago";
    if (minutes > 0) return minutes + " minute" + (minutes === 1 ? "" : "s") + " ago";
    if (seconds > 0) return seconds + " second" + (seconds === 1 ? "" : "s") + " ago";

    return "Just now";
};
