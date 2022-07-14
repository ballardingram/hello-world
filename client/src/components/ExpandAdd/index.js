import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';
import circlePlusFill from '@iconify/icons-akar-icons/circle-plus-fill';
import { UPDATE_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

 
const ExpandAdd = ({ skills }) => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };


  const [skillState, setSkillState] = useState(false);
  
  // const [checked2, setChecked2] = useState(false);
  const [updateUser, { error }] = useMutation(UPDATE_USER);

  const handleChange = async (event) => {
    let { name, value } = event.target;
    setSkillState(!skillState, {
      [name]: value,
    });
    console.log(name, value, skillState, skills)

    // if (skillState === false) {
    //  await updateUser({
    //   variables: { userData: JSON.stringify(value) }
    //  })
     
     
    // }
  };
  
  // const handleChange2 = (event) => {
  //   setChecked2(!checked2)
  // }

    

    // console.log(checked)

    // if (checked === true) {

    // }

    
 
  return (
    <Fragment>
      <Accordion open={open === 1} >
        <div className="flex items-center my-2"><Icon icon={circlePlusFill} onClick={() => handleOpen(1)} height="20" />
        <AccordionHeader><span className="flex ml-1 text-sm md:text-lg font-semibold">Add Skills</span></AccordionHeader>
        </div>
      <AccordionBody>
        <div className="select-none flex justify-center text-sm md:text-lg my-1">
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
          <ul className="list-disc list-outside grid grid-cols-3 font-normal">
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
          </ul>
        </div>
      </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export default ExpandAdd;