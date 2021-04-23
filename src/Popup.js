import React from 'react'

const Popup = (props) => {
    const {msg, action, isModalOpen} = props;
    return (
        <div className="popup"> 
            <div>
                <p ref={msg} tabIndex="0">
                    The form is submitted successfuly
                </p>
                <div>
                    <button onClick={action}>Close</button>
                </div>
            </div>
                     
        </div>
    )
}

export default Popup