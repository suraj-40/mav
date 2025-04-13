"use client";
import AccordionController from "@/components/shared/accordion/AccordionController";
import Accordion from "@/components/shared/accordion/Accordion";
import AccordionContainer from "@/components/shared/containers/AccordionContainer";
import MobileLinkPrimary from "./MobileLinkPrimary";
import AccordionContent from "@/components/shared/accordion/AccordionContent";
import MobileLinkSecondary from "./MobileLinkSecondary";
import { useState } from "react";

const MobileAccordion = ({ items, isNested = false }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordionContainer>
      {items.map((item, idx) => (
        <Accordion
          key={idx}
          isActive={activeIndex === idx}
          accordion={isNested ? "secondary" : "primary"}
          idx={idx}
          onClick={() => toggleAccordion(idx)}
        >
          <AccordionController type="primary">
            <MobileLinkPrimary item={item} />
          </AccordionController>
          {item.dropdown && activeIndex === idx && (
            <AccordionContent>
              <ul className="pl-6 space-y-2 mt-2">
                {item.dropdown.map((subItem, subIdx) => (
                  <li key={subIdx}>
                    <MobileLinkSecondary item={subItem} />
                    {subItem.dropdown && activeIndex === idx && (
                      <MobileAccordion
                        items={subItem.dropdown}
                        isNested={true}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          )}
        </Accordion>
      ))}
    </AccordionContainer>
  );
};

export default MobileAccordion;