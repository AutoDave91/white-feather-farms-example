import React from "react";
import axios from "axios";

function HomeSlides(props) {
    console.log("props", props)
  return (
    <main className="pics">
      <span>{props.picSlides.image.charAt(0) === '.'

        ? <img className='slides' src={require(`${props.picSlides.image}`)} alt='pics from the farm' />
        : <img className='slides' src={props.picSlides.image} alt='pics from the farm' />}
      </span>
    </main>
  );
}

export default HomeSlides;