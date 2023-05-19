import React, { useState } from "react";
// import Navbar from './Navbar'

const MainPage = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div className="question-container">
        <div className="one flex-1 h-12">One</div>
        <div className="two flex-1">Two</div>
        <div className="three flex-1">Three</div>
        <div className="four flex-1">Four</div>
      </div>

      <div className="question-answers">
        <div className="five">Five</div>
        <div className="six">Six</div>
        <div className="seven">Seven</div>
        <div className="eight">Eight</div>
      </div>
    </div>
  );
};

export default MainPage;
