import {Navbar} from "../../components/Navbar";
import {FaArrowCircleLeft} from "react-icons/fa";
import {useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import {getToken, isUserLoggedIn} from "../../service/AuthService";
import {RatingBlock} from "../../components/RatingBlock";
import {SetRating} from "../../components/SetRating";
import {LeaveComment} from "../../components/LeaveComment";
import {RecipeReview} from "../../components/RecipeReview";

const RecipePage = () => {

    //window.scrollTo(0, 0);
    let navigator = useNavigate();
    let location = useLocation();
    const isAuth = isUserLoggedIn();
    const path = location.pathname;
    const recipeId = path.split("/")[5];
    const category = path.split("/")[2];
    const type = path.split("/")[3];
    const [recipe, setRecipe] = useState(null)
    const [rating, setRating] = useState('');
    const [newRating, setNewRating] = useState('');
    const [comment, setComment] = useState(null);


    let newComment = {
        comment: "",
        author: "Guest user",
        date: ""
    }

    function handleComment(event) {
        newComment.comment = event.target.value;
    }

    function handlePostComment() {
        let currentDate = new Date();
        newComment.date = `${currentDate.getMonth() + 1} ${currentDate.getDate()}, ${currentDate.getFullYear()} at ${currentDate.getHours()}:${currentDate.getMinutes()}`;
        setComment(newComment);
    }

    const sendNewComment = async () => {
        const url = `http://localhost:8080/api/v1/recipes/${recipeId}/comment`
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        };
        await fetch(url, requestOptions)
            .then((rating) => setRating(rating))
            .catch(error => {
                console.error(error)
            });
    }

    function handleClick() {
        navigator(`/recipes/${category}/${type}`)
    }

    function handleRating(value) {
        setRating(value);
    }

    function handleNewRating(event) {
        setNewRating(event.target.id)
    }

    const updateRating = async () => {
        const url = `http://localhost:8080/api/v1/recipes/${recipeId}/rating?value=${newRating}`
        const requestOptions = {
            method: 'PUT',
            mode: 'cors'
        };
        await fetch(url, requestOptions);
        handleRating(newRating);
    }

    const fetchRecipe = async () => {
        const url = `http://localhost:8080/api/v1/recipes/${recipeId}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const responseJson = await response.json();
        setRecipe(responseJson);
    }

    const handleDelete = async () => {
        const url = `http://localhost:8080/api/v1/recipes/${recipeId}`
        const requestOptions = {
            method: 'DELETE',
            mode: 'cors',
            headers: {'Authorization': getToken()}
        };
        await fetch(url, requestOptions)
            .then((response) => response.json())
            .then(data => console.log(data))
            .catch((err) => {
                console.log(err.message);
            });
        alert('Recipe deleted successfully')
        navigator("/dishes");
    }


    useEffect(() => {
        updateRating();
    }, [newRating]);


    useEffect(() => {
        fetchRecipe();
    }, [rating]);

    useEffect(() => {
        sendNewComment();
    }, [comment]);

    return (
        <>
            <section className="main-page-section">
                <Navbar/>
                <FaArrowCircleLeft size={42} className="arrow-left" onClick={handleClick}/>
                <p className="recipe-title">{recipe?.title}</p>
                <br/>
                <br/>
                <br/>

                <div className="container main-recipe-container">
                    <div className="row">
                        <div className="col-4 ingredients-container"
                             style={{paddingLeft: '50px', paddingRight: '50px'}}>
                            <RatingBlock rating={recipe?.rating}/>
                            <br/><br/>

                            <span className="description-title">Ingredients:</span>
                            <ul className="ingredients-list">
                                {recipe?.ingredients?.sort((a, b) => a.name.localeCompare(b.name)).map(ingredient => (
                                    <li key={ingredient.ingredientId}>{ingredient.name}</li>
                                ))}
                            </ul>
                            <br/>
                            <br/>
                            <br/>
                            <span className="description-title">Nutrients:</span>
                            <ul className="ingredients-list">
                                {recipe?.nutrients?.sort((a, b) => a.name.localeCompare(b.name)).map(nutrient => (
                                    <li key={nutrient.nutrientId}>{nutrient.name}</li>
                                ))}
                            </ul>


                            <br/>
                            <br/>
                            <br/>
                            <span className="description-title">Prepare time:</span>
                            <ul className="ingredients-list">
                                <li key={recipe?.recipeId}>{recipe?.prepareTime}</li>
                            </ul>


                            <br/>
                            <br/>
                            <br/>
                            <span className="description-title">Cooking time:</span>
                            <ul className="ingredients-list">
                                <li key={recipe?.recipeId}>{recipe?.cookingTime}</li>
                            </ul>


                        </div>
                        <div className="col-md-8 col-12">
                            <div className="row mb-5">
                                <div className="col-lg-6 col-12">
                                    <img src={recipe?.imgMedium} alt=""
                                         className="recipe-image"/>
                                </div>
                                <div className="col-6">
                                    <div className="row mb-4">
                                        <div className="col-6">
                                            <img src={recipe?.imgSmall1} alt=""
                                                 className="recipe-image small-image"/>
                                        </div>
                                        <div className="col-6">
                                            <img src={recipe?.imgSmall2} alt=""
                                                 className="recipe-image small-image"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={recipe?.imgSmall3} alt=""
                                                 className="recipe-image small-image"/>
                                        </div>
                                        <div className="col-6">
                                            <img src={recipe?.imgSmall4} alt=""
                                                 className="recipe-image small-image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p className="description-title">Description:</p>
                                    <br/>
                                    <span className="ingredients-list">
                                        {recipe?.description}
                                    </span>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="col-12 mt-4 mb-5 ingredients-bottom-container">
                                        <span className="card-title">Ingredients:</span>
                                        <ol className="ingredients-list">
                                            {recipe?.ingredients?.map(ingredient => (
                                                <li key={ingredient.ingredientId}>{ingredient.name} - {ingredient.value} {ingredient.units}</li>
                                            ))}
                                        </ol>
                                        <br/>
                                        <br/>
                                        <span className="card-title">Nutrition:</span>
                                        <ol className="ingredients-list">
                                            {recipe?.nutrients?.map(nutrient => (
                                                <li key={nutrient.nutrientId}>{nutrient.name} - {nutrient.value} {nutrient.units}</li>
                                            ))}
                                        </ol>
                                    </div>
                                    <span className="card-title">Cooking Steps:</span>
                                    <br/>
                                    <ol className="ingredients-list">
                                        {recipe?.steps?.sort((a, b) => a.stepNumber - b.stepNumber).map(step => (
                                            <li key={step.stepId} className="mb-4">{step.description}</li>
                                        ))}
                                    </ol>


                                    <br/>
                                    <hr/>
                                    <br/>
                                    <SetRating onClick={handleNewRating} newRating={newRating}/>
                                    <br/>
                                    <hr/>
                                    <br/>
                                    <div className="row mb-4">
                                        <div className="col-12">
                                                <span className="card-title mb-auto mt-auto"
                                                      style={{fontSize: '30px'}}>Explore related reviews</span>
                                        </div>
                                    </div>
                                    <br/>
                                    {recipe?.comments &&
                                        recipe.comments.map(comment => (
                                            <RecipeReview
                                                key={comment.id}
                                                date={comment.date}
                                                text={comment.comment}
                                                author={comment.author}/>
                                        ))
                                    }
                                    <br/>
                                    <hr/>
                                    <br/>
                                    <LeaveComment onChange={handleComment} onClick={handlePostComment}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 ">

                        {isAuth &&
                            <>
                                <div className="col-2 offset-8 d-flex justify-content-end">
                                    <button className="main-large-orange-save-button"
                                            style={{color: 'white', backgroundColor: 'black'}}>Edit
                                    </button>
                                </div>
                                <div className="col-2 d-flex justify-content-end">
                                    <button className="main-large-orange-save-button"
                                            style={{color: 'white', backgroundColor: 'black'}}
                                            onClick={handleDelete}>Delete
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export {RecipePage}
