import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';
import circlePlusFill from '@iconify/icons-akar-icons/circle-plus-fill';
 
const ExpandSkills = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} onClick={() => handleOpen(1)}>
        <div className="flex items-center my-2"><Icon icon={circlePlusFill} height="25" />
        <AccordionHeader><span className="flex ml-1 text-lg font-semibold">View Skills</span></AccordionHeader>
        </div>
      <AccordionBody>
        <div className="select-none flex justify-center text-lg my-1">
          <ul className="list-disc list-inside grid grid-cols-3 tracking-wide font-normal">
            <li>HTML</li>
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

export default ExpandSkills;