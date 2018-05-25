import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './Recipe.css';

class Recipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            editRecipe: {
                recipe_title : "Mexican chicken burger",
                recipe_image : "url",
                recipe_description : "description here",
                recipe_ingredients: [
                    "1 tblsp lol",
                    "2 tbls kms"
                ],
                recipe_instructions: 
                    [
                        "add something", 
                        "add something again", 
                        "ok great!"
                    ],
                recipe_serves : "number",
                recipe_time: "time",
                recipe_drink: "some drink"
            },
            isEditClicked: true,
            currentIndex: null,
            newRecipe: this.props.recipe.newRecipe
        };
        this.editRecipeHandler = this.editRecipeHandler.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            newRecipe: nextProps.recipe.newRecipe
        })
    }
    editRecipeHandler(event){
        const modal = document.querySelector(".modal");
        if (this.state.isEditClicked && event.target.getAttribute("data-key") !== null){
            const index = event.target.getAttribute("data-key");        
            this.setState((prevState, props) => {
                const edit =  props.recipe.recipes[index];
                const inputArr = ["title", "image", "description", "serves", "time", "drink"];
                inputArr.forEach(val => document.querySelector(`#edit-${val}-val`).value = edit[`recipe_${val}`]);
                return {
                    editRecipe: {
                        recipe_title : edit.recipe_title,
                        recipe_image : edit.recipe_image,
                        recipe_description : edit.recipe_description,
                        recipe_ingredients: edit.recipe_ingredients,
                        recipe_instructions: edit.recipe_instructions,
                        recipe_serves : edit.recipe_serves,
                        recipe_time: edit.recipe_time,
                        recipe_drink: edit.recipe_drink
                    },
                    currentIndex: index,
                    newRecipe: false
                }
            });


        }
        modal.classList.toggle("show");
       
        this.setState(prevState => ({ isEditClicked: !prevState.isEditClicked }));
    }
    updateEditRecipeHandler(event){
        const modal = document.querySelector(".modal");
            this.props.updateRecipe({
                editRecipe: {
                    recipe_title : document.querySelector("#edit-title-val").value,
                    recipe_image : document.querySelector("#edit-image-val").value,
                    recipe_description : document.querySelector("#edit-description-val").value,
                    recipe_ingredients: [...document.querySelectorAll(".ingredient")].map(val => val.textContent),
                    recipe_instructions: [...document.querySelectorAll(".instruction")].map(val => val.textContent),
                    recipe_serves : document.querySelector("#edit-serves-val").value,
                    recipe_time: document.querySelector("#edit-time-val").value,
                    recipe_drink: document.querySelector("#edit-drink-val").value
                },
                currentIndex: this.state.currentIndex,
                newRecipe: this.state.newRecipe
            });
            modal.classList.toggle("show");

    }
    addItem(e){
        const section = Object.keys(e);
        this.setState(prevState => {
            const newState = JSON.parse(JSON.stringify(prevState)); //to make a deep copy
            newState.editRecipe[section[1]].push(e[section[1]]);
            return newState;
        });
    }
    saveItem(e){
        this.setState(prevState => {
            const newState = JSON.parse(JSON.stringify(prevState));
            const keys = Object.keys(e);
            newState.editRecipe[`recipe_${keys[0]}`][e[keys[0]]] = e.value;
            return newState;
            
        });
    }
    //delete a single item from ins/ing (callback from Modal.js => deleteItem)
    deleteItem(e){
        this.setState(prevState => {
            const newState = JSON.parse(JSON.stringify(prevState));
            const keys = Object.keys(e);
            newState.editRecipe[`recipe_${keys[0]}`].splice(e[keys[0]], 1);
            return newState;
        });
    }
    clearAllItems(e){
        document.querySelectorAll(".val").forEach(val => val.value = "");
        this.setState(prevState => {
            return {
                editRecipe: {
                    recipe_title : "",
                    recipe_image : "",
                    recipe_description : "",
                    recipe_ingredients: [],
                    recipe_instructions: [],
                    recipe_serves : "",
                    recipe_time: "",
                    recipe_drink: "" 
                }
            }
        });
    }
    render(){
        const recipe = this.props.recipe.recipes.map((val, i, arr) => {
            return (
                <div className = "recipe" key = {i}>
                    <div className = "recipe-title">
                        <h3>
                            {val.recipe_title}
                        </h3>
                    </div>
                    <div className = "recipe-image">
                        <img className = "thumbnail" src = {val.recipe_image}/>
                    </div>
                    <div className = "recipe-description">
                        <p>
                            {val.recipe_description}
                        </p>
                    </div>
                    <div className = "recipe-ingredients">
                        <details open>
                            <summary><strong>Ingredients</strong></summary>
                            <ul>
                                {val.recipe_ingredients.map((ing, j) => <li key = {j}>{ing}</li>)}
                            </ul>
                        </details>
                    </div>
                    <div className = "recipe-instructions">
                        <details close = "true">
                            <summary><strong>Instructions</strong></summary>
                            <ol>
                                {val.recipe_instructions.map((ins, j) => <li key = {j}>{ins}</li>)}
                            </ol>
                        </details>
                    </div>
                    <div className = "recipe-serves">
                        <p><strong>Serves:</strong> {val.recipe_serves}</p>
                       
                    </div>
                    <div className = "recipe-time">
                        <p><strong>Time to cook:</strong> {val.recipe_time}</p>
                    </div>
                    <div className = "recipe-drink">
                        <p><strong>Drink:</strong> {val.recipe_drink}</p>
                    </div>
                    <div className = "recipe-button">
                        <button className = "btn edit" onClick = {this.editRecipeHandler} data-key = {i}>
                            Edit
                        </button>
                        <button className = "btn delete" onClick = {this.props.deleteRecipe} data-key = {i}>
                            Delete
                        </button>
                    </div>
                    
                </div>
            );
        });
        return (
            <section id = "recipes">
                {recipe}
                {/* modal */}
                <Modal
                    editRecipe = {this.state} 
                    updateEditRecipeHandler = {(e) => this.updateEditRecipeHandler(e)}
                    editRecipeHandler = {(e) => this.editRecipeHandler(e)}
                    addItem = {(e) => this.addItem(e)}
                    saveItem = {(e) => this.saveItem(e)}
                    deleteItem = {(e) => this.deleteItem(e)}
                    clearAllItems = {(e) => this.clearAllItems(e)}
                />
            </section>
        );
    }
}

export default Recipe;