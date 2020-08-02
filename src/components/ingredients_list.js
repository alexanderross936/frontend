import React from 'react';
import axios from 'axios';


class IngredientsList extends React.Component {

    state = {
        data: []
    }

    componentDidMount(){
        axios.get('http://localhost:4000/')
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
   <h3>{ins._id}</h3>
   <h3>{ins.Ingredient}</h3>
   <h3>{ins.Unit}</h3>
   <h3>{ins.Measure}</h3>
</p>


)) 
        return (
            <p>
            {data}</p>
        )
    }
}
    


export default IngredientsList;