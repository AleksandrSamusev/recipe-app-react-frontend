import {DishCard} from "../dishCard/DishCard";
import beefImage from '../../images/mainDishes/beef-mainDish-800x600.jpg'
import fishImage from '../../images/mainDishes/fish3-mainDish-800x600.jpg'
import veganImage from '../../images/mainDishes/vegetarians2-mainDish-800x600.jpg'
import lineImage from '../../images/line-130x5.png'
import {DishCardTitle} from "../dishCardTitle/DishCardTitle";
import beefSalad from '../../images/salads/meatSalad-800x600.jpg'
import seafoodSalad from '../../images/salads/seafoodSalad-800x600.jpg'
import vegetarianSalad from '../../images/salads/vegeterianSalad-800x600.jpg'
import beefSoup from '../../images/soups/meatSoup-800x600.jpg'
import seafoodSoup from '../../images/soups/seafoodSoup-800x600.jpg'
import vegeterianSoup from '../../images/soups/vegeterianSoup-800x600.jpg'
import cake from '../../images/desserts/cake-800x600.jpg'
import cookie from '../../images/desserts/cookie-800x600.jpg'
import iceCream from '../../images/desserts/icecream-800x600.jpg'
import alcoholBeverage from '../../images/beverages/whiskey-800x600.jpg'
import nonAlcoholBeverage from '../../images/beverages/nonAlcohol-800x600.jpg'
import hotBeverage from '../../images/beverages/hotBeverages-800x600.jpg'

const DishCards = () => {
    return (
        <>
            <div className="container">
                <DishCardTitle lineImage={lineImage} sectionTitle='MAIN DISHES'/>
                <div className="row mt-5">
                    <DishCard lnk={beefImage}
                              cardTitle='Meat Dishes'
                              text="The collection of the most delicious main dishes with meat and bird recipes"
                              category="main"
                              type="meat"
                    />

                    <DishCard lnk={fishImage}
                              cardTitle='Fish And Seafood'
                              text="The collection of the most delicious main dishes with seafood recipes"
                              category="main"
                              type="seafood"
                    />
                    <DishCard lnk={veganImage}
                              cardTitle='Vegetarian Dishes'
                              text="The collection of the most delicious main dishes for vegetarians recipes"
                              category="main"
                              type="vegetarian"
                    />
                </div>

                <DishCardTitle lineImage={lineImage} sectionTitle='SALADS'/>
                <div className="row  mt-5">
                    <DishCard lnk={beefSalad}
                              cardTitle='Salads With Meat'
                              text="The collection of the most delicious salads with meat recipes"
                              category="salads"
                              type="meat"
                    />
                    <DishCard lnk={seafoodSalad}
                              cardTitle='Seafood Salads'
                              text="The collection of the most delicious seafood salads recipes"
                              category="salads"
                              type="seafood"
                    />
                    <DishCard lnk={vegetarianSalad}
                              cardTitle='Salads For Vegetarians'
                              text="The collection of the most delicious salads for vegetarians recipes"
                              category="salads"
                              type="vegetarian"
                    />
                </div>

                <DishCardTitle lineImage={lineImage} sectionTitle='SOUPS'/>
                <div className="row mt-5">
                    <DishCard lnk={beefSoup}
                              cardTitle='Soups With Meat'
                              text="The collection of the most delicious soups with meat recipes"
                              category="soups"
                              type="meat"
                    />
                    <DishCard lnk={seafoodSoup}
                              cardTitle='Seafood Soups'
                              text="The collection of the most delicious seafood soups recipes"
                              category="soups"
                              type="seafood"
                    />
                    <DishCard lnk={vegeterianSoup}
                              cardTitle='Soups For Vegetarians'
                              text="The collection of the most delicious soups for vegetarians recipes"
                              category="soups"
                              type="vegetarian"
                    />
                </div>

                <DishCardTitle lineImage={lineImage} sectionTitle='DESSERTS'/>
                <div className="row mt-5">
                    <DishCard lnk={cake}
                              cardTitle='Cakes And Pies'
                              text="The collection of the most delicious cake recipes"
                              category="desserts"
                              type="cakes"
                    />
                    <DishCard lnk={cookie}
                              cardTitle='Sweet Pastries'
                              text="The collection of the most delicious sweet pastries recipes"
                              category="desserts"
                              type="pastries"
                    />
                    <DishCard lnk={iceCream}
                              cardTitle='Ice Cream'
                              text="The collection of the most delicious ice cream recipes"
                              category="desserts"
                              type="icecream"
                    />
                </div>

                <DishCardTitle lineImage={lineImage} sectionTitle='BEVERAGES'/>
                <div className="row mt-5">
                    <DishCard lnk={alcoholBeverage}
                              cardTitle='Alcohol Beverages'
                              text="The collection of the most delicious recipes of alcohol beverages recipes"
                              category="beverages"
                              type="alcohol"
                    />
                    <DishCard lnk={nonAlcoholBeverage}
                              cardTitle='Non-Alcohol Beverages'
                              text="The collection of the most delicious non-alcohol beverages recipes"
                              category="beverages"
                              type="nonalcohol"
                    />
                    <DishCard lnk={hotBeverage}
                              cardTitle='Hot Beverages'
                              text="The collection of the most delicious hot beverages recipes"
                              category="beverages"
                              type="hot"
                    />
                </div>
            </div>
        </>
    )
}

export {DishCards}