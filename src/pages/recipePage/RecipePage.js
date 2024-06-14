import {Navbar} from "../../components/Navbar";
import {FaArrowCircleLeft} from "react-icons/fa";
import {useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import {getLoggedInUser, getToken, isUserLoggedIn} from "../../service/AuthService";

import {SetRating} from "../../components/SetRating";
import {LeaveComment} from "../../components/LeaveComment";
import {Comments} from "../../components/Comments";
import {SpinnerLoading} from "../../utils/SpinnerLoading";
import {RatingBlock} from "../../components/ratingBlock/RatingBlock";

const RecipePage = () => {


    const navigator = useNavigate();
    const location = useLocation();
    const isAuth = isUserLoggedIn();
    const path = location.pathname;
    const recipeId = path.split("/")[5];
    const category = path.split("/")[2];
    const type = path.split("/")[3];

    const [recipe, setRecipe] = useState(null)
    const [newRating, setNewRating] = useState('');
    const [commentText, setCommentText] = useState('');

    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    function handleClick() {
        navigator(`/recipes/${category}/${type}`)
    }

    function handleCommentChange(event) {
        setCommentText(event.target.value)
    }

    const sendNewCommentRequest = async () => {
        window.scrollTo(0,0)
        const newCommentRequest = {
            comment: commentText.trim(),
            author: isUserLoggedIn() ? getLoggedInUser() : 'guest'
        }
        const url = `http://localhost:8080/api/v1/recipes/${recipeId}/comment`;
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCommentRequest)
        };

        const response = await fetch(url, requestOptions);
        const newComment = await response.json();
        const currentComments = recipe.comments;
        currentComments.push(newComment);
        setCommentText('');
        setRecipe(prevState => ({
            ...prevState, comments: currentComments
        }));

    }

    const updateRating = async (event) => {
        const url = `http://localhost:8080/api/v1/recipes/${recipeId}/rating?value=${event.target.id}`
        const requestOptions = {
            method: 'PUT',
            mode: 'cors'
        };
        const resp = await fetch(url, requestOptions);
        const data = await resp.json();
        setRecipe(prevState => ({
            ...prevState, rating: data
        }))
        setNewRating(data)
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
        const fetchRecipe = async () => {
            const url = `http://localhost:8080/api/v1/recipes/${recipeId}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseJson = await response.json();
            setRecipe(responseJson);
            setIsLoading(false)
        };
        fetchRecipe().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);


    if(isLoading) {
        return (
            <SpinnerLoading/>
        )
    }

    if(httpError) {
        return (
            <div className="container text-center" style={{marginTop: '25vh'}}>
                <span style={{
                    fontSize: '2rem',
                    fontWeight: 500
                }}>The server responded with a message --> {httpError}.</span>
                <br/>
                <span style={{
                    fontSize: '2rem',
                    fontWeight: 500
                }}>Please try again later :(</span>
            </div>
        )
    }

    return (
        <>
            <section className="main-page-section">
                <Navbar/>
                <FaArrowCircleLeft size={42} className="arrow-left" onClick={handleClick}/>


                <div className="container main-recipe-container">
                    <div className="row mt-5">
                        <div className="col-10 recipe-title mb-2">
                            <p className="mt-auto mb-auto">{recipe?.title}</p>
                        </div>
                        <div className="col-2 d-flex justify-content-center">
                            {isAuth &&
                                <>
                                    <button className="main-large-orange-post-button mb-auto mt-auto"
                                            onClick={handleDelete}>Delete
                                    </button>
                                </>
                            }
                        </div>
                    </div>
                    <hr/>

                    <div className="row mt-4">
                        <div className="col-5 col-xl-4 ingredients-container"
                             style={{paddingRight: '50px'}}>
                            <RatingBlock rating={recipe?.rating}/>
                            <br/><br/>

                            <span className="recipe-card-title">Ingredients</span>
                            <hr/>
                            <ul className="ingredients-list mt-3">
                                {recipe?.ingredients?.sort((a, b) => a.name.localeCompare(b.name)).map(ingredient => (
                                    <li key={ingredient.ingredientId}>{ingredient.name}</li>
                                ))}
                            </ul>

                            <br/>


                            <span className="recipe-card-title">Nutrients</span>
                            <hr/>
                            <ul className="ingredients-list mt-3">
                                {recipe?.nutrients?.sort((a, b) => a.name.localeCompare(b.name)).map(nutrient => (
                                    <li key={nutrient.nutrientId}>{nutrient.name}</li>
                                ))}
                            </ul>

                           <br/><br/>


                            <span className="recipe-card-title">Prepare time</span>
                            <hr/>
                            <ul className="ingredients-list mt-3">
                                <li key={recipe?.recipeId}>{recipe?.prepareTime}</li>
                            </ul>

                            <br/><br/>

                            <span className="recipe-card-title">Cooking time</span>
                            <hr/>
                            <ul className="ingredients-list mt-3">
                                <li key={recipe?.recipeId}>{recipe?.cookingTime}</li>
                            </ul>
                        </div>

                        <div className="col-xl-8 col-7">
                            <div className="row mb-5">
                                <div className="col-xl-6 col-12">
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
                                    <p className="recipe-card-title">Description</p>
                                    <hr/>
                                    <span className="ingredients-list mt-3">
                                        {recipe?.description}
                                    </span>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="col-12 mt-4 mb-5 ingredients-bottom-container">
                                        <span className="card-title">Ingredients</span>
                                        <ol className="ingredients-list">
                                            {recipe?.ingredients?.map(ingredient => (
                                                <li key={ingredient.ingredientId}>{ingredient.name} - {ingredient.value} {ingredient.units}</li>
                                            ))}
                                        </ol>
                                        <br/>
                                        <br/>
                                        <span className="card-title">Nutrients</span>
                                        <ol className="ingredients-list">
                                            {recipe?.nutrients?.map(nutrient => (
                                                <li key={nutrient.nutrientId}>{nutrient.name} - {nutrient.value} {nutrient.units}</li>
                                            ))}
                                        </ol>
                                    </div>
                                    <span className="recipe-card-title">Cooking Steps</span>
                                    <hr/>
                                    <ol className="ingredients-list mt-3">
                                        {recipe?.steps?.sort((a, b) => a.stepNumber - b.stepNumber).map(step => (
                                            <li key={step.stepId} className="mb-4">{step.description}</li>
                                        ))}
                                    </ol>


                                    <br/>
                                    <hr/>
                                    <br/>
                                    <SetRating onClick={updateRating} newRating={newRating}/>
                                    <br/>
                                    <hr/>
                                    <br/>
                                    <div className="row mb-4">
                                        <div className="col-12">
                                                <span className="card-title mb-auto mt-auto"
                                                      style={{fontSize: '30px'}}>Explore related reviews</span>
                                        </div>
                                    </div>

                                    {recipe?.comments.length > 0 ?
                                        <Comments recipe={recipe}
                                                  recipeId={recipeId}
                                        />
                                        :
                                        <div className="text-center">
                                            <span style={{
                                                fontSize: '16px',
                                                fontWeight: '500',
                                                fontFamily: 'Roboto'
                                            }}>There is no comments for this recipe</span>
                                        </div>

                                    }

                                    <LeaveComment
                                        onChange={handleCommentChange}
                                        onClick={sendNewCommentRequest}
                                        value={commentText}
                                    />
                                    <br/><br/><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export {RecipePage}
