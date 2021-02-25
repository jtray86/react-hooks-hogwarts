import React, {useState} from "react";
import piggy from "../assets/porco.png";

const [greaseFilter, setgreaseFilter] = useState("All")

const Nav = ({onGrease}) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <select onChange={onGrease} >
        <option>All</option>
        <option>Greased</option>
        <option>Ungreased</option>
      </select>
    </div>
  );
};

function HandleGreaseChange(){
  setgreaseFilter()
}
 const filteredhog = hogs.filter((hog) =>{
    if (greaseFilter === "All" || hog.greased === greaseFilter){
        return(hog)
    }
 }
)

export default Nav;
