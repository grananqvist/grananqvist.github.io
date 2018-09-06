import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CelebGanPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
            <h1 style={{textAlign: 'center', margin: '0px'}} className="white">This page is totally secret</h1>        
        </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
}

export default connect(mapStateToProps)(CelebGanPage);
