import {Navbar} from "../../components/Navbar";
import {FaArrowCircleLeft} from "react-icons/fa";
import {useLocation, useNavigate} from "react-router-dom";
import {RecipeCards} from "../../components/recipeCards/RecipeCards";

const RecipesPage = () => {

    window.scrollTo(0, 0);
    let location = useLocation();
    let navigate = useNavigate();
    const path = location.pathname;
    const category = path.split("/")[2];
    const type = path.split("/")[3];

    function handleArrowClick() {
        navigate('/dishes');
    }

    return (
        <>
            <section className="main-page-section">
                <Navbar/>
                <br/>
                <FaArrowCircleLeft size={42} className="arrow-left" onClick={handleArrowClick}/>
                <RecipeCards category={category} type={type}/>
            </section>
        </>
    )
}

export {RecipesPage}