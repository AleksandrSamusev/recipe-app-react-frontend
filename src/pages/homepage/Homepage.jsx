import {Navbar}  from "../../components/Navbar";
import {Link} from "react-router-dom";


const Homepage = () => {

    return (
        <>
            <section className="main-section">
                <Navbar/>
                <div className="col-lg-6 col-md-8 col-sm-10 col-sm-8 offset-lg-1 offset-md-0 offset-sm-1 main-card">
                    <h1 className="homepage-title">The Recipe Book</h1>
                    <div className="p-div">
                        <p className="homepage-paragraph">Explore our collection find a recipe for any occasion. Our
                            collection contains only the best,
                            proven recipes from all over the world.</p>
                    </div>
                    <Link to='/dishes' className="main-large-orange-button">Explore</Link>
                </div>
            </section>
        </>
    )
}

export {Homepage}