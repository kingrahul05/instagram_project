// // import React,{useEffect} from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useParams } from "react-router-dom";
// // import Story from "../StoryComponets/Story/StoryViewer/StoryViewer";
// // import {findStoryByUserId} from "../Redux/Story/Action";
// // import StoryViewer from "../StoryComponets/StoryViwer";


// // const Story =()=>{
// //     const {story}=useSelector(store=>store);
// //     const dispatch=useDispatch()
// //         const jwt = localStorage.getItem("token");
// //         const {userId} = useParams();
// //         // console.log(Story?.stories,"------")

// //         useEffect(()=>{
// //             const data = {jwt,userId};
// //             dispatch(findStoryByUserId(data));
// //         },[userId])

// //         return(
// //             <div>
// //                 {story.stories?.length>0 && <StoryViewer stories={story.stories}/>}
// //             </div>
// //         );
// // };



// // import React, { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useParams } from "react-router-dom";
// // import StoryViewer from "../StoryComponets/StoryViwer";
// // import { findStoryByUserId } from "../Redux/Story/Action";

// // const StoryPage = () => {
// //   const { story } = useSelector((store) => store);
// //   const dispatch = useDispatch();
// //   const jwt = localStorage.getItem("token");
// //   const { userId } = useParams();

// //   useEffect(() => {
// //     if (jwt && userId) {
// //       const data = { jwt, userId };
// //       dispatch(findStoryByUserId(data));
// //     }
// //   }, [dispatch, jwt, userId]);

// //   return (
// //     <div>
// //       {story.stories?.length > 0 && <StoryViewer stories={story.stories} />}
// //     </div>
// //   );
// // };

// // export default StoryPage;



// // import React, { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useParams } from "react-router-dom";
// // import StoryViewer from "../../StoryComponets/StoryViwer";
// // import { findStoryByUserId } from ""; // Correct import path

// // const StoryPage = () => {
// //   const { story } = useSelector((store) => store);
// //   const dispatch = useDispatch();
// //   const jwt = localStorage.getItem("token");
// //   const { userId } = useParams();

// //   useEffect(() => {
// //     if (jwt && userId) {
// //       const data = { jwt, userId };
// //       dispatch(findStoryByUserId(data));
// //     }
// //   }, [dispatch, jwt, userId]);

// //   return (
// //     <div>
// //       {story.stories?.length > 0 && <StoryViewer stories={story.stories} />}
// //     </div>
// //   );
// // };

// // export default StoryPage;



// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import StoryViewer from "../../StoryComponets/StoryViwer";
// import { findStoryByUserId } from "../../Redux/Story/Action"; // Ensure the correct import path

// const StoryPage = () => {
//   const { story } = useSelector((store) => store);
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("token");
//   const { userId } = useParams();

//   useEffect(() => {
//     if (jwt && userId) {
//       const data = { jwt, userId };
//       dispatch(findStoryByUserId(data));
//     }
//   }, [dispatch, jwt, userId]);

//   return (
//     <div>
//       {story.stories?.length > 0 && <StoryViewer stories={story.stories} />}
//     </div>
//   );
// };

// export default StoryPage;
