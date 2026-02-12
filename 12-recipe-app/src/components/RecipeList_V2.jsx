import { useState, useEffect } from "react";
import { Link } from "react-router";

const ITEMS_PER_PAGE = 5;

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // http://localhost:3000/recipes - > gets entire data
    fetch(`http://localhost:3000/recipes?_page=${currentPage}&_per_page=${ITEMS_PER_PAGE}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.data);
        setTotalPages(data.pages);
      });
  }, [currentPage]);

  return (
    <div>
      <h1>All Recipes</h1>

      <ul>
        {recipes.map((recipe) => (
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