import {Navbar} from "../../components/Navbar";

import ReactImagePickerEditor, {ImagePickerConf} from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'
import {useState} from "react";
import {NumerationWithTitle} from "../../components/numerationWithTitle/NumerationWithTitle";
import {InputWithPlus} from "../../components/inputWithPlus/InputWithPlus";
import {TextAreaWithPlus} from "../../components/textareaWithPlus/TextAreaWithPlus";
import {TiDeleteOutline} from "react-icons/ti";
import {useNavigate} from "react-router-dom";
import {getToken} from "../../service/AuthService";
import {CustomInput} from "../../components/CustomInput";
import {PiWarningCircle} from "react-icons/pi";


const CreateRecipePage = () => {

    const navigate = useNavigate();

    const options1 = [
        {id: 1, value: "meat", label: "Meat"},
        {id: 2, value: "seafood", label: "Seafood"},
        {id: 3, value: "vegetarian", label: "Vegetarian"}
    ]
    const options2 = [
        {id: 1, value: "cakes", label: "Cakes"},
        {id: 2, value: "pastries", label: "Pastries"},
        {id: 3, value: "icecream", label: "Ice-cream"}
    ]
    const options3 = [
        {id: 1, value: "alcohol", label: "Alcoholic"},
        {id: 2, value: "nonalcohol", label: "Non-alcoholic"},
        {id: 3, value: "hot", label: "Hot"}
    ]

    const [mediumImage, setMediumImage] = useState("");
    const [smallImage1, setSmallImage1] = useState("");
    const [smallImage2, setSmallImage2] = useState("");
    const [smallImage3, setSmallImage3] = useState("");
    const [smallImage4, setSmallImage4] = useState("");
    const [recipeTitle, setRecipeTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [prepareTime, setPrepareTime] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [nutrients, setNutrients] = useState([]);
    const [category, setCategory] = useState("");
    const [steps, setSteps] = useState([]);
    const [type, setType] = useState("");
    const [ingredient, setIngredient] = useState({name: "", value: "", units: ""});
    const [nutrient, setNutrient] = useState({name: "", value: "", units: ""});
    const [step, setStep] = useState({description: "", stepNumber: null});

    //Errors states

    const [titleInputError, setTitleInputError] = useState("");
    const [ingredientsInputError, setIngredientsInputError] = useState("");
    const [nutrientsInputError, setNutrientsInputError] = useState("");
    const [prepareTimeInputError, setPrepareTimeInputError] = useState("");
    const [cookingTimeInputError, setCookingTimeInputError] = useState("");
    const [descriptionInputError, setDescriptionInputError] = useState("");
    const [stepsInputError, setStepsInputError] = useState("");
    const [categoryInputError, setCategoryInputError] = useState("");
    const [typeInputError, setTypeInputError] = useState("");

    //Images states
    const [mediumImageError, setMediumImageError] = useState("");
    const [smallImage1Error, setSmallImage1Error] = useState("");
    const [smallImage2Error, setSmallImage2Error] = useState("");
    const [smallImage3Error, setSmallImage3Error] = useState("");
    const [smallImage4Error, setSmallImage4Error] = useState("");


    const config: ImagePickerConf = {
        borderRadius: '8px',
        language: 'en',
        width: '164px',
        height: '164px',
        objectFit: 'contain',
        compressInitial: null
    };

    const config2: ImagePickerConf = {
        borderRadius: '8px',
        language: 'en',
        width: '400px',
        height: '400px',
        objectFit: 'contain',
        compressInitial: null,
    };

    const initialImage = '';

    function handleIngredientChange(event) {
        setIngredient({name: event.target.value, value: "", units: ""})
    }

    function handleAddIngredientClick() {
        if (ingredient.name.trim() !== "") {
            setIngredients(array => [...array, ingredient])
            setIngredient({name: "", value: "", units: ""})
            setIngredientsInputError("");
        }
    }

    function handleNutrientChange(event) {
        setNutrient({name: event.target.value, value: "", units: ""})
    }

    function handleAddNutrientClick() {
        if (nutrient.name.trim() !== "") {
            setNutrients(array => [...array, nutrient])
            setNutrient({name: "", value: "", units: ""})
            setNutrientsInputError("");
        }
    }

    function handleStepChange(event) {
        setStep({description: event.target.value, stepNumber: 1})
    }

    function handleAddStepClick() {
        if (step.description.trim() !== "") {
            setSteps(array => [...array, step])
            setStep({description: "", stepNumber: null})
            setStepsInputError("")
        }
    }

    function handleChangeTitle(event) {
        setTitleInputError("");
        setRecipeTitle(event.target.value);
    }

    function handleChangeDescription(event) {
        setDescriptionInputError("")
        setDescription(event.target.value);
    }


    function handleRecipeSubmit() {

        if (recipeTitle.trim() === "" || ingredients.length === 0 || nutrients.length === 0
            || prepareTime.trim() === "" || cookingTime.trim() === "" || description.trim() === ""
            || steps.length === 0 || category === "" || type === "" || mediumImage === null
            || smallImage1 === null || smallImage2 === null || smallImage3 === null || smallImage4 === null
        ) {

            if (recipeTitle.trim() === "") {
                setTitleInputError("Please, add recipe title.");
            }
            if (ingredients.length === 0) {
                setIngredientsInputError("Please, add at least one ingredient.");
            }
            if (nutrients.length === 0) {
                setNutrientsInputError("Please, add at least one nutrient.")
            }
            if (prepareTime.trim() === "") {
                setPrepareTimeInputError("Please, add prepare time.");
            }
            if (cookingTime.trim() === "") {
                setCookingTimeInputError("Please, add cooking time.");
            }
            if (description.trim() === "") {
                setDescriptionInputError("Please, add recipe description.");
            }
            if (steps.length === 0) {
                setStepsInputError("Please, add at least one cooking step.");
            }
            if (category === "") {
                setCategoryInputError("Please, select recipe category.");
            }
            if (type === "") {
                setTypeInputError("Please, select recipe type.")
            }
            if (mediumImage === null) {
                setMediumImageError("Please, add 5 images")
            }
            if (smallImage1 === null) {
                setSmallImage1Error("Please, add 5 images")
            }
            if (smallImage2 === null) {
                setSmallImage2Error("Please, add 5 images")
            }
            if (smallImage3 === null) {
                setSmallImage3Error("Please, add 5 images")
            }
            if (smallImage4 === null) {
                setSmallImage4Error("Please, add 5 images")
            }
        } else {
            const url = "http://localhost:8080/api/v1/recipes";
            let recipe =
                {
                    "category": category,
                    "type": type,
                    "mainIngredient": "DUMMY_DATA",
                    "title": recipeTitle,
                    "description": description,
                    "rating": 0,
                    "prepareTime": prepareTime,
                    "cookingTime": cookingTime,
                    "imgLarge": mediumImage,
                    "imgMedium": mediumImage,
                    "imgSmall1": smallImage1,
                    "imgSmall2": smallImage2,
                    "imgSmall3": smallImage3,
                    "imgSmall4": smallImage4,
                    "ingredients": ingredients,
                    "nutrients": nutrients,
                    "steps": steps
                }

            const requestOptions = {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getToken()
                },
                body: JSON.stringify(recipe)
            };

            fetch(url, requestOptions)
                .then((response) => response.json())
                .then(data => console.log(data))
                .catch((err) => {
                    console.log(err.message);
                });
            alert('Recipe created successfully')
            navigate("/dishes");

        }
    }

    function handleIngredientDelete(event) {
        const id = event.target.id;
        setIngredients(ingredients.filter(ingredient => ingredient.name !== id))
    }

    function handleNutrientDelete(event) {
        const id = event.target.id;
        setNutrients(nutrients.filter(nutrient => nutrient.name !== id))
    }

    function handleStepDelete(event) {
        const id = event.target.id;
        setSteps(steps.filter(step => step.description !== id))
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            if (event.target.name === "nutrients") {
                handleAddNutrientClick();
            } else if (event.target.name === "ingredients") {
                handleAddIngredientClick();
            } else if (event.target.name === "steps") {
                handleAddStepClick();
            }
        }
    }

    return (
        <>
            <section className="main-page-section">
                <Navbar/>
                <div className="container main-recipe-container">
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-8 offset-2 recipe-title">
                            <p>Create New Recipe</p>
                        </div>
                        <div className="col-2">
                            <button className="main-large-orange-save-button" onClick={handleRecipeSubmit}>Save</button>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-4 mt-auto mb-auto">
                            <NumerationWithTitle title='Select recipe category' number='1'/>
                        </div>
                        <div className="col-8 d-flex align-items-center">
                            <select className="category-select"
                                    name="categories"
                                    onChange={e => {
                                        setCategory(e.target.value);
                                        setCategoryInputError("");
                                    }}
                                    value={category}>
                                <option value=""> - select category -</option>
                                <option value="main">Main</option>
                                <option value="soups">Soups</option>
                                <option value="salads">Salads</option>
                                <option value="desserts">Desserts</option>
                                <option value="beverages">Beverages</option>
                            </select>

                            {categoryInputError &&
                                <div style={{paddingLeft: '30px'}}
                                     className="d-flex justify-content-start align-items-center">
                                    <PiWarningCircle size={20} color="red"/>
                                    <span className="span-error"
                                          style={{marginLeft: '20px'}}>{categoryInputError}</span>
                                </div>
                            }


                        </div>
                    </div>
                    <br/>

                    <div className="row">
                        <div className="col-4 mt-auto mb-auto">
                            <NumerationWithTitle title='Select recipe type' number='2'/>
                        </div>
                        <div className="col-8 d-flex">
                            <select className="category-select" name="types" value={type}
                                    onChange={e => {
                                        setType(e.target.value);
                                        setTypeInputError("");
                                    }}>
                                <option value=""> - select category -</option>
                                {category === 'main' || category === 'soups' || category === 'salads' ?
                                    options1.map(option => {
                                        return (<>

                                                <option key={option.id} value={option.value}>{option.label}</option>
                                            </>
                                        )
                                    })
                                    :
                                    category === 'desserts' ?
                                        options2.map(option => {
                                            return (
                                                <option key={option.id} value={option.value}>{option.label}</option>
                                            )
                                        })
                                        :
                                        category === 'beverages' ?
                                            options3.map(option => {
                                                return (
                                                    <option key={option.id} value={option.value}>{option.label}</option>
                                                )
                                            })
                                            :
                                            null
                                }
                            </select>
                            {typeInputError &&
                                <div style={{paddingLeft: '30px'}}
                                     className="d-flex justify-content-start align-items-center">
                                    <PiWarningCircle size={20} color="red"/>
                                    <span className="span-error"
                                          style={{marginLeft: '20px'}}>{typeInputError}</span>
                                </div>
                            }

                        </div>
                    </div>
                    <br/>

                    <div className="row">
                        <div className="col-4 mt-auto mb-auto">
                            <NumerationWithTitle title='Add recipe title' number='3'/>
                        </div>
                        <div className="col-8">
                            <InputWithPlus placeholder='Add recipe title' long={true} onChange={handleChangeTitle}/>
                        </div>
                    </div>

                    {titleInputError &&
                        <div className="row">
                            <div className="col-8 offset-4">
                                <div className="d-flex justify-content-start align-items-center mt-4">
                                    <PiWarningCircle size={20} color="red"/>
                                    <span className="span-error"
                                          style={{marginLeft: '20px'}}>{titleInputError}</span>
                                </div>
                            </div>
                        </div>
                    }

                    <br/>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-4 ingredients-container">
                            <NumerationWithTitle title='Add ingredients' number='4'/>
                            <div className="mt-4">
                                <ul className="ingredients-list">
                                    {
                                        ingredients.map((ingredient, index) => {
                                            return (
                                                <div className="row mb-1">
                                                    <div className="col-12">
                                                        <div id={ingredient.name} className="d-inline"
                                                             onClick={handleIngredientDelete}>
                                                            <TiDeleteOutline
                                                                id={ingredient.name}
                                                                onClick={handleIngredientDelete}/>
                                                        </div>
                                                        <li className="ingredients-list d-inline"
                                                            style={{paddingLeft: '30px'}}
                                                            key={index}>{ingredient.name}
                                                        </li>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </ul>
                                <InputWithPlus placeholder='Add ingredient'
                                               onChange={handleIngredientChange}
                                               onClick={handleAddIngredientClick}
                                               onKeyDown={handleKeyPress}
                                               value={ingredient.name}
                                               name="ingredients"/>
                                {
                                    ingredientsInputError &&
                                    <div className="row">
                                        <div className="col-10 offset-2 d-flex">
                                            <div className="d-flex justify-content-start align-items-center mt-4">
                                                <PiWarningCircle size={20} color="red"/>
                                                <span className="span-error"
                                                      style={{marginLeft: '20px'}}>{ingredientsInputError}</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>

                            <br/>
                            <br/>

                            <NumerationWithTitle title='Add nutrients' number='5'/>
                            <div className="mt-4">
                                <ul className="ingredients-list">
                                    {
                                        nutrients != null ?
                                            nutrients.map((nutrient, index) => {
                                                return (
                                                    <div className="row mb-1">
                                                        <div className="col-12">
                                                            <div id={nutrient.name} className="d-inline"
                                                                 onClick={handleNutrientDelete}>
                                                                <TiDeleteOutline
                                                                    id={nutrient.name}
                                                                    onClick={handleNutrientDelete}/>
                                                            </div>
                                                            <li className="ingredients-list d-inline"
                                                                style={{paddingLeft: '30px'}}
                                                                key={index}>{nutrient.name}
                                                            </li>
                                                        </div>
                                                    </div>
                                                )
                                            }) : null
                                    }
                                </ul>
                                <InputWithPlus placeholder='Add nutrient'
                                               onChange={handleNutrientChange}
                                               onClick={handleAddNutrientClick}
                                               onKeyDown={handleKeyPress}
                                               value={nutrient.name}
                                               name="nutrients"/>

                                {nutrientsInputError &&
                                    <div className="row">
                                        <div className="col-10 offset-2 d-flex">
                                            <div className="d-flex justify-content-start align-items-center mt-4">
                                                <PiWarningCircle size={20} color="red"/>
                                                <span className="span-error"
                                                      style={{marginLeft: '20px'}}>{nutrientsInputError}</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>

                            <br/>
                            <br/>


                            <NumerationWithTitle title='Add prepare time' number='6'/>
                            <div className="mt-4">
                                <CustomInput
                                    name='password'
                                    value={prepareTime}
                                    placeholder="Add prepare time"
                                    onChange={e => {
                                        setPrepareTime(e.target.value)
                                        setPrepareTimeInputError("")
                                    }}/>

                                {prepareTimeInputError &&
                                    <div className="row">
                                        <div className="col-10 offset-2 d-flex">
                                            <div className="d-flex justify-content-start align-items-center mt-4">
                                                <PiWarningCircle size={20} color="red"/>
                                                <span className="span-error"
                                                      style={{marginLeft: '20px'}}>{prepareTimeInputError}</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>

                            <br/>
                            <br/>
                            <br/>

                            <NumerationWithTitle title='Add cooking time' number='7'/>
                            <div className="mt-4">
                                <CustomInput
                                    name='password'
                                    value={cookingTime}
                                    placeholder="Add cooking time"
                                    onChange={e => {
                                        setCookingTime(e.target.value)
                                        setCookingTimeInputError("")
                                    }}/>
                                {cookingTimeInputError &&
                                    <div className="row">
                                        <div className="col-10 offset-2 d-flex">
                                            <div className="d-flex justify-content-start align-items-center mt-4">
                                                <PiWarningCircle size={20} color="red"/>
                                                <span className="span-error"
                                                      style={{marginLeft: '20px'}}>{cookingTimeInputError}</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-md-8 col-12">
                            <div className="row mb-4 d-flex align-items-center">
                                <div className="col-3">
                                    <NumerationWithTitle title='Add images' number='8'/>
                                </div>

                                {(mediumImageError || smallImage1Error || smallImage2Error || smallImage3Error || smallImage4Error) &&
                                    <div className="col-9 d-flex align-items-center">
                                        <PiWarningCircle size={20} color="red"/>
                                        <span className="span-error"
                                              style={{marginLeft: '20px'}}>Please, add 5 images.</span>
                                    </div>
                                }
                            </div>
                            <div className="row mb-5">
                                <div className="col-lg-6 col-12">
                                    <ReactImagePickerEditor
                                        config={config2}
                                        imageSrcProp={initialImage}
                                        imageChanged={(data) => {
                                            setMediumImageError("")
                                            setMediumImage(data)
                                        }}
                                    />
                                </div>
                                <div className="col-6">
                                    <div className="row mb-4">
                                        <div className="col-6">
                                            <ReactImagePickerEditor
                                                config={config}
                                                imageSrcProp={initialImage}
                                                imageChanged={(data) => {
                                                    setSmallImage1Error("")
                                                    setSmallImage1(data);
                                                }}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <ReactImagePickerEditor
                                                config={config}
                                                imageSrcProp={initialImage}
                                                imageChanged={(data) => {
                                                    setSmallImage2Error("")
                                                    setSmallImage2(data);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <ReactImagePickerEditor
                                                config={config}
                                                imageSrcProp={initialImage}
                                                imageChanged={(data) => {
                                                    setSmallImage3Error("")
                                                    setSmallImage3(data);
                                                }}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <ReactImagePickerEditor
                                                config={config}
                                                imageSrcProp={initialImage}
                                                imageChanged={(data) => {
                                                    setSmallImage4Error("")
                                                    setSmallImage4(data);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row mb-3">
                                        <div className="col-5 d-flex">
                                            <NumerationWithTitle title='Add recipe description' number='9'/>
                                        </div>

                                        {descriptionInputError &&
                                            <div className="col-7 d-flex align-items-center">
                                                <PiWarningCircle size={20} color="red"/>
                                                <span className="span-error"
                                                      style={{marginLeft: '20px'}}>{descriptionInputError}</span>
                                            </div>
                                        }
                                    </div>

                                    <br/>
                                    <TextAreaWithPlus onChange={handleChangeDescription}/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="row">
                                        <div className="col-12 mt-4 mb-5 ingredients-bottom-container">
                                            <span className="card-title">Ingredients:</span>
                                            <ul className="ingredients-list">
                                                <li>item</li>
                                            </ul>
                                            <br/>
                                            <br/>
                                            <span className="card-title">Nutrition:</span>
                                            <ul className="ingredients-list">
                                                <li>item</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-5 d-flex align-items-center">
                                            <NumerationWithTitle title='Add recipe cooking steps' number='10'/>
                                        </div>
                                        {stepsInputError &&
                                            <div className="col-7 d-flex align-items-center">
                                                <PiWarningCircle size={20} color="red"/>
                                                <span className="span-error"
                                                      style={{marginLeft: '20px'}}>{stepsInputError}</span>
                                            </div>
                                        }
                                    </div>

                                    <br/>
                                    <div className="mt-4">
                                        <ol className="ingredients-list">
                                            {
                                                steps != null ?
                                                    steps.map((step, index) => {
                                                        return (
                                                            <div className="row mb-5">
                                                                <div className="col-12">
                                                                    <div id={step.name} className="d-inline-flex "
                                                                         onClick={handleStepDelete}>
                                                                        <TiDeleteOutline
                                                                            id={step.description}
                                                                            onClick={handleStepDelete}/>
                                                                    </div>
                                                                    <li className="ingredients-list d-inline"
                                                                        style={{paddingLeft: '30px'}}
                                                                        key={index}>{step.description}
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        )
                                                    }) : null
                                            }
                                        </ol>
                                        <InputWithPlus placeholder='Add step' long={true}
                                                       onChange={handleStepChange}
                                                       onClick={handleAddStepClick}
                                                       onKeyDown={handleKeyPress}
                                                       value={step.description}
                                                       name="steps"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export {CreateRecipePage}