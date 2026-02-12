import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to="/">← Back to Recipes</Link>
      <h1>{recipe.title}</h1>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Cook Time:</strong> {recipe.time}</p>
      <p>{recipe.description}</p>
    </div>
  );
}

export default RecipeDetail;
