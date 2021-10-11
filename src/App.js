import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: "",
      message: (localStorage.getItem("recipes")) ? "select a meal to see the recipe!" : "please add a recipe!",
      ingredients: "",
      notes: "" 
    }
    
  }
  recipes = (localStorage.getItem("recipes")) ? [...JSON.parse(localStorage.getItem("recipes"))] : [];

  addRecipe = (e) => {
    
    this.recipes = [...this.recipes, 
    {
      "meal": e.target[0].value,
      "ingredients": [e.target[1].value],
      "notes": e.target[2].value,
      "message": ""
    }]
    
    localStorage.setItem("recipes", JSON.stringify(this.recipes))
  }

  deleteRecipe = (meal) => {
    let deleteCondition = (obj) => obj.meal === meal; 
    let deleteTarget = this.recipes.findIndex(deleteCondition);
    this.recipes.splice(deleteTarget, 1)
    localStorage.setItem("recipes", JSON.stringify(this.recipes))
    window.location.reload();
  }

  editRecipe = (e) => {
    let editCondition = (obj) => obj.meal === e.target[0].value;
    let editTarget = this.recipes.findIndex(editCondition);
    let editedRecipe = {
      "meal": e.target[0].value,
      "ingredients": [e.target[1].value],
      "notes": e.target[2].value
    }
    this.recipes.splice(editTarget, 1, editedRecipe)
    localStorage.setItem("recipes", JSON.stringify(this.recipes))
    window.location.reload();
  }

  showRecipe = (i) => {
    this.setState({
      meal: i.meal,
      ingredients: i.ingredients,
      notes: i.notes,
      message: ""
    })
  }

  displayButtons = () => {
    document.getElementById("delete").style.display="inline-block"
    document.getElementById("edit").style.display="inline-block"
  }

  displayNewRecipe = () => {
    document.getElementById("inputDisplay").style.display="block"
  }

  displayEditRecipe = () => {
    document.getElementById("editDisplay").style.display="block"
  }

  render() {
     
    window.onclick = (event) => {
      if (event.target === document.getElementById("inputDisplay") || event.target === document.getElementById("editDisplay")) {
        document.getElementById("inputDisplay").style.display="none"
        document.getElementById("editDisplay").style.display="none"
      }
    }
    
    return (
    <div id="wrapper">
    <h1 id="title">Quick and Easy Recipes Box</h1>
    <div id="recipeDisplay">  
    <Recipe meal={this.state.meal} ingredients={this.state.ingredients} message={this.state.message} notes={this.state.notes} deleteRecipe={this.deleteRecipe} displayEditRecipe={this.displayEditRecipe} />
    </div>
    <div id="catalog">
      <ul>
      {(localStorage.getItem("recipes")) ? JSON.parse(localStorage.getItem("recipes")).map((i) => <li onClick={() => {this.showRecipe(i); this.displayButtons()}} className="catalogRecipe" key={i.meal}>{i.meal}</li>) : ""}
      </ul>
    </div>

      <button id="newRecipeButton" onClick={() => this.displayNewRecipe()}>New Recipe</button>
    
      <div id="inputDisplay">
      <form id="inputForm" onSubmit={(e) => this.addRecipe(e)}>
        <label htmlFor="meal">Meal: 
        <input className="input" type="text" placeholder="enter meal name" name="meal" required></input>
        </label>
        <label htmlFor="ingredients">Ingredients: 
        <input className="input" type="text"  placeholder="enter ingredients" name="ingredients" required></input>
        </label>
        <label htmlFor="notes">Notes: 
        <input className="input" type="text" placeholder="enter any notes (optional)" name="notes"></input>
        </label>
        <button id="submitRecipeButton" type="submit">Add Recipe</button>
      </form>
    </div>

    <div id="editDisplay">
      <form id="editForm" onSubmit={(e) => this.editRecipe(e)}>
        <label htmlFor="meal">Meal: 
        <input className="input" type="text" value={this.state.meal} name="meal" required readOnly></input>
        </label>
        <label htmlFor="ingredients">Ingredients: 
        <input className="input" type="text" name="ingredients" required></input>
        </label>
        <label htmlFor="notes">Notes: 
        <input className="input" type="text" name="notes"></input>
        </label>
        <button id="submitRecipeButton" type="submit">Edit Recipe</button>
      </form>
    </div>
     

    </div>

    
  );
  }
}

class Recipe extends React.Component {
  render () {
    const { meal, ingredients, notes, message } = this.props;
    return (
      <div className="tile">
       <div className="tileTop"><h2>{meal}</h2></div>
       <div className="content"><p>{ingredients}{message}</p><span>{notes}</span></div>
      <div id="deleteEdit">
      <button id="edit" onClick={() => this.props.displayEditRecipe(meal)}>Edit Recipe</button><button onClick={() => this.props.deleteRecipe(meal)} id="delete">Delete Recipe</button>
      </div>
      </div>
    )
  }
}

export default App;
