import React, {useState} from "react";
import  "./Card.css"
import "./Card2.js"
// import ".../robots"




const Card= ({name, email, phone} ) => {  // we create the card component to use it in the index.js for each robo friend
    const [note, setNote] = useState('');

    const handleNoteChange = (event) => {
      setNote(event.target.value);
    };
  
    const handleNoteSubmit = (event) => {
      event.preventDefault();
      // Logic to save the note to the user object or any desired location
      // You can use the user's ID or any unique identifier to update the specific user object
      console.log(`Saving note for ${robot.name}: ${note}`);
      setNote('');
    };
    return( //adding some css styles to the card, but we dont want all the card saying the same thing, we want something more dynamic, therefore we need some props whch we can give it at index.js at the card tag
        <div className= "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">  
            {/* <h1>RoboFriends</h1> */}
            {/* <img alt="robots" src={`https://robohash.org/${id}?200x200`}/> */}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p1>{phone}</p1>  

                <form onSubmit={handleNoteSubmit}>
                    <input
                        type="text"
                        value={note}
                        onChange={handleNoteChange}
                        placeholder="Enter a note"
                    />
                    <button type="submit">Submit</button>
                </form>
                {/* <p><textarea className="notes-input" placeholder="Write notes here"></textarea></p> */}
                <button className="notes-submit">Submit</button>
                {/* <p><input className= "tc first" id="notes" type="text" placeholder=""/></p>   
                <p><input className= "tc second" id="userinput" type="text" placeholder="Write Notes"/></p>            
                <button id="enter">Submit</button> */}
            </div>
        </div>
    )
}


export default Card;