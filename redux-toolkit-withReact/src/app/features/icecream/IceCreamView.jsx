import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restoked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const totalIceCream = useSelector((state) => state.icecream.numOfIceCream);
  return (
    <div>
      <h2>Number of icecream - {totalIceCream}</h2>
      <button onClick={() => dispatch(ordered())}> Order icecream </button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      ></input>
      <button onClick={() => dispatch(restoked(value))}>
        {" "}
        Restock icecream{" "}
      </button>
    </div>
  );
};
