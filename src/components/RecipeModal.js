import React from 'react';

const RecipeModal = ({ recipe, onClose, isFavorite, onToggleFavorite }) => {
  if (!recipe) return null;

  // Handle click on modal backdrop to close the modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="modal fade show d-flex align-items-center" 
      style={{ 
        display: 'block', 
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1050,
        overflow: 'auto',
        padding: '20px 0'
      }}
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog modal-lg" style={{ margin: 'auto', maxWidth: '90%', maxHeight: '90vh' }}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h5 className="modal-title">{recipe.label}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <img 
                  src={recipe.image} 
                  alt={recipe.label} 
                  className="img-fluid rounded mb-3"
                />
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-primary me-2">
                    {Math.round(recipe.calories)} calories
                  </span>
                  <span className="badge bg-secondary me-2">
                    {recipe.ingredients.length} ingredients
                  </span>
                  <button 
                    className={`btn btn-sm ${isFavorite ? 'btn-warning' : 'btn-outline-warning'}`}
                    onClick={onToggleFavorite}
                  >
                    {isFavorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <h4 className="mb-4">
                  <i className="bi bi-list-check me-2"></i>Ingredients
                  <small className="text-muted d-block mt-1">({recipe.ingredients.length} items)</small>
                </h4>
                <div className="ingredients-list">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="ingredient-item d-flex align-items-start mb-2">
                      <span className="ingredient-bullet me-2">•</span>
                      <span className="ingredient-text">
                        {ingredient.text}
                        {ingredient.food && (
                          <span className="badge bg-light text-dark ms-2">
                            {ingredient.food}
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="d-grid">
                  <a 
                    href={recipe.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    View Full Recipe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
