import React from 'react'

const HOC = (Component,data)=>{
    return class extends React.Component{
        

        render(){
            return(
               <div className='box1'>
                Hello <Component/>
               </div>
            )
        }
    }

}
export default HOC;