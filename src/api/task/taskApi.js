import APIRequest from "../axios";

const getTaskAdapter = (search) => {
  return APIRequest(`RealDB/GetProducAdapter?name=${search}`);
};

const getTaskReader = (search) => {
  return APIRequest(`RealDB/GetProducReader?name=${search}`);
};

export { getTaskAdapter, getTaskReader };
