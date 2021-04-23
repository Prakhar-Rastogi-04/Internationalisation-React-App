import React, { Component } from 'react'
 class ComponentA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count : 0
         }
     }

     increment = () => {
        this.setState({
            count : this.state.count + 1
        })
     }
     
    render() {
        const style = {
            margin:"20px",
            padding:"10px",
            border:"2px solid red", 
            borderRadius:"5px"
        }
        return (
            
            <div style={style}>
                <h2>Component A </h2>
               <h2 >This component can be used within multiple components.</h2> 
            </div>
        )
    }
}

export default ComponentA
