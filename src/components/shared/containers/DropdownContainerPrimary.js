const DropdownContainerPrimary = ({ children }) => {
  return (
    <div className="shadow-lg min-w-[240px] py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transform transition-all duration-200 hover:shadow-xl">
      {children}
    </div>
  );
};

export default DropdownContainerPrimary;