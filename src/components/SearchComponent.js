
const SearchComponent = (props) => {

    return (
        <>
            <div className="row search-input-and-button d-flex justify-content-end mt-3 mb-3">
                <div className="col-11">
                    <input type="text"
                           value={props.value}
                           className="search-input w-100"
                           placeholder='Type something and click "Search"'
                           onKeyDown ={props.onKeyDown}
                           onChange={props.onChange}/>
                </div>
                <div className="col-1 search-button">
                    <span className="search-button-span" onClick={props.onClick}>Search</span>
                </div>
            </div>
        </>
    )
}

export {SearchComponent}