import {FETCH_BIKE_INFO, ACCANDMERCH_TP, START_TP, FINDUS_TP} from './actionTypes';

export const fetchBikeInfo = () => {
    return{
        type: FETCH_BIKE_INFO
    };
};

export const fetchStartTp = () => {
    return{
        type: START_TP,
        payload: {}
    };
};

export const fetchAccAndMerchTp = () => {
    return{
        type: ACCANDMERCH_TP,
        payload: {}
    };
};

export const fetchFindUsTp = () => {
    return{
        type: FINDUS_TP,
        payload: {}
    };
};