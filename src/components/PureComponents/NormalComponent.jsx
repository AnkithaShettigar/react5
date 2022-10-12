import React, { Component } from 'react'

 class NormalComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }
    onIncrement = ()=>{
        this.setState(
            {count:0}
        )
    }
  render() {
    console.log("Normal Component Render Method called");
    return (
      <div className='one'>
        {this.state.count}<br/>

        <button onClick={this.onIncrement}>Increment</button>
      </div>
    )
  }
}
export default NormalComponent;
