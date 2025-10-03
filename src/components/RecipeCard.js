import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe: recipeProp, isFavorite, onToggleFavorite }) => {
  // All hooks must be called at the top level
  const [showModal, setShowModal] = useState(false);
  
  // Handle both direct recipe and recipe.recipe structures
  const recipe = recipeProp?.recipe || recipeProp;
  
  // Add null check for recipe
  if (!recipe) {
    console.error('Recipe is undefined in RecipeCard:', { recipeProp, isFavorite });
    return null; // or return a placeholder/error message
  }

  const handleCardClick = (e) => {
    // Only open modal if the click wasn't on the favorite button
    if (!e.target.closest('.favorite-btn')) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="card h-100" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        <img 
          src={recipe.image} 
          className="card-img-top" 
          alt={recipe.label} 
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{recipe.label}</h5>
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-primary">
                {Math.round(recipe.calories)} calories
              </span>
              <span className="badge bg-secondary">
                {recipe.ingredients.length} ingredients
              </span>
            </div>
            <button 
              className={`btn btn-sm w-100 favorite-btn ${isFavorite ? 'btn-warning' : 'btn-outline-warning'}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(recipe);
              }}
            >
              {isFavorite ? '★ Remove' : '☆ Add to Favorites'}
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div 
          className="modal-overlay" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(5px)',
            zIndex: 1050,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            overflowY: 'auto'
          }} 
          onClick={handleCloseModal}
        >
          <div 
            className="modal-content" 
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              padding: '20px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
            }} 
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="close-btn" 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
              onClick={handleCloseModal}
            >
              ✖
            </button>
            <div className="modal-header">
              <h2 className="modal-title">{recipe.label}</h2>
              <div className="d-flex gap-2 mb-3 flex-wrap">
                <span className="badge bg-primary">
                  {Math.round(recipe.calories)} calories
                </span>
                <span className="badge bg-secondary">
                  {recipe.ingredients.length} ingredients
                </span>
              </div>
            </div>
            
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="recipe-image-container">
                    <img 
                      src={recipe.image} 
                      alt={recipe.label}
                      className="img-fluid rounded"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="d-grid mt-3">
                    <button 
                      className={`btn ${isFavorite ? 'btn-warning' : 'btn-outline-warning'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(recipe);
                      }}
                    >
                      {isFavorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
                    </button>
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div className="ingredients-section">
                    <h4 className="section-title">
                      <i className="bi bi-list-check me-2"></i>
                      Ingredients
                      <small className="text-muted ms-2">({recipe.ingredients.length})</small>
                    </h4>
                    <div className="ingredients-list">
                      {recipe.ingredients.map((ingredient, index) => (
                        <div key={index} className="ingredient-item">
                          <span className="ingredient-bullet">•</span>
                          <span className="ingredient-text">
                            {ingredient.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="d-grid mt-4">
                      <a 
                        href={recipe.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary"
                        onClick={e => e.stopPropagation()}
                      >
                        <i className="bi bi-link-45deg me-2"></i>
                        View Full Recipe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeCard;
