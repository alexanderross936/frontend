import React from 'react';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios';

class AddIngredient extends React.Component {

    state = {
        ingredient: '',
        unit: '',
        measure: ''
    }

    handleChangeIngredient = (event) => {
        this.setState({
            ingredient: event.target.value
        })
        console.log(this.state.ingredient)
    }

    handleChangeUnit = (event) => {
        this.setState({
            unit: event.target.value
        })
        console.log(this.state.unit)
    }

    handleChangeMeasure = (event) => {
        this.setState({
            measure: event.target.value
        })
        console.log(this.state.measure)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let post = {
            Unit: this.state.unit,
            Ingredient: this.state.ingredient,
            Measure: this.state.measure
        }

        axios.post('http://localhost:4000/add_ingredient', post)
        this.setState({
            ingredient: '',
            unit: '',
            measure: ''
        })

    }

    render() {
        return (
            <div>
                            <form 
                            // method="POST" action='http://localhost:4000/add_ingredient' 
                            onSubmit={this.handleSubmit}
                            >
            <input id="ingredient" name="ingredient" type="text" value={this.state.ingredient} onChange={this.handleChangeIngredient} />
            <br></br>
            <input id="unit" name="unit" type="text" value={this.state.unit} onChange={this.handleChangeUnit} />
            <br></br>
            <input id="measure" name="measure" type="text" value={this.state.measure} onChange={this.handleChangeMeasure} />
            <br></br>
            <input type='submit' value="Next Ingredient"/>
          </form>
          <a href='/'>Done</a>
            </div>

        )

    }
}

export default AddIngredient;