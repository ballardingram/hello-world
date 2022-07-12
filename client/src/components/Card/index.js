import React from "react";
import { Icon } from '@iconify/react';
import messageCircleOutline from '@iconify/icons-eva/message-circle-outline';
import bookmarkStar from '@iconify/icons-bi/bookmark-star';
import ExpandProject from '../ExpandProject';

const Card = () => {
  return (
    
    <div className="p-2 mb-5 rounded-lg" id='card-container'> 
      <div>
        <div className='select-none font-semibold tracking-wide mb-2 text-xl'>
          Project Title
        </div>
        <div 
          className='select-none font-light text-lg text-justify leading-5 mb-1'>
          Subheader - This card will contain a project blurb of up to 200 characters. 
          Users can click the expand icon to view detailed project information.
        </div>
        <ExpandProject></ExpandProject>
      </div>
      <div className='select-none mt-1'>
        <p className='font-semibold text-lg'>Current Project Needs:</p>
        <ul className='list-disc list-inside text-lg ml-3'>
          <li>Tailwind</li>
          <li>Javascript</li>
          <li>NoSQL</li>
        </ul>
      </div>
        <p 
          className='select-none mt-3 italic '>
          Posted By <span><a href='/'>(DisplayName)</a></span> on (post date and time).
        </p>
      <div className='mt-2 flex justify-between'>
        <Icon icon={messageCircleOutline} color="black" height="40" />
        <Icon icon={bookmarkStar} color="black" height="40" />
      </div>
    </div>
  );
}

export default Card;
