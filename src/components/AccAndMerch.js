import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchAccAndMerchTp} from '../redux/actions/actionCreator';
import "../styles/AccAndMerch.scss";
import t_shirt_img from '../assets/tshirt.jpg';
import beanie_img from '../assets/beanie.jpg';
import accessories_img from '../assets/accessories.jpg';


const AccAndMerch = (props) => {

    // Adds accandmerch_element to the redux store so it could be easily accessed globally in all compoenents
    useEffect(() => {
        let accandmerch_element = document.getElementById('accandmerch_tp');    
        props.accandmerch_global_element.payload = accandmerch_element
    }, []);

    return(
        <div className="accandmerch">
            <div id="accandmerch_tp"></div>
            <div className="accandmerch-title">
                <p>ACCESSORIES <span>&</span> MERCHANDISE</p>
            </div>
        <div className="accandmerch-grid">
            <div className="accandmerch-grid-item accandmerch-grid-item1">
                <img className="accandmerch-grid-img" alt="t-shirt" src={t_shirt_img}/> 
                <p className="accandmerch-grid-title">T-SHIRTS</p>
            </div>
            <div className="accandmerch-grid-item accandmerch-grid-item1">
                <img className="accandmerch-grid-img" alt="beanie" src={beanie_img}/> 
                <p className="accandmerch-grid-title">BEANIES</p>
            </div>
            <div className="accandmerch-grid-item accandmerch-grid-item1">
                <img className="accandmerch-grid-img" alt="accessories" src={accessories_img}/> 
                <p className="accandmerch-grid-title">ACCESSORIES</p>
            </div>
        </div>
        </div>
    );
};

const mapStateToProps = state => ({
    accandmerch_global_element: state.mainReducer.accandmerch_global_element
});

export default connect(mapStateToProps, {fetchAccAndMerchTp})(AccAndMerch);