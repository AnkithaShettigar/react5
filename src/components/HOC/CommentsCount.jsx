import React, { Component } from 'react'

class CommentsCount extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           comments:0,
        }
      }
  
      handleClick = () =>{
          this.setState({
              comments:this.state.comments + 1,
          })
      }
  render() {
    return (
         <div className='box1'>
        Total Comments:{this.state.comments} <br />
         <button onClick={this.handleClick}>Add Comment!</button>

      </div>
    )
  }
}
export default  CommentsCount;