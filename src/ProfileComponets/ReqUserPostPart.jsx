import React, { useEffect, useState } from 'react';
import { AiOutlineTable } from 'react-icons/ai';
import { BiBookBookmark } from 'react-icons/bi';
import { RiVideoAddLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import ReqUserPostCard from './ReqUserPostCard';
import { useDispatch, useSelector } from 'react-redux';
import { reqUserPostAction } from '../Redux/Post/Action';

const ReqUserPostPart = ({user}) => {
  const [activeTab, setActiveTab] = useState('');
  const dispatch =useDispatch();
  const token=localStorage.getItem("token")
  const {post}=useSelector(store=>store);
  console.log("post-",post)

  const tabs = [
    {
      tab: "Post",
      icon: <AiOutlineTable />,
    },
    {
      tab: "Reels", // Fixed typo from "Rells" to "Reels"
      icon: <RiVideoAddLine />,
    },
    {
      tab: "Saved",
      icon: <BiBookBookmark />,
    },
    {
      tab: "Tagged",
      icon: <AiOutlineUser />,
    },
  ];


  useEffect(()=>{
    if(user){
      const data={jwt:token,userId:user?.id}
      dispatch(reqUserPostAction(data)) 
    }
   
  },[user,post.createdPost  ])

  return (
    <div>
      <div className="flex space-x-14 border-t relative">
        {tabs.map((item, index) => (
          <div
            key={index} // Added key prop
            onClick={() => setActiveTab(item.tab)}
            className={`flex items-center cursor-pointer py-2 text-sm ${
              activeTab === item.tab ? "border-t border-black" : "opacity-60"
            } hover:opacity-100`}
          >
            <p>{item.icon}</p>
            <p className="ml-1">{item.tab}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="flex flex-wrap">
          {[1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1].map((item, index) => (
            <ReqUserPostCard key={index} /> // Added key prop
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReqUserPostPart;
