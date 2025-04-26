const HeroName = ({ children }) => {
  return (
    <span style={{fontFamily: 'Samarkan, cursive',}} className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px  tracking-5px block font-bold">
      {children}
    </span>
  );
};

export default HeroName;
