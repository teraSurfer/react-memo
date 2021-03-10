import React from "react";

const Child2 = React.memo(() => {
  console.count("hello child 2");
  return <div>hello</div>;
});

export default Child2;
