import Axios from '../axios';

const getTaskAdapter = (search) =>{
    return Axios(`RealDB/GetProducAdapter?name=${search}`);
}

const getTaskReader = (search) =>{
    return Axios(`RealDB/GetProducReader?name=${search}`);
}

export {getTaskAdapter, getTaskReader}