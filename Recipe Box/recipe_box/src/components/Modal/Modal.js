import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex: null,
            sectionName: null,
            isEditClicked: true,
            newRecipe: false
        }
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.editRecipe.newRecipe){
            const inputArr = ["title", "image", "description", "serves", "time", "drink"];
            inputArr.forEach(val => document.querySelector(`#edit-${val}-val`).value = "");
            
            this.setState({
                newRecipe: nextProps.editRecipe.newRecipe,
                currentIndex: null
            });
        }
        else {
            this.setState({
                newRecipe: nextProps.editRecipe.newRecipe
            });
        }
    }
    editRecipeHandler(e){
        if (!this.state.newRecipe){
            this.props.editRecipeHandler(e);
        }
        else {
            const modal = document.querySelector(".modal");
            modal.classList.toggle("show");
        }
    }
    addItem(e){
        const sectionName = e.target.parentNode.children[0].textContent.toLowerCase();
        const item =  sectionName === "ingredients" 
                        ?  document.querySelector("#edit-ingredients-val").value
                        :  document.querySelector("#edit-instructions-val").value
        this.props.addItem({
            currentIndex: this.props.editRecipe.currentIndex,
            [`recipe_${sectionName}`]: item
        });

    }
    editItem(e){
            document.querySelector("#edit-items").value = e.target.parentNode.textContent;
            const sectionName = e.target.parentNode.parentNode.parentNode.children[0].textContent.toLowerCase();
            const index = e.target.getAttribute("data-key")
            this.setState(prevState => {
                return {
                    currentIndex: index,
                    sectionName: sectionName,
                    isEditClicked: !prevState.isEditClicked
                }
            });
        document.querySelector(".modal-edit-item").classList.toggle("modal-edit-item-show");
    }
    saveItem(e){

        const value =  document.querySelector("#edit-items").value;
    
        this.props.saveItem({
            [this.state.sectionName]: this.state.currentIndex,
            value: value
        });
        document.querySelector(".modal-edit-item").classList.toggle("modal-edit-item-show");
    }
    deleteItem(e){
        const sectionName = e.target.parentNode.parentNode.parentNode.children[0].textContent.toLowerCase();
        const index = e.target.getAttribute("data-key"); 
        this.props.deleteItem({
            [sectionName]: index
        });
    }
    render(){
        //Checking if newRecipie is false, then render ing and ins
        let ingredients, instructions;
        if (!this.state.newRecipe){
            ingredients = this.props.editRecipe.editRecipe.recipe_ingredients.map((ingredient, i) => (
                <div className = "ingredient" key = {i}>
                    <span>{ingredient}</span>
                    <i className="fas fa-pencil-alt" onClick = {(e) => this.editItem(e)} data-key = {i}></i>
                    <i className="far fa-trash-alt" onClick = {(e) => this.deleteItem(e)} data-key = {i}></i>
                </div>
            ));
            instructions = this.props.editRecipe.editRecipe.recipe_instructions.map((instruction, i) => (
                <div className = "instruction" key = {i}>
                    <p>{instruction} </p>
                    <i className="fas fa-pencil-alt" onClick = {(e) => this.editItem(e)} data-key = {i}></i>
                    <i className="far fa-trash-alt" onClick = {(e) => this.deleteItem(e)} data-key = {i}></i>
                </div>
            ));
        }
        
        return (
            <div className = "modal" >
                <h2>Add/Edit your recipes!</h2>
                <div className = "modal-buttons">
                    <button className = "btn modal-save" onClick = {this.props.updateEditRecipeHandler}>Save</button>
                    <button className = "btn modal-clear" onClick = {this.props.clearAllItems}>Clear All</button>
                    <button className = "close btn" onClick = {(e) => this.editRecipeHandler(e)}>Close</button>
                   
                </div>
                <div className = "modal-content">
                    <div className = "edit edit-details">
                        <h3>Details</h3>
                        <div className = "edit-edit-title">
                            <label> 
                                <span>Title:</span>
                                <input className = "val" id = "edit-title-val" placeholder = "Add/Edit Recipe Title"/>
                            </label>
                        </div>
                        <div className = "edit-edit-title">
                            <label>
                                <span>Image URL:</span>
                                <input className = "val"id = "edit-image-val"  placeholder = "Add/Edit Image URL"/>
                            </label>
                        </div>
                        <div className = "edit-edit-title">
                            <label>
                                <span>Description:</span>
                                <input className = "val"id = "edit-description-val"  placeholder = "Add/Edit Recipe Description"/>
                            </label>
                        </div>
                        <div className = "edit-edit-title">
                            <label>
                                <span>Serves:</span>
                                <input className = "val"id = "edit-serves-val"  placeholder = "Add/Edit Recipe Serves"/>
                            </label>
                        </div>
                        <div className = "edit-edit-title">
                            <label>
                                <span>Cooking Time:</span>
                                <input className = "val"id = "edit-time-val"  placeholder = "Add/Edit Cooking Time"/>
                            </label>
                        </div>
                        <div className = "edit-edit-title">
                            <label>
                                <span>Drink:</span>
                                <input className = "val"id = "edit-drink-val"  placeholder = "Add/Edit Drink"/>
                            </label>
                        </div>
                    </div> 
                    <div className = "edit edit-ingredients">
                        <h3>Ingredients</h3>
                        <input className = "val" id = "edit-ingredients-val"  placeholder = "Add/Edit Ingredients"/>
                        <i onClick = {(e) => this.addItem(e)} className="fas fa-plus"></i>
                        <div className = "edit-ingredients">
                            {ingredients}
                        </div>
                    </div> 
                    <div className = "edit edit-instructions">
                        <h3>Instructions</h3>
                        <input className = "val" id = "edit-instructions-val"  placeholder = "Add/Edit Instructions"/>
                        <i onClick = {(e) => this.addItem(e)} className="fas fa-plus"></i>
                        <div className = "edit-instructions">
                            {instructions}
                        </div>
                    </div> 
                </div>
                
                <div className = "modal-edit-item">
                    <div className = "edit-item">
                        <h1> Edit Ingredients/Instructions here: </h1>
                        <textarea id = "edit-items"/>
                        <div className = "edit-item-buttons">
                            <button className = "btn modal-save" onClick = {(e) => this.saveItem(e)}>Save</button>
                            <button className = "btn modal-clear" onClick = {(e) => this.editItem(e)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Modal;