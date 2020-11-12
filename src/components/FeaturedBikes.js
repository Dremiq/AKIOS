import React, {useState} from 'react';
import {connect} from 'react-redux';
import {fetchBikeInfo} from '../redux/actions/actionCreator';
import "../styles/FeaturedBikes.scss";

const FeaturedBikes = (props) => {

    const [selectedBike, setSelectedBike] = useState("");
    const [currentPosition, setCurrentPosition] = useState("");

    return(
        <div className="featuredbikes">
            <div className="featuredbikes-title">FEATURED <span className="featuredbikes-title-painted">BIKES</span></div>
                <div className="featuredbikes-showcase">
{/* GIVES SLIDER FUNCTIONALITY */}
                    <div className="featuredbikes-showcase-inner" 
                    style={window.innerWidth > 500 ? selectedBike === selectedBike ? {transform: `translateY(-${currentPosition}px)`} : {} :
                    selectedBike === selectedBike ? {transform: `translateY(-${currentPosition / 1.5}px)`} : {}}> 
                        {props.featuredBikes.map((item, index) =>
                            <div className="fbs-div" key={index} >
                                <img className="fbs-img" alt={item.name} src={item.img}/>
                                <div className="fbs-content">
                                    <div className="fbs-title">{item.name}</div>
                                    <div className="fbs fbs-displacement fbs-titles">DISPLACEMENT<p>{item.displacement}</p></div>
                                    <div className="fbs fbs-torque fbs-titles">TORQUE<p>{item.torque}</p></div>
                                    <div className="fbs fbs-power fbs-titles">POWER<p>{item.power}</p></div>
                                    <div className="fbs fbs-dryweight fbs-titles">DRY WEIGHT<p>{item.dryWeight}</p></div>
                                </div>
                            </div>
                        )};
                    </div>
                </div>
            <div className="featuredbikes-grid">
{/* MAPS THE ARRAY AND STORES THE NAME OF THE CLICKED ITEM IN STATE */}
                    {props.featuredBikes.map((item, index) => 
                        <div 
                        className="fbg fbg-1" 
                        key={index} 
                        onClick={() => {setSelectedBike(item.name); setCurrentPosition(item.position);}}>
                            <img className="fbg-img" src={item.img} alt={item.name}/>
                            <p className="fbg-title">{item.name}</p>
                        </div>
                    )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    featuredBikes: state.mainReducer.featuredBikes
});


export default connect(mapStateToProps,{fetchBikeInfo})(FeaturedBikes);