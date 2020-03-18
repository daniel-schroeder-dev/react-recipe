import React from 'react';
import './CreateRecipeDialogBox.css';

class CreateRecipeDialogBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: [],
      ingredient: '',
      instructions: '',
      img_url: '',
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCloseDialogBox = () => {
    this.setState({
      name: '',
      ingredients: [],
      ingredient: '',
      instructions: '',
      img_url: '',
    });
    this.props.handleCloseDialogBox();
  };

  handleAddIngredientClick = () => {
    this.setState((state, props) => {
      const ingredients = [...state.ingredients];
      ingredients.push(state.ingredient);
      return { ingredients, ingredient: '' };
    });
  };

  handleCreateRecipe = e => {
    
    e.preventDefault();
    
    this.setState((state, props) => {
  
      const recipe = {
        name: state.name,
        ingredients: [...state.ingredients, state.ingredient],
        instructions: state.instructions,
        img_url: state.img_url,
      };
    
      props.handleCreateRecipe(recipe);
    
      return {
        name: '',
        ingredients: [],
        ingredient: '',
        instructions: '',
        img_url: '',
      };
    
    });
  
  };

  render() {
    if (!this.props.showDialogBox) {
      return null;
    }
    
    return (
      <form className="create-recipe-dialog-box" onSubmit={this.handleCreateRecipe}>
        <span className="create-recipe-dialog-box__close-btn btn" onClick={this.handleCloseDialogBox}>x</span>
        <label className="create-recipe-dialog-box__form-element">
          Recipe Name:
          <input 
            className="create-recipe-dialog-box__text-input" 
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
          />
        </label>
        <label className="create-recipe-dialog-box__form-element">
          Instructions:
          <textarea 
            rows="10" 
            cols="40" 
            className="create-recipe-dialog-box__recipe-instructions"
            value={this.state.instructions}
            onChange={this.handleInputChange}
            name="instructions"
          />
        </label>
        <label className="create-recipe-dialog-box__form-element">
          Ingredients:
          <ol className="create-recipe-dialog-box__ingredients-list">
            {this.state.ingredients.map((ingredient, i) => (
              <li key={i}><input className="create-recipe-dialog-box__text-input" type="text" value={ingredient} readOnly={true} /></li>  
            ))}
            <li>
              <input 
                className="create-recipe-dialog-box__text-input" 
                type="text" 
                placeholder="Ingredient"
                value={this.state.ingredient}
                onChange={this.handleInputChange}
                name="ingredient"
              />
            </li>
          </ol>
          <button className="btn" type="button" onClick={this.handleAddIngredientClick}>+</button><span className="create-recipe-dialog-box__add-ingredient-btn-text">Add Ingredient</span>
        </label>
        <label className="create-recipe-dialog-box__form-element">
          Image Url:
          <input 
            className="create-recipe-dialog-box__text-input" 
            type="text" 
            value={this.state.img_url}
            onChange={this.handleInputChange}
            name="img_url"
          />
        </label>
        <label className="create-recipe-dialog-box__form-element">
          <input 
            className="create-recipe-dialog-box__submit-btn btn" 
            type="submit" 
            value="Save Recipe" 
          />
        </label>
      </form>
    );
  }
  
}

export default CreateRecipeDialogBox;