import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import RecipeFinder from "./components/RecipeFinder";
import Favorites from "./components/Favorites";
import Hero from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (recipe) => {
    if (!favorites.some(fav => fav.uri === recipe.uri)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFromFavorites = (recipeUri) => {
    setFavorites(favorites.filter(recipe => recipe.uri !== recipeUri));
  };

  return (
    <div className="App">
      <Router>
        <Navbar favorites={favorites} />
        <Hero />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={
              <RecipeFinder 
                favorites={favorites} 
                onAddToFavorites={addToFavorites}
                onRemoveFromFavorites={removeFromFavorites}
              />
            } />
            <Route 
              path="/favorites" 
              element={
                <Favorites 
                  favorites={favorites} 
                  onRemoveFromFavorites={removeFromFavorites}
                />
              } 
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
