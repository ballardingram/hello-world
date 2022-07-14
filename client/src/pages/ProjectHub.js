import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { useMutation,useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_PROJECT } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';
import Layout from '../components/Layout';

const ProjectHub = (props) => {
  const [formState, setFormState] = useState({
    projectTitle: '',
    projectSub: '',
    projectDetails: '',
    helpRequired: false,
    skillsRequired:''
  });

  const [addProject, { error }] = useMutation(ADD_PROJECT);

  const [projects, setProjects] = useState([]);
  const [savedProjects, setsavedProjects] = useState([]);
  const { data } = useQuery(QUERY_USER, {
    variables: { email: Auth.getUserEmail() },
  });
  
  const userData = data ? data.user : "";
  useEffect(() => {
    if (userData) {
      console.log("setting user projects");
      setProjects([...userData.projects]);
      setsavedProjects([...userData.savedProjects])
    }
  }, [userData]);


  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProject({
        variables: { title: formState.projectTitle, 
          description: formState.projectSub,
           content: formState.projectDetails , 
           helpRequired: formState.helpRequired.valueOf, 
           skillsRequired:formState.skillsRequired.split(','),
           createdBy: Auth.getUserID(),
           colloborators: [Auth.getUserID()]},
      });

      if(data){
        const newProject = data.addProject;
        setProjects([...projects, newProject])
      }
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      projectTitle: '',
      projectSub: '',
      projectDetails: '',
      helpRequired: false,
      skillsRequired: ''
    });
  }


  return (
 
    <Layout>
  <main className="sm:grid md:grid-cols-2 lg:grid-cols-3 lg:mt-56 mt-10 mb-8 md:mt-20 xl:mt-64 text-xl">


    {/*md break column 1 */}
    <div className="grid content-start px-5 mb-5">
      {/* submit project form start */}
      <div className='font-semibold mb-2 text-xl lg:text-2xl'>Submit a New Project:</div>
      <form onSubmit={handleFormSubmit}>
        <label
          htmlFor='projectTitle'
          className='block'>
        </label>
        <input
          name='projectTitle'
          type='text'
          className='block w-full px-2 py-2 mb-2 border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
          placeholder='Project Title'
          id='projectTitle'
          value={formState.projectTitle}
          onChange={handleChange}
          />
        <label
          htmlFor='projectSub'
          className='block'>
        </label>
        <input
          name='projectSub'
          type='text'
          className='block w-full px-2 py-2 mb-2 border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
          placeholder='Brief Description'
          id='projectSub'
          value={formState.projectSub}
          onChange={handleChange}
          />
        <label
          htmlFor='projectDetails'
          className='block'>
        </label>
        <textarea
          name='projectDetails' 
          className="w-full h-40 px-2 py-2 border rounded-lg focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder='Detailed Project Information'
          id='projectDetails'
          value={formState.projectDetails}
          onChange={handleChange}>
        </textarea>
        <label
          htmlFor='skillsRequired'
          className='block'>
        </label>
        <input
          name='skillsRequired'
          type='text'
          className='block w-full px-2 py-2 mb-2 border rounded-lg focus:border-blue-400 focus:ring-current-300 focus:outline-none focus:ring focus:ring-opacity-40'
          placeholder='Enter skill requirements'
          id='projectSub'
          value={formState.skillsRequired}
          onChange={handleChange}
          />

        <div className='flex w-full justify-start text-lg py-4 font-semibold'>
        <label
          htmlFor='helpRequired'
          className=''>
            Help Required?
        </label>
        <input
          name='helpRequired'
          type='checkbox'
          className='ml-8 px-2 w-4 border rounded-md'
          id='helpRequired'
          value={formState.helpRequired}
          onChange={handleChange}
          />
          </div>

        <div className='mt-2'>
          <button
              type='submit' 
              className='form-btn w-full py-2 mb-2 text-white tracking-wide rounded-lg text-2xl'
              id='projectSubmit'>
              Submit Project
          </button>
        </div>
        {/* <div>
          {data.projectTitle}
        </div> */}
      </form>
      {/* submit project form end */}
    {error && <div>something went wrong</div>}
    </div>


    {/*md break column 2 */}
    <div className="grid content-start md:grid-col-2 px-3 pb-5">
      <div>
        <div className='font-semibold mb-2 text-xl px-2 lg:text-2xl'>My Projects</div>
       {projects.length>0?projects.map(project => {return <div id={project._id}> <Card projectContent={project}/></div>}):<h2>There are no projects</h2>}
      </div>
    </div>

    {/*md break column 3 */}
    <div className="grid content-start px-3 pb-5">
    <div>
        <div className='font-semibold mb-2 text-xl px-2 lg:text-2xl'>Saved Projects</div>
        {savedProjects.length>0?savedProjects.map(project => {return <div id={"saved"+project._id}> <Card projectContent={project}/></div>}):
        <h3>There are no saved projects</h3>}
      </div>
      <div className='font-semibold mb-2 text-xl px-2 lg:text-2xl'>My Collaborations:</div>
      {
          projects.map(project => {
            return project.colloborators.map((colloborator) => {
              if(colloborator._id === userData._id && userData._id !== project.createdBy._id){
                return <div id={"collob"+project._id}> <Card projectContent={project}/></div>
              }
            })
          })
      }
    </div>

  </main>
  </Layout>

);
}

export default ProjectHub;