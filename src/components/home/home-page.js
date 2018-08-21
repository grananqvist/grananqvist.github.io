import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { twitter, github, linkedin } from './social-icons.js';

class HomePage extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { iconWrapperStyle, greetingStyle, wrapperStyle, centerStyle } = styles;
        return (
            <div className="container" style={wrapperStyle}>
                <div style={centerStyle} >
                    <div className="row" style={{margin: '0px'}}>
                        <h1 className="thin" style={greetingStyle} >Hi.</h1> 
                    </div>
                    <div className="row" style={{width: '250px'}}>
                        <div className="col s4" style={iconWrapperStyle}>
                            <a target="_blank" href="https://twitter.com/Grananqvist" >
                                {twitter}
                            </a>
                        </div>
                        <div className="col s4" style={iconWrapperStyle}>
                            <a target="_blank" href="https://se.linkedin.com/in/filip-granqvist-112017149" >
                                {linkedin}
                            </a>
                        </div>
                        <div className="col s4" style={iconWrapperStyle}>
                            <a target="_blank" href="https://github.com/grananqvist" >
                                {github}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    wrapperStyle: {
        width: '100vh'
    },
    centerStyle: {
        margin: '0 auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    iconWrapperStyle: {
        //width: '70px'
    },
    greetingStyle: {
        textAlign: 'center',
        color: 'white',
        padding: '0px',
        margin: '0px',
        marginBottom: '10px'
    }
};

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(HomePage);
