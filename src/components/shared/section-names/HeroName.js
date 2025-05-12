const HeroName = ({ children }) => {
  return (
    <span className="uppercase text-secondaryColor text-4xl md:text-3xl lg:text-6xl mb-5px md:mb-15px  block  font-samarkan">
      {children}
    </span>
  );
};

export default HeroName;
