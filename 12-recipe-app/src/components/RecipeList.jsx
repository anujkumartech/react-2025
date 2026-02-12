import { useState, useEffect } from "react";
import { Link } from "react-router";

const ITEMS_PER_PAGE = 5;

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const totalPages = Math.ceil(recipes.length / ITEMS_PER_PAGE); // 25 / 5 = 5 page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleRecipes = recipes.slice(startIndex, endIndex);

  return (
    <div>
      <h1>All Recipes</h1>

      <ul>
        {visibleRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              {recipe.title}
            </Link>
            {" "} — {recipe.cuisine} ({recipe.time})
          </li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          {" "}Page {currentPage} of {totalPages}{" "}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default RecipeList;
