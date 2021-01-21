import React from 'react';
import { useSelector, useDispatch } from "react-redux";


export const Title = () => {
  const label ="Hello world";
  const state = useSelector((state) => state);

  console.log(state)
  return (
    <div>
      <h1>{label}</h1>
    </div>
  )
}
