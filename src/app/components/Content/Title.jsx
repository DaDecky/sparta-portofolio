import React from "react";

const Title = (props) => {
  return (
    <div className="my-5">
      {props.title}
      <div className="mt-4 border-t-4 rounded-lg w-10"></div>
    </div>
  );
};

export default Title;
