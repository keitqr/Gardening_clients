import React from "react";

const Card= ({name, email, id} ) => {  // we create the card component to use it in the index.js for each robo friend
    return( //adding some css styles to the card, but we dont want all the card saying the same thing, we want something more dynamic, therefore we need some props whch we can give it at index.js at the card tag
        <div className= "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">  
            {/* <h1>RoboFriends</h1> */}
            <img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
            <div>
            <h2>{name}</h2>
            <p>{email}</p>

            </div>
        </div>
    )
}

export default Card;