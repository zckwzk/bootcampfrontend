import Axios from 'axios';

let APIRequest = Axios.create({
    baseURL:"https://localhost:44365/api/",
    timeout: 3000
})

export const setAuthTokenHeader = (token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiemFrYXJpYS53aWNha3Nvbm9AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwibmJmIjoxNjgyNjkyODEzLCJleHAiOjE2ODI3NzkyMTMsImlhdCI6MTY4MjY5MjgxMywiaXNzIjoiemFrYXJpYSIsImF1ZCI6InVzZXJzIn0.CL-bh316mltErRcBUQdg0WMhSK-QCpBK5bHXWi_EP0Q") =>{
    // APIRequest.defaults.headers.common['Bearer'] =  token;
    APIRequest.defaults.headers.common = {'Authorization': `bearer ${token}`}
    localStorage.setItem("jwttoken",token);
}

export default APIRequest