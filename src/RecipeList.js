import React from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

function RecipeList(props) {
  return (
    <ul className="recipe-list">
      {props.recipes.map(recipe => <Recipe key={recipe.name} recipe={recipe} handleDeleteRecipe={props.handleDeleteRecipe} />)}
    </ul>
  );
}

export default RecipeList;