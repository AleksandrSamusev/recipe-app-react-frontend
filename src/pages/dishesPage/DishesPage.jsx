import {Navbar} from "../../components/Navbar";
import {DishCards} from "../../components/dishCards/DishCards";

const DishesPage = () => {
    return (
        <>
            <section className="main-page-section">
                <Navbar />
                <DishCards />
            </section>
        </>

    )
}

export {DishesPage}