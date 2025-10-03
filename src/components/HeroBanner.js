import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/coverr-cat.mp4";
import cookingImage from "../assets/cooking.jpg";
import foodShoppingImage from "../assets/foodShopping.jpg";

const HeroBanner = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <video src={heroVideo} autoPlay loop muted />
        <div className="hero-content">
          <h1>Find your next recipe</h1>
          <p>Discover recipes and create your favourites list</p>
        </div>
      </div>
      
      <div className="navigation-cards">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4 mb-md-0">
              <Link to="/" className="nav-card-link">
                <div className="card h-100">
                  <div className="card-image-container">
                    <img src={cookingImage} alt="Browse Recipes" className="card-img-top" />
                  </div>
                  <div className="card-body text-center">
                    <h3 className="card-title">Browse Recipes</h3>
                    <p className="card-text">Explore our collection of delicious recipes</p>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="col-md-5">
              <Link to="/favorites" className="nav-card-link">
                <div className="card h-100">
                  <div className="card-image-container">
                    <img src={foodShoppingImage} alt="View Favorites" className="card-img-top" />
                  </div>
                  <div className="card-body text-center">
                    <h3 className="card-title">View Favorites</h3>
                    <p className="card-text">Your saved recipes in one place</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
