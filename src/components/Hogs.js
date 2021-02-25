import {useState} from "react"
import Hog from "./Hog"

function Hogs({hogsData, images}) {
    // const [details, setDetails] = useState("false")

    
    
    const singleHog = hogsData.map((hog) => { 
       return( 
        <Hog
            name = {hog.name}
            specialty = {hog.specialty} 
            greased = {hog.greased} 
            weight = {hog.weight}
            highest_medal_achieved = {hog.highest_medal_achieved}
            images = {images}
            // details ={details}
            // setDetails = {setDetails}
        />
        )})
        

    return(
        <div className="ui grid container">
            {singleHog}
        </div>
    )
}

export default Hogs