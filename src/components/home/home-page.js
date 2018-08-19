import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 className="white">Hi</h1> 
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
}

export default connect(mapStateToProps)(HomePage);
