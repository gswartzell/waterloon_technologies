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
      <a
        href="/photo1.zip"
        download="photos1.zip"
        target="_blank"
        rel="noreferrer"
      >
        Download Photos 1
      </a>
      <br />
      <a
        href="/photo2.zip"
        download="photos2.zip"
        target="_blank"
        rel="noreferrer"
      >
        Download Photos 2
      </a>
      <br />
      <a
        href="/photo3.zip"
        download="photos3.zip"
        target="_blank"
        rel="noreferrer"
      >
        Download Photos 3
      </a>
      <br />
      <a
        href="/photo4.zip"
        download="photos4.zip"
        target="_blank"
        rel="noreferrer"
      >
        Download Photos 4
      </a>
      <br />
      <a
        href="/photo5.zip"
        download="photos5.zip"
        target="_blank"
        rel="noreferrer"
      >
        Download Photos 5
      </a>
      <br />
      <a
        href="/photo6.zip"
        download="photos6.zip"
        target="_blank"
        rel="noreferrer"
      >
        Download Photos 6
      </a>
      <br />
      <a
        href="/photo7.zip"
        download="photos7.zip"
        target="_blank"
        rel="noreferrer"
      >
        Download Photos 7
      </a>
      <br />
      <br />
    </div>
  );
};

export default Pics;
