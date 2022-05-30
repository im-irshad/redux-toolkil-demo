import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restoked } from "./cakeSlice";
export function CakeView() {
  const totalCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes -{totalCakes}</h2>
      <button onClick={() => dispatch(ordered())}> Order Cake </button>
      <button onClick={() => dispatch(restoked(3))}> Restock Cakes </button>
    </div>
  );
}
