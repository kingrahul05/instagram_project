import React, { useEffect, useState } from 'react';
import StoryCircle from '../../../Story/StoryCircle';
import HomeRight from "../../../HomeRight/HomeRight";
import PostCard from '../../../Post/PostCard';
import { useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { findUserPostAction } from '../../../Redux/Post/Action';
import { getPopularUser } from '../../../Redux/User/Action';

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userIds, setUserIds] = useState([]);
  const token = localStorage.getItem("token");
  const { user, post } = useSelector(store => store); // Corrected to get 'user' from store

  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.reqUser) {
      const newIds = user.reqUser.following?.map((user) => user.id) || [];
      setUserIds([user.reqUser.id, ...newIds]);
    }
  }, [user?.reqUser]);

  useEffect(() => {
    if (userIds.length > 0) {
      const data = {
        jwt: token,
        userIds: userIds.join(",")
      };
      dispatch(findUserPostAction(data));
      dispatch(getPopularUser(token))
    }
  }, [userIds, post.createPost, post.deletedPost, dispatch, token]);

  // Example story and post data, replace with real data as needed
  const stories = [1, 2, 3]; // Use meaningful data instead of [1, 1, 11]
  const posts = [1, 2]; // Use meaningful data instead of [1, 1]

  return (
    <div>
      <div className="mt-10 flex w-full justify-center">
        <div className="w-[44%] px-10">
          <div className="storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full">
            {stories.map((item, index) => (
              <StoryCircle key={index} />
            ))}
          </div>

          <div className="space-y-10 w-full mt-10">
            {posts.length > 0 && posts.map((item, index) => (
              <PostCard key={index} post={item} />
            ))}
          </div>
        </div>

        <div className="w-[27%]">
          <HomeRight />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
