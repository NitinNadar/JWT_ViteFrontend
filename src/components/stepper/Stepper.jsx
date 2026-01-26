import React from 'react'
import '../../css/Stepper.css';

const Stepper = ({ totalScreen, stepNumber }) => {
  const totalPage = Array.from({ length: totalScreen }, (_, i) => i + 1);

  return (
    <main className="stepper-container">
      {totalPage.map((number) => (
        <React.Fragment key={number}>
          <div className={`stepper-container-check ${stepNumber >= number ? "stepper-container-check-true" : ""}`}>
            {number}
          </div>

          {number !== totalScreen && (
            <div className="stepper-container-space">
              {stepNumber >= number && (
                <div className="stepper-container-true" />
              )}
            </div>
          )}
        </React.Fragment>
      ))}
    </main>
  );
};


export default Stepper