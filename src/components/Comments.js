import {RecipeReview} from "./RecipeReview";
import {Pagination} from "./Pagination";
import {useEffect, useState} from "react";

const Comments = (props) => {

    const [comments, setComments] = useState([]);

    //Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [totalAmountOfItems, setTotalAmountOfItems] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    let url = `http://localhost:8080/api/v1/comments/recipes/${props.recipeId}?page=${currentPage - 1}&size=${itemsPerPage}`;
    useEffect(() => {
        fetch(url)
            .then(res => {

                return res.json();
            })
            .then(data => {
                setTotalAmountOfItems(data.totalElements);
                setTotalPages(data.totalPages);
                setComments(data.content)
            });
    }, [url, currentPage, props.recipe]);

    function reformatDate(value) {
        const arr = value.split(".");
        const splittedDate = arr[0];
        return splittedDate.replace("T", " ");
    }


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let lastItem = itemsPerPage * currentPage <= totalAmountOfItems
        ? itemsPerPage * currentPage : totalAmountOfItems;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <br/>
            {comments?.map(comment => {
                    return (
                        <RecipeReview
                            key={comment.commentId}
                            date={reformatDate(comment.date)}
                            text={comment.comment}
                            author={comment.author}/>
                    )
                })
            }
            {totalPages > 1 &&
                <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate}/>
            }
            <br/>
        </>
    )
}

export {Comments}