import { useState } from "react";
import { data } from "./data";
import "./App.css";

function Places() {

  const [places, setPlaces] = useState(data);
  const [showText, setShowText] = useState(false);

  const removeItem = (id) => {
    let newPlaces = places.filter(place => place.id !== id);
    setPlaces(newPlaces);
  }

  const showTextClick =(element) => {
    element.showMore = !element.showMore
    setShowText(!showText)
  }

  return (
    <div>
      <div className ='container'>
      <h1>{places.length} Places to visit</h1>
      </div>
      {places.map((element => {
        const {id, place, description, image, showMore} = element;

        return(
          <div key={id}>
          <div className ='container'>
            <h2>{id}-{place}</h2>
            </div>
            <div className ='container'>
            <p>{showMore ? description : description.substring(0, 101) + "..."}
              <btn onClick= {() => showTextClick(element)}>{showMore ? "Show Less" : "Show More"}</btn>
            </p>
            </div>
            <div className ="container">
            <img src={image} alt="image" width="400px"/>
            </div>
            <div className='container'>
            <button onClick={() => removeItem(id)}>Remove</button>
            </div>
          </div>
        )
      }))}
    <div className='container'>
            <button onClick={() => setPlaces([])}>Remove All</button>
            </div>
    </div>
  )

}

export default Places;
