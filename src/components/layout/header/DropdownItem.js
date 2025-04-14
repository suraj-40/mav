import React from "react";
import DropdownLink from "./DropdownLink";
import DropdownWrapperPrimary from "@/components/shared/wrappers/DropdownWrapperPrimary";
import DropdownSecondary from "./DropdownSecondary";

const DropdownItem = ({ item }) => {
  const { name, status, type, dropdown, path } = item;
  return (
    <li className={`${dropdown ? "relative group/nested" : ""}`}>
      <DropdownLink item={item} />

      {dropdown && (
        <DropdownWrapperPrimary>
          <div className="absolute top-0 left-0 w-full mt-0 z-50">
            <DropdownSecondary items={dropdown} />
          </div>
        </DropdownWrapperPrimary>
      )}
    </li>
  );
};

export default DropdownItem;