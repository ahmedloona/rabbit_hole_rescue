import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";


class Splash extends React.Component{

    render(){
        return(
            <div className='splash-main'>
                <div className='splash-top'>
                    <p className='splash-top-text'>Your Web History as Nature Intended</p>
                    <img className='splash-image'src='../../../images/home_screen.png'></img>
                </div>
                <div className='splash-features-box'>
                    <div className='splash-list-left'>
                        <ul className='splash-ul'>
                            <li className='splash-li'>Create history trees on demand</li>
                            <li className='splash-li'>Easy navigation and visibility</li>
                        </ul>
                    </div>
                    <div className='splash-list-right'>
                        <ul className='splash-ul'>
                            <li className='splash-li'>Chrome extension for ease and accessibility</li>
                            <li className='splash-li'>All securely stored: control your privacy</li>
                        </ul>
                    </div>
                </div>
            </div>
        );      
    }
}

export default withRouter(Splash);