import React from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

function RecipeList(props) {
  return (
    <ul className="recipe-list">
      {props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} handleDeleteRecipe={props.handleDeleteRecipe} />)}
    </ul>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  handleDeleteRecipe: PropTypes.func.isRequired,
};

export default RecipeList;