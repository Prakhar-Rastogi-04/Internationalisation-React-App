
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FocusTrap from 'focus-trap-react'

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTrap: false
    };

    this.modalBtnRef = React.createRef();

    this.mountTrap = this.mountTrap.bind(this);
    this.unmountTrap = this.unmountTrap.bind(this);
  }

  mountTrap = () => {
    this.setState({ activeTrap: true });
  };

  unmountTrap = () => {
    this.setState({ activeTrap: false });
  };

  render() {
    const closeStye = {
      height: "50px", width:"50px" , backgroundColor: "white", cursor: "pointer"
    }
    const trap = this.state.activeTrap
      ? <FocusTrap focusTrapOptions={{  onDeactivate: this.unmountTrap }}>
          <div className="trap popup">
            <div>
              <button onClick={this.unmountTrap} title="close">Close</button>
            </div>
            <p id="dialogContent">
            The form is submitted successfuly
            </p>
            <p>
              <button role="ok" onClick={this.unmountTrap}>
                Ok
              </button>
            </p>
          </div>
        </FocusTrap>
      : false;

    return (
        <div role="dialog" aria-labelledby="dialogContent" >
          <button className="noDisplay" ref={this.modalBtnRef} onClick={this.mountTrap}> </button>
          <div>
            {trap}
          </div>
      </div>
    );
  }
}


export default Modal

// ReactDOM.render(<Demo />, document.getElementById('demo'))