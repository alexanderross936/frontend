import React from 'react';
import axios from 'axios';


class RecipesList extends React.Component {

    state = {
        data: []
    }

    componentDidMount(){
        axios.get('http://localhost:4000/recipes')
        .then(res => {
      this.setState({
        data: res.data
      } )

          })

        }
        


    render() {
        console.log(this.state)
        console.log(typeof this.state.data)
        var ings = this.state.data
        console.log(Object.values(ings))
        var romp = Object.values(ings)
        var data =
        romp.map((ins) => (
<p>
   <h3>ID: {ins._id}</h3>
   <h3>Title: {ins.Title}</h3>
   <h3>Ingredients: {ins.Ingredients}</h3>
   <h3>Directions: {ins.Directions}</h3>
</p>


)) 
        return (
            <p>
            {data}</p>
        )
    }
}
    


export default RecipesList;