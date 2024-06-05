import {FaStar} from "react-icons/fa";
import {StarQuarterDark} from "./StarQuarterDark";
import {StarEmptyDark} from "./StarEmptyDark";
import {StarHalfDark} from "./StarHalfDark";
import {StarThreeQuartersDark} from "./StarThreeQuartersDark";
import {StarFilledDark} from "./StarFilledDark";

const RatingBlock = (props) => {

    const rat = props.rating;

    function handleRating(value) {
        if (value < 0.25) {
            return (<div><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /></div>)
        } else if (value < 0.5) {
            return (<div><StarQuarterDark /><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /></div>)
        } else if (value < 0.75) {
            return (<div><StarHalfDark /><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /></div>)
        } else if (value < 1.0) {
            return (<div><StarThreeQuartersDark /><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /></div>)
        } else if (value < 1.25) {
            return (<div><StarFilledDark /><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /></div>)
        } else if (value < 1.5) {
            return (<div><StarFilledDark /><StarQuarterDark /><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /></div>)
        } else if (value < 1.75) {
            return (<div><StarFilledDark /><StarHalfDark /><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /></div>)
        } else if (value < 2.0) {
            return (<div><StarFilledDark /><StarThreeQuartersDark /><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /></div>)
        } else if (value < 2.25) {
            return (<div><StarFilledDark /><StarFilledDark /><StarEmptyDark /><StarEmptyDark /><StarEmptyDark /></div>)
        } else if (value < 2.5) {
            return (<div><StarFilledDark /><StarFilledDark /><StarQuarterDark /><StarEmptyDark /><StarEmptyDark /></div>)
        } else if (value < 2.75) {
            return (<div><StarFilledDark /><StarFilledDark /><StarHalfDark /><StarEmptyDark /><StarEmptyDark /></div>)
        } else if (value < 3.0) {
            return (<div><StarFilledDark /><StarFilledDark /><StarThreeQuartersDark /><StarEmptyDark /><StarEmptyDark /></div>)
        } else if (value < 3.25) {
            return (<div><StarFilledDark /><StarFilledDark /><StarFilledDark /><StarEmptyDark /><StarEmptyDark /></div>)
        } else if (value < 3.5) {
            return (<div><StarFilledDark /><StarFilledDark /><StarFilledDark /><StarQuarterDark /><StarEmptyDark /></div>)
        } else if (value < 3.75) {
            return (<div className="d-inline-flex"><StarFilledDark /><StarFilledDark /><StarFilledDark /><StarHalfDark /><StarEmptyDark /></div>)
        } else if (value < 4.0) {
            return (<div><StarFilledDark /><StarFilledDark /><StarFilledDark /><StarThreeQuartersDark /><StarEmptyDark /></div>)
        } else if (value < 4.25) {
            return (<div><StarFilledDark /><StarFilledDark /><StarFilledDark /><StarFilledDark /><StarEmptyDark /></div>)
        } else if (value < 4.5) {
            return (<div><StarFilledDark /><StarFilledDark /><StarFilledDark /><StarFilledDark /><StarQuarterDark /></div>)
        } else if (value < 4.75) {
            return (<div><StarFilledDark /><StarFilledDark /><StarFilledDark /><StarFilledDark /><StarHalfDark /></div>)
        } else if (value < 5.0) {
            return (<div><StarFilledDark /><StarFilledDark /><StarFilledDark /><StarFilledDark /><StarThreeQuartersDark /></div>)
        } else {
            return (<div><StarFilledDark /><StarFilledDark /><StarFilledDark /><StarFilledDark /><StarFilledDark /></div>)
        }
    }

    return (
        <div className="row"
             style={{ borderRadius: '10px', backgroundColor: '#343434', paddingBottom: '15px'}}>
            <div className="col-9">
                <div className="row d-inline-flex mb-2">
                    <span className="description-title"
                          style={{marginLeft: '15px', color: '#EFEFEF', fontWeight: '400'}}>Recipe Rating</span>
                </div>
                <div className="row d-inline-flex">
                    <div style={{marginLeft: '15px'}}>
                        {handleRating(props.rating)}
                    </div>
                </div>
            </div>
            <div className="col-3 d-flex justify-content-start align-items-center">
                <span className="rating-span" style={{color: '#EFEFEF'}}>{rat}</span>
            </div>
        </div>
    )
}

export {RatingBlock}