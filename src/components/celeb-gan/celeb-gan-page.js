import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CelebGanPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 className="white">CelebGanPage</h1>        
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
}

export default connect(mapStateToProps)(CelebGanPage);
