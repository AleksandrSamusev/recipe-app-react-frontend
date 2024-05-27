import './App.css';
import {Homepage} from "./pages/homepage/Homepage";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {SearchPage} from "./pages/searchPage/SearchPage";
import {DishesPage} from "./pages/dishesPage/DishesPage";
import {RecipesPage} from "./pages/recipesPage/RecipesPage";
import {RecipePage} from "./pages/recipePage/RecipePage";
import {CreateRecipePage} from "./pages/createRecipePage/CreateRecipePage";
import {LoginPage} from "./pages/loginPage/LoginPage";
import {RegistrationPage} from "./pages/registrationPage/RegistrationPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/dishes" element={<DishesPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/recipes/:category/:type" element={<RecipesPage/>}/>
                <Route path="/recipes/:category/:type/recipe/:id" element={<RecipePage/>}/>
                <Route path="/recipes/create-new-recipe" element={<CreateRecipePage/>}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
            </Routes>
        </>
    );
}

export default App;
