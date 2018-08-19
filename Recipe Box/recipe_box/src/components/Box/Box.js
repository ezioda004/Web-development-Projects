import React, { Component } from 'react';

import  Recipe from '../Recipe/Recipe'; 
import './Box.css';

//Template recipes
const localRecipes = {
    recipes: 
    [   
        {
            recipe_title : "Mexican chicken burger",
            recipe_image : "https://images.pexels.com/photos/161519/abstract-barbecue-barbeque-bbq-161519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            recipe_description : "Ready in under 20 minutes, this burger with spiced chipotle chicken breast, in toasted brioche with guacamole, makes for a satisfying weeknight treat for one.",
            recipe_ingredients: [
                "4 minute steaks or 2 x 1cm thick sirloin steaks",
                "1 tbsp olive oil, plus extra for drizzling",
                "1 small ciabatta loaf",
                "4 tbsp caramelised onions",
                "half an 85g bag watercress"
            ],
            recipe_instructions: 
                [
                    "Put the grill on. Heat a little oil in a frying pan. Season both sides of the steaks with salt, then fry for 1-2 minutes on each side. Meanwhile, slice the ciabatta in half lengthways and grill the cut sides until golden.", 
                    "Drizzle the toasted ciabatta with olive oil, spread the bottom half with the onions and sit the steaks on top. Cover with the watercress and close the sandwich with the other half of the ciabatta. Cut into four sandwiches and serve two per person. Serve hot."
                ],
            recipe_serves : "2",
            recipe_time: "40 mins",
            recipe_drink: "Corona Light"
        },
        {
            recipe_title : "Teriyaki salmon with sesame pak choi",
            recipe_image : "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            recipe_description : "Sweet chilli, honey, sesame oil, mirin and soy combine to make a punchy sauce for fish, This dish is a simple and quick midweek meal.",
            recipe_ingredients: [
                "2 skinless salmon fillets",
                "1 tbsp sweet chilli sauce",
                "1 tbsp honey",
                "1 tsp sesame oil",
                "1 tbsp mirin or dry sherry",
                "2 tbsp soy sauce",
                "2 tsp finely grated ginger",
                "brown rice or noodles, to serve (optional)",
                "2 large pak choi (about 250g)",
                "2 tsp vegetable oil",
                "2 tsp sesame oil",
                "3 garlic cloves, grated",
                "75ml fish or vegetable stock",
                "2 tsp toasted sesame seeds, for sprinkling"
            ],
            recipe_instructions: 
                ["Heat oven to 200C/180C fan/gas 6 and put the salmon in a shallow baking dish. Mix the sweet chilli, honey, sesame oil, mirin, soy and ginger in a small bowl and pour over the salmon so the steaks are completely covered. Bake for 10 mins while you cook the pak choi.",
                "Cut a slice across the base of the pak choi so the leaves separate. Heat the oils in a wok, add the garlic and stir-fry briefly to soften. Add the pak choi and fry until the leaves start to wilt. Pour over the stock, tightly cover the pan and allow to cook for 5 mins – you are aiming for the stems of the pak choi to be tender but still have a bit of bite.",
                "Serve the pak choi in shallow bowls, top with the salmon steaks and spoon over the juices. Scatter with the toasted sesame seeds and serve on its own or with brown rice or noodles."
                ],
            recipe_serves : "2",
            recipe_time: "20 mins",
            recipe_drink: "White Wine"
        },
        {
            recipe_title : "Venetian-style pasta",
            recipe_image : "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            recipe_description : "A superhealthy pasta dish that will bring you a taste of Italy in under 20 minutes",
            recipe_ingredients: [
                "2 red onions, sliced",
                "1 tbsp olive oil",
                "200g pasta shapes",
                "4 tsp balsamic vinegar",
                "2 tbsp sultana",
                "4 tsp caper, drained and rinsed well",
                "2 tbsp toasted pine nut",
                "140g spinach leaves"
            ],
            recipe_instructions: 
                [
                    "Start frying the onions in the oil in a non-stick frying pan – you’ll need to cook them for about 10 mins until they’re very soft. Meanwhile, boil the pasta.",
                    "Stir the vinegar, sultanas, capers and most of the pine nuts into the soft onions with some seasoning, then cook for 1 min more to soften the sultanas. Stir in the spinach with a splash of pasta water. Drain the pasta, then toss with the onion mix – the spinach should wilt as you do. Divide between 2 bowls, scatter with the remaining pine nuts and serve."
                ],
            recipe_serves : "2",
            recipe_time: "17 mins",
            recipe_drink: "White Wine"
        },
        {
            recipe_title : "Chicken Tikka Masala",
            recipe_image : "https://images.media-allrecipes.com/userphotos/720x405/39905.jpg",
            recipe_description : "This is an easy recipe for Chicken Tikka Masala--chicken marinated in yogurt and spices and then served in a tomato cream sauce. Serve with rice or warm pita bread.",
            recipe_ingredients: [
                "Garam masala - 1/4 tea spoon.",
                "Ginger garlic paste - 1/2 tea spoon.",
                "Coriander powder - 1/2 tea spoon.",
                "Onion (cubes) - 1 number.",
                "Lemon juice - 1 tablespoon.",
                "Salt - 1 to taste.",
                "Boneless chicken cubes - 750 grams.",
                "Sour cream or curd (removing moisture) - 3 tablespoons.",
                "Kastori methi powder - 1/4 tea spoon.",
                "Tomato (cubes) - 1 number.",
                "Green bell pepper (cubes) - 1 number.",
                "Chili powder - 1/2 tea spoon.",
                "Cardamom powder - 1/2 tea spoon.",
                "Red bell pepper (cubes) - 1 number.",
                "Oil - 1 tea spoon."
            ],
            recipe_instructions: 
                [
                    "Cut chicken into small cubes, wash nicely.",
                    "Then apply marination prepared with lemon juice, salt, and spices (chili powder, cardamom powder, kasuri methi, garam masala, coriander powder, ginger garlic paste), hung curd, mix well.",
                    "then add the chicken pieces mix it and add vegetable pieces marinade for about 2 hours in the refrigerator.",
                    "Put the chicken and other vegetables coated in marination (onion, tomato, bell pepper) on to skewers and cook in the oven or moderately hot tandoor for about 10 to 15minutes, keep basting the chicken pieces with oil and cook until slightly colored and cooked.",
                    "Remove and serve hot sprinkled with chaat masala (made with chaat masala, dried mint leaf)."
                ],
            recipe_serves : "2",
            recipe_time: "40 mins",
            recipe_drink: "Red Wine"
        },
    ],
    newRecipe: false
}

