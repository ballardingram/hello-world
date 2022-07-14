import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';
import circlePlusFill from '@iconify/icons-akar-icons/circle-plus-fill';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';

 
const ExpandAdd = (props) => {
  const [open, setOpen] = useState(0);
  const { setUserSkillSet, skills } = props;
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const [formState, setFormState] = useState({
    skillName: "",
    skillLevel: "BEGINNER"
  });

  const [updateUser, { error }] = useMutation(UPDATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const tempUser = {
      _id: Auth.getUserID(),
      skills: [...skills, {
        skillName : formState.skillName,
        expertiseLevel : formState.skillLevel
      }]
    }
    try {
      const { data } = await updateUser({
        variables: { userData: JSON.stringify(tempUser) },
      });
      data && setUserSkillSet ([...skills, ...tempUser.skills])
    } catch (e) {
      console.error(e);
    }
    console.log(formState)
    setFormState({
      skillName: "",
      skillLevel: "BEGINNER"
    })
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} >
        <div className="flex items-center my-2"><Icon icon={circlePlusFill} onClick={() => handleOpen(1)} height="20" />
        <AccordionHeader><span className="flex ml-1 text-sm md:text-lg font-semibold">Add Skills</span></AccordionHeader>
        </div>
      <AccordionBody>
        <div className="select-none flex justify-center text-sm md:text-lg my-1">
        <form onSubmit={handleFormSubmit} className="mt-6">
          <div className="mb-3">
            <input
              type="text"
              className=" text-xl w-full px-4 py-3 mt-2 border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Enter skill name"
              id="skillName"
              name="skillName"
              value={formState.skillName}
              onChange={handleChange}
            />
            <select id="skillLevel" name="skillLevel" onChange={handleChange}>
              <option value='BEGINNER'>Beginner</option>
              <option value='INTERMEDIATE'>Intermediate</option>
              <option value='EXPERT'>Expert</option>
            </select>
            <button
              className="form-btn w-full py-2 tracking-wide text-white rounded-lg text-2xl"
              id="login-btn"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
        {/* <div>
          <label>
            <input
            name='HTML' 
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            value='HTML'
            />
            HTML
          </label>
          <label>
          <input
            name='CSS' 
            type="checkbox"
            checked={checked2}
            onChange={handleChange2}
            value='CSS'
            />
            CSS
          </label>
        </div> */}
          {/* <ul className="list-disc list-outside grid grid-cols-3 font-normal">
            <li><label><input type='checkbox' name='skill1' value='HTML' onChange={handleChange}/> HTML</label></li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>React</li>
            <li>Git</li>
            <li>Web API</li>
            <li>Oauth</li>
            <li>Passport</li>
            <li>Express.JS</li>
            <li>NoSQL</li>
            <li>Heroku</li>
          </ul> */}
        </div>
      </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export default ExpandAdd;