import React from "react";
import { Icon } from '@iconify/react';
import messageCircleOutline from '@iconify/icons-eva/message-circle-outline';
import bookmarkStar from '@iconify/icons-bi/bookmark-star';
import ExpandProject from '../ExpandProject';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';

const Card = (props) => {
  const {projectContent} = props;
  const [updateUser, { error }] = useMutation(UPDATE_USER);

  const handleBookMark = async (project) => {
    console.log("project ID "+project._id);
    console.log("ownerName : "+[project.createdBy._id]);
    console.log("owner : "+[project.createdBy.displayName]);
    console.log("Colloborators : "+JSON.stringify(project.colloborators));
    const collobs = project.colloborators.map(col => col._id);
    if(Auth.getUserID !== project.createdBy._id && !(collobs.includes(Auth.getUserID))){
      const tempUser = {
        _id : Auth.getUserID(),
        savedProjects : [project._id]
      }
        try {
               await updateUser({
                variables: { userData: JSON.stringify(tempUser) },
              });
            } catch (e) {
              console.error(e);
            }
    }
  }
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
        <button
           onClick={() => handleBookMark(projectContent)}>
          <Icon icon={bookmarkStar} color="black" height="40" />
        </button>
        
      </div>
    </div>
  ));
}

export default Card;
