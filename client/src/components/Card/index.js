import React from 'react';
import { Icon } from '@iconify/react';
import messageCircleOutline from '@iconify/icons-eva/message-circle-outline';
import bookmarkStar from '@iconify/icons-bi/bookmark-star';


const Card = () => {
  return (

    <div className='grid place-items-center'>

    <div className='flex flex-col inline p-4 max-w-sm bg-white rounded-lg shadow-md' id='card-container'>
      <a 
        href='/' 
        >
      
        <h5 
          className='text-md font-bold tracking-wide'>
          Project Title
        </h5>

        <p 
          className='font-light text-sm text-justify'>
          Project Text - this card will contain project text. It will allow up
          to four-lines of text before presenting a "read more" link that allows 
          users to expand the post and see it full-screen.
        </p>

        <p 
          className='mt-3 font-light text-sm italic'>
          Posted By -username- on -post date and time-.
        </p>

      </a>
      <div className='mt-2 flex justify-between'>
        <Icon icon={messageCircleOutline} color="black" height="20" />
        <Icon icon={bookmarkStar} color="black" height="20" />
      </div>
    </div>
    </div>



  );
}

export default Card;