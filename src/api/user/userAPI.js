import APIRequest from "../axios";

export const submitLoginAPI = (data) => {
  return APIRequest.post("/login", data);
};
