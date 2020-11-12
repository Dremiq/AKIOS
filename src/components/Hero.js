import React, {useState, useEffect} from 'react';
import '../styles/Hero.scss';
import logo_img from '../assets/logo.png';
import arr_down from '../assets/arr-down.png';
import {connect} from 'react-redux';
import {fetchStartTp, fetchAccAndMerchTp, fetchFindUsTp} from '../redux/actions/actionCreator';

const Hero = (props) => {

    const [active, setActive] = useState(false);
    const [activeNav, setActiveNav] = useState(false);
    let featuredbikes_element = document.getElementById('arr_down_tp');
    let start_element = document.getElementById('start_tp');

    // Adds start_element to redux store so it could be easily accessed globally in all compoenents
    useEffect(() => {
        let start_element = document.getElementById('start_tp');
        props.start_global_element.payload = start_element;
    }, [])

    // Hamburger menu icon function which enables/disables overflow and also activates/deactivates the hamburger menu icon
    const handleHamb = () => {
        setActive(!active);
        if(active === true){
            document.body.style.overflow = "visible";
        } else{
            document.body.style.overflow = "hidden";
        };
    };

    // Listens to scroll and based on that activates/deactivates navbar change
    window.addEventListener('scroll', () => {
       if(window.pageYOffset > 1){
           setActiveNav(true);
        } else{
           setActiveNav(false);
        };
    });

    // Scrolls to featured bikes section
    const handleArrTp = () => {
        featuredbikes_element = document.getElementById('arr_down_tp');
        featuredbikes_element.scrollIntoView();
        setActive(false);
        document.body.style.overflow = "visible";
    };

    // Scrolls to the top of the page
    const handleStartTp = () => {
        start_element = document.getElementById('start_tp');
        start_element.scrollIntoView();
        setActive(false);
        document.body.style.overflow = "visible";
    };

    // Scrolls to the accessories & merchandise section
    const handleAccAndMerchTp = () => {
        props.accandmerch_global_element.payload.scrollIntoView();
        setActive(false);
        document.body.style.overflow = "visible";
    };

    // Scrolls to the bottom of the page / contact info section
    const handleContactTp = () => {
     window.scrollTo(0, document.body.scrollHeight);
     setActive(false);
     document.body.style.overflow = "visible";
    };

    // Scrolls to the find us instagram section
    const handleFindUsTp = () => {
        props.findus_global_element.payload.scrollIntoView();
        setActive(false);
        document.body.style.overflow = "visible";
    };

    return(
        <div className="hero" id="start_tp" >
            <div className="hero-img">
            <div className={activeNav || active ? "navbar navbar-active": "navbar"}>
                <ul className={active ? "nav-ul ul-1 nav-ul-active ul-1-active" : "nav-ul ul-1"}>
                    <li className="nav-li li-1" onClick={handleArrTp}><p>Offers</p></li>
                    <li className="nav-li li-1" onClick={handleFindUsTp}><p>Find us</p></li>
                </ul>
                <div onClick={handleStartTp} className="logo">
                    <img className="logo-img" alt="logo" src={logo_img}/>
                    <p className="logo-text">AKIOS</p>
                </div>
                <ul className={active ? "nav-ul ul-2 nav-ul-active ul-2-active" : "nav-ul ul-2"}>
                    <li className="nav-li li-2" onClick={handleAccAndMerchTp}><p>Merch</p></li>
                    <li className="nav-li li-2" onClick={handleContactTp}><p>Contact</p></li>
                </ul>
                <div className={active ? "hamb" : "hamb  hamb-inactive"} onClick={handleHamb}>
                    <span className={active ? "hamb-line hamb-line01 hamb-line01-active" : "hamb-line hamb-line01"}></span>
                    <span className={active ? "hamb-line hamb-line02 hamb-line02-active" : "hamb-line hamb-line02"}></span>
                    <span className={active ? "hamb-line hamb-line03 hamb-line03-active" : "hamb-line hamb-line03"}></span>
                </div>
            </div>
            <div className="hero-arr-down">
                <div className="hero-arr-down-inner" onClick={handleArrTp} ><img src={arr_down} alt="arrow-down" className="hero-arr-down-img"/></div>
            </div>
            <div id="arr_down_tp"></div>
            </div>  
        </div>
    )
}

const mapStateToProps = (state) => ({
    start_global_element: state.mainReducer.start_global_element,
    accandmerch_global_element: state.mainReducer.accandmerch_global_element,
    findus_global_element: state.mainReducer.findus_global_element
})


export default connect(mapStateToProps, {fetchStartTp, fetchAccAndMerchTp, fetchFindUsTp})(Hero);