import React from 'react';
import Header from './Header';
import CreateRecipeDialogBox from './CreateRecipeDialogBox';
import RecipeList from './RecipeList';
import GreyOutBox from './GreyOutBox';
import NoRecipesBanner from './NoRecipesBanner';
import './App.css';

const recipes = [
  {
    id: 1,
    img_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg',
    name: 'Spaghetti',
    ingredients: [
      'Pasta Sauce',
      'Noodles',
      'Parmesean Cheese',
    ],
    instructions: 'Open jar of sauce. Begin to simmer water. Boil water. Cook pasta until tender. Combine pasta and sauce.',
  },
  {
    id: 2,
    img_url: 'https://www.papajohns.com/static-assets/a/images/web/product/pizzas/sausage-slate-compressed.jpg',
    name: 'Pizza',
    ingredients: [
      'Sauce',
      'Cheese',
      'Pepperoni',
    ],
    instructions: 'Call Papa Johns. Browse NetFlix for a movie to watch while eating pizza. Pay the pizza delivery person. Fat out.',
  }
];

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showDialogBox: false,
      recipes: recipes,
      clearDialogBoxInputs: false,
      nextRecipeId: recipes.length + 1,
    };
  }

  handleOpenDialogBox = e => {
    this.setState({ showDialogBox: true, clearDialogBoxInputs: true });
  };

  handleCloseDialogBox = e => {
    this.setState({ showDialogBox: false });
  };

  handleCreateRecipe = (e, recipe) => {
    e.preventDefault();
    this.setState(state => {
      recipe.id = state.nextRecipeId++;
      state.recipes.push(recipe);
      state.showDialogBox = false;
      return state;
    });
  };

  handleDeleteRecipe = recipeToRemove => {
    this.setState(state => {
      state.recipes = state.recipes.filter(recipe => recipe.name !== recipeToRemove.name);
      return state;
    });
  };

  render() { 
    return (
      <div>
        <GreyOutBox showGreyOutBox={this.state.showDialogBox}/>
        <div className="app">
          <Header 
            handleOpenDialogBox={this.handleOpenDialogBox}
          />
          <CreateRecipeDialogBox 
            showDialogBox={this.state.showDialogBox}
            handleCloseDialogBox={this.handleCloseDialogBox}
            handleCreateRecipe={this.handleCreateRecipe}
            clearDialogBoxInputs={this.state.clearDialogBoxInputs}
          />
          <RecipeList 
            recipes={this.state.recipes}
            handleDeleteRecipe={this.handleDeleteRecipe}
          />
          <NoRecipesBanner recipes={this.state.recipes} />
        </div>
      </div>
    );
  }
}

export default App;
