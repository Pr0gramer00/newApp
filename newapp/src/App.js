import React, { Component } from "react";
import PersonList from "./components/PersonList";
import NewPerson from "./components/NewPerson";
import "./App.css"


class App extends Component {

    state = {
        name : "Dusan",
        data : [
            {name : "Dusan", job : "developer", gender : "male", id:1},
            {name : "Ivan", job : "gamer", gender : "male", id:2},
            {name : "Sofija", job : "gamer", gender : "female", id:3},

        ]
    }

    insertNewPerson = (person) =>{
        person.id = Math.floor(Math.random()*5);
        //let dataCopy = this.state.data.concat(person)
        let dataCopy = [...this.state.data,person];
        this.setState ({
            data : dataCopy
        })
    }
    deletePerson = (id) => {
        let filterData = this.state.data.filter(el=>{
            return el.id !== id;
        })
        this.setState({
            data : filterData
        })
    }


    render(){
        return (
            <div> 
            <PersonList deletePerson = {this.deletePerson} data = {this.state.data}/>
            <NewPerson insertNewPerson = {this.insertNewPerson}/>
           
         
            </div>
        )
        
         
            
    }
}
export default App;

