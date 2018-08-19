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

        const { menuButtonStyle, wrapperStyle, menuIconStyle, navbarStyle } = style;
        return (
            <div>
                    <i 
                    onClick={this.menuToggle.bind(this)}
                    id="menu-button-icon"
                        style={menuIconStyle}
                        class="medium material-icons">reorder</i>
                {this.state.open && <div 
                    style={navbarStyle}>
                    <ul>
                        <li><Link to="/"><h4>Home</h4></Link></li>
                        <li><Link to="/celebgan"><h4>Celeb generator</h4></Link></li>
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
    }
};

export default Navbar;
