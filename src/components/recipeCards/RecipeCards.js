import {RecipeCard} from "../recipeCard/RecipeCard";
import {useState, useEffect} from "react";
import {SearchComponent} from "../SearchComponent";
import {Pagination} from "../Pagination";

const RecipeCards = (props) => {

    const [urlAddon, setUrlAddon] = useState('');
    const [value, setValue] = useState('');
    const [recipes, setRecipes] = useState([]);

    //Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [totalAmountofItems, setTotalAmountOfItems] = useState(0);
    const [totalPages, setTotalPages] = useState(0);


    let url = `http://localhost:8080/api/v1/recipes/findAll?category=${props.category}&type=${props.type}&page=${currentPage - 1}&size=${itemsPerPage}` + urlAddon;
    useEffect(() => {
        fetch(url)
            .then(res => {

                return res.json();
            })
            .then(data => {
                setTotalAmountOfItems(data.totalElements);
                setTotalPages(data.totalPages);
                setRecipes(data.content)
            });
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
                                    RecipeCard id={item.recipeId}
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