//localstorage/cookie stuff

if (!("recipe" in localStorage)){
    localStorage.setItem("recipe", JSON.stringify(localRecipes));
 
}
const localStoredRecipes = JSON.parse(localStorage.recipe);


//Box component, a SMART one
class Box extends Component{
    constructor(props){
        super(props);
        this.state = localStoredRecipes;
    }

    // Deletes the recipe 
    recipeDeleteHandler(e){
        const index = e.target.getAttribute("data-key");
        this.setState(prevState => {
            const newState = JSON.parse(JSON.stringify(prevState));
            newState.recipes.splice(index, 1);
            return newState;
        });
    }

    //Updates the recipe if the user clicks Save, data coming from Modal => Recipe => Box, stroed in 'e'
    updateRecipeHandler(e){
        this.setState(prevState => {
            //Checking if its a new recipe, if so add it to the state
            if (e.newRecipe){
                const newState = JSON.parse(JSON.stringify(prevState));
                newState.recipes.push(e.editRecipe);
                return newState;
            }
            //Otherwise update the recipe
            else {
                const newState = {...prevState};
                return newState.recipes[e.currentIndex] = e.editRecipe
            }
        });
        
    }

    //When the new recipe button is clicked, opens modal and changes newRecipe in state
    newRecipeHandler(e){
        const modal = document.querySelector(".modal");
        this.setState(prevState => {
            const newState = JSON.parse(JSON.stringify(prevState));
            newState.newRecipe = true;
            return newState;
        })
        modal.classList.toggle("show");
    }

    //To store the saved state in local storage, gets called after the HTML has been rendered
    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem("recipe", JSON.stringify(this.state));
    }
    render(){
        return (
            <main id = "box"> 
                <div className = "desc">
                   <h2>Create & Store your own Delicious Food and Drink Recipes!</h2>
                </div>
                <Recipe 
                    recipe = {this.state}
                    deleteRecipe = {(event) => this.recipeDeleteHandler(event)}
                    updateRecipe = {(event) => this.updateRecipeHandler(event)}
                />
                <div className = "new-recipe">
                    <button onClick = {(e) => this.newRecipeHandler(e)}><i className="fa-lg fas fa-plus"></i></button>
                   
                </div>
            </main>
        );
    }
}

export default Box;