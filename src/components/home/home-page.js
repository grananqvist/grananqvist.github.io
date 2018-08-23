import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactFullpage from '@fullpage/react-fullpage';

import { twitter, github, linkedin } from './social-icons.js';

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = { lastSlide: false };

        this.fullpageProps = {
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            sectionsColor: ['#000', 'rgba(39, 0, 255, 0.5)'],
            onLeave: (origin, destination, direction) => {

                // remove arrow
                if(destination.isLast == true){
                    $('.textDown').remove();
                }
            }
        };

    }

    componentDidMount() {

        $('.social-wrapper').each(function(i) {
            $(this)
                .transition({ x: '-100%', opacity: '0'},0)
                .transition({ x: '0%', opacity: '1', delay: i*500},500, 'ease');
        
        });
        
        // hide hi
        $('#greeting').transition({ y: '100%'},0)
            .transition({ y: '0%', delay: 2500 },1000, 'ease');
    }

    render() {
        const { 
            iconWrapperStyle, greetingStyle, tradingWandStyle, wrapperStyle, centerStyle,
            tradingWandImageStyle, iconRowStyle
        } = styles;

        return (
            <div>
                <ReactFullpage
                    {...this.fullpageProps}
                    render={({ state, fullpageApi }) => {
                        return (
                            <div>
                                <div className="section">

                                    <div style={centerStyle} >
                                        <div className="row" style={{margin: '0px'}}>
                                            <h1 id="greeting" className="thin" style={greetingStyle} >Hi.</h1> 
                                        </div>
                                        <div className="row" style={iconRowStyle}>
                                            <div className="col s4 social-wrapper" style={iconWrapperStyle}>
                                                <a target="_blank" href="https://twitter.com/Grananqvist" >
                                                    {twitter}
                                                </a>
                                            </div>
                                            <div className="col s4 social-wrapper" style={iconWrapperStyle}>
                                                <a target="_blank" href="https://se.linkedin.com/in/filip-granqvist-112017149" >
                                                    {linkedin}
                                                </a>
                                            </div>
                                            <div className="col s4 social-wrapper" style={iconWrapperStyle}>
                                                <a target="_blank" href="https://github.com/grananqvist" >
                                                    {github}
                                                </a>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div className="section fp-auto-height">
                                    <div style={{height: '300px'}}>

                                        <div style={centerStyle} >
                                            <a target="_blank" href="https://tradingwand.com">
                                                <img src="assets/img/tw-logo.png" style={tradingWandImageStyle}/>

                                                <h1 style={tradingWandStyle}>TradingWand</h1>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                />

            {!this.lastSlide && <div className="textDown" onClick={() => fullpageApi.moveSectionDown()}><h6>Co-founder of:</h6></div>}
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
    iconRowStyle: {
        zIndex: '200',
        backgroundColor: 'black',
        position: 'relative',
        width: '250px'
    },
    greetingStyle: {
        textAlign: 'center',
        color: 'white',
        padding: '0px',
        margin: '0px',
        marginBottom: '10px'
    },
    tradingWandStyle: {
        margin: '0',
        padding: '0',
        color: '#f9f1e9',
        textAlign: 'center',
        fontFamily: 'Fugaz One, cursive',
        textShadow: '1px 1px #000061',
        fontSize: '45px'

    },
    tradingWandImageStyle: {
        width: '200px',
        margin: '0 auto 10px auto',
        display: 'block'
    }
};

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(HomePage);
