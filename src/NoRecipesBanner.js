import React from 'react';
import './NoRecipesBanner.css';

function NoRecipesBanner(props) {
  if (props.recipes.length) return null;
  return <div className="banner">No recipes found. Click the 'New Recipe' link in the nav menu to add a recipe.</div>;
}

export default NoRecipesBanner;