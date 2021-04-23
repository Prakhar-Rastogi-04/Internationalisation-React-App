import React, { Component, Fragment } from 'react'
import FocusTrap from 'focus-trap-react'
import Modal from './Modal';

 class A11yForm extends Component {
     constructor(props) {
         super(props)
         this.msg = React.createRef();
         this.modalRef = React.createRef();
     
         this.state = {
              isFormSubmitted: false,
              isModalOpen: false,
         }
     }
     formSubmit = (e) => {
         e.preventDefault();
        this.setState({
            isFormSubmitted : true
        },  this.focusMsg )
     }

     focusMsg = () => {
        this.modalRef.current.setState({activeTrap: true})
        // this.msg.current.focus()
    }
    closeModal = () => {
        this.setState((prevState) => ({
            isFormSubmitted : !prevState.isFormSubmitted
        }))
    }

    componentDidMount(){
        console.log('modal ref', this.modalRef)
    }
     
    render() {
        document.title = "React-Accessibility"
        return (
            <div className="center form-user"> 
                <Modal ref = {this.modalRef}/>
                <h2 tabIndex="0">User Form</h2>
                 <form onSubmit={this.formSubmit}>
                    <div>
                        <label htmlFor="Username">Username :</label>
                        <input id="Username" type="text"
                        aria-required="true"
                        value="Prakhar"/>
                    </div>
                    <div>
                        <label htmlFor="Email">Email :</label>
                        <input id="Email" type="email"
                        aria-required="true"
                        value="prakhar@hcl.com"/>
                    </div>  
                    <div>
                        <button type="submit">submit</button>
                    </div>  
                </form>
               
            </div>
        )
    }
}

export default A11yForm
