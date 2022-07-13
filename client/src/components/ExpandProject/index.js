import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';
import circlePlusFill from '@iconify/icons-akar-icons/circle-plus-fill';
 
const ExpandProject = ({projectContentBody}) => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 1 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} onClick={() => handleOpen(0)}>
        <div className="flex items-center my-2"><Icon icon={circlePlusFill} height="28" />
        <AccordionHeader><span className="flex ml-1 text-lg">View More</span></AccordionHeader>
        </div>
      <AccordionBody>
        <div className="text-justify py-0 mb-2 text-lg">
         {projectContentBody}
        </div>
      </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export default ExpandProject;