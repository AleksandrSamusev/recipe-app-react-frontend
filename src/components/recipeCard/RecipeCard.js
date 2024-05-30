import {useNavigate} from "react-router-dom";
import {StarEmptyLight} from "../star-light/StarEmptyLight";
import {StarQuarterLight} from "../star-light/StarQuarterLight";
import {StarHalfLight} from "../star-light/StarHalfLight";
import {StarThreeQuartersLight} from "../star-light/StarThreeQuartersLight";
import {StarFilledLight} from "../star-light/StarFilledLight";

const RecipeCard = (props) => {

    let navigate = useNavigate();

    function handleClick() {
        navigate(`/recipes/${props.category}/${props.type}/recipe/${props.id}`);
    }

    function handleRating(value) {
        //value= value?.toString();
        if (value < 0.25) {
            return (<div><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /></div>)
        } else if (value < 0.5) {
            return (<div><StarQuarterLight /><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /></div>)
        } else if (value < 0.75) {
            return (<div><StarHalfLight /><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /></div>)
        } else if (value < 1.0) {
            return (<div><StarThreeQuartersLight /><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /></div>)
        } else if (value < 1.25) {
            return (<div><StarFilledLight /><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /></div>)
        } else if (value < 1.5) {
            return (<div><StarFilledLight /><StarQuarterLight /><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /></div>)
        } else if (value < 1.75) {
            return (<div><StarFilledLight /><StarHalfLight /><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /></div>)
        } else if (value < 2.0) {
            return (<div><StarFilledLight /><StarThreeQuartersLight /><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /></div>)
        } else if (value < 2.25) {
            return (<div><StarFilledLight /><StarFilledLight /><StarEmptyLight /><StarEmptyLight /><StarEmptyLight /></div>)
        } else if (value < 2.5) {
            return (<div><StarFilledLight /><StarFilledLight /><StarQuarterLight /><StarEmptyLight /><StarEmptyLight /></div>)
        } else if (value < 2.75) {
            return (<div><StarFilledLight /><StarFilledLight /><StarHalfLight /><StarEmptyLight /><StarEmptyLight /></div>)
        } else if (value < 3.0) {
            return (<div><StarFilledLight /><StarFilledLight /><StarThreeQuartersLight /><StarEmptyLight /><StarEmptyLight /></div>)
        } else if (value < 3.25) {
            return (<div><StarFilledLight /><StarFilledLight /><StarFilledLight /><StarEmptyLight /><StarEmptyLight /></div>)
        } else if (value < 3.5) {
            return (<div><StarFilledLight /><StarFilledLight /><StarFilledLight /><StarQuarterLight /><StarEmptyLight /></div>)
        } else if (value < 3.75) {
            return (<div className="d-inline-flex"><StarFilledLight /><StarFilledLight /><StarFilledLight /><StarHalfLight /><StarEmptyLight /></div>)
        } else if (value < 4.0) {
            return (<div><StarFilledLight /><StarFilledLight /><StarFilledLight /><StarThreeQuartersLight /><StarEmptyLight /></div>)
        } else if (value < 4.25) {
            return (<div><StarFilledLight /><StarFilledLight /><StarFilledLight /><StarFilledLight /><StarEmptyLight /></div>)
        } else if (value < 4.5) {
            return (<div><StarFilledLight /><StarFilledLight /><StarFilledLight /><StarFilledLight /><StarQuarterLight /></div>)
        } else if (value < 4.75) {
            return (<div><StarFilledLight /><StarFilledLight /><StarFilledLight /><StarFilledLight /><StarHalfLight /></div>)
        } else if (value < 5.0) {
            return (<div><StarFilledLight /><StarFilledLight /><StarFilledLight /><StarFilledLight /><StarThreeQuartersLight /></div>)
        } else {
            return (<div><StarFilledLight /><StarFilledLight /><StarFilledLight /><StarFilledLight /><StarFilledLight /></div>)
        }
    }

    return (
        <>
            <div className="recipe-card col-md-4 col-sm-12 p-md-3 p-lg-4 p-xl-4" onClick={handleClick}>
                <img src={props.imagePath} className="img-fluid card-image" alt=""/>
                <div className="rating-stars-div">{handleRating(props.rating)}</div>
                <div className="card-body">
                    <h5 className="recipe-card-title">{props.title}</h5>
                    <p className="recipe-card-text">{props.description.slice(0, 120) + '...'}</p>
                    <p className="recipe-card-text">prep. - {props.prepareTime}</p>
                    <p className="recipe-card-text">cooking - {props.cookingTime}</p>
                </div>
            </div>
        </>
    )
}

export {RecipeCard}