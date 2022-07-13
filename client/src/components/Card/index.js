import React from "react";
import { Icon } from '@iconify/react';
import messageCircleOutline from '@iconify/icons-eva/message-circle-outline';
import bookmarkStar from '@iconify/icons-bi/bookmark-star';
import ExpandProject from '../ExpandProject';

const Card = (props) => {
  const {projectContent} = props;
  return (projectContent&&(
    
    <div className="p-2 mb-5 rounded-lg" id='card-container'> 
      <div>
        <div className='select-none font-semibold tracking-wide mb-2 text-xl'>
             {projectContent.title}
        </div>
        <div 
          className='select-none font-light text-lg text-justify leading-5 mb-1'>
          {projectContent.description}
        </div>
        <ExpandProject projectContentBody={projectContent.content}></ExpandProject>
      </div>
      <div className='select-none mt-1'>
        <p className='font-semibold text-lg'>Current Project Needs:</p>
        <ul className='list-disc list-inside text-lg ml-3'>
         {projectContent.skillsRequiredForHelp.map(skill => {return <li key={projectContent._id+skill}>{skill}</li>})}
        </ul>
      </div>
        <p 
          className='select-none mt-3 italic '>
          Posted By <span><a href='/'>"{projectContent.createdBy.displayName}"</a></span> on {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(projectContent.createdAt)}.
        </p>
      <div className='mt-2 flex justify-between'>
        <Icon icon={messageCircleOutline} color="black" height="40" />
        <Icon icon={bookmarkStar} color="black" height="40" />
      </div>
    </div>
  ));
}

export default Card;
