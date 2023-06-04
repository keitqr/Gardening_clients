import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";


class App extends Component  {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ""      //what changes in the app   
        }  
    }
    
    componentDidMount(): void {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(Response => Response.json())
            .then(users => this.setState({ robots: users}));
    }
    
    onSearchChange = (event) => { //everytime the input changes we get an event, we do this syntax since its created by us and is not part of React
        this.setState({searchField: event.target.value})    
    }

    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ?
            <h1 >Loading</h1>:
            (
                <div className="tc"> 
                    <h1 className="f1">Clients List</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                    <CardList robots ={filteredRobots}/>
                    </Scroll>
                </div>   
                );
            }
        }
   

export default App;

//how to make the search box interactive ? 
//We have an app
// We have a "SearchBox"
// And we have a "CardList", but the search box component needs to communicate with the card list, and same
// with the card list. "CardList"
// needs to know what is in the search box so that it can filter out robots accordingly