import React from 'react';

const HomeComponent = ({ children }) => {
  return (
    <div>
      <div className="fluid-container wm-home">
        <div className="row">
          <div className="col-12">
            { children }
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
