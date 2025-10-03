import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { APP_ID, APP_KEY } from '../configuration';
import RecipeCard from './RecipeCard';

const RecipeFinder = ({ favorites, onAddToFavorites, onRemoveFromFavorites }) => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    nutFree: false,
    lowSugar: false,
    lowCarb: false,
    highProtein: false
  });

  const searchRecipes = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');

    try {
      // Build the health query parameters
      const healthParams = [];
      if (filters.vegetarian) healthParams.push('vegetarian');
      if (filters.vegan) healthParams.push('vegan');
      if (filters.glutenFree) healthParams.push('gluten-free');
      if (filters.dairyFree) healthParams.push('dairy-free');
      if (filters.nutFree) healthParams.push('peanut-free&health=tree-nut-free');
      if (filters.lowSugar) healthParams.push('low-sugar');
      if (filters.lowCarb) healthParams.push('low-carb');
      if (filters.highProtein) healthParams.push('high-protein');
      
      const healthQuery = healthParams.length > 0 ? `&health=${healthParams.join('&health=')}` : '';
      
      const response = await Axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}${healthQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      
      setRecipes(response.data.hits.map(hit => hit.recipe));
    } catch (err) {
      console.error('Error fetching recipes:', err);
      setError('Failed to fetch recipes. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleToggleFavorite = (recipe) => {
    const isFavorite = favorites.some(fav => fav.uri === recipe.uri);
    if (isFavorite) {
      onRemoveFromFavorites(recipe.uri);
    } else {
      onAddToFavorites(recipe);
    }
  };

  return (
    <div className="recipe-finder">
      <div className="search-container mb-4">
        <form onSubmit={searchRecipes} className="mb-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for recipes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        <div className="filters-section mb-4">
          <h5 className="mb-3">Dietary Preferences</h5>
          <div className="row g-3">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="vegetarian"
                  name="vegetarian"
                  checked={filters.vegetarian}
                  onChange={handleFilterChange}
                />
                <label className="form-check-label" htmlFor="vegetarian">
                  🥗 Vegetarian
                </label>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="vegan"
                  name="vegan"
                  checked={filters.vegan}
                  onChange={handleFilterChange}
                />
                <label className="form-check-label" htmlFor="vegan">
                  🌱 Vegan
                </label>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="glutenFree"
                  name="glutenFree"
                  checked={filters.glutenFree}
                  onChange={handleFilterChange}
                />
                <label className="form-check-label" htmlFor="glutenFree">
                  🌾 Gluten-Free
                </label>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="dairyFree"
                  name="dairyFree"
                  checked={filters.dairyFree}
                  onChange={handleFilterChange}
                />
                <label className="form-check-label" htmlFor="dairyFree">
                  🥛 Dairy-Free
                </label>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="nutFree"
                  name="nutFree"
                  checked={filters.nutFree}
                  onChange={handleFilterChange}
                />
                <label className="form-check-label" htmlFor="nutFree">
                  🌰 Nut-Free
                </label>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="lowSugar"
                  name="lowSugar"
                  checked={filters.lowSugar}
                  onChange={handleFilterChange}
                />
                <label className="form-check-label" htmlFor="lowSugar">
                  🍬 Low-Sugar
                </label>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="lowCarb"
                  name="lowCarb"
                  checked={filters.lowCarb}
                  onChange={handleFilterChange}
                />
                <label className="form-check-label" htmlFor="lowCarb">
                  🍞 Low-Carb
                </label>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="highProtein"
                  name="highProtein"
                  checked={filters.highProtein}
                  onChange={handleFilterChange}
                />
                <label className="form-check-label" htmlFor="highProtein">
                  💪 High-Protein
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {recipes.length > 0 ? (
        <div className="row">
          {recipes.map((recipe) => (
            <div key={recipe.uri} className="col-md-4 mb-4">
              <RecipeCard 
                recipe={recipe} 
                isFavorite={favorites.some(fav => fav.uri === recipe.uri)}
                onToggleFavorite={handleToggleFavorite}
              />
            </div>
          ))}
        </div>
      ) : (
        !loading && query && <p className="text-center">No recipes found. Try a different search term.</p>
      )}
    </div>
  );
};

export default RecipeFinder;
