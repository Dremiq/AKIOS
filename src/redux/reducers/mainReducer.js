import {FETCH_BIKE_INFO, START_TP, ACCANDMERCH_TP, FINDUS_TP} from '../actions/actionTypes';

const initialState = {
    featuredBikes: [
        {name: "Panigale V2", img: "https://i.postimg.cc/dVxzzttK/panigale-v2.png", displacement: "955cc", torque: "104 Nm (76,7 lb-ft)", power: "155 hp (114 kW)", dryWeight: "176kg (388lb)", position:0},
        {name: "SuperSport", img: "https://i.postimg.cc/HW9FTtsz/supersport.png" , displacement: "937cc", torque: "93 Nm (69 lb-ft)", power: "110 hp (81 kW)", dryWeight: "184kg (406lb)", position:700},
        {name: "Scrambler 1100 Sport Pro", img: "https://i.postimg.cc/6qBWy5vm/scrambler-110.png", displacement: "1,079cc", torque: "88 Nm (65 lb-ft)", power: "86 hp (63 kW)", dryWeight: "178kg (392lb)", position:1400},
        {name: "Multistrada 950 S", img: "https://i.postimg.cc/xjgY6QH9/multistrada-950.png", displacement: "937cc", torque: "96 Nm (71 lb-ft)", power: "113 hp (83 kW)", dryWeight: "207kg (456lb)", position:2100},
        {name: "Multistrada 1260 S Grand Tour", img: "https://i.postimg.cc/3NGXJ12B/multistrada-1260.png", displacement: "1,158cc", torque: "125 Nm (92 lb-ft)", power: "170 hp (125 kW)", dryWeight: "218kg (481lb)", position:2800},
        {name: "Hypermotord 950 SP", img: "https://i.postimg.cc/NfwGzDCx/hypermotord-950.png", displacement: "937cc", torque: "96 Nm (71 lb-ft)", power: "114 hp (84 kW)", dryWeight: "178kg (392lb)", position:3500},
        {name: "Monster 821", img: "https://i.postimg.cc/VLy9HycH/monster-821.png", displacement: "821cc", torque: "86 Nm (63 lb-ft)", power: "109 hp (80 kW)", dryWeight: "180,5kg (398lb)", position:4200},
        {name: "Streetfighter V4 S", img: "https://i.postimg.cc/WtRdWPFm/streetfighter-v4.png", displacement: "1,103cc", torque: "123 Nm (90,4 lb-ft)", power: "208 hp (153 kW)", dryWeight: "180kg (397lb)", position:4900},
        {name: "Diavel 1260 S 1", img: "https://i.postimg.cc/JnP32tMN/diavel.png", displacement: "1,262cc", torque: "129 Nm (95 lb-ft)", power: "159 hp (117 kW)", dryWeight: "218kg (481lb)", position:5600}
    ],
    start_global_element: {},
    accandmerch_global_element: {},
    findus_global_element: {}
    
};

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_BIKE_INFO: 
            return{
                featuredBikes: state.featuredBikes
            };
        case START_TP:
            return{
                start_global_element: state.start_global_element
            };
        case ACCANDMERCH_TP:
            return{
                accandmerch_global_element: state.accandmerch_global_element
            };
        case FINDUS_TP:
            return{
                findus_global_element: state.findus_global_element
            };
        default: 
            return state;
    };
};

export default mainReducer;