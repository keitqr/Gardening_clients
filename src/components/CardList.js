import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    return (

    <div>
        {
            robots.map((user,i) => { //*
                return  (
                <Card  
                    key={i} 
                    // id ={robots[i].id} 
                    name = {robots[i].name} 
                    email = {robots[i].email}
                    phone ={robots[i].phone}
                    />
                ); 
            
                }) //instead of copy pasting each card and give the index of the array we map to grab each
        }
    </div> 

    );
    
}

export default CardList;


// * But without having something called a key prop, if some of these cards get deleted, React won't know
//which one’s which and we’ll have to change the entire DOM. Versus if it had a key prop that says ‘oh this one
//gets removed’
//I can just remove this from the DOM. Remember we want to minimize the amount of work that we do to the
//DOM. So when you do a loop it's just something you have to remember.You have to give it a unique key. In our case
//We can just say ‘i’ which is index