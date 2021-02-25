import {useState} from "react"


function Hog({name, specialty, greased, weight, highest_medal_achieved, images}){
    const [details, setDetails] = useState(false)
    console.log(images)
    function handleClick(e){
        console.log(e)
        setDetails((details) => !details)
        
    }
    
    
            const dets = <div id = "HogDets">
                <p>Greased: {greased ? "yes" :"no"}</p>
                <p>Weight: {weight}</p>
                <p>Speciality: {specialty}</p>
                <p>Highest Medal Achieved: {highest_medal_achieved}</p>
            </div>
        


    return(
        <div className = "ui eight wide column pigTile" onClick={handleClick}>
            <small>{name}</small>
            <img src = {images[name]} alt = {name}/>
            {details ? dets : null}
            {/* <HogDets specialty = {specialty} 
            greased = {greased} 
            weight = {weight}
            highest_medal_achieved = {highest_medal_achieved} 
            />  */}
        </div>
    )
}

export default Hog