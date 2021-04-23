import React, { Component } from 'react'

 class GenericForm extends Component {
     constructor(props) {
         super(props)
     console.log('props ',this.props.data[0])
         this.state = {
              data : this.props.data[0]
         }
     }
     
    render() {
        return (
            <div>
                <div>
                    <label htmlFor={this.state.data.field1.a11y.forId}>{this.state.data.field1.label} :</label>
                    <input id={this.state.data.field1.a11y.forId} type={this.state.data.field1.inputType} 
                    placeholder={this.state.data.field1.placeholder} 
                    value={this.state.data.field1.value}/>
                </div>
                <div>
                    <label htmlFor={this.state.data.field2.a11y.forId}>{this.state.data.field2.label} :</label>
                    <input id={this.state.data.field2.a11y.forId} type={this.state.data.field2.inputType} 
                    placeholder={this.state.data.field2.placeholder} 
                    value={this.state.data.field2.value}/>
                </div>  
                <div>
                    <button onClick={this.state.data.btn.action}>{this.state.data.btn.name}</button>
                </div>              
                
            </div>
        )
    }
}

export default GenericForm
