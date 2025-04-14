import React from "react";
import DropdownItem from "./DropdownItem";
import DropdownContainerThree from "@/components/shared/containers/DropdownContainerThree";

const DropdownSecondary = ({ items }) => {
  return (
    <DropdownContainerThree>
      <ul className="py-2">
        {items?.map((item, idx) => (
          <DropdownItem key={idx} item={item} />
        ))}
      </ul>
    </DropdownContainerThree>
  );
};

export default DropdownSecondary;