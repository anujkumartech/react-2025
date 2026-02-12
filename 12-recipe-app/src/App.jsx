import { BrowserRouter, Routes, Route, Link } from "react-router";
// npm install react-router
// run backend: npm install -g json-server
// json-server db.json
import RecipeList from "./components/RecipeList_V2";
import RecipeDetail from "./components/RecipeDetail";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Recipe Book</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// {
//   "/": "go to this page",
//   "/recipe/:id": "go to another page"
// }
