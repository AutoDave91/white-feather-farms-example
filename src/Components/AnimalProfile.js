import React from "react";
import axios from "axios";

function AnimalProfile(props) {
    // console.log("props", props)
    // console.log(typeof props.animal.image)
    let animal = props.animal;
  return (
    <main className="animal">
        <span>{animal.image.charAt(0) === '.'

        ? <img className='animalImage' src={require(`${animal.image}`)} alt={animal.species} />
        : <img className='animalImage' src={animal.image} alt={animal.species} />}
        </span>
        <h3>{animal.breed} {animal.species}</h3>
        <h3>Age Range: {animal.age_range}</h3>
        <h3>Names: {animal.names}</h3>
        <h3>Fun Fact : {animal.fun}</h3>
    </main>
  );
}

export default AnimalProfile;