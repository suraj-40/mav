const React = require('react');
const { Button } = require("@/components/ui/Button");

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-school-navy to-school-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl text-school-orange md:text-4xl font-bold mb-4 font-montserrat">
              Ready to Join Our Community?
            </h2>
            <p className="text-white/90 max-w-md">
              Applications for the 2026-2027 academic year are now open. Secure your child&apos;s place in our nurturing educational environment today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
  <Button 
    className=" text-black rounded hover:bg-school-navy/10  font-montserrat font-medium px-6 py-3"
  >
    Schedule a Tour
  </Button>
  <Button 
    className="bg-school-orange hover:bg-school-orange/90 text-white rounded-lg font-montserrat font-medium px-6 py-3"
  >
    Apply Now
  </Button>
</div>
        </div>
      </div>
    </section>
  );
};

module.exports = CallToAction;