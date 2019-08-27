import React from "react";
import axios from "axios";

function FamilyProfile(props) {
    console.log("props", props)
  return (
    <main className="family" style={{ display: "flex", flexDirection: "column" }}>
      <span>{props.family.image.charAt(0) === '.'

        ? <img className='famPic' src={require(`${props.family.image}`)} alt={props.family.name} />
        : <img className='famPic' src={props.family.image} alt={props.family.name} />}
      </span>
        <h3>Name: {props.family.name}</h3>
        <h3>Job: {props.family.job}</h3>
        <h3>Fav Animal: {props.family.fav_animal}</h3>
        <h3>Fav Activity: {props.family.fav_activity}</h3>
        <h3>Children: {props.family.children}</h3>
        <button>Edit</button>
    </main>
  );
}

export default FamilyProfile;