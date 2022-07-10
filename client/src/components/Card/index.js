import React from 'react';
import { Icon } from '@iconify/react';
import messageCircleOutline from '@iconify/icons-eva/message-circle-outline';
import bookmarkStar from '@iconify/icons-bi/bookmark-star';
import ExpandProject from '../Accordian';


const Card = () => {
  return (

    <div className='my-2 grid place-items-center'>

    <div className='flex flex-col inline p-4 max-w-md bg-white rounded-lg shadow-md' id='card-container'> 
      <div>
        <h4 
          className='font-semibold tracking-wide'>
          Project Title
        </h4>
        <h5 
          className='font-light text-sm text-justify leading-4 mb-1'>
          Subheader - This card will contain a project blurb of up to 200 characters. 
          Users can click the expand icon to view detailed project information.
        </h5>
        <ExpandProject></ExpandProject>
      </div>
      <div className='mt-1'>
        <p className='text-xs font-semibold'>Current Project Needs:</p>
        <ul className='text-xs list-disc list-inside ml-3'>
          <li>Tailwind</li>
          <li>NoSQL</li>
        </ul>
      </div>
        <p 
          className='mt-3 font-light text-xs italic'>
          Posted By <span><a href='/'>(DisplayName)</a></span> on (post date and time).
        </p>
      <div className='mt-2 flex justify-between'>
        <Icon icon={messageCircleOutline} color="black" height="25" />
        <Icon icon={bookmarkStar} color="black" height="25" />
      </div>
    </div>
    </div>



  );
}

export default Card;
