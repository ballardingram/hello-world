import { Fragment, useState } from "react";
import {
  Accordion,
  // AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';
import hamburgerIcon from '@iconify/icons-ph/hamburger';
 
const FooterMenu = () => {
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
              <li><a href="/about" className="mb-2 ml-3 text-lg">About HelloWorld</a></li>
              <li><a href="/" className="mb-2 ml-3 text-lg">Help and Support</a></li>
              <li><a href="/terms" className="mb-2 ml-3 text-lg">Terms and Conditions</a></li>
              <li><a href="/" className="mb-1 ml-3 text-lg">Log Out</a></li>
            </ul>
          </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

export default FooterMenu;