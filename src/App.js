import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: "",
      ingredients: "select a meal to see the recipe!",
      notes: "" 
    }
    
    
  }
  render() {
    let recipes = ["test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9"];
  return (
    <div id="wrapper">
    <h1 id="title">Quick and Easy Recipes Box</h1>
    <div id="recipeDisplay">  
    <Recipe meal={this.state.meal} ingredients={this.state.ingredients} notes={this.state.notes} />
    </div>
    <div id="catalog">
      <ul>
      {recipes.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
    
      <button id="newRecipeButton">Add New Recipe</button>
    
    </div>
  );
  }
}

class Recipe extends React.Component {
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
