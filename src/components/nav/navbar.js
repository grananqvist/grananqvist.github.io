import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = { open: false };
    }

    componentDidMount() {
        $('#nav-list li').transition({ x: '-100%', opacity: '0' }, 0);
        
    }

    menuToggle() {

        const pos = this.state.open ? '-100%' : '0%';
        const op = this.state.open ? '0' : '1';
        const rot = this.state.open ? '0deg' : '90deg';

        $('#nav-list li').each(function(i) {
            $(this).transition({ x: pos, opacity: op, delay: i*250}, 500, 'ease');
        });

        $('#menu-button-icon').transition({ rotate: rot }, 250, 'ease');

        this.setState({
            open: !this.state.open
        });


    }

    render() {

        let { 
            menuButtonStyle, wrapperStyle, menuIconStyle, navbarStyle, 
            navTextStyle, navUlStyle, navLiStyle
        } = style;

        const wrapperColor = this.props.location.pathname == '/' ? 'white' : 'black';
        const textColor = this.props.location.pathname == '/' ? 'black' : 'white';

        return (
            <div style={wrapperStyle} >
                    <i 
                    onClick={this.menuToggle.bind(this)}
                    id="menu-button-icon"
                        style={{...menuIconStyle, color: wrapperColor}}
                        class="medium material-icons amin">menu</i>
                <div 
                    style={navbarStyle}>
                    <ul id="nav-list" style={navUlStyle}>
                        <li style={{...navLiStyle, backgroundColor: wrapperColor}}>
                            <Link to="/">
                                <h4 style={{...navTextStyle, color: textColor}}>Home</h4>
                            </Link>
                        </li>
                        <li style={{...navLiStyle, backgroundColor: wrapperColor}}>
                            <Link to="/celebgan">
                                <h4 style={{...navTextStyle, color: textColor}}>Celeb generator</h4>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const style = {
    wrapperStyle: {
        position: 'absolute',
        zIndex: '99'
    },
    navbarStyle: {
        width: '350px'
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
    },
    navLiStyle: {
        backgroundColor: 'white',
        marginBottom: '5px',
        padding: '5px 10px'
    }
};

export default withRouter(Navbar);
