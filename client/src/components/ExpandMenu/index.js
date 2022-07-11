import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';
import hamburgerIcon from '@iconify/icons-ph/hamburger';
 
const ExpandMenu = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} onClick={() => handleOpen(1)}>
        <Icon icon={hamburgerIcon} height="40" className="w-screen bg-gray-200 rounded-t-2xl"/>
          <AccordionBody>
            <ul className="bg-gray-200 text-md font-semibold w-screen">
              <li className="mb-1 ml-3 text-lg">My Projects</li>
              <li className="mb-1 ml-3 text-lg">Network</li>
              <li className="mb-1 ml-3 text-lg">Donations</li>
              <li className="mb-1 ml-3 text-lg">Saved</li>
              <li className="mb-1 ml-3 text-lg">Message</li>
              <li className="mb-1 ml-3 text-lg">Help and Support</li>
              <li className="mb-1 ml-3 text-lg">About</li>
              <li className="mb-1 ml-3 text-lg">Log Out</li>
              <li className="ml-3 text-lg">Close Account</li>
            </ul>
          </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export default ExpandMenu;