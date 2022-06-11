import React from "react";
import { useSelector } from "react-redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numofcakes);
  return (
    <div>
      <h2>Num Of Cakes - {numOfCakes} </h2>
      <button>Buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;
