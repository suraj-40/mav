// TabButtonSecondary.js
const TabButtonSecondary = ({
  name,
  handleTabClick,
  idx,
  currentIdx,
  button,
  className,
}) => {
  return (
    <div className=" container relative group flex-1 text-center">
      <button
        onClick={() => handleTabClick(idx)}
        className={`${
          button === "icon"
            ? `inline-block hover:text-[#FF5722] ${
                idx === currentIdx ? "text-[#FF5722]" : ""
              }`
            : `w-full py-3 md:py-4 text-sm md:text-base font-medium transition-colors focus:outline-none whitespace-nowrap ${
                idx === currentIdx
                  ? "text-[#FF5722] font-semibold"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              }`
        } ${className || ""}`}
      >
        {name}
      </button>
      {/* Bottom Line Animation */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] md:h-[3px] bg-[#FF5722] transition-all duration-500 ease-in-out ${
          idx === currentIdx ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        } group-hover:opacity-100 group-hover:scale-x-100`}
        style={{
          transformOrigin: "left",
        }}
      />
    </div>
  );
};

export default TabButtonSecondary;