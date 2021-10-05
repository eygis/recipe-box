import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: "ramen",
      ingredients: "noodles",
      notes: "it's good" 
    }
    
  }
  render() {
    
  return (
    <div id="wrapper">
    <h1 id="title">Quick and Easy Recipes Box</h1>
    <div id="recipeDisplay">  
    <Tile meal={this.state.meal} ingredients={this.state.ingredients} notes={this.state.notes} />
    </div>
    <div id="recipeInput">
      <button>Add New Recipe</button>
    </div>
    </div>
  );
  }
}

class Tile extends React.Component {
  render () {
    const { meal, ingredients, notes} = this.props;
    return (
      <div className="tile">
       <div className="tileTop"><h2>{meal}</h2></div>
       <div className="content"><p>{ingredients}</p><span>{notes}</span></div> 
      </div>
    )
  }
}

export default App;
