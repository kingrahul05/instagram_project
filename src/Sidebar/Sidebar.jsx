import React, { useState } from 'react'
import {IoReorderThree} from 'react-icons/io5'
import {mainu} from './SidebarConfig'
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import CreatePostModal from '../Post/CreatePostModal';
import SearchComponents from '../Component/Comment/SearchComponents/SearchComponents';
import { useSelector } from 'react-redux';




const Sidebar = () => {
  const[activeTab,setActiveTab]=useState("");
  const navigate=useNavigate();
  const {isOpen,onClose,onOpen}=useDisclosure();

  const [isSearchVisible,setIsSearchVisible]=useState(false);
  const {user}=useSelector(store=>store)
  


 const handleTabClick=(title)=>{
  setActiveTab(title);

  if(title==="Profile"){
    navigate('/${user.reqUser?.username}');

  }
  else if(title==="Home"){
    navigate("/");     
  }
else if(title==="Create"){
  onOpen()
}
 if(title==="Search"){
setIsSearchVisible(true)
}
else setIsSearchVisible(false)
 }


  return (
    <div className="sticky top-0 h-[100vh] flex">
        <div className={'flex flex-col justify-between h-full ${active==="Search"?"px-2":"px-10"}'}>
        {<div>
          {activeTab!=="Search" && <div className="pt-10">
                <img className='w-40' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthUMdPk9MEU5U1YDxjelstIKcPXeDqkZQ4q332PRHBs1tTfgwJujd_n674ZQM9cpBnA&usqp=CAU" alt="" />
            </div>}
            <div className='mt-10'>

              {mainu.map((item)=> 
              <div onClick={()=>handleTabClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
              {activeTab===item.title? item.activeIcon:item.icon}
              {activeTab !=="Search" && <p className={' ${activeTab===item.title?"font-bold":"font-semibold"}'}>{item.title}</p>}


</div>)}
          </div>
            </div>}    {/* sidebar code remove  */}
            <div className='flex item-center cursor-pointer pb-10'>
        <IoReorderThree  className="text-2xl"/>     
        {activeTab!=="Search" &&<p className='ml-5'>More</p>}
        </div>
        </div>

         <CreatePostModal onClose={onClose} isOpen={isOpen}/>
         {isSearchVisible &&<SearchComponents/>}
    </div>
  )
}

export default Sidebar