import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex: null,
            sectionName: null,
            isEditClicked: true
        }
    }
    addItem(e){
      
        const sectionName = e.target.parentNode.children[0].textContent.toLowerCase();
        console.log(sectionName, "section name")
        const item =  sectionName === "ingredients" 
                        ?  document.querySelector("#edit-ingredients-val").value
                        :  document.querySelector("#edit-instructions-val").value
        // console.log(item);
        console.log(this.props.editRecipe.currentIndex);
        
        this.props.addItem({
            currentIndex: this.props.editRecipe.currentIndex,
            [`recipe_${sectionName}`]: item
        });

    }
    editItem(e){
        if (this.state.isEditClicked){
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
        }
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
        // console.log("clicked", sectionName, index);
        this.props.deleteItem({
            [sectionName]: index
        });
    }
    render(){
        console.log(this.props.editRecipe);
        // const ingredients;
        const ingredients = this.props.editRecipe.editRecipe.recipe_ingredients.map((ingredient, i) => (
            <div className = "ingredient" key = {i}>
                {ingredient}
                <i className="fas fa-pencil-alt" onClick = {(e) => this.editItem(e)} data-key = {i}></i>
                <i className="far fa-trash-alt" onClick = {(e) => this.deleteItem(e)} data-key = {i}></i>
            </div>
        ));
        const instructions = this.props.editRecipe.editRecipe.recipe_instructions.map((instruction, i) => (
            <div className = "instruction" key = {i}>
                {instruction}
                <i className="fas fa-pencil-alt" onClick = {(e) => this.editItem(e)} data-key = {i}></i>
                <i className="far fa-trash-alt" onClick = {(e) => this.deleteItem(e)} data-key = {i}></i>
            </div>
        ));
        return (
            <div className = "modal" >
                <h2> This is Modal </h2>
                <span className="close" onClick = {this.props.editRecipeHandler}>&times;</span>
                <div className = "modal-content">
                    <div className = "edit edit-details">
                        <h3>Details</h3>
                        <div className = "edit-edit-title">
                            <label>
                                <span>Title:</span>
                                <input className = "val" id = "edit-title-val"/>
                            </label>
                        </div>
                        <div className = "edit-edit-title">
                            <label>
                                <span>Image URL:</span>
                                <input className = "val"id = "edit-image-val"/>
                            </label>
                        </div>
                        <div className = "edit-edit-title">
                            <label>
                                <span>Description:</span>
                                <input className = "val"id = "edit-description-val"/>
                            </label>
                        </div>
                        <div className = "edit-edit-title">
                            <label>
                                <span>Serves:</span>
                                <input className = "val"id = "edit-serves-val"/>
                            </label>
                        </div>
                        <div className = "edit-edit-title">
                            <label>
                                <span>Cooking Time:</span>
                                <input className = "val"id = "edit-time-val"/>
                            </label>
                        </div>
                        <div className = "edit-edit-title">
                            <label>
                                <span>Drink:</span>
                                <input className = "val"id = "edit-drink-val"/>
                            </label>
                        </div>
                    </div> 
                    <div className = "edit edit-ingredients">
                        <h3>Ingredients</h3>
                        <input className = "val" id = "edit-ingredients-val" />
                        <i onClick = {(e) => this.addItem(e)} className="fas fa-plus"></i>
                        <div className = "edit-ingredients">
                            {ingredients}
                        </div>
                    </div> 
                    <div className = "edit edit-instructions">
                        <h3>Instructions</h3>
                        <input className = "val" id = "edit-instructions-val" />
                        <i onClick = {(e) => this.addItem(e)} className="fas fa-plus"></i>
                        <div className = "edit-instructions">
                            {instructions}
                        </div>
                    </div> 
                </div>
                <button onClick = {this.props.updateEditRecipeHandler}>save </button>
                <div className = "modal-edit-item">
                    <div className = "edit-item">
                        <h1> This is test </h1>
                        <input id = "edit-items"/>
                        <div class = "edit-item-buttons">
                            <button onClick = {(e) => this.saveItem(e)}>Save</button>
                            <button onClick = {(e) => this.editItem(e)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Modal