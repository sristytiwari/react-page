import React, { Component } from 'react'
import "./style.css";
class CustomButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="button-wrapper" style={{backgroundColor: this.props.backgroundColor}}>
                <p className="button-title">{this.props.name}</p>
            </div>
        )
    }
}

export default CustomButton;