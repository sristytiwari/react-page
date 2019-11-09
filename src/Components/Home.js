import React from 'react';
import "./HomeStyle.css";
import {CustomButton} from './Small';

class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="heading-wrapper">
                <h1 className="home-heading">Make better videos than your competitors. On your lunch break.</h1>
                
                <h2 className="home-subheading">Sell more stuff with stunning videos. Create content in minutes. See results in no time.</h2>
                </div>
                <div className="home-button-wrapper"><CustomButton name="Make a video - It's free!" backgroundColor="#fff" /></div>
            </div>
        )
    }
}

export default Home;