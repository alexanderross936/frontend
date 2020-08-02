import React from 'react';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios';

class AddRecipe extends React.Component {

    state = {
        title: '',
        ingredients: '',
        directions: ''
    }

    handleChangeIngredients = (event) => {
        this.setState({
            ingredients: event.target.value
        })
        console.log(this.state.ingredients)
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
        console.log(this.state.title)
    }

    handleChangeDirections = (event) => {
        this.setState({
            directions: event.target.value
        })
        console.log(this.state.directions)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let post = {
            Title: this.state.title,
            Ingredients: this.state.ingredients,
            Directions: this.state.directions
        }

        axios.post('http://localhost:4000/add_recipe', post)
        this.setState({
            title: '',
            ingredients: '',
            directions: ''
        })

    }

    render() {
        return (
            <div>
                            <form 
                            // method="POST" action='http://localhost:4000/add_ingredient' 
                            onSubmit={this.handleSubmit}
                            >
            <input id="title" name="title" type="text" value={this.state.title} onChange={this.handleChangeTitle} />
            <br></br>
            <input id="ingredients" name="ingredients" type="text" value={this.state.ingredients} onChange={this.handleChangeIngredients} />
            <br></br>
            <input id="directions" name="directions" type="text" value={this.state.directions} onChange={this.handleChangeDirections} />
            <br></br>
            <input type='submit' value="Submit Recipe"/>
          </form>
            </div>

        )

    }
}

export default AddRecipe;