import axios from "axios";
import { apiURL } from "../constants/config";

const customAxios = axios.create({
  timeout: 10000
});


const responseHandler = (response) => {
  let res = {};
  if (response.status === 401) {
    res.success = false;
    res.logout = true;
    res.data = response.data;
    res.error = "Session Expired";
  } else if (response.status < 205) {
    res.success = true;
    res.logout = false;
    res.data = response.data;
    res.error = "";
  } else {
    res.success = false;
    res.logout = false;
    res.data = {};
    res.error = response.data;
  }

  return res;
};

const errorHandler = (error) => {
  let res = {};
  if (error.response.status === 401) {
    res.success = false;
    res.logout = true;
    res.data = {};
    res.error = error.message;
    return res;
  } else {
    return Promise.reject(error);
  }
};

// customAxios.interceptors.request.use(
//   (request) => requestHandler(request),
//   (error) => errorHandler(error)
// );

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;