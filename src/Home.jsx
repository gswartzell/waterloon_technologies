import React from "react";

const Home = () => {
  return (
    <div>
      <div className="content">
        <div className="contentTitle">Development Efforts</div>
        <div className="contentDescription">
          Here is a list of some of the projects we are working on at this time.
          All are react-based websites. Some have nodejs backends to provide
          data or access to private / paid content.
        </div>
        <ul className="projectList">
          <li className="projectItem">
            Capaoga - A website for a counseling office in Georgia
          </li>
          <li className="projectItem">
            CodeCoach - A website for development coaching.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
