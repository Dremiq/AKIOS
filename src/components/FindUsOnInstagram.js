import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchFindUsTp} from '../redux/actions/actionCreator';
import "../styles/FindUsOnInstagram.scss";

const FindUsOnInstagram = (props) => {

    // Adds findus_element to the redux store so it could be easily accessed globally in all compoenents
    useEffect(() => {
        let findus_element = document.getElementById('findus_tp');
        props.findus_global_element.payload = findus_element
    },[])

    return(
        <div className="find-us">
            <div id="findus_tp"></div>
            <div className="find-us-inner">
                <div className="find-us-title">FIND US ON INSTAGRAM</div>
                <hr className="find-us-hr"/>
                <div className="find-us-desc">WE KEEP YOU UPDATED DAILY</div>
                    <div className="find-us-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="find-us-svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 512 512" width="512" height="512">
                        <title>Instagram</title>
                        <path d="M474,88.948A50.948,50.948,0,0,0,423.052,38H88.948A50.948,50.948,0,0,0,38,88.948v334.1A50.948,50.948,0,0,0,88.948,474h334.1A50.948,50.948,0,0,0,474,423.052ZM422.961,458H89.039A35.143,35.143,0,0,1,54,422.961V172H158.784c-18.3,23-29.284,51.151-29.284,82.291,0,71.824,58.433,130.307,130.258,130.307S390.016,326.09,390.016,254.266c0-31.139-10.988-59.266-29.284-82.266H458V422.961A35.143,35.143,0,0,1,422.961,458Zm-163.2-317.869A114.258,114.258,0,1,1,145.5,254.39,114.388,114.388,0,0,1,259.758,140.131ZM89.039,54H422.961A35.143,35.143,0,0,1,458,89.039V156H345.254a130.006,130.006,0,0,0-170.991,0H54V89.039A35.143,35.143,0,0,1,89.039,54Z"/>
                        <path d="M375.718,138.376a34.306,34.306,0,1,0-34.306-34.306A34.344,34.344,0,0,0,375.718,138.376Zm0-52.611a18.306,18.306,0,1,1-18.306,18.3A18.326,18.326,0,0,1,375.718,85.765Z"/>
                        <path d="M259.758,343.715a89.326,89.326,0,1,0-89.326-89.325A89.427,89.427,0,0,0,259.758,343.715Zm0-162.652a73.326,73.326,0,1,1-73.326,73.327A73.41,73.41,0,0,1,259.758,181.063Z"/>
                        </svg>
                        FOLLOW US
                    </div>
                </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    findus_global_element: state.mainReducer.findus_global_element
})

export default connect(mapStateToProps, {fetchFindUsTp})(FindUsOnInstagram);