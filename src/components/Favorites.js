import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const Favorites = ({ favorites, onRemoveFromFavorites }) => {
  return (
    <div className="favorites-page">
      <h2 className="mb-4">My Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <div className="text-center py-5">
          <h4>No favorite recipes yet!</h4>
          <p>Find some delicious recipes and add them to your favorites.</p>
          <Link to="/" className="btn btn-primary mt-3">
            Find Recipes
          </Link>
        </div>
      ) : (
        <div className="row">
          {favorites.map((favorite) => (
            <div key={favorite.uri} className="col-md-4 mb-4">
              <RecipeCard 
                recipe={favorite} 
                isFavorite={true}
                onToggleFavorite={() => onRemoveFromFavorites(favorite.uri)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
