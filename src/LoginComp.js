import React, { Component } from 'react'
import GenericForm from './GenericForm'

 class LoginComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data : [{
                 field1:{
                     label: "Username",
                     placeholder: "Enter Username",
                     inputType: "text",
                     value:"prakhar@hcl.com",
                     a11y: {
                         forId: "Username"
                     }
                 },
                 field2: {
                     label: "Password",
                     placeholder: "Enter Password",
                     inputType: "password",
                     value: "abcd123",
                     a11y: {
                        forId: "Password"
                    }
                 },
                 
                 btn:{
                     name: "Login",
                     action: () => {
                         alert('You have loggedin successfully')
                     }
                 }
             }]
        }
    }
    
    render() {
        const {data} = this.state;
        return (
            <div>
                <h2>Login Form</h2>
                <GenericForm data={data} />
            </div>
        )
    }
}

export default LoginComp
