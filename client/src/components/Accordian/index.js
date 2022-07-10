import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';
import circlePlusFill from '@iconify/icons-akar-icons/circle-plus-fill';
 
const ExpandProject = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} onClick={() => handleOpen(1)}>
        <div className="flex text-xs items-center my-2"><Icon icon={circlePlusFill} height="20" />
        <AccordionHeader><span className="flex ml-1 text-sm">View More</span></AccordionHeader>
        </div>
      <AccordionBody>
        <div className="text-sm text-justify leading-4 py-0 mb-2">
          This text will include the entire project description and will 
          not be severely limited in character count (will discuss exactly 
          what count should be in SLACK).

          lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          sequi neque animi quo cupiditate commodi saepe culpa sed 
          itaque velit maiores optio dolorem excepturi aperiam dolores, 
          voluptatibus suscipit amet quis repellat!
        </div>
      </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export default ExpandProject;