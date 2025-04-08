import React from "react";

const DropdownWrapperPrimary = ({ children }) => {
  return (
    <div className="absolute top-full left-0 mt-4 w-full opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50">
      {children}
    </div>
  );
};

export default DropdownWrapperPrimary;