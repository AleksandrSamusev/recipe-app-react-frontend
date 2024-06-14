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
import {InputLong} from "../../components/InputLong";


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
    const [step, setStep] = useState({description: "", stepNumber: 0});
    const [counter, setCounter] = useState(1);

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

    const initialImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAGQAZADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopKAForF8TeL9K8I2i3Oq3aWkTnapbksfQAVzA+O/g3/oKf+Qm/woA9Borz7/he/g3/AKCn/kJv8KP+F7+Df+gp/wCQm/woA9Borz7/AIXv4N/6Cn/kJv8ACj/he/g3/oKf+Qm/woA9Borz7/he/g3/AKCn/kJv8KP+F7+Df+gp/wCQm/woA9Borz7/AIXv4N/6Cn/kJv8ACj/he/g3/oKf+Qm/woA9Borz7/he/g3/AKCn/kJv8KP+F7+Df+gp/wCQm/woA9Borz7/AIXv4N/6Cn/kJv8ACj/he/g3/oKf+Qm/woA9Borz7/he/g3/AKCn/kJv8KP+F7+Df+gp/wCQm/woA9Borz7/AIXv4N/6Cn/kJv8ACj/he/g3/oKf+Qm/woA9Borz7/he/g3/AKCn/kJv8KP+F7+Df+gp/wCQm/woA9Borz3/AIXv4N/6Cn/kJv8ACuo8M+LtK8XW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XXtQtL7UdMtry8tCDbzTIGaIg7gVPbkZq5qmkWetWb2l/bRXds/DRTKGU/hVyigDH0Dwjo3hVZU0jTLXTllOX+zxhd31xTtd8K6T4ngWHVtOttQiXkLcRhsfTNa1FAFDSNDsNAs1tNOtIbG2XpFAgVfyFP1TSbTWrGWyvreO6tJRiSGUZVh6EVcooAx9O8I6PpOky6XZabbWunShg9rFGAjBuuR70nh/wbonhPzRo+l22mibHmfZ4wu7HTOK2aKAErI17wjo3ij7MdX0y21A2xLQm4QN5ZOMkenQflWxRQBWvtPt9StZLa6gjubeQbXjlUMrD0INZmg+CdC8LySPpGk2envJ99reIKTW5RQBn61oOn+IrM2mp2UF9bE5Mc6Bh+tR6F4Z0vwzbG30nT7fT4GOWjt4woJ/CtSigBN2K+YP2f8Aw5bax468bWuraetzZy5/d3MWUb97nuK+n9uaNtAGPp3g/RdJ0ufTbLTLW1sZ1KywQxhVcEYIIHXIpdD8I6N4atZrbStNtbC3mOZI4Iwqtxjn1rYooAw9B8EaD4XuJp9I0m006WYYke3jClhnODj3rcoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q==';
    const initialImageSmall = 'data:image/jpeg;base64,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/wB8n/Gr2jfD7w74evlvNN0i1s7lQVEsafMAeuDXRUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABWP4vTSZPDOpf26sb6OsJa6WTO0oOT0+lbFUda0Wy8RaZPp2o263dlOAJIXztYAgjOPcCgD5s1+3PiLw3rHjSa3j07Sr240+2t7EEblsY5lxJIB0z8v4fhVnW5oW+IN7cLJEdD/AOEy07e6keVvFu24kjjrjPvivbdK+FXhLRIbyKy0G0givIvJuE2lllTOdpBJ4zVqH4e+G7fw7JoSaNaLpEjbntPLyjNnO4++e/XigDkvgkkdxpXjEwtiym8R3xt2ibA8slQChHbOelcp8G/FGp678RNU0i/8Ty6laaKsyWS5I+3qZSplc9H2cL6c8dM17Rpvh/TtG0hNLsbSO009EKLBCNqgHOenrk81R0/wF4f0u402ez0qC2m05HjtZIwQY1bO4ZzyDk9c9aAPP/jNdae2pDRNLsbe48XeILQ2TXMvS3tM/M7k9ADnHuPavOvGVjaaHpvxL0ppVkuYbbRLewaQjfKiJGoKevIJ496978Q/C/wr4s1E3+r6Lb394VCedLuztHQcGppvh34auLvTLqXRbSS402NIrSVo8tEifcUHuB2z0oA8J1x0VfE1vIyDXm8Z2bRxsR5pXCbCB6Y39O2a9I+NWqX9nfeDrOz1ubQYtQ1E21xdQuFOwp78fTPQ4NdrceCdBuvEUWvTaVayaxEAEvGjHmDAwDn1A79axfiJ8P8A/hOr/wANtKLaWx0+8aa6t7kEiWMoVKgYPPPegDx7WfHHiDw/4Rv7618TTX93oOvyWFq0h3jUoSoJRwvDsuSd3sfavbvhi7TeA9GuH1STWZbiBZpL2RyxdmGTjPQA8Y7YqxY/D3w5pq6etto9tCunl2tVVeImcYZgO5I7nmtDQvD+n+GdPWx0u1Sys1ZnWGPO1STk4HbmgDRooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k='

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
        setStep({description: event.target.value, stepNumber: counter})
    }

    function handleAddStepClick() {
        if (step.description.trim() !== "") {
            (function () {
                setCounter(counter + 1);
            })();
            (function () {
                setSteps([...steps, step])
            })();
            (function () {
                setStepsInputError("")
            })();
            (function () {
                setStep({description: "", stepNumber: counter})
            })();
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
                setStepsInputError("Please, add at least one step.");
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
                        <div className="col-8 offset-2 recipe-title d-flex justify-content-center">
                            <p className="mt-auto mb-auto">Create New Recipe</p>
                        </div>
                        <div className="col-2 d-flex justify-content-center">
                            <button className="main-large-orange-save-button mt-auto mb-auto"
                                    onClick={handleRecipeSubmit}>Save
                            </button>
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
                            <InputLong placeholder='Add recipe title' long={true} onChange={handleChangeTitle}/>
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
                                        <div className="col-xl-12 offset-xl-12 col-xxl-10 offset-xxl-2 d-flex">
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
                                        <div className="col-xl-12 col-xxl-10 offset-xxl-2 d-flex">
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
                                        <div className="col-xl-12 col-xxl-10 offset-xxl-2 d-flex">
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
                                        <div className="col-xl-12 col-xxl-10 offset-xxl-2 d-flex">
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
                                <div className="col-lg-4 col-md-6">
                                    <NumerationWithTitle title='Add images' number='8'/>
                                </div>

                                {(mediumImageError || smallImage1Error || smallImage2Error || smallImage3Error || smallImage4Error) &&
                                    <div className="col-lg-8 col-md-6 d-flex align-items-center">
                                        <PiWarningCircle size={20} color="red"/>
                                        <span className="span-error"
                                              style={{marginLeft: '20px'}}>Please, add 5 images.</span>
                                    </div>
                                }
                            </div>
                            <div className="row mb-lg-4">
                                <div className="col-xl-6 col-lg-8 col-12">
                                    <ReactImagePickerEditor
                                        config={config2}
                                        imageSrcProp={initialImage}
                                        imageChanged={(data) => {
                                            setMediumImageError("")
                                            setMediumImage(data)
                                        }}
                                    />
                                </div>
                                <div className="col-lg-4 col-xl-6">
                                    <div className="row mb-3">

                                        <div className="col-6 col-lg-12 col-xl-6 col-md-4 small-image">
                                            <ReactImagePickerEditor
                                                config={config}
                                                imageSrcProp={initialImageSmall}
                                                imageChanged={(data) => {
                                                    setSmallImage1Error("")
                                                    setSmallImage1(data);
                                                }}
                                            />
                                        </div>

                                        <div className="col-lg-12 col-xl-6 col-md-4 small-image-2">
                                            <ReactImagePickerEditor
                                                config={config}
                                                imageSrcProp={initialImageSmall}
                                                imageChanged={(data) => {
                                                    setSmallImage2Error("")
                                                    setSmallImage2(data);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-xl-6 col-md-4 small-image-2">
                                            <ReactImagePickerEditor
                                                config={config}
                                                imageSrcProp={initialImageSmall}
                                                imageChanged={(data) => {
                                                    setSmallImage3Error("")
                                                    setSmallImage3(data);
                                                }}
                                            />
                                        </div>
                                        <div className="col-lg-12 col-xl-6 col-md-4 small-image">
                                            <ReactImagePickerEditor
                                                config={config}
                                                imageSrcProp={initialImageSmall}
                                                imageChanged={(data) => {
                                                    setSmallImage4Error("")
                                                    setSmallImage4(data);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row hidden-on-large d-xl-none">
                                <div className="col-4">
                                    <ReactImagePickerEditor
                                        config={config}
                                        imageSrcProp={initialImage}
                                        imageChanged={(data) => {
                                            setSmallImage4Error("")
                                            setSmallImage4(data);
                                        }}
                                    />
                                </div>
                                <div className="col-4">
                                    <ReactImagePickerEditor
                                        config={config}
                                        imageSrcProp={initialImage}
                                        imageChanged={(data) => {
                                            setSmallImage1Error("")
                                            setSmallImage1(data);
                                        }}
                                    />
                                </div>
                            </div>


                            <br/>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row mb-3">
                                        <div className="col-6 col-xl-6 d-flex">
                                            <NumerationWithTitle title='Add recipe description' number='9'/>
                                        </div>

                                        {descriptionInputError &&
                                            <div className="col-6 col-xl-6 d-flex align-items-center">
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
                                        <div className="col-6 d-flex align-items-center">
                                            <NumerationWithTitle title='Add recipe cooking steps' number='10'/>
                                        </div>
                                        {stepsInputError &&
                                            <div className="col-6 d-flex align-items-center">
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
                                                            <div className="mb-3 d-inline-flex">
                                                                <div id={step.name}
                                                                     className="d-inline-flex  align-items-center"
                                                                     onClick={handleStepDelete}>
                                                                    <TiDeleteOutline
                                                                        id={step.description}
                                                                        onClick={handleStepDelete}
                                                                        fill='black'
                                                                    />
                                                                </div>
                                                                <div className="d-inline-flex">
                                                                    <li className="ingredients-list d-flex"
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
                                                       name="steps"
                                        />
                                        <br/><br/><br/><br/><br/><br/>
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