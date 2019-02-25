import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  handleClick = () => {
    const API = "/api/pets";
    const QUERY =
      this.state.filters.type === "all"
        ? ""
        : `?type=${this.state.filters.type}`;

    fetch(API + QUERY)
      .then(response => response.json())
      .then(data => this.setState({ pets: data }));
  };

  handleChange = type => {
    this.setState({ filters: { type } })
  };

  handleAdoption = (id) => {
    const{pets} = this.state;
    const pet = pets.findIndex((pet) => pet.id === id);
    this.setState({pets: [
      ...pets.slice(0,pet), {...pets[pet], isAdopted:true}, ...pets.slice(pet)
    ]})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                type={this.state.type}
                onChangeType={this.handleChange}
                onFindPetsClick={this.handleClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
               onAdoptPet={this.handleAdoption}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
