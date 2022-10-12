import React, { PureComponent } from 'react'

 class PureComponents extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }
    onIncrement = ()=>{
        this.setState(
            {count:this.state.count + 1}
        )
    }
  render() {
    console.log("Pure Component Render Method called");
    return (
      <div className='one'>
        {this.state.count}<br/>

        <button onClick={this.onIncrement}>Increment</button>
      </div>
    )
  }
}
export default PureComponents;
