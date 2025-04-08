import React from "react";
import DropdownLink from "./DropdownLink";
import DropdownWrapperPrimary from "@/components/shared/wrappers/DropdownWrapperPrimary";
import DropdownPrimary from "./DropdownPrimary";

const DropdownItem = ({ item }) => {
  const { name, status, type, dropdown, path } = item;
  return (
    <li className={`${dropdown ? "relative group/nested" : ""}`}>
      <DropdownLink item={item} />

      {dropdown && (
        <DropdownWrapperPrimary>
          <div className="absolute top-0 left-0 w-full mt-0 z-50">
            <DropdownPrimary items={dropdown} />
          </div>
        </DropdownWrapperPrimary>
      )}
    </li>
  );
};

export default DropdownItem;