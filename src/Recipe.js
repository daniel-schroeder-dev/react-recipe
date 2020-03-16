import React from 'react';
import './Recipe.css';

function Recipe(props) {

  function handleDeleteRecipe(e) {
    props.handleDeleteRecipe(props.recipe.id);
  }

  return (
    <li className="recipe-card">
      <img className="recipe-card__img" src={props.recipe.img_url} alt={props.recipe.name}/>
      <div className="recipe-card__content">
        <h2>{props.recipe.name}</h2>
        <h3>Ingredients:</h3>
        <ul>
          {props.recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
        </ul>
        <h3>Instructions:</h3>
        <p>{props.recipe.instructions}</p>
        <button onClick={handleDeleteRecipe}>Delete Recipe</button>
      </div>
    </li>
  );
}

export default Recipe;