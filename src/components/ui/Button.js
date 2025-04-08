const React = require("react");

const combineClasses = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const buttonStyles = {
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    default: "bg-school-blue text-white hover:bg-school-blue/90",
    destructive: "bg-destructive text-white hover:bg-destructive/90",
    outline: "border border-school-navy bg-white hover:bg-gray-100 text-school-navy",
    secondary: "bg-school-lightgray text-school-navy hover:bg-school-lightgray/80",
    ghost: "hover:bg-school-lightgray text-school-navy",
    link: "text-school-blue underline-offset-4 hover:underline",
  },
  sizes: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }
};

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const buttonClasses = combineClasses(
      buttonStyles.base,
      buttonStyles.variants[variant],
      buttonStyles.sizes[size],
      className
    );

    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

module.exports = { Button };