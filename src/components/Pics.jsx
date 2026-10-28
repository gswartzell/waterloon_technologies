import React from "react";
import Photo1 from "../images/photos1.zip";
import Photo2 from "../images/photos2.zip";
import Photo3 from "../images/photos3.zip";
import Photo4 from "../images/photos4.zip";
import Photo5 from "../images/photos5.zip";
import Photo6 from "../images/photos6.zip";
import Photo7 from "../images/photos7.zip";

// asdf
const Pics = () => {
  return (
    <div>
      Click the link below to download the photos: <br />
      <a href={Photo1} download="photos1.zip">
        Download Photos 1
      </a>
      <br />
      <a href={Photo2} download="photos2.zip">
        Download Photos 2
      </a>
      <br />
      <a href={Photo3} download="photos3.zip">
        Download Photos 3
      </a>
      <br />
      <a href={Photo4} download="photos4.zip">
        Download Photos 4
      </a>
      <br />
      <a href={Photo5} download="photos5.zip">
        Download Photos 5
      </a>
      <br />
      <a href={Photo6} download="photos6.zip">
        Download Photos 6
      </a>
      <br />
      <a href={Photo7} download="photos7.zip">
        Download Photos 7
      </a>
      <br />
      <br />
    </div>
  );
};

export default Pics;
