import React from 'react'
import Cars from '../components/Cars';
import model_3 from "./images/model-s.jpg";
import model_y from "./images/model-x.jpg";
import model_s from "./images/model-y.jpg";
import Button from './Button';

function Home() {
  return (
    <>
        <Cars
        image = {model_3}
        />
        <Button />
        <Cars
        image = {model_y}
        />
          <Cars
        image = {model_s}
        />
    </>
  )
}

export default Home;