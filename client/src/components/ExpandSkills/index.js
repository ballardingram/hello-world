import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';
import circlePlusFill from '@iconify/icons-akar-icons/circle-plus-fill';
// import { useQuery } from "@apollo/client";
// import { QUERY_USER } from "../../utils/queries";
// import Auth from "../../utils/auth";

 
const ExpandSkills = ({ skills }) => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  console.log(skills)

 
  return (
    <Fragment>
      <Accordion open={open === 1} onClick={() => handleOpen(1)}>
        <div className="flex items-center my-2"><Icon icon={circlePlusFill} height="20" />
        <AccordionHeader><span className="flex ml-1 font-semibold text-xl">View Skills</span></AccordionHeader>
        </div>
      <AccordionBody>
        <div className="select-none text-lg">
          <ul className="list-disc list-inside grid grid-cols-2 ml-5 font-semibold tracking-wide">
            
            {skills ? skills.map(userSkills => {
              return <li>{userSkills.skillName}</li>
            }): <li>Add some skills!!</li>}
            
            {/* <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>React</li>
            <li>Git</li>
            <li>Passport</li>
            <li>Oauth</li>
            <li>NoSQL</li>
            <li>Express.JS</li>
            <li>Heroku</li> */}

          </ul>
        </div>
      </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export default ExpandSkills;