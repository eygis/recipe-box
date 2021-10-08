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
  
  showRecipe = (i) => {
    this.setState({
      meal: i.meal,
      ingredients: i.ingredients,
      notes: i.notes
    })
  }

  displayNewRecipe = () => {
    document.getElementById("inputDisplay").style.display="block"
  }
  render() {
   // let recipes = ["test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9"];
    
    let recipes = [
      {
        "meal": "ramen",
        "ingredients": ["noodles"],
        "notes": "it's good"
      },
      {
        "meal": "udon",
        "ingredients": ["also noodles"],
        "notes": "it's also good"
      },
      {
        "meal": "soba",
        "ingredients": ["still noodles"],
        "notes": "it's still good"
      }
    ] 
    window.onclick = (event) => {
      if (event.target == document.getElementById("inputDisplay")) {
        document.getElementById("inputDisplay").style.display="none"
      }
    }
    
    return (
    <div id="wrapper">
    <h1 id="title">Quick and Easy Recipes Box</h1>
    <div id="recipeDisplay">  
    <Recipe meal={this.state.meal} ingredients={this.state.ingredients} notes={this.state.notes} />
    </div>
    <div id="catalog">
      <ul>
      {recipes.map((i) => <li onClick={() => this.showRecipe(i)} className="catalogRecipe" key={i}>{i.meal}</li>)}
      </ul>
    </div>

      <button id="newRecipeButton" onClick={() => this.displayNewRecipe()}>New Recipe</button>
    
      <div id="inputDisplay">
      <form id="inputForm">
        <label for="meal">Meal: 
        <input class="input" type="text" placeholder="enter meal name" name="meal" required></input>
        </label>
        <label for="ingredients">Ingredients: 
        <input class="input" type="text"  placeholder="enter ingredients" name="ingredients" required></input>
        </label>
        <label for="notes">Notes: 
        <input class="input" type="text" placeholder="enter any notes (optional)" name="notes"></input>
        </label>
        <button id="submitRecipeButton" type="submit">Add Recipe</button>
      </form>
    </div>

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
