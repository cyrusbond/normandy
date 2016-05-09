import React from 'react';
import { Route } from 'react-router';
import ControlApp from './components/ControlApp.jsx';
import RecipeList from './components/RecipeList.jsx';
import RecipeForm from './components/RecipeForm.jsx';
import DeleteRecipe from './components/DeleteRecipe.jsx';

export default (
  <Route component={ControlApp}>
    <Route path='control/'
      component={RecipeList}
      ctaButton={{text: 'Add New', icon: 'plus', link: 'recipe/new/'}}
    />
    <Route path='control/recipe/new/'
      component={RecipeForm}
      pageTitle="Add New Recipe"
    />
    <Route path='control/recipe/:id/'
      component={RecipeForm}
      pageTitle="Edit Recipe"
      ctaButton={{text: 'History', icon: 'history', link: 'history/'}}
    />
    <Route
      path='control/recipe/:id/delete/'
      component={DeleteRecipe}
      pageTitle="Delete Recipe"
    />
  </Route>
);