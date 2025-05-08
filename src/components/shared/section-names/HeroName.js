const HeroName = ({ children }) => {
  return (
    <span className="uppercase text-secondaryColor text-[18px] md:text-[30px] mb-5px md:mb-15px  tracking-5px block font-bold font-samarkan">
      {children}
    </span>
  );
};
 
export default HeroName;
