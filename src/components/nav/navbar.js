import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = { open: false };
    }

    menuToggle() {
        this.setState({
            open: !this.state.open
        });
        $('#menu-button-icon').toggleClass('rotated', 500);
    }

    render() {

        const { 
            menuButtonStyle, wrapperStyle, menuIconStyle, navbarStyle, 
            navTextStyle, navUlStyle
        } = style;
        return (
            <div style={wrapperStyle} >
                    <i 
                    onClick={this.menuToggle.bind(this)}
                    id="menu-button-icon"
                        style={menuIconStyle}
                        class="medium material-icons">reorder</i>
                {this.state.open && <div 
                    style={navbarStyle}>
                    <ul style={navUlStyle}>
                        <li><Link to="/"><h4 style={navTextStyle}>Home</h4></Link></li>
                        <li><Link to="/celebgan"><h4 style={navTextStyle}>Celeb generator</h4></Link></li>
                    </ul>
                </div>}
            </div>
        );
    }
}

const style = {
    wrapperStyle: {
        position: 'absolute',

    },
    navbarStyle: {
        backgroundColor: 'white',
        padding: '20px',
        width: '300px'
    },
    menuIconStyle: {
        fontSize: '50px',
        color: 'white',
        margin: '10px',
        cursor: 'pointer'
    },
    menuButtonStyle: {
        padding: '5px 8px',
        height: '45px',
        width: '50px',
        marginTop: '10px'
    },
    navTextStyle: {
        marginTop: '10px',
        marginBottom: '10px',
        color: 'black'
    },
    navUlStyle: {
        margin: '0px'
    }
};

export default Navbar;
