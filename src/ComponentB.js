import React, { Component } from 'react'
import ComponentA from './ComponentA'
 class ComponentB extends Component {
    render() {
        const style = {
            margin:"20px",
            padding:"10px",
            border:"2px solid red", 
            borderRadius:"5px"
        }
        return (
            
            <div style={style}>
                <h2>Component B </h2>
                <ComponentA />
            </div>
        )
    }
}

export default ComponentB
