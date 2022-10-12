import React, { Component } from 'react'
import HOC from './HOC'

 class LikesCount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         likes:0,
      }
    }

    handleClick = () =>{
        this.setState({
            likes:this.state.likes + 1,
        })
    }
  render() {
    return (
      <div className='box1'>
        {this.state.likes} <br />
         <button onClick={this.handleClick}>Like👍</button>

      </div>
    )
  }
}
const  EnhancedLikes = HOC(LikesCount);

export default EnhancedLikes;
