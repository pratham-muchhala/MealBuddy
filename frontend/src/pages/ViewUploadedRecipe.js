import RecipeCard from "../components/RecipeCard";
import "./ViewUploadedRecipe.css";
import axios from "axios";
import { useState, useRef } from "react";
import React from "react";


const ViewUploadedRecipe = () => {

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  let results = useRef();
  let [queryResults, setQueryResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get('https://api.edamam.com/api/recipes/v2', {
      params: {
        type: 'public',
        q: query,
        app_id: '07a1c426',
        app_key: 'abcfc53d8328c80fb34db2d6a5047271'
      }
    }).then(function (response) {
      for (let i = 0; i < 10; i++) {
        console.log(i)
        setRecipes([...recipes, {
          label: response.data.hits[i].recipe.label,
          image: response.data.hits[i].recipe.image,
          source: response.data.hits[i].recipe.source,
          url: response.data.hits[i].recipe.url,
          ingredientLines: response.data.hits[i].recipe.ingredientLines
        }])
      }
      
      // console.log(response.data.hits);

      // setQueryResults([ ...queryResults, response.data.hits])

      // response.data.hits.map((item)=>{
        // setRecipes([...recipes, {
        //   label: item.recipe.label,
        //   image: item.recipe.image,
        //   source: item.recipe.source,
        //   url: item.recipe.url,
        //   ingredientLines: item.recipe.ingredientLines
        // }])
      
      // })

      // console.log(queryResults);

      // console.log(recipes);

    }).catch(function (error) {
      console.error(error);
    });

  }

  const logOutSubmit = (e) => {
    e.preventDefault();
    axios.get("/user/logout/", {
    })
      .then(res => {
        window.location.href = "/";
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="view-uploaded-recipe">
      <div className="nav-bar1">
        <div className="btn-logo1">
          <div className="btn-logo-item" />
          <div className="mealbuddy1">MealBuddy</div>
        </div>
        <div className="nav-items1">
          <button className="login2" onClick={logOutSubmit}>
            <div className="login3">Logout</div>
          </button>
          <div className="hamburger1">
            <div className="line-div" />
            <div className="hamburger-child1" />
            <div className="line-div" />
          </div>
        </div>
      </div>
      <input
        type="text"
        className="search3"
        placeholder="Searched for Pizza"
        value={query}
        onChange={(text) => setQuery(text.target.value)}
      />
      <button className="login2" onClick={handleSubmit}>
        <div className="login3">Search</div>
      </button>
      <div className="results" ref={results} id="results">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} label={recipe.label} img={recipe.image} source={recipe.source} ingredients={recipe.ingredientLines} recipeUrl={recipe.url} />
        ))}

      </div>
    </div>
  );
};

export default ViewUploadedRecipe;
