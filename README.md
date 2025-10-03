# Recipe Finder with Favorites

**A Modern Recipe Discovery and Management Web App**

This web application allows you to discover delicious recipes, filter them by dietary preferences, and save your favorites for easy access. Built with React and powered by the Edamam API, it provides a seamless experience for food enthusiasts and home cooks.

## Features

### Recipe Search

- **Keyword Search:** Find recipes by entering ingredients, dish names, or cuisines
- **Health Filters:** Filter recipes by dietary preferences (Vegetarian, Vegan, Gluten-Free)
- **Detailed View:** Click on any recipe to see ingredients, nutritional information, and more

### Favorites

- **Save Recipes:** Add recipes to your favorites with a single click
- **Persistent Storage:** Your favorite recipes are saved in your browser's local storage
- **Easy Management:** View and remove favorites at any time

## Technologies Used

- **React:** A JavaScript library for building user interfaces
- **React Router:** For client-side routing
- **Axios:** For making HTTP requests to the Edamam API
- **Bootstrap 5:** For responsive design and UI components
- **React Icons:** For beautiful, consistent icons
- **LocalStorage:** For persisting favorite recipes

## Getting Started

### Prerequisites

- npm (v6 or later) or yarn
- Edamam API credentials (get them from [Edamam Developer Portal](https://developer.edamam.com/))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/recipe-finder-app.git
   cd recipe-finder-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your Edamam API credentials:
   ```
   REACT_APP_EDAMAM_APP_ID=your_app_id_here
   REACT_APP_EDAMAM_APP_KEY=your_app_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. **Searching for Recipes**
   - Enter a search term (e.g., "pasta", "chicken curry") in the search bar
   - Use the checkboxes to filter by dietary preferences
   - Click the search button or press Enter to see results

2. **Viewing Recipe Details**
   - Click on any recipe card to see more details
   - View ingredients, nutritional information, and cooking instructions
   - Click "View Full Recipe" to see the original recipe on the source website

3. **Managing Favorites**
   - Click the star icon (☆) on any recipe to add it to your favorites
   - View all your saved recipes in the "Favorites" section
   - Remove recipes from favorites by clicking the star icon again

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── RecipeCard.js   # Individual recipe card component
│   ├── RecipeModal.js  # Modal for detailed recipe view
│   ├── Favorites.js    # Favorites page component
│   ├── Navbar.js       # Navigation bar
│   └── HeroBanner.js   # Hero section component
├── App.js             # Main application component
├── App.css            # Global styles
└── index.js           # Application entry point
```

## API Reference

This application uses the [Edamam Recipe Search API](https://developer.edamam.com/edamam-recipe-api) to fetch recipe data. You'll need to sign up for a free API key to use this application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Edamam](https://www.edamam.com/) for their excellent recipe API
- [Create React App](https://create-react-app.dev/) for the project setup
- [React Icons](https://react-icons.github.io/react-icons/) for the beautiful icons

You'll also need to set up your own API_ID and API_KEY, and store them in configuration.js file in src folder.

 

