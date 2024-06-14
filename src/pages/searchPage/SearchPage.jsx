import {Navbar} from "../../components/Navbar";

const SearchPage = () => {
    return (
        <>
            <Navbar/>
            <div className="recipes-search-input">
                <div className="search-input-and-button">
                    <div>
                        <input type="text" className="search-input"
                               placeholder='Type something and click "Search"'/>
                    </div>
                    <div className="search-button">
                        <span className="search-button-span">Search</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export {SearchPage}