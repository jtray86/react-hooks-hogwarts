import Nav from "./Nav";
import Hogs from "./Hogs";

import hogs from "../porkers_data";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

const images = {
 "augustus gloop": augustus_gloop, 
babe: babe,
bailey: bailey,
cherub: cherub, 
"galaxy note":galaxy_note, 
"leggo my eggo": leggo_my_eggo ,
 peppa: peppa,  
"piggy smalls": piggy_smalls,
piglet: piglet,
 porkchop: porkchop, 
 trouble: trouble,
 "truffle shuffle": truffle_shuffle, 
}



function App() {
  return (
    <div className="App">
      <Nav onGrease={HandleGreaseChange} hogs={hogs}/>
      <Hogs images={images} hogsData={filteredhog}/>
    </div>
  );
}

export default App;
