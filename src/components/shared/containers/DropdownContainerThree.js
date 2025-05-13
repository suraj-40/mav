const DropdownContainerThree = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute top-[-80px] left-[102%] shadow-lg  py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transform transition-all duration-200 hover:shadow-xl z-50">
        {children}
      </div>
    </div>
  );
};


export default DropdownContainerThree;