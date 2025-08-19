import AccordionController from "@/components/shared/accordion/AccordionController";

import MobileLink from "./MobileLink";
import Accordion from "@/components/shared/accordion/Accordion";
import AccordionContent from "@/components/shared/accordion/AccordionContent";
const MobileMenuItem = ({ item }) => {
  const { name, path, dropdown, accordion } = item;

  return !accordion ? (
    <MobileLink item={{ name, path }} />
  ) : (
    <Accordion>
      <AccordionController type={"primary"}>
        <MobileLink item={{ name, path }} />
      </AccordionController>
      <AccordionContent>{dropdown && dropdown}</AccordionContent>
    </Accordion>
  );
};

export default MobileMenuItem;
