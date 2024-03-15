import React from "react";

const SolutionSection = () => {
  return (
    <section className="section bg-primary">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7">
            <div className="text-center text-white-50">
              <h4 className="text-white">Best Solutions for your Business</h4>
              <p>
                To achieve this, it would be necessary to have uniform grammar,
                pronunciation and more common that of the individual languages.
              </p>
            </div>
          </div>
        </div>
        <div className="row" id="counter">
          <div className="col-sm-6 col-xl-3">
            <div className="text-center mt-4">
              <h2 className="counter-value text-white mt-4">
                <span>2,581</span>
              </h2>
              <p className="font-16 text-white-50">Projects</p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="text-center mt-4">
              <h2 className="counter-value text-white mt-4">
                <span>800</span>
              </h2>
              <p className="font-16 text-white-50">No. of Clients</p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="text-center mt-4">
              <h2 className="counter-value text-white mt-4">
                <span>128</span>
              </h2>
              <p className="font-16 text-white-50">Cups of coffee</p>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="text-center mt-4">
              <h2 className="counter-value text-white mt-4">
                <span>47</span>
              </h2>
              <p className="font-16 text-white-50">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
