import {useNavigate} from "react-router-dom";


const DishCard = (props) => {

    let navigate = useNavigate();

    function handleClick() {
        navigate(`/recipes/${props.category}/${props.type}`);
    }


    return (
        <>
            <div className="col-md-4 col-sm-12 p-sm-0 p-md-3" onClick={handleClick}>
                <img src={props.lnk} className="img-fluid card-image" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text mb-5 mb-md-0">{props.text}</p>
                </div>
            </div>
        </>
    )
}

export {DishCard}