import React, { Component } from 'react'
import GenericForm from './GenericForm'

class SignupComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data : [{
                field1:{
                    label: "Username",
                    placeholder: "Enter Username",
                    inputType: "text",
                    value:"Prakhar rastogi",
                    a11y: {
                        forId: "Username"
                    }
                },
                field2: {
                    label: "Email",
                    placeholder: "Enter Email Id",
                    inputType: "email",
                    value: "prakhar@hcl.com",
                    a11y: {
                        forId: "Email"
                    }
                },
                
                btn:{
                    name: "Signup",
                    action: () => {
                        alert('You have Signedup successfully')
                    }
                }
            }]
       }
    }
    
    render() {
        const {data} = this.state;
        return (
            <div>
                <h2>Signup Form</h2>
                <GenericForm data={data} />
            </div>
        )
    }
}

export default SignupComp
