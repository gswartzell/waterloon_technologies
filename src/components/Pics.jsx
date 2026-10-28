import React from "react";
import Photo1 from "./photos1.zip";
import Photo2 from "./photos2.zip";
import Photo3 from "./photos3.zip";
import Photo4 from "./photos4.zip";
import Photo5 from "./photos5.zip";
import Photo6 from "./photos6.zip";
import Photo7 from "./photos7.zip";

// asdf
const Pics = () => {
  return (
    <div>
      Click the link below to download the photos: <br />
      <a href={Photo1}>Download Photos 1</a>
      <br />
      <a href={Photo2}>Download Photos 2</a>
      <br />
      <a href={Photo3}>Download Photos 3</a>
      <br />
      <a href={Photo4}>Download Photos 4</a>
      <br />
      <a href={Photo5}>Download Photos 5</a>
      <br />
      <a href={Photo6}>Download Photos 6</a>
      <br />
      <a href={Photo7}>Download Photos 7</a>
      <br />
      <br />
    </div>
  );
};

export default Pics;
