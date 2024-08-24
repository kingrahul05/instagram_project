import React, { useEffect } from 'react'
import StoryViwer from '../../StoryComponets/StoryViwer'




const Story = () => {

    const story=[
        {
            image:"https://images.pexels.com/photos/25016508/pexels-photo-25016508/free-photo-of-young-tourist-sitting-on-a-boulder-by-the-sea-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image:"https://images.pexels.com/photos/25019974/pexels-photo-25019974/free-photo-of-close-up-of-a-woman-holding-a-photo-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image:"https://images.pexels.com/photos/23120035/pexels-photo-23120035/free-photo-of-young-man-in-a-casual-outfit-and-sunglasses-sitting-outside-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image:"https://images.pexels.com/photos/18238100/pexels-photo-18238100/free-photo-of-a-woman-holding-a-girl-sitting-on-railings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image:"https://images.pexels.com/photos/24245602/pexels-photo-24245602/free-photo-of-para-sao-pedro.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
    ]

    

    // useEffect(()=>{
    //     const data = {jwt,userId};
    //     dispatch(findStoryByUserId(data));
    // },[userId])
  return (
    <div>
        <StoryViwer stories={story}/>
    </div>
  )
}

export default Story



