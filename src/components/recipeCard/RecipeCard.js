import {FaStar} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const RecipeCard = (props) => {

    const style = {color: "#FFBA54"}
    const styleGray = {color: "#CBCBCB"}

    let navigate = useNavigate();

    function handleClick() {
        navigate(`/recipes/${props.category}/${props.type}/recipe/${props.id}`);
    }

    function handleRating(value) {
        value= value.toString();
        if (value === '1') {
            return (<div><FaStar size={27} style={style}/><FaStar size={27} style={styleGray}/>
                <FaStar size={27} style={styleGray}/><FaStar size={27} style={styleGray}/><FaStar size={27}
                                                                                                  style={styleGray}/>
            </div>)
        } else if (value === '2') {
            return (<div><FaStar size={27} style={style}/><FaStar size={27} style={style}/>
                <FaStar size={27} style={styleGray}/><FaStar size={27} style={styleGray}/><FaStar size={27}
                                                                                                  style={styleGray}/>
            </div>)
        } else if (value === '3') {
            return (<div><FaStar size={27} style={style}/><FaStar size={27} style={style}/>
                <FaStar size={27} style={style}/><FaStar size={27} style={styleGray}/><FaStar size={27}
                                                                                              style={styleGray}/></div>)
        } else if (value === '4') {
            return (<div><FaStar size={27} style={style}/><FaStar size={27} style={style}/>
                <FaStar size={27} style={style}/><FaStar size={27} style={style}/><FaStar size={27} style={styleGray}/>
            </div>)
        } else if (value === '5') {
            return (<div><FaStar size={27} style={style}/><FaStar size={27} style={style}/>
                <FaStar size={27} style={style}/><FaStar size={27} style={style}/><FaStar size={27} style={style}/>
            </div>)
        } else {
            return (<div><FaStar size={27} style={styleGray}/><FaStar size={27} style={styleGray}/><FaStar size={27}
                                                                                                           style={styleGray}/>
                <FaStar size={27} style={styleGray}/><FaStar size={27} style={styleGray}/></div>)
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