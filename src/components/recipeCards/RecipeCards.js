import {RecipeCard} from "../recipeCard/RecipeCard";
import {useState, useEffect} from "react";
import {SearchComponent} from "../SearchComponent";
import {Pagination} from "../Pagination";
import {SpinnerLoading} from "../../utils/SpinnerLoading";

const RecipeCards = (props) => {

    const [urlAddon, setUrlAddon] = useState('');
    const [value, setValue] = useState('');
    const [recipes, setRecipes] = useState([]);

    //Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [totalAmountofItems, setTotalAmountOfItems] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);


    let url = `http://localhost:8080/api/v1/recipes/findAll?category=${props.category}&type=${props.type}&page=${currentPage - 1}&size=${itemsPerPage}` + urlAddon;

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error("Something went wrong!");
            }
           const responseJson  = await response.json();

            setTotalAmountOfItems(responseJson.totalElements);
            setTotalPages(responseJson.totalPages);
            setRecipes(responseJson.content)
            setIsLoading(false);
        };
        fetchRecipes().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, [url, currentPage]);

    function handleSearch() {
        if (value !== "") {
            let text = `${value}`;
            let trimmedText = text.trim();
            setUrlAddon(`&text=${trimmedText}`);
        }
    }

    function handleKeyPress(event) {
        if (value !== "" && event.key === 'Enter') {
            handleSearch();
            setValue("");
        }
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let lastItem = itemsPerPage * currentPage <= totalAmountofItems
        ? itemsPerPage * currentPage : totalAmountofItems;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if(isLoading) {
        return (
            <SpinnerLoading/>
        )
    }

    if(httpError) {
        return (
            <div className="container text-center" style={{marginTop: '25vh', backgroundColor: 'none'}}>
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
            <div className="container">
                <br/>
                <SearchComponent
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    onClick={handleSearch}/>
                <br/>
                <div className="row">
                    {recipes.map((item) => {
                        return (
                            <>
                                <
                                    RecipeCard
                                    key={item.recipeId}
                                    id={item.recipeId}
                                    rating={item.rating}
                                    title={item.title}
                                    description={item.description}
                                    prepareTime={item.prepareTime}
                                    cookingTime={item.cookingTime}
                                    imagePath={item.imgMedium}
                                    category={item.category}
                                    type={item.type}
                                />
                            </>

                        )
                    })}
                </div>
                {totalPages > 1 &&
                    <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate}/>
                }
            </div>
        </>
    )
}

export {RecipeCards